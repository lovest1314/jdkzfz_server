var express = require("express");
var router = express.Router();

const user_controller = require("../controllers/userController");

/*
 * 教师接口
 */
// 增加教师
router.post("/createteacher", user_controller.teacher_create_post);
// 删除教师
router.delete("/deleteteacher", user_controller.teacher_delete_delete);
// 修改教师
router.post("/updateteacher", user_controller.teacher_update_post);
// 按照学校名称查询教师
router.get("/readteacher/:schoolname", user_controller.teacher_read_get);
// 教师登录
router.post("/teacherlogin", user_controller.teacher_login_post);
// 增加教师
router.post("/updatapass", user_controller.teacher_updatapass_post);

/*
 * 班级学生接口
 */

// 增加班级和学生
router.post("/createstudent", user_controller.student_create_post);
// 删除学生
// router.delete("/deletestudent", user_controller.student_delete_delete);
// 删除班级
router.delete("/deleteclass", user_controller.class_delete_delete);
// 修改班级
// router.post("/updateclass", user_controller.class_update_post);
// 修改学生
// router.post("/updatestudent", user_controller.student_update_post);
// 查询学生
router.get("/readstudent/:schoolname", user_controller.student_read_get);
// 学生登录
router.post("/studentlogin", user_controller.student_login_post);

//查询课件查看
router.get("/readcourseware", user_controller.courseware_read_get);
//修改课件查看
router.post("/updatecourseware", user_controller.courseware_update_post);
//查询视频查看
router.get("/readvideo", user_controller.video_read_post);
//修改视频查看
router.post("/updatevideo", user_controller.video_update_post);
module.exports = router;
