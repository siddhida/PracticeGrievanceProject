const { Router } = require("express");
const upload = require("../../utils/multer");
const router = Router();
const {
  updateGrievances,
  uploadDocPicture,
} = require("../../controller/updateControllers");
const { authenticateUsersToken } = require("../../middleware/authenticate");

//---To update Grievances and forward the tasks to next users-------------
router.patch(
  `/api/updategrievances/:id/`,
  authenticateUsersToken,
  updateGrievances
);

//------To upload image of grievance documents-----------------------------

router.patch(
  `/api/uploadDocPicture/:id`,
  authenticateUsersToken,
  upload.single("image"),
  uploadDocPicture
);

module.exports = router;
