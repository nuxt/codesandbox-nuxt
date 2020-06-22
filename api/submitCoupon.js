import { jsonResponse } from "../util/jsonResponse";
import fs from "fs";
import path from "path";
import url from "url";

function formatDate(date, format) {
  return format
    .replace("YYYY", date.getFullYear())
    .replace(
      "MM",
      (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1)
    )
    .replace("DD", (date.getDate() < 10 ? "0" : "") + date.getDate())
    .replace("hh", (date.getHours() < 10 ? "0" : "") + date.getHours())
    .replace("mm", (date.getMinutes() < 10 ? "0" : "") + date.getMinutes())
    .replace("ss", (date.getSeconds() < 10 ? "0" : "") + date.getSeconds());
}

export default function(req, res, next) {
  let couponId, authCode, coupons, chartData;

  try {
    let { coupon_id, code } = url.parse(req.url, true).query;
    authCode = code;
    couponId = coupon_id;
  } catch (e) {
    return jsonResponse(res, {}, 400);
  }

  try {
    coupons = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "../data/coupons.json"), "utf8")
    );
  } catch (e) {
    return jsonResponse(
      res,
      {
        error:
          "Ein interner Fehler ist aufgetreten. Coupons sind nicht richtig konfiguriert."
      },
      500
    );
  }

  try {
    chartData = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "../data/chart.json"), "utf8")
    );
    if (!chartData[couponId]) {
      chartData[couponId] = {};
    }
    const timestamp = formatDate(new Date(), "YYYY-MM-DD-hh");
    if (!chartData[couponId][timestamp]) {
      chartData[couponId][timestamp] = 0;
    }
    chartData[couponId][timestamp]++;
    fs.writeFileSync(
      path.resolve(__dirname, "../data/chart.json"),
      JSON.stringify(chartData),
      "utf8"
    );
  } catch (e) {
    console.error("Error on writing chart data: ", e);
  }

  const couponIndex = coupons.findIndex(c => c.id === couponId);
  if (couponIndex === -1) {
    return jsonResponse(
      res,
      { error: "Der gewünschte Coupon existiert leider nicht mehr." },
      404
    );
  }
  if (
    !coupons[couponIndex].active ||
    coupons[couponIndex].usageCount >= coupons[couponIndex].balance
  ) {
    return jsonResponse(
      res,
      { error: "Der Coupon ist leider nicht mehr verfügbar." },
      409
    );
  }
  if (coupons[couponIndex].submit.code !== authCode) {
    return jsonResponse(
      res,
      { error: "Der eingegebene Code ist leider falsch." },
      401
    );
  }
  coupons[couponIndex].usageCount++;
  fs.writeFileSync(
    path.resolve(__dirname, "../data/coupons.json"),
    JSON.stringify(coupons),
    "utf8"
  );

  jsonResponse(res, {}, 200);
}
