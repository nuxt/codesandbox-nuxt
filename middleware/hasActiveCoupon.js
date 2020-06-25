import cookieparser from "cookieparser";

export default function({ store, redirect, isServer, res, req }) {
  if (req && req.headers && req.headers.cookie && typeof req.headers.cookie === "string") {
    const parsedCookie = cookieparser.parse(req.headers.cookie);
    if (!parsedCookie.active_coupon_id) {
      return redirect("/");
    }
  }
}
