export default function({ store, redirect, isServer, res, req }) {
  if (process.env.NODE_ENV !== "development") {
    console.log("Request: ", req.headers.referer);
  }
}
