const path = require("path");
const fs = require("fs");

// 引入multer中间件，用于处理上传的文件数据
const multer = require("multer");

// 图片上传
const imageStorage = multer.diskStorage({
  //文件夹配置
  destination: function (req, file, cb) {
    //获取当前日期 得到一个时间戳
    const now = new Date();
    //图片文件存储路径
    const dirPath = path.join(
      __dirname,
      `../public/images/${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`
    );
    //如果文件夹不存在则创建文件夹
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    cb(null, dirPath);
  },
});

const image = multer({
  storage: imageStorage,
  fileFilter: (req, file, cb) => {
    // 定义允许上传的文件后缀
    const filetypes = /jpeg|jpg|png|gif/;
    // 验证
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb("只能上传后缀为jpeg/jpg/png/gif格式的图片");
    }
  },
});

//图片上传controller
exports.files_image_upload_post = (req, res) => {
  image.array("image")(req, res, function (err) {
    //req.files 是一个存储文件对象的数组
    if (err instanceof multer.MulterError) {
      // 发生错误
      console.log("发生未知错误");
    } else if (err) {
      console.log(err);
      res.send(err);
    } else {
      // 上传的文件在req.files中
      //拼接文件名
      const filename =
        req.files[0].path + path.parse(req.files[0].originalname).ext;
      // console.log(filename.split("public")[1].replace(/\\/g, "/"));
      fs.rename(req.files[0].path, filename, function (err) {
        if (err) {
          res.send(err);
        }
      });
      res.send({
        data: filename.split("public")[1].replace(/\\/g, "/"),
      });
    }
  });
};

//文档上传controller
const docStorage = multer.diskStorage({
  //文件夹配置
  destination: function (req, file, cb) {
    //获取当前日期 得到一个时间戳
    const now = new Date();
    //文件存储路径
    const dirPath = path.join(
      __dirname,
      `../public/doc/${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`
    );
    //如果文件夹不存在则创建文件夹
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    cb(null, dirPath);
  },
});

const doc = multer({
  storage: docStorage,
  fileFilter: (req, file, cb) => {
    cb(null, true);
  },
});

exports.files_uploadfile_post = (req, res) => {
  doc.any()(req, res, function (err) {
    //req.files 是一个存储文件对象的数组
    if (err instanceof multer.MulterError) {
      console.log(req.files);
      console.log(err);
      // 发生错误
      console.log("发生未知错误");
    } else if (err) {
      console.log(err);
      res.send(err);
    } else {
      // 一切都好
      // 上传的文件在req.files中
      //拼接文件名
      const filename =
        req.files[0].path + path.parse(req.files[0].originalname).ext;
      console.log(filename.split("public")[1].replace(/\\/g, "/"));

      fs.rename(req.files[0].path, filename, function (err) {
        if (err) {
          res.send(err);
        }
      });
      console.log(req.files[0].path);
      res.send(filename.split("public")[1].replace(/\\/g, "/"));
    }
  });
};

//视频上传controller
const videoStorage = multer.diskStorage({
  //文件夹配置
  destination: function (req, file, cb) {
    //获取当前日期 得到一个时间戳
    const now = new Date();
    //文件存储路径
    const dirPath = path.join(
      __dirname,
      `../public/video/${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`
    );
    //如果文件夹不存在则创建文件夹
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    cb(null, dirPath);
  },
});

const video = multer({
  storage: videoStorage,
  fileFilter: (req, file, cb) => {
    cb(null, true);
  },
});

exports.files_uploadvideo_post = (req, res) => {
  video.any()(req, res, function (err) {
    //req.files 是一个存储文件对象的数组
    if (err instanceof multer.MulterError) {
      console.log(req.files);
      console.log(err);
      // 发生错误
      console.log("发生未知错误");
    } else if (err) {
      console.log(err);
      res.send(err);
    } else {
      // 一切都好
      // 上传的文件在req.files中
      //拼接文件名
      const filename =
        req.files[0].path + path.parse(req.files[0].originalname).ext;
      console.log(filename.split("public")[1].replace(/\\/g, "/"));

      fs.rename(req.files[0].path, filename, function (err) {
        if (err) {
          res.send(err);
        }
      });
      console.log(req.files[0].path);
      res.send(filename.split("public")[1].replace(/\\/g, "/"));
    }
  });
};
