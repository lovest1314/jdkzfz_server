const { Select } = require("../db");
const { Fill } = require("../db");
const { Grade } = require("../db");
const { Experiment } = require("../db");
const { Class } = require("../db");

//增加选择题
exports.select_create_post = (req, res) => {
  // console.log(req.body);
  (async () => {
    try {
      for (let i = 0; i < req.body.length; i++) {
        // console.log(req.body[i]);
        const select = new Select({
          experiment: req.body[i].experiment,
          question: req.body[i].question,
          option_one: req.body[i].option_one,
          option_two: req.body[i].option_two,
          option_three: req.body[i].option_three,
          option_four: req.body[i].option_four,
          option_five: req.body[i].option_five,
          answer: req.body[i].answer,
        });
        // console.log(select);
        await select.save();
      }
      res.status(200).send({
        msg: "已保存到数据库!",
      });
    } catch (err) {
      res.status(201).send({
        msg: err,
      });
      return;
    }
  })();
};
//删除选择题
exports.select_delete_delete = (req, res) => {
  (async () => {
    try {
      await Select.destroy({
        where: {
          id: req.body.id,
        },
      });
      res.status(200).send({
        msg: "该题已删除",
      });
    } catch (err) {
      console.log(err);
      res.status(201).send({
        msg: "删除失败",
      });
    }
  })();
};
//修改选择题
exports.select_update_post = (req, res) => {
  (async () => {
    try {
      //获取原数据
      const origin = await Select.findAll({
        where: {
          id: req.body.id,
        },
      });
      //更新数据
      await Select.update(
        {
          //试题所属实验编号
          experiment: req.body.experiment ?? origin.experiment,
          //试题题目
          question: req.body.question ?? origin.question,
          //答案数组
          option_one: req.body.option_one ?? origin.option_one,
          option_two: req.body.option_two ?? origin.option_two,
          option_three: req.body.option_three ?? origin.option_three,
          option_four: req.body.option_four ?? origin.option_four,
          option_five: req.body.option_five ?? origin.option_five,
          //正确答案
          answer: req.body.answer ?? origin.answer,
        },
        {
          where: {
            id: req.body.id,
          },
        }
      );
      res.status(200).send({
        msg: "修改成功",
      });
    } catch (err) {
      res.status(201).send({
        msg: "修改失败",
      });
    }
  })();
};
//查询选择题
exports.select_read_get = async (req, res) => {
  (async () => {
    try {
      //获取数据
      const select = await Select.findAll({});
      //返回数据
      const result = [];
      for (let i = 0; i < select.length; i++) {
        result.push({
          id: select[i].dataValues.id,
          experiment: select[i].dataValues.experiment,
          question: select[i].dataValues.question,
          option_one: select[i].dataValues.option_one,
          option_two: select[i].dataValues.option_two,
          option_three: select[i].dataValues.option_three,
          option_four: select[i].dataValues.option_four,
          option_five: select[i].dataValues.option_five,
          answer: select[i].dataValues.answer,
          createdAt: select[i].dataValues.createdAt,
        });
      }
      res.status(200).send({
        msg: result,
      });
    } catch (err) {
      res.status(201).send({
        msg: "查询失败",
      });
    }
  })();
};

//增加填空题
exports.fill_create_post = (req, res) => {
  (async () => {
    try {
      for (let i = 0; i < req.body.length; i++) {
        console.log(req.body[i]);
        const fill = new Fill({
          experiment: req.body[i].experiment,
          question: req.body[i].question,
          answer_one: req.body[i].answer_one,
          answer_two: req.body[i].answer_two,
          answer_three: req.body[i].answer_three,
          answer_four: req.body[i].answer_four,
          answer_five: req.body[i].answer_five,
        });
        await fill.save();
      }
      res.status(200).send({
        msg: "已保存到数据库!",
      });
    } catch (err) {
      res.status(201).send({
        msg: err,
      });
    }
  })();
};
//删除填空题
exports.fill_delete_delete = (req, res) => {
  (async () => {
    try {
      await Fill.destroy({
        where: {
          id: req.body.id,
        },
      });
      res.status(200).send({
        msg: "该题已删除",
      });
    } catch (err) {
      console.log(err);
      res.status(201).send({
        msg: "删除失败",
      });
    }
  })();
};
//修改填空题
exports.fill_update_post = (req, res) => {
  (async () => {
    try {
      //获取原数据
      const origin = await Fill.findAll({
        where: {
          id: req.body.id,
        },
      });
      //更新数据
      await Fill.update(
        {
          //试题所属实验编号
          experiment: req.body.experiment ?? origin.experiment,
          //试题题目
          question: req.body.question ?? origin.question,
          //答案数组
          answer_one: req.body.answer_one ?? origin.answer_one,
          answer_two: req.body.answer_two ?? origin.answer_two,
          answer_three: req.body.answer_three ?? origin.answer_three,
          answer_four: req.body.answer_four ?? origin.answer_four,
          answer_five: req.body.answer_five ?? origin.answer_five,
        },
        {
          where: {
            id: req.body.id,
          },
        }
      );
      res.status(200).send({
        msg: "修改成功",
      });
    } catch (err) {
      res.status(201).send({
        msg: "修改失败",
      });
    }
  })();
};
//查询填空题
exports.fill_read_get = async (req, res) => {
  (async () => {
    try {
      //获取数据
      const fill = await Fill.findAll({});
      //返回数据
      const result = [];
      for (let i = 0; i < fill.length; i++) {
        result.push({
          id: fill[i].dataValues.id,
          experiment: fill[i].dataValues.experiment,
          question: fill[i].dataValues.question,
          answer_one: fill[i].dataValues.answer_one,
          answer_two: fill[i].dataValues.answer_two,
          answer_three: fill[i].dataValues.answer_three,
          answer_four: fill[i].dataValues.answer_four,
          answer_five: fill[i].dataValues.answer_five,
          createdAt: fill[i].dataValues.createdAt,
        });
      }
      res.status(200).send({
        msg: result,
      });
    } catch (err) {
      res.status(201).send({
        msg: "查询失败",
      });
    }
  })();
};

