import { jsonResponse } from "../util/jsonResponse";
import hash from "js-sha1";
import filesystem from "./service/filesystem";

export default async function(req, res, next) {
  let { token, file, couponId } = req.body;

  if (token !== hash(process.env.secret)) {
    jsonResponse(res, { error: "Wrong token" }, 401);
  }

  const coupons = await filesystem.getAll("coupon");

  const couponIndex = coupons.findIndex(c => c.id === couponId);
  if (couponIndex === -1) {
    return jsonResponse(
      res,
      { error: "Der gewünschte Coupon existiert leider nicht mehr." },
      404
    );
  }

  coupons[couponIndex].image = file;

  filesystem.save("coupon", coupons[couponIndex].id, coupons[couponIndex]);

  jsonResponse(res, {
    coupons
  });
}
