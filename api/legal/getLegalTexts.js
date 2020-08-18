import {jsonResponse} from "../../util/jsonResponse";
import filesystem from "../service/filesystem";

export default async function (req, res, next) {
   const legalTexts = await filesystem.getAll("legal");
   jsonResponse(res, {
      legal: legalTexts
   });
}
