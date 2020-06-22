import cookieparser from "cookieparser";

export default function({ store, redirect, isServer, res, req }) {
  if (req && req.headers && req.headers.cookie) {
    const parsedCookie = cookieparser.parse(req.headers.cookie);
    if (parsedCookie.token) {
      return redirect("/admin");
    }
  }
}
