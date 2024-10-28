const { Experiment } = require("../db");
const { Courseware } = require("../db");
const { Video } = require("../db");
const { Notice } = require("../db");

//增加实验
exports.experiment_create_post = (req, res) => {
  console.log(req.body);
  const experiment = new Experiment({
    //实验名称
    name: req.body.name,
    //实验指导分类
    classify: req.body.classify,
    //实验指导书
    sybook: req.body.sybook,
    sybookmd: req.body.sybookmd,
    //状态
    status: req.body.status,
  });
  (async () => {
    try {
      await experiment.save();
      res.status(200).send({
        msg: "实验已保存到数据库!",
      });
    } catch (err) {
      res.status(201).send({
        msg: err,
      });
    }
  })();
};
// 删除实验
exports.experiment_delete_delete = (req, res) => {
  (async () => {
    try {
      await Experiment.destroy({
        where: {
          id: req.body.id,
        },
      });
      res.status(200).send({
        msg: "已删除",
      });
    } catch (err) {
      console.log(err);
      res.status(201).send({
        msg: "删除失败",
      });
    }
  })();
};
// 修改实验
exports.experiment_update_post = (req, res) => {
  (async () => {
    try {
      //更新数据
      await Experiment.update(
        {
          //实验名称
          name: req.body.name,
          //实验所属分类
          classify: req.body.classify,
          //实验指导书
          sybook: req.body.sybook,
          sybookmd: req.body.sybookmd,
          //开放状态
          status: req.body.status,
        },
        {
          where: {
            id: req.body.id,
          },
        }
      );
      res.status(200).send({
        msg: "实验已修改",
      });
    } catch (err) {
      res.status(201).send({
        msg: "修改失败",
      });
    }
  })();
};
//查询实验
exports.experiment_read_get = (req, res) => {
  (async () => {
    try {
      //获取数据
      const origin = await Experiment.findAll({});
      //返回数据
      const experiment = [];
      for (let i = 0; i < origin.length; i++) {
        experiment.push({
          id: origin[i].dataValues.id,
          name: origin[i].dataValues.name,
          classify: origin[i].dataValues.classify,
          sybook: origin[i].dataValues.sybook,
          sybookmd: origin[i].dataValues.sybookmd,
          status: origin[i].dataValues.status,
          createdAt: origin[i].dataValues.createdAt,
        });
      }
      res.status(200).send({
        msg: experiment,
      });
    } catch (err) {
      res.status(201).send({
        msg: "未查询到实验",
      });
    }
  })();
};
//查询实验列表
exports.experimentlist_read_get = async (req, res) => {
  (async () => {
    try {
      console.log("实验列表");
      //获取数据
      const origin = await Experiment.findAll({
        where: {
          status: true,
        },
      });
      //返回数据
      const experiment = [];
      for (let i = 0; i < origin.length; i++) {
        experiment.push({
          id: origin[i].dataValues.id,
          name: origin[i].dataValues.name,
          classify: origin[i].dataValues.classify,
        });
      }
      res.status(200).send({
        msg: experiment,
      });
    } catch (err) {
      res.status(201).send({
        msg: "未查询到实验",
      });
    }
  })();
};
//查询实验细节
exports.experimentdetail_read_get = async (req, res) => {
  (async () => {
    try {
      //获取数据
      const origin = await Experiment.findAll({
        where: {
          id: req.params.id,
        },
      });
      //返回数据

      res.status(200).send({
        msg: {
          id: origin[0].dataValues.id,
          name: origin[0].dataValues.name,
          sybook: origin[0].dataValues.sybook,
        },
      });
    } catch (err) {
      res.status(201).send({
        msg: "未查询到实验",
      });
    }
  })();
};

//增加课件
exports.courseware_create_post = (req, res) => {
  const courseware = new Courseware({
    //课件名
    name: req.body.name,
    //发布教师
    teacher: req.body.teacher,
    //课件指导分类
    classify: req.body.classify,
    //课件资源地址
    addr: req.body.addr,
  });
  (async () => {
    try {
      await courseware.save();
      res.status(200).send({
        msg: "课件已保存到数据库!",
      });
    } catch (err) {
      res.status(201).send({
        msg: err,
      });
    }
  })();
};
//删除课件
exports.courseware_delete_delete = (req, res) => {
  (async () => {
    try {
      await Courseware.destroy({
        where: {
          id: req.body.id,
        },
      });
      res.status(200).send({
        msg: "已删除",
      });
    } catch (err) {
      console.log(err);
      res.status(201).send({
        msg: "删除失败",
      });
    }
  })();
};
//修改课件
exports.courseware_update_post = (req, res) => {
  (async () => {
    try {
      //获取原数据
      const origin = await Courseware.findAll({
        where: {
          id: req.body.id,
        },
      });
      //更新数据
      await Courseware.update(
        {
          //课件名
          name: req.body.name ?? origin.name,
          //发布教师
          teacher: req.body.teacher ?? origin.teacher,
          //课件所属分类
          classify: req.body.classify ?? origin.classify,
        },
        {
          where: {
            id: req.body.id,
          },
        }
      );
      res.status(200).send({
        msg: "课件已修改",
      });
    } catch (err) {
      res.status(201).send({
        msg: "修改失败",
      });
    }
  })();
};
//查询课件
exports.courseware_read_get = async (req, res) => {
  (async () => {
    try {
      //获取数据
      const courseware = await Courseware.findAll({
        where: req.query.id ? { id: req.query.id } : {},
      });
      //返回数据
      const result = [];
      for (let i = 0; i < courseware.length; i++) {
        result.push({
          id: courseware[i].dataValues.id,
          name: courseware[i].dataValues.name,
          teacher: courseware[i].dataValues.teacher,
          classify: courseware[i].dataValues.classify,
          addr: courseware[i].dataValues.addr,
          views: courseware[i].dataValues.views,
          createdAt: courseware[i].dataValues.createdAt,
        });
      }
      res.status(200).send({
        msg: result,
      });
    } catch (err) {
      res.status(201).send({
        msg: "未查询到课件",
      });
    }
  })();
};

