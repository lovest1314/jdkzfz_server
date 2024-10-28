var express = require("express");
var router = express.Router();

const test_controller = require("../controllers/testController");

/*
 * 选择题接口
 */
// 增加选择题
router.post("/createselect", test_controller.select_create_post);
// 删除选择题
router.delete("/deleteselect", test_controller.select_delete_delete);
// 修改选择题
router.post("/updateselect", test_controller.select_update_post);
// 查询选择题
router.get("/readselect", test_controller.select_read_get);

/*
 * 填空题接口
 */
// 增加填空题
router.post("/createfill", test_controller.fill_create_post);
// 删除填空题
router.delete("/deletefill", test_controller.fill_delete_delete);
// 修改填空题
router.post("/updatefill", test_controller.fill_update_post);
// 查询填空题
router.get("/readfill", test_controller.fill_read_get);

/*
 * 试题接口
 */
// 按章节名获取试题
router.get("/readquestions/:name", test_controller.questions_read_get);
/*
 * 成绩接口
 */
// 增加成绩
router.post("/creategrade", test_controller.grade_create_post);
// 删除成绩
router.delete("/deletegrade", test_controller.grade_delete_delete);
// 修改成绩
router.post("/updategrade", test_controller.grade_update_post);
// 查询成绩（按照学校和班级名查）
router.get("/readgrade", test_controller.grade_read_post);
//查询成绩（按照学生编号和实验名称查找）
router.get("/readsgrade", test_controller.sgrade_read_post);

module.exports = router;
