import {jsonResponse} from "../../util/jsonResponse";
import filesystem from "../service/filesystem";

export default async function (req, res, next) {
   const filter = req.query.filter;
   const legalTexts = await filesystem.getAll("legal");
   if(filter) {
      return jsonResponse(res, {
         legal: legalTexts.find(l => l.id === filter)
      });
   }
   jsonResponse(res, {
      legal: legalTexts
   });
}
