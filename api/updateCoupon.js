import { jsonResponse } from "../util/jsonResponse";
import url from "url";
import filesystem from "./service/filesystem";
import hash from "js-sha1";

export default async function(req, res, next) {
  let data;
  try {
    data = JSON.parse(JSON.stringify(url.parse(req.url, true).query));
    data.active = data.active === "true";
  } catch (e) {
    return jsonResponse(res, {}, 400);
  }

  if (data.token !== hash(process.env.secret)) {
    jsonResponse(res, { error: "Wrong token" }, 401);
  }
  delete data.token;

  const coupons = await filesystem.getAll("coupon");

  const couponIndex = coupons.findIndex(c => c.id === data.id);
  if (couponIndex === -1) {
    return jsonResponse(
      res,
      { error: "Der gewünschte Coupon existiert leider nicht mehr." },
      404
    );
  }
  try {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (["usageCount", "balance"].includes(key)) {
          data[key] = Number(data[key]);
        }
        coupons[couponIndex][key] = data[key];
      }
    }
  } catch (e) {
    console.error("Error on update: ", e);
  }

  filesystem.save("coupon", coupons[couponIndex].id, coupons[couponIndex]);

  jsonResponse(res, {}, 200);
}
