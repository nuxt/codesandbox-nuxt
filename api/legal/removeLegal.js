import { jsonResponse } from "../../util/jsonResponse";
import filesystem from "../service/filesystem";
import url from "url";
import hash from "js-sha1";

export default async function (req, res, next) {
  let { token, id } = url.parse(req.url, true).query;
  if (token !== hash(process.env.secret)) {
    return jsonResponse(res, { error: "Wrong token" }, 401);
  }
  const legalTexts = await filesystem.remove("legal", id);
  jsonResponse(res, {
    legal: legalTexts
  });
}
