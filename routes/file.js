var express = require("express");
var router = express.Router();
const file_controller = require("../controllers/fileController");

//图片上传接口
router.post("/uploadimg", file_controller.files_image_upload_post);

//文档上传接口
router.post("/uploadfile", file_controller.files_uploadfile_post);

//视频上传接口
router.post("/uploadvideo", file_controller.files_uploadvideo_post);

module.exports = router;
