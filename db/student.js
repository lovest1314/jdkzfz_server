const { Sequelize } = require("sequelize");
const sequelize = require("../config/db");

//定义学生模型
const Student = sequelize.define("student", {
  //学生编号
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  //学号
  stuid: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //姓名
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //所属班级
  class: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //所属院校
  school: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  //上面这两个数组是创建完学生以后默认创建的，所以要有默认值，默认值为空字符串
});

sequelize.sync();

//导出 Student 模型
module.exports = Student;
