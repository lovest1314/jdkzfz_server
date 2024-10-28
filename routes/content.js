var express = require("express");
var router = express.Router();

const content_controller = require("../controllers/contentController");
// 增加实验
router.post("/createexperiment", content_controller.experiment_create_post);
// 删除实验
router.delete("/deleteexperiment", content_controller.experiment_delete_delete);
// 修改实验
router.post("/updateexperiment", content_controller.experiment_update_post);
// 查询实验
router.get("/readexperiment", content_controller.experiment_read_get);
//查询实验列表
router.get("/readexperimentlist", content_controller.experimentlist_read_get);
//查询实验列表
router.get(
  "/readexperimentdetail/:id",
  content_controller.experimentdetail_read_get
);

//增加课件
router.post("/createcourseware", content_controller.courseware_create_post);
// 删除课件
router.delete("/deletecourseware", content_controller.courseware_delete_delete);
// 修改课件
router.post("/updatecourseware", content_controller.courseware_update_post);
// 查询课件
router.get("/readcourseware", content_controller.courseware_read_get);
//课件查看次数加一
router.get("/addcourseware/:id", content_controller.courseware_add_get);

//增加视频
router.post("/createvideo", content_controller.video_create_post);
// 删除视频
router.delete("/deletevideo", content_controller.video_delete_delete);
// 修改视频
router.post("/updatevideo", content_controller.video_update_post);
// 查询视频
router.get("/readvideo", content_controller.video_read_get);
//视频查看次数加一
router.get("/addvideo/:id", content_controller.video_add_get);

//增加公告
router.post("/createnotice", content_controller.notice_create_post);
// 删除公告
router.delete("/deletenotice", content_controller.notice_delete_delete);
// 查询公告
router.get("/readnotice", content_controller.notice_read_get);

module.exports = router;
