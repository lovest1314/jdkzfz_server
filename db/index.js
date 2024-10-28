//数据库主入口文件
const sequelize = require("../config/db");
//导出文件模型
exports.Teacher = require("./teacher");
exports.Student = require("./student");
exports.Courseware = require("./courseware");
exports.Fill = require("./fill");
exports.Select = require("./select");
exports.Grade = require("./grade");
exports.Video = require("./video");
exports.Experiment = require("./experiment");
exports.Notice = require("./notice");
//初始化创建数据表
sequelize.sync({ force: false });
