const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

// 创建express实例
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
// 中间件
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors()); //使用cors中间件
// 路由定义与使用
// 文件上传功能
var fileRouter = require("./routes/file");
// 用户管理
var userRouter = require("./routes/user");
// 测试管理
var testRouter = require("./routes/test");
//内容管理
var contentRouter = require("./routes/content");

// 使用路由
app.use("/file", fileRouter);
app.use("/user", userRouter);
app.use("/test", testRouter);
app.use("/content", contentRouter);
// 错误处理

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// 导出app模块
module.exports = app;
