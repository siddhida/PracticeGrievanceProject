const { Router } = require("express");
const router = Router();
const {
  getGrievances,
  getUsers,
  searchGrievances,
} = require("../../controller/getControllers");

router.get(`/api/getgrievances`, getGrievances);
router.get(`/api/searchgrievances/`, searchGrievances);
router.get(`/api/getusers`, getUsers);
module.exports = router;
