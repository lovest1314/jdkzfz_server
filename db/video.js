const { Sequelize } = require("sequelize");
const sequelize = require("../config/db");

//定义视频模型
const Video = sequelize.define("video", {
  //视频编号
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  //视频名
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

//导出 Video 模型
module.exports = Video;
