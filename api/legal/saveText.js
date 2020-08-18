import { jsonResponse } from "../../util/jsonResponse";
import legalSchema from "../../schema/legalSchema";
import tv4 from "tv4";
import filesystem from "../service/filesystem";
import hash from "js-sha1";

export default async function(req, res, next) {
   let { token, legal } = req.body;

   if (!tv4.validate(legal, legalSchema)) {
      return jsonResponse(res, { error: "Wrong format", detail: tv4.error }, 400);
   }

   if (token !== hash("blabla")) {
      return jsonResponse(res, { error: "Wrong token" }, 401);
   }

   const legalTexts = await filesystem.getAll("legal");

   const legalTextIndex = legalTexts.findIndex(c => c.id === coupon.id);

   if (legalTextIndex === -1) {
      legalTexts.push(legal);
      filesystem.save("legal", legal.id, legal);
   }

   jsonResponse(res, {
      legalTexts
   });
}
