const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const grivanceDetailSchema = new Schema(
  {
    aadhaarNumberofResident: {
      type: Number,
      required: true,
    },
    grievanceTitle: {
      type: String,
      required: true,
    },
    grievanceDescription: {
      type: String,
      required: true,
    },
    modeOfGrievance: {
      type: String,
      required: true,
    },
    departmentReferred: [],
    currentDepartment: {
      type: String,
      required: true,
    },
    currentUser: {
      type: String,
      required: true,
    },
    userReferred: [],
    solutionSuggested: [],
    actionTaken: [],
    statusPresently: [],
    remarks: [],
  },
  { timestamps: true }
);

const grievanceDetails = mongoose.model(
  "grievanceDetail",
  grivanceDetailSchema
);

module.exports = grievanceDetails;