//增加视频
exports.video_create_post = (req, res) => {
  const video = new Video({
    //视频名
    name: req.body.name,
    //发布教师
    teacher: req.body.teacher,
    //课件指导分类
    classify: req.body.classify,
    //课件资源地址
    addr: req.body.addr,
  });
  (async () => {
    try {
      await video.save();
      res.status(200).send({
        msg: "视频已保存到数据库!",
      });
    } catch (err) {
      res.status(201).send({
        msg: err,
      });
    }
  })();
};
//删除视频
exports.video_delete_delete = (req, res) => {
  (async () => {
    try {
      await Video.destroy({
        where: {
          id: req.body.id,
        },
      });
      res.status(200).send({
        msg: "已删除",
      });
    } catch (err) {
      console.log(err);
      res.status(201).send({
        msg: "删除失败",
      });
    }
  })();
};
//修改视频
exports.video_update_post = (req, res) => {
  (async () => {
    try {
      //获取原数据
      const origin = await Video.findAll({
        where: {
          id: req.body.id,
        },
      });
      //更新数据
      await Video.update(
        {
          //视频名
          name: req.body.name ?? origin.name,
          //发布教师
          teacher: req.body.teacher ?? origin.teacher,
          //视频所属分类
          classify: req.body.classify ?? origin.classify,
        },
        {
          where: {
            id: req.body.id,
          },
        }
      );
      res.status(200).send({
        msg: "视频已修改",
      });
    } catch (err) {
      res.status(201).send({
        msg: "修改失败",
      });
    }
  })();
};
//查询视频
exports.video_read_get = (req, res) => {
  (async () => {
    try {
      //获取数据
      const video = await Video.findAll({});
      //返回数据
      const result = [];
      for (let i = 0; i < video.length; i++) {
        result.push({
          id: video[i].dataValues.id,
          name: video[i].dataValues.name,
          teacher: video[i].dataValues.teacher,
          classify: video[i].dataValues.classify,
          addr: video[i].dataValues.addr,
          views: video[i].dataValues.views,
          createdAt: video[i].dataValues.createdAt,
        });
      }
      res.status(200).send({
        msg: result,
      });
    } catch (err) {
      res.status(201).send({
        msg: "未查询到视频",
      });
    }
  })();
};

//增加公告
exports.notice_create_post = (req, res) => {
  const notice = new Notice({
    //公告标题
    title: req.body.title,
    //公告内容
    content: req.body.content,
    //开始时间
    begin: req.body.begin,
    //结束时间
    end: req.body.end,
  });
  (async () => {
    try {
      await notice.save();
      res.status(200).send({
        msg: "公告信息已保存到数据库!",
      });
    } catch (err) {
      res.status(201).send({
        msg: err,
      });
    }
  })();
};
//删除公告
exports.notice_delete_delete = (req, res) => {
  (async () => {
    try {
      await Notice.destroy({
        where: {
          id: req.body.id,
        },
      });
      res.status(200).send({
        msg: "已删除",
      });
    } catch (err) {
      console.log(err);
      res.status(201).send({
        msg: "删除失败",
      });
    }
  })();
};
//查询公告
exports.notice_read_get = (req, res) => {
  (async () => {
    try {
      //获取数据
      const notice = await Notice.findAll({});
      //返回数据
      const result = [];
      for (let i = 0; i < notice.length; i++) {
        result.push({
          title: notice[i].dataValues.title,
          content: notice[i].dataValues.content,
          begin: notice[i].dataValues.begin,
          end: notice[i].dataValues.end,
          createdAt: notice[i].dataValues.createdAt,
        });
      }
      res.status(200).send({
        msg: result,
      });
    } catch (err) {
      res.status(201).send({
        msg: "未查询到公告",
      });
    }
  })();
};

//课件查看次数加一
exports.courseware_add_get = (req, res) => {
  (async () => {
    try {
      await Courseware.increment(
        { views: 1 },
        { where: { id: req.params.id } }
      );
      res.status(200).send({
        msg: "已增加",
      });
    } catch (err) {
      res.status(201).send({
        msg: "增加失败",
      });
    }
  })();
};
//视频查看次数加一
exports.video_add_get = (req, res) => {
  (async () => {
    try {
      await Video.increment({ views: 1 }, { where: { id: req.params.id } });
      res.status(200).send({
        msg: "已增加",
      });
    } catch (err) {
      res.status(201).send({
        msg: "增加失败",
      });
    }
  })();
};
