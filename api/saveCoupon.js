import { jsonResponse } from "../util/jsonResponse";
import path from "path";
import fs from "fs";
import couponSchema from "../schema/couponSchema";
import tv4 from "tv4";

export default function(req, res, next) {
  let coupons;
  let { token, coupon } = req.body;

  if (!tv4.validate(coupon, couponSchema)) {
    return jsonResponse(res, { error: "Wrong format", detail: tv4.error }, 400);
  }

  if (token !== require("js-sha1")("boomyeah123456qwertz")) {
    return jsonResponse(res, { error: "Wrong token" }, 401);
  }

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

  const couponIndex = coupons.findIndex(c => c.id === coupon.id);
  if (couponIndex === -1) {
    coupons.push(coupon);
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
    } catch (e) {
      console.error("Error on update: ", e);
    }
  }

  fs.writeFileSync(
    path.resolve(__dirname, "../data/coupons.json"),
    JSON.stringify(coupons),
    "utf8"
  );

  jsonResponse(res, {
    coupons
  });
}
