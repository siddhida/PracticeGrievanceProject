const gDdetail = require("../model/grievanceDetail");

module.exports = {
  async postGrievances(req, res) {
    try {
      const grievanceDetail = await new gDdetail({ ...req.body });
      const saved = await grievanceDetail.save()
      console.log("Grievance posted successfully");
      res.status(200).json(saved);
    }
    catch (error) {
      console.log(error)
    }
  },
};
