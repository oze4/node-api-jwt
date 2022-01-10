const jwt = require("jsonwebtoken");
const User = require("../db/user.schema");

module.exports.loginRequired = function (req, _res, next) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(" ")[0] === "JWT") {
    console.log("verifying jwt");
    jwt.verify(req.headers.authorization.split(" ")[1], process.env.JWT_SIGNATURE, (err, rawJwt) => {
      if (err) {
        console.error("unable to verify jwt", err.message);
        req.jwt = undefined;
        next();
      } else {
        console.log("verified jwt", rawJwt);
        req.jwt = rawJwt;
        next();
      }
    });
  } else {
    console.log("incorrect auth header", req.headers);
    req.jwt = undefined;
    next();
  }
};

module.exports.findUser = async function (req, _res, next) {
  try {
    // here `req.jwt.id` is the user's mongodb `_id`
    const user = await User.findById(req.jwt.id);
    req.user = user;
    next();
  } catch (e) {
    console.error("unable to find user", e);
    req.user = undefined;
    next();
  }
};
