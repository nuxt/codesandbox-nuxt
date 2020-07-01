import { jsonResponse } from "../util/jsonResponse";
import fs from "fs";
import path from "path";
import url from "url";

export default function(req, res, next) {
  let couponId, token;

  try {
    let { coupon_id, t } = url.parse(req.url, true).query;
    couponId = coupon_id;
    token = t;
  } catch (e) {
    return jsonResponse(res, {}, 400);
  }
  if (token !== require("js-sha1")("boomyeah123456qwertz")) {
    jsonResponse(res, { error: "Wrong token" }, 401);
  }
  const data = fs.readFileSync(
    path.resolve(__dirname, "../data/coupons.json"),
    "utf8"
  );
  jsonResponse(res, {
    rawCoupon: JSON.stringify(
      JSON.parse(data)
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
