import { jsonResponse } from "../util/jsonResponse";
import url from "url";
import filesystem from "./service/filesystem";

export default async function(req, res, next) {
  let couponId, authCode;

  try {
    let { coupon_id, code } = url.parse(req.url, true).query;
    authCode = code;
    couponId = coupon_id;
  } catch (e) {
    return jsonResponse(res, {}, 400);
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
  if (
    !coupons[couponIndex].active ||
    coupons[couponIndex].usageCount >= coupons[couponIndex].balance
  ) {
    return jsonResponse(
      res,
      { error: "Der Coupon ist leider nicht mehr verfügbar." },
      409
    );
  }
  if (coupons[couponIndex].submit.code !== authCode) {
    return jsonResponse(
      res,
      { error: "Der eingegebene Code ist leider falsch." },
      401
    );
  }
  coupons[couponIndex].usageCount++;

  filesystem.save("coupon", coupons[couponIndex].id, coupons[couponIndex]);

  jsonResponse(res, {}, 200);
}
