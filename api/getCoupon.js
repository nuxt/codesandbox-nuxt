import { jsonResponse } from "../util/jsonResponse";
import filesystem from "./service/filesystem";
import url from "url";

export default async function (req, res, next) {
  const coupons = await filesystem.getAll("coupon");
  const query = url.parse(req.url, true).query;
  const coupon = coupons.find((c) => c.id === query.id);

  jsonResponse(res, {
    coupon: {
      id: coupon.id,
      location: coupon.location,
      vendor: coupon.vendor,
      title: coupon.title,
      submit: coupon.submit
    }
  });
}
