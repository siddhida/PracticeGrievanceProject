var uDetails = require("../model/userDetail");
const jwt = require("jsonwebtoken");

module.exports = {
  async authenticateUsersToken(req, res, next) {
    try {
      const token = req.header("Authorization");
      if (!token) return res.sendStatus(401);
      const payload = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      console.log("PAYLOAD user = ", payload);
      if (!payload._id) {
        return res.sendStatus(403);
      }
      const user = await uDetails.findOne({ _id: payload._id, jwt: token });
      if (user.isBlocked)
        return res
          .status(401)
          .send(
            `${user.name}, you are blocked for the misuse of Grievance redressal System.....`
          );
      if (!user) return res.sendStatus(401);
      req.user = user;
      next();
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
  async authenticateAdminsToken(req, res, next) {
    try {
      console.log("I am inside Authenticate");
      const token = req.header("Authorization");
      if (!token) return res.sendStatus(401);
      const payload = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      console.log("PAYLOAD user = ", payload);
      if (!payload._id) {
        return res.sendStatus(403);
      }
      const user = await uDetails.findOne({
        _id: payload._id,
        jwt: token,
        role: "Admin",
      });
      if (user == null) {
        console.log("I am Sorry, But you are Not an Admin...");
        return res.status(401).send({
          message:
            "Only Admin hold the Right to Register a new User in this work Place",
        });
      } else if (user.isBlocked) {
        return res
          .status(401)
          .send(
            `${user.name}, you are blocked for the misuse of Grievance redressal System.....`
          );
      } else req.user = user;
      next();
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
};
