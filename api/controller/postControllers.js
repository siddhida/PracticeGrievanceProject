const gDdetail = require("../model/grievanceDetail");
const uDetail = require("../model/user");
const jwt = require("jsonwebtoken");
const { hash, compare } = require("bcryptjs");
const Joi = require("@hapi/joi");

module.exports = {
  async postGrievances(req, res) {
    try {
      const grievanceDetail = await new gDdetail({ ...req.body });
      const saved = await grievanceDetail.save();
      console.log("Grievance posted successfully");
      res.status(200).json(saved);
    } catch (error) {
      console.log(error);
    }
  },
  async postUsers(req, res) {
    try {
      const userDetail = await new uDetail({ ...req.body });
      userDetail.save();
      console.log("User Entry Successfull...");
      res.status(200).json(userDetail);
    } catch (error) {
      console.log(error);
    }
  },
  // async login(req, res) {
  //   try {
  //     var empId = req.body.empId;
  //     var password = req.body.password;
  //     if (!empId || !password)
  //       return res.status(400).send({ error: "Incorrect credentials" });

  //     const user = await schema.findOne({ empId });
  //     if (!user)
  //       return res
  //         .status(400)
  //         .send({ error: "Incorrect credentials(email not found)" });
  //     console.log("password", password);
  //     console.log("user.database.password", user.password);
  //     const isMatched = await compare(password, user.password);
  //     if (!isMatched)
  //       return res.send({
  //         error: "Incorrect credentials(password not matched)",
  //       });
  //     if (!user.isVerified)
  //       return res.status(401).send({
  //         error:
  //           "You are not verified, please activate link sent to you through Email",
  //       });
  //     const token = await jwt.sign(
  //       { _id: user._id },
  //       process.env.ACCESS_TOKEN_SECRET,
  //       { expiresIn: 1000 * 600 * 100 }
  //     );
  //     user.jwt = token;
  //     user.save();
  //     return res.status(202).send({ jwt: token, user });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  async register(req, res) {
    try {
      const { name, email, aadhaarNumber, role, department } = req.body;
      const Schemavalidation = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        }),
        aadhaarNumber: Joi.number()
          .min(100000000000)
          .max(999999999999)
          .required(),
        role: Joi.string().min(3).max(30).required(),
        department: Joi.string().min(3).max(30).required(),
      });
      const { error, result } = Schemavalidation.validate({
        name: name,
        email: email,
        aadhaarNumber: aadhaarNumber,
        role: role,
        department: department,
      });
      if (error) return res.status(422).json({ Error: error.message });
      const emailCheck = await uDetail.findOne({ email: req.body.email });
      console.log(emailCheck);
      if (emailCheck) return res.send({ error: "Duplicate Email" });
      const aadhaarCheck = await uDetail.findOne({
        aadhaarNumber: req.body.aadhaarNumber,
      });
      console.log(aadhaarCheck);
      if (aadhaarCheck) return res.send({ error: "Duplicate aadhaarnumber" });
      const activationToken = await jwt.sign(
        { id: Math.random() },
        process.env.TEMP_TOKEN_SECRET,
        { expiresIn: 1000 * 1000 * 60 }
      );
      const totalUsers = await uDetail.find().countDocuments();
      const empId = 9000 + totalUsers;
      const rawPassword = Math.floor(Math.random() * 100000000).toString();
      const hashedPassword = await hash(rawPassword, 10);
      const userDetail = await new uDetail(
        { ...req.body },
        {
          empId: empId,
          password: hashedPassword,
          activationToken: activationToken,
        }
      );
      console.log("userDetail = ", userDetail);
      userDetail.save(function (error) {
        console.log("Your userDetail has been saved.");
      });
      console.log("userDetail After Saving = ", userDetail);
      // sendMailToUser(`${empId}`, req.body.email, activationToken);
      res.status(202).send({
        message: `${aadhaarNumber} Aadhar Number registered Successfully. Your Employee ID is ${empId} and your Password is ${rawPassword}`,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
