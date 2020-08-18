export default function (req, res, next) {
  const paths = ["/parken", "/admin/legal"];
  if (paths.includes(removeQueryParams(req.originalUrl))) {
    res.spa = true;
  }
  next();
}

function removeQueryParams(url) {
  return url.split("?")[0];
}
