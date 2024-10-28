const { Sequelize } = require("sequelize");
const sequelize = require("../config/db");

//定义选择题模型
const Grade = sequelize.define("grade", {
  //成绩编号
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  //班级编号
  classid:{
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue:true,
  },
  //学生编号
  studentid: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue:true,
  },
  //学生学号
  stuid: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue:true,
  },
  //学生姓名
  studentname: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue:true,
  },
  //实验名称
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //理论测试成绩
  llgrade: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //理论测试详情
  lldetail: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //实验操作成绩
  czgrade: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //实验操作详情
  czdetail: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //实验报告图片数组
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //实验报告成绩
  bggrade: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

sequelize.sync();

//导出 Grade 模型
module.exports = Grade;