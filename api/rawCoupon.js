import { jsonResponse } from "../util/jsonResponse";
import url from "url";
import hash from "js-sha1";
import filesystem from "./service/filesystem";

export default async function(req, res, next) {
  let couponId, token;

  try {
    let { coupon_id, t } = url.parse(req.url, true).query;
    couponId = coupon_id;
    token = t;
  } catch (e) {
    return jsonResponse(res, {}, 400);
  }
  if (token !== hash(process.env.secret)) {
    jsonResponse(res, { error: "Wrong token" }, 401);
  }
  const coupons = await filesystem.getAll("coupon");
  jsonResponse(res, {
    rawCoupon: JSON.stringify(
      coupons
        .map(coupon => {
          if (coupon.balance === 0 || coupon.usageCount >= coupon.balance) {
            coupon.active = false;
          }
          delete coupon.usageCount;
          delete coupon.image;
          return coupon;
        })
        .find(c => c.id === couponId),
      null,
      4
    )
  });
}
