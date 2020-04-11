const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userDetailSchema = new Schema(
  {
    aadhaarNumber: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    pendingcaseCount: {
      type: String,
      required: true,
    },
    totalcaseCount: {
      type: String,
      required: true,
    },
    ReferToNextUser: [],
    grievanceId: [],
  },
  { timestamps: true }
);

const userDetails = mongoose.model("userDetail", userDetailSchema);

module.exports = userDetails;
