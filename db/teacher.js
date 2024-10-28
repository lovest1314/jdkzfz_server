const { Sequelize } = require("sequelize");
const sequelize = require("../config/db");

//定义教师模型
const Teacher = sequelize.define("teacher", {
  //教师编号
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  //用户名
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  //姓名
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //密码
  pwd: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //所属学校
  schoolname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //状态
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

sequelize.sync();

//导出 Teacher 模型
module.exports = Teacher;
