const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/upload");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: "./public",
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  }
});
const uploadImg = multer({ storage });
const {
  validateParam,
  validateBody,
  schemas
} = require("../helpers/routeHelpers");

router
  .route("/upload")
  .post(uploadImg.single("image"), uploadController.uploadImg);
// router.route("/").get(characterController.index);
router.route("/getimages").get(uploadController.getImages);

module.exports = router;
