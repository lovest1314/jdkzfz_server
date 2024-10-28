const { Sequelize } = require("sequelize");
const sequelize = require("../config/db");

//定义填空题模型
const Fill = sequelize.define("fill", {
  //试题编号
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  //试题所属实验
  experiment: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //试题题目
  question: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //答案数组
  answer_one: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  answer_two: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  answer_three: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  answer_four: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  answer_five: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

sequelize.sync();

//导出 fill 模型
module.exports = Fill;
