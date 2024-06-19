const jwt = require("jsonwebtoken");

const key = process.env.PRIVATE_KEY; //actual RSA private key

const isAuth = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    if (!token) {
      return res.status(401).json({ message: "Authorization header missing" });
    }

    const tokenVerified = jwt.verify(token, key, { algorithms: ["RS256"] });
    if (!tokenVerified) {
      return res.status(401).json({ message: "Authorization failed" });
    }

    req.token = tokenVerified; //to attach the decoded token to the request object
    next(); //to proceed to the next middleware or route handler
  } catch (err) {
    return res
      .status(401)
      .json({ message: "Invalid token", error: err.message });
  }
};

module.exports = isAuth;
