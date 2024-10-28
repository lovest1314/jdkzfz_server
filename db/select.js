const { Sequelize } = require("sequelize");
const sequelize = require("../config/db");

//定义选择题模型
const Select = sequelize.define("select", {
  //试题编号
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  //试题所属实验编号
  experiment: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //试题题目
  question: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //选项数组
  option_one: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  option_two: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  option_three: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  option_four: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  option_five: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  //正确答案
  answer: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

sequelize.sync();

//导出 Select 模型
module.exports = Select;
