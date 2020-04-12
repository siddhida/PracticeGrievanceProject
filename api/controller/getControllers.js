const gDdetail = require("../model/grievanceDetail");
const uDetail = require("../model/user");

module.exports = {
  async getGrievances(req, res) {
    try {
      const targetedGrievance = await gDdetail.find();
      return res.status(202).send(targetedGrievance);
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  },
  async getUsers(req, res) {
    try {
      const allUsers = await uDetail.find();
      return res.status(202).send(allUsers);
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  },
  async searchGrievances(req, res) {
    try {
      if (!req.query)
        res.return({
          error: "Please enter a definite query to filter out jobs",
        });
      if (req.query.department) {
        var deptGrievances = await gDdetail.find({departmentReferred:req.query.department});
      res.status(200).send(deptGrievances)
      }
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  },
};
