const express = require("express");
const router = express.Router();

const app = express();
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request);
  Object.setPrototypeOf(res, app.response);
  req.res = res;
  res.req = req;
  next();
});

router.post("/login", async (req, res) => {
  //const user = await Parse.User.logIn(req.body.username, req.body.password);

  req.session.authUser = {
    username: req.body.username,
    role: req.body.role
  };

  return res.json(req.session.authUser);

  /*
  if (user) {
    req.session.authUser = {
      username: user.get("username"),
      email: user.get("email")
    };
    return res.json({
      username: user.get("username"),
      email: user.get("email")
    });
  }
  
  res.status(401).json({ message: "Bad credentials" });
  */
});

// Export the server middleware.
export default {
  path: "/api",
  handler: router
};
