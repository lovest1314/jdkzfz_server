const { Sequelize } = require("sequelize");
const sequelize = require("../config/db");

//定义实验模型
const Experiment = sequelize.define("experiment", {
  //实验编号
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  //实验名称
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //实验所属分类
  classify: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //实验指导书md
  sybookmd: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  //实验指导书
  sybook: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  //状态
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

sequelize.sync();

//导出 Experiment 模型
module.exports = Experiment;
