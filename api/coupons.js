import { jsonResponse } from "../util/jsonResponse";
import fs from "fs";
import path from "path";

export default function(req, res, next) {
  const data = fs.readFileSync(
    path.resolve(__dirname, "../data/coupons.json"),
    "utf8"
  );
  jsonResponse(res, {
    coupons: JSON.parse(data).map(coupon => {
      if (coupon.balance === 0 || coupon.usageCount >= coupon.balance) {
        coupon.active = false;
      }
      delete coupon.submit.code;
      delete coupon.usageCount;
      delete coupon.balance;
      return coupon;
    })
  });
}
