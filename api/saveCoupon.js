import { jsonResponse } from "../util/jsonResponse";
import couponSchema from "../schema/couponSchema";
import tv4 from "tv4";
import filesystem from "./service/filesystem";
import hash from "js-sha1";

export default async function(req, res, next) {
  let { token, coupon } = req.body;

  if (!tv4.validate(coupon, couponSchema)) {
    return jsonResponse(res, { error: "Wrong format", detail: tv4.error }, 400);
  }

  if (token !== hash(process.env.secret)) {
    return jsonResponse(res, { error: "Wrong token" }, 401);
  }

  const coupons = await filesystem.getAll("coupon");

  console.log("[saveCoupon] coupons: ", coupons);

  const couponIndex = coupons.findIndex(c => c.id === coupon.id);

  console.log("[saveCoupon] couponIndex: ", couponIndex);
  if (couponIndex === -1) {
    coupons.push(coupon);
    filesystem.save("coupon", coupon.id, coupon);
  } else {
    try {
      for (const key in coupon) {
        if (coupon.hasOwnProperty(key)) {
          if (["usageCount", "balance"].includes(key)) {
            coupon[key] = Number(coupon[key]);
          }
          coupons[couponIndex][key] = coupon[key];
        }
      }
      filesystem.save("coupon", coupons[couponIndex].id, coupons[couponIndex]);
    } catch (e) {
      console.error("Error on update: ", e);
    }
  }

  jsonResponse(res, {
    coupons
  });
}
