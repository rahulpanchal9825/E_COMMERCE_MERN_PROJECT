const JWT = require("jsonwebtoken");

//Protected Routes token base
const verifytoken = async (req, res, next) => {
  //token from request
  let token = req.header("authorization");
  if (token) {
    console.warn("Verifying token");
    JWT.verify(token, process.env.JWT_SECRET, (err, valid) => {
      if (err) {
        //unauthorized access
        res.status(401).send("Please enter a valid token");
      } else {
        next();
      }
    });
  } else {
    //forbidden access to url
    res.status(403).send("token is required");
  }
};

module.exports = verifytoken;
