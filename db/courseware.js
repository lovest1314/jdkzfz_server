const { Sequelize } = require("sequelize");
const sequelize = require("../config/db");

//定义课件模型
const Courseware = sequelize.define("courseware", {
  //课件编号
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  //课件名
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //发布教师
  teacher: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //课件所属分类
  classify: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //课件资源地址
  addr: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //查看次数
  views: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

sequelize.sync();

//导出 Courseware 模型
module.exports = Courseware;
