import { jsonResponse } from "../util/jsonResponse";
import url from "url";
import hash from "js-sha1";

export default function(req, res, next) {
  let password;

  try {
    let { pw } = url.parse(req.url, true).query;
    password = pw;
  } catch (e) {
    return jsonResponse(res, {}, 400);
  }

  if (password !== process.env.ADMIN_PASSWORD) {
    return jsonResponse(res, { error: "Wrong credentials." }, 401);
  }

  jsonResponse(res, {
    token: hash(process.env.secret)
  });
}
