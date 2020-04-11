const { Router } = require("express");
const router = Router();
const { postGrievances } = require("../../controller/postControllers");

router.post(`/api/postgrievances`, postGrievances);

module.exports = router;
