import { jsonResponse } from "../util/jsonResponse";
import url from "url";
import hash from "js-sha1";
import filesystem from "./service/filesystem";

export default async function(req, res, next) {
  let token;

  try {
    let { t } = url.parse(req.url, true).query;
    token = t;
  } catch (e) {
    return jsonResponse(res, {}, 400);
  }

  if (token !== hash(process.env.secret)) {
    jsonResponse(res, { error: "Wrong token" }, 401);
  }

  const coupons = await filesystem.getAll("coupon");
  jsonResponse(res, {
    coupons
  });
}
