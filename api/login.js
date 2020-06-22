import { jsonResponse } from "../util/jsonResponse";
import url from "url";

export default function(req, res, next) {
  let password;

  try {
    let { pw } = url.parse(req.url, true).query;
    password = pw;
  } catch (e) {
    return jsonResponse(res, {}, 400);
  }

  if (password !== "yeahyeah") {
    return jsonResponse(res, { error: "Wrong credentials." }, 401);
  }

  jsonResponse(res, {
    token: require("js-sha1")("boomyeah123456qwertz")
  });
}