//按章节查询试题
exports.questions_read_get = async (req, res) => {
  (async () => {
    try {
      //获取填空题数据
      const fill = await Fill.findAll({
        where: {
          experiment: req.params.name,
        },
      });
      const fills = [];
      for (let i = 0; i < fill.length; i++) {
        fills.push({
          id: fill[i].dataValues.id,
          question: fill[i].dataValues.question,
          answers: [
            fill[i].dataValues.answer_one,
            fill[i].dataValues.answer_two,
            fill[i].dataValues.answer_three,
            fill[i].dataValues.answer_four,
            fill[i].dataValues.answer_five,
          ],
        });
      }
      //获取选择题数据
      const select = await Select.findAll({
        where: {
          experiment: req.params.name,
        },
      });
      //返回数据
      const selects = [];
      for (let i = 0; i < select.length; i++) {
        selects.push({
          id: select[i].dataValues.id,
          question: select[i].dataValues.question,
          options: [
            select[i].dataValues.option_one,
            select[i].dataValues.option_two,
            select[i].dataValues.option_three,
            select[i].dataValues.option_four,
            select[i].dataValues.option_five,
          ],
          answer: select[i].dataValues.answer,
        });
      }
      res.status(200).send({
        msg: {
          fill: fills,
          select: selects,
        },
      });
    } catch (err) {
      res.status(201).send({
        msg: "修改失败",
      });
    }
  })();
};

//增加成绩
exports.grade_create_post = (req, res) => {
  // 构造成绩实例
  const grade = new Grade({
    classid: req.body.classid,
    studentid: req.body.studentid,
    stuid: req.body.stuid,
    studentname: req.body.studentname,
    name: req.body.name,
    llgrade: req.body.llgrade,
    lldetail: req.body.lldetail,
    czgrade: req.body.czgrade,
    czdetail: req.body.czdetail,
    image: req.body.image,
    bggrade: req.body.bggrade,
  });
  // 保存成绩实例到数据库
  grade
    .save()
    .then(() => {
      res.status(200).send({
        msg: "成绩已保存到数据库!",
      });
    })
    .catch((err) => {
      res.status(201).send({
        msg: err,
      });
    });
};
//删除成绩
exports.grade_delete_delete = (req, res) => {
  (async () => {
    try {
      await Grade.destroy({
        where: {
          id: req.body.id,
        },
      });
      res.status(200).send({
        msg: "该成绩已删除",
      });
    } catch (err) {
      console.log(err);
      res.status(201).send({
        msg: "删除失败",
      });
    }
  })();
};
//修改成绩
exports.grade_update_post = (req, res) => {
  (async () => {
    try {
      //获取原数据
      const origin = await Grade.findAll({
        where: {
          id: req.body.id,
        },
      });
      //更新数据
      await Grade.update(
        {
          llgrade: req.body.llgrade ?? origin.llgrade,
          czgrade: req.body.czgrade ?? origin.czgrade,
          bggrade: req.body.bagrade ?? origin.bggrade,
        },
        {
          where: {
            id: req.body.id,
          },
        }
      );
      res.status(200).send({
        msg: "成绩修改成功",
      });
    } catch (err) {
      res.status(201).send({
        msg: "成绩修改失败",
      });
    }
  })();
};
//查询成绩（学校名，班级编号）
exports.grade_read_post = async (req, res) => {
  (async () => {
    try {
      //获取数据
      const origin = await Grade.findAll({
        where: {
          classid: req.body.classid,
          //schoolname: req.body.schoolname,
        },
      });
      //返回数据
      const grades = [];
      for (let i = 0; i < origin.length; i++) {
        grades.push({
          name: origin[i].dataValues.name,
          llgrade: origin[i].dataValues.llgrade,
          lldetail: origin[i].dataValues.lldetail,
          czgrade: origin[i].dataValues.czgrade,
          czdetail: origin[i].dataValues.czdetail,
          bggrade: origin[i].dataValues.bggrade,
          image: origin[i].dataValues.image,
          createdAt: origin[i].dataValues.createdAt,
        });
      }
      res.status(200).send({
        msg: grades,
      });
    } catch (err) {
      res.status(201).send({
        msg: "未查询到成绩",
      });
    }
  })();
};
//查询成绩（学生编号，实验名称）
exports.sgrade_read_post = (req, res) => {
  (async () => {
    try {
      //获取数据
      const origin = await Grade.findAll({
        where: {
          studentid: req.body.studentid,
          name: req.body.name,
        },
      });
      //返回数据
      const grades = [];
      for (let i = 0; i < origin.length; i++) {
        grades.push({
          llgrade: origin[i].dataValues.llgrade,
          lldetail: origin[i].dataValues.lldetail,
          czgrade: origin[i].dataValues.czgrade,
          czdetail: origin[i].dataValues.czdetail,
          bggrade: origin[i].dataValues.bggrade,
          image: origin[i].dataValues.image,
          createdAt: origin[i].dataValues.createdAt,
        });
      }
      res.status(200).send({
        msg: grades,
      });
    } catch (err) {
      res.status(201).send({
        msg: "未查询到成绩",
      });
    }
  })();
};
