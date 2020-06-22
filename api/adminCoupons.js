import { jsonResponse } from "../util/jsonResponse";
import fs from "fs";
import path from "path";
import url from "url";

export default function(req, res, next) {
  let token;

  try {
    let { t } = url.parse(req.url, true).query;
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
    coupons: JSON.parse(data).map(coupon => {
      return coupon;
    })
  });
}
