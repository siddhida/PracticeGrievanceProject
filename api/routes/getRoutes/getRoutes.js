const { Router } = require("express");
const router = Router();
const {
  getGrievances,
  getUsers,
  searchGrievances,
} = require("../../controller/getControllers");
const { authenticateUsersToken } = require("../../middleware/authenticate");

//-------To Fetch all the Grievances-------------------------------------
router.get(`/api/getgrievances`, authenticateUsersToken, getGrievances);

//------To Dynamically Search Grievances on the basis of Department and Users------------
router.get(`/api/searchgrievances/`, authenticateUsersToken, searchGrievances); //by department in department referred or by users

//----------To get all the users-----------------------------
router.get(`/api/getusers`, authenticateUsersToken, getUsers);

module.exports = router;
