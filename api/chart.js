import { jsonResponse } from "../util/jsonResponse";
import fs from "fs";
import path from "path";

export default function(req, res, next) {
  const data = fs.readFileSync(
    path.resolve(__dirname, "../data/chart.json"),
    "utf8"
  );
  jsonResponse(res, JSON.parse(data));
}
