import { jsonResponse } from "../util/jsonResponse";
import path from "path";
import fs from "fs";

export default function(req, res, next) {
  let coupons;
  let { token, file, couponId } = req.body;

  if (token !== require("js-sha1")("boomyeah123456qwertz")) {
    jsonResponse(res, { error: "Wrong token" }, 401);
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

  const couponIndex = coupons.findIndex(c => c.id === couponId);
  if (couponIndex === -1) {
    return jsonResponse(
      res,
      { error: "Der gewünschte Coupon existiert leider nicht mehr." },
      404
    );
  }

  coupons[couponIndex].image = file;

  fs.writeFileSync(
    path.resolve(__dirname, "../data/coupons.json"),
    JSON.stringify(coupons),
    "utf8"
  );

  jsonResponse(res, {
    coupons
  });
}
