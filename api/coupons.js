import { jsonResponse } from "../util/jsonResponse";
import fs from "fs";
import path from "path";

export default function(req, res, next) {
  if (!fs.existsSync(path.resolve(__dirname, "../data/"))) {
    fs.mkdirSync(path.resolve(__dirname, "../data/"));
  }

  if (!fs.existsSync(path.resolve(__dirname, "../data/coupons.json"))) {
    fs.writeFileSync(
      path.resolve(__dirname, "../data/coupons.json"),
      "[]",
      "utf8"
    );
  }

  if (!fs.existsSync(path.resolve(__dirname, "../data/chart.json"))) {
    fs.writeFileSync(
      path.resolve(__dirname, "../data/chart.json"),
      "{}",
      "utf8"
    );
  }

  const data = fs.readFileSync(
    path.resolve(__dirname, "../data/coupons.json"),
    "utf8"
  );
  jsonResponse(res, {
    coupons: JSON.parse(data)
      .filter(c => c.active)
      .map(coupon => {
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
