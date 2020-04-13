const { Router } = require("express");
const router = Router();
const {
  postGrievances,
  postUsers,
  login,
  register,
  forgotPassword,
} = require("../../controller/postControllers");
const {
  authenticateUsersToken,
  authenticateAdminsToken,
} = require("../../middleware/authenticate");
const upload = require("../../utils/multer");

//------------------Post Grievances-------------------------
router.post(
  `/api/postgrievances/`,
  authenticateUsersToken,
  upload.single("image"),
  postGrievances
);

//----------------------------Login User---------------------------------
router.post(`/api/login/`, login);

//-----Admin will Register Users and will hand over Generated Emp Id and Password-----
router.post(`/api/register/`, authenticateAdminsToken, register);

//--------Forgot Password-----------------------------------------
router.post(`/api/forgotpassword/`, forgotPassword);


module.exports = router;
