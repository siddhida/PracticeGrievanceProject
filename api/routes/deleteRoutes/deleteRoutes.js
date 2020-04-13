const { Router } = require("express");
const router = Router();
const { logout } = require("../../controller/deleteController");

const { authenticateUsersToken } = require("../../middleware/authenticate");

//-----------------------Log-Out for all Users------------------------------------- 
router.delete(`/api/logout/`,authenticateUsersToken, logout);

module.exports = router;