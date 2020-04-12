const { Router } = require("express");
const router = Router();
const { updateGrievances } = require("../../controller/updateControllers");

// router.patch(`/api/updategrievances/`,function(req, res){
//   console.log("I am in Patch Route.")
//   res.send({...req.body})
// });

router.patch(`/api/updategrievances/:id/`, updateGrievances);

module.exports = router;
