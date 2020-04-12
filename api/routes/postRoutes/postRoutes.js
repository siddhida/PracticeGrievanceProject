const { Router } = require("express");
const router = Router();
const {
  postGrievances,
  postUsers,
  login,
  register,
} = require("../../controller/postControllers");

router.post(`/api/postgrievances/`, postGrievances);
router.post(`/api/postusers/`, postUsers);
// router.post(`/api/login/`, login);
router.post(`/api/register/`, register);
module.exports = router;
