export default function(req, res, next) {
   const paths = ["/parken"];
   if (paths.includes(removeQueryParams(req.originalUrl))) {
      res.spa = true;
   }
   next();
}

function removeQueryParams(url) {
   return url.split("?")[0];

}
