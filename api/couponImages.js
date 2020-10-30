import {jsonResponse} from "../util/jsonResponse";
import filesystem from "./service/filesystem";

export default async function (req, res) {
   const coupons = await filesystem.getAll("coupon");
   jsonResponse(res, {
      coupons: coupons
         .filter(c => c.active)
         .map(({image, id}) => ({image, id}))
   });
}
