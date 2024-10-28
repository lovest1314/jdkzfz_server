//数据库操控
const { Sequelize } = require("sequelize");

// 创建数据库连接
const sequelize = new Sequelize("server", "jdkzfz_server", "jdkzfz_server", {
  host: "82.156.131.111",
  dialect: "mysql",
  logging: false, // 禁用查询日志
});

//数据库成功连接验证
// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// })();

// 将 Sequelize 实例导出
module.exports = sequelize;
