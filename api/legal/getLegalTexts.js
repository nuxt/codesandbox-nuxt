import { jsonResponse } from "../../util/jsonResponse";
import filesystem from "../service/filesystem";
import url from "url";

export default async function (req, res, next) {
  try {
    let { filter } = url.parse(req.url, true).query;
    const legalTexts = await filesystem.getAll("legal");
    if (filter) {
      return jsonResponse(res, {
        legal: legalTexts.find((l) => l.id === filter)
      });
    }
    jsonResponse(res, {
      legal: legalTexts
    });
  } catch (e) {
    jsonResponse(res, {
      legal: []
    });
  }
}
