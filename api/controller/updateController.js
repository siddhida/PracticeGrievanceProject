const gDdetail = require("../model/grievanceDetail");

module.exports = {
  async updateGrievances(req, res) {
    // console.log("Param's Id: ", { id: req.params.id });
    // console.log("Update Body:", { ...req.body });
    try {
      const targetedGrievance = await gDdetail.findOneAndUpdate(
        { _id: req.params.id },
        {
          currentDepartment: req.body.currentDepartment,
          currentUser: req.body.currentUser,
          departmentReferred: gDdetail.push(req.body.departmentReferred),
          userReferred: gDdetail.push(req.body.userReferred),
          solutionSuggested: solutionSuggested.push(req.body.solutionSuggested),
          actionTaken: actionTaken.push(req.body.actionTaken),
          statusPresently: statusPresently.push(req.body.statusPresently),
          remarks: remarks.push(req.body.remarks),
        }
      );

      return res
        .status(202)
        .send({ message: "Grievance updated successfully" });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  },
};
