import { jsonResponse } from "../util/jsonResponse";

export default function(req, res, next) {
  // req is the Node.js http request object
  console.log("Hello world: ", req.url);

  // res is the Node.js http response object
  jsonResponse(res, { test: "juhu" });

  // next is a function to call to invoke the next middleware
  // Don't forget to call next at the end if your middleware is not an endpoint!
  //next();
}
