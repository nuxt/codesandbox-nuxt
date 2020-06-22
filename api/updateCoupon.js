import { jsonResponse } from "../util/jsonResponse";
import fs from "fs";
import path from "path";
import url from "url";

export default function(req, res, next) {
  let data, coupons;
  try {
    data = JSON.parse(JSON.stringify(url.parse(req.url, true).query));
    data.active = data.active === "true";
  } catch (e) {
    return jsonResponse(res, {}, 400);
  }

  if (data.token !== require("js-sha1")("boomyeah123456qwertz")) {
    jsonResponse(res, { error: "Wrong token" }, 401);
  }
  delete data.token;

  try {
    coupons = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "../data/coupons.json"), "utf8")
    );
  } catch (e) {
    return jsonResponse(
      res,
      {
        error:
          "Ein interner Fehler ist aufgetreten. Coupons sind nicht richtig konfiguriert."
      },
      500
    );
  }

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
  fs.writeFileSync(
    path.resolve(__dirname, "../data/coupons.json"),
    JSON.stringify(coupons),
    "utf8"
  );

  jsonResponse(res, {}, 200);
}
