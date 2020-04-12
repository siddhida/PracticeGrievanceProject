const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userDetailSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    aadhaarNumber: { type: Number, required: true },
    department: { type: String, required: true },
    empId: { type: Number, required: true },
    password: { type: Number, required: true },
    role: { type: String, required: true },
    activationToken: { type: Number },
    jwt: { type: Number, default: null },
    pendingcaseCount: { type: String, default: null },
    totalcaseCount: { type: String, default: null },
    ReferToNextUser: [],
    grievanceId: [
      { type: Schema.Types.ObjectId, ref: "grievanceDetail", default: null },
    ],
  },
  { timestamps: true }
);

const userDetails = mongoose.model("userDetail", userDetailSchema);

module.exports = userDetails;
