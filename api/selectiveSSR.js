export default function(req, res, next) {
   const paths = ['/parken'];
   if (paths.includes(req.originalUrl)) {
      res.spa = true;
   }
   next();
}
