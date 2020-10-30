import { jsonResponse } from "../util/jsonResponse";
import filesystem from "./service/filesystem";

export default async function(req, res, next) {
  const coupons = await filesystem.getAll("coupon");
  jsonResponse(res, {
    coupons: coupons
      .filter(c => c.active)
      .map(coupon => {
        if (coupon.balance === 0 || coupon.usageCount >= coupon.balance) {
          coupon.active = false;
        }
        delete coupon.submit.code;
        delete coupon.usageCount;
        delete coupon.balance;
        delete coupon.image;
        return coupon;
      })
  });
}
