const gDdetail = require("../model/grievanceDetail");

module.exports = {
  async updateGrievances(req, res) {
    try {
      const targetedGrievance = await gDdetail.findOne({ _id: req.params.id })
      targetedGrievance.currentDepartment = req.body.currentDepartment;
      targetedGrievance.currentUser = req.body.currentUser;
      targetedGrievance.departmentReferred.push(req.body.departmentReferred);
      targetedGrievance.userReferred.push(req.body.userReferred);
      targetedGrievance.solutionSuggested.push(req.body.solutionSuggested);
      targetedGrievance.actionTaken.push(req.body.actionTaken);
      targetedGrievance.statusPresently.push(req.body.statusPresently);
      targetedGrievance.remarks.push(req.body.remarks);
      targetedGrievance.save()
      return res
        .status(202)
        .send({ message: "Grievance updated successfully" });
    }
    catch (error) {
      return res.status(500).send({ error: error.message });
    }
  },
};
