const gDdetail = require("../model/grievanceDetail");

module.exports = {
  postGrievances: function (req, res) {
    const grievanceDetail = new gDdetail({...req.body});    
    grievanceDetail
      .save()
      .then((grievanceDetail) => {
        console.log("Grievance posted successfully");
        res.status(200).json(grievanceDetail);
      })
      .catch((error) => {
        console.log("POSTING JOBS ====== ", error.message);
        return res.status(403).send(error.message);
      });
  },
};
