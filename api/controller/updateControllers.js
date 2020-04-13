const gDdetail = require("../model/grievanceDetail");
const uDetail = require("../model/userDetail");
const convertBufferToString = require("../utils/convertBufferToString");
const cloudinary = require("../utils/cloudinary");
const { sendMailToUser } = require("../utils/nodemailer");

module.exports = {
  async updateGrievances(req, res) {
    try {
      const targetedGrievance = await gDdetail.findOne({ _id: req.params.id });
      targetedGrievance.currentDepartment = req.body.currentDepartment;
      targetedGrievance.currentUser = req.body.currentUser;
      targetedGrievance.departmentReferred.push(req.body.departmentReferred);
      targetedGrievance.userReferred.push(req.body.userReferred);
      targetedGrievance.solutionSuggested.push(req.body.solutionSuggested);
      targetedGrievance.actionTaken.push(req.body.actionTaken);
      targetedGrievance.statusPresently.push(req.body.statusPresently);
      targetedGrievance.remarks.push(req.body.remarks);
      targetedGrievance.save();
      console.log("G Id = ", targetedGrievance._id);
      const user = await uDetail.findOne({ empId: req.body.userReferred });
      console.log("User Inside Update Grievance = ", user);
      sendMailToUser(user.name, user.email, targetedGrievance._id);
      user.grievanceId.push(targetedGrievance._id);
      user.save();
      const currentUser = await uDetail.findOne({
        empId: req.body.currentUser,
      });
      currentUser.ReferToNextUser.push(req.body.userReferred);
      currentUser.totalcaseCount = currentUser.grievanceId.length;
      const pendingGrievances = await gDdetail.find({
        $or: [
          { userReferred: req.body.currentUser },
          { currentUser: req.body.currentUser },
        ],
        statusPresently: "Pending",
      });
      currentUser.pendingcaseCount = pendingGrievances.length;
      currentUser.save();
      return res
        .status(202)
        .send({ message: "Grievance updated successfully" });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  },
  async uploadDocPicture(req, res) {
    try {
      console.log("I am inside Upload Doc Picture...");
      let imageContent = convertBufferToString(
        req.file.originalname,
        req.file.buffer
      );
      let imageResponse = await cloudinary.uploader.upload(imageContent);
      await gDdetail.findOneAndUpdate(
        { _id: req.params.id },
        { docPicture: imageResponse.secure_url }
      );
      console.log("I am Deepper inside Upload Doc Picture...");
      res
        .status(202)
        .send({ message: "uploaded Profile picture successfully" });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  },
};
