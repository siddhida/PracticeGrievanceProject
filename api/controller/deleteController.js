const uDetail = require("../model/userDetail");

module.exports = {
  async logout(req, res) {
    try {
      const user = await uDetail.findById(req.user._id);
      user.jwt = null;
      user.save();
      res.status(200).send({message: "You are Successfully Logged Out..."});
    } catch (error) {
      console.log(error);
    }
  },
};
