const { Sequelize } = require("sequelize");
const sequelize = require("../config/db");

//定义公告模型
const Notice = sequelize.define("notice", {
  //公告标题
  title:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  //公告内容
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //开始时间
  begin: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //结束时间
  end: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

sequelize.sync();

//导出 Notice 模型
module.exports = Notice;