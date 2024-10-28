//引入教师模型
const { Teacher } = require("../db");
const { Student } = require("../db");
const { Courseware } = require("../db");
const { Video } = require("../db");
//
// router.post("/user/teacherlogin", user_controller.teacher_login_post);

//增加教师
exports.teacher_create_post = (req, res) => {
  //构造教师实例
  // console.log(req.body);
  const teacher = new Teacher({
    //用户名
    username: req.body.username,
    //姓名
    name: req.body.name,
    //密码
    pwd: "Ncaie@123456",
    //所属学校
    schoolname: req.body.schoolname,
    //状态
    status: req.body.status,
  });
  // 保存教师实例到数据库
  // 立即执行函数，完成数据上传。
  (async () => {
    try {
      await teacher.save();
      res.status(200).send({
        msg: "教师已保存到数据库!",
      });
    } catch (err) {
      res.status(201).send({
        msg: err,
      });
    }
  })();
};
// 删除教师
exports.teacher_delete_delete = (req, res) => {
  (async () => {
    try {
      await Teacher.destroy({
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
        msg: "未实现：删除教师",
      });
    }
  })();
};
// 修改教师
exports.teacher_update_post = (req, res) => {
  console.log(req.body);
  (async () => {
    try {
      //获取原数据
      const origin = await Teacher.findAll({
        where: {
          id: req.body.id,
        },
      });
      console.log(origin[0].dataValues);
      //更新数据
      await Teacher.update(
        {
          //用户名
          username: req.body.username ?? origin[0].dataValues.username, //三元运算符
          //姓名
          name: req.body.name ?? origin[0].dataValues.name,
          //密码
          pwd: req.body.pwd ?? origin[0].dataValues.pwd,
          //所属学校
          schoolname: req.body.schoolname ?? origin[0].dataValues.schoolname,
          //状态
          status: req.body.status ?? origin[0].dataValues.status,
        },
        {
          where: {
            id: req.body.id,
          },
        }
      );
      res.status(200).send({
        msg: "教师已修改",
      });
    } catch (err) {
      res.status(201).send({
        msg: "未实现：修改教师",
      });
    }
  })();
};
// 按照学校名称查询教师
exports.teacher_read_get = (req, res) => {
  (async () => {
    try {
      //获取数据
      const origin = await Teacher.findAll({
        where: {
          schoolname: req.params.schoolname,
        },
      });
      //返回数据
      const teachers = [];
      for (let i = 0; i < origin.length; i++) {
        teachers.push({
          id: origin[i].dataValues.id,
          username: origin[i].dataValues.username,
          name: origin[i].dataValues.name,
          schoolname: origin[i].dataValues.schoolname,
          createdAt: origin[i].dataValues.createdAt,
          status: origin[i].dataValues.status,
        });
      }
      res.status(200).send({
        msg: teachers,
      });
    } catch (err) {
      res.status(201).send({
        msg: "未查询到教师",
      });
    }
  })();
};
// // 教师登录
exports.teacher_login_post = (req, res) => {
  (async () => {
    try {
      const origin = await Teacher.findAll({
        where: {
          username: req.body.username,
          schoolname: req.body.schoolname,
        },
      });
      if (!origin[0].dataValues.status) {
        res.status(201).send({
          msg: "教师账户已停用，请联系管理员核实",
        });
      } else if (origin[0].dataValues.pwd === req.body.pwd) {
        console.log(origin[0].dataValues);
        res.status(200).send({
          msg: {
            id: origin[0].dataValues.id,
            username: origin[0].dataValues.username,
            schoolname: origin[0].dataValues.schoolname,
            name: origin[0].dataValues.name,
          },
        });
      } else {
        res.status(201).send({
          msg: "用户名或密码错误",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(203).send({
        msg: "未查询到教师",
      });
    }
  })();
};
// 教师修改密码
exports.teacher_updatapass_post = async (req, res) => {
  try {
    //更新数据
    await Teacher.update(
      {
        //密码
        pwd: req.body.pwd,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );
    res.status(200).send({
      msg: "教师密码已修改",
    });
  } catch (err) {
    res.status(201).send({
      msg: "未实现：修改教师",
    });
  }
};

//创建班级和学生
exports.student_create_post = async (req, res) => {
  (async () => {
    try {
      for (let i = 0; i < req.body.length; i++) {
        console.log(req.body[i]);
        const student = new Student({
          school: req.body[i].school,
          class: req.body[i].class,
          stuid: req.body[i].stuid,
          name: req.body[i].name,
        });
        // console.log(select);
        await student.save();
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
//删除学生
exports.student_delete_delete = (req, res) => {
  (async () => {
    try {
      await Student.destroy({
        where: {
          id: req.body.id,
        },
      });
      res.status(200).send({
        msg: "学生已删除",
      });
    } catch (err) {
      console.log(err);
      res.status(201).send({
        msg: "失败",
      });
    }
  })();
};
//修改学生
exports.student_update_post = (req, res) => {
  (async () => {
    try {
      //获取原数据
      const origin = await Student.findAll({
        where: {
          id: req.body.id,
        },
      });
      //更新数据
      await Student.update(
        {
          //学号
          stuid: req.body.stuid ?? origin.stuid,
          //姓名
          name: req.body.name ?? origin.name,
          //状态
          status: req.body.status ?? origin.status,
        },
        {
          where: {
            id: req.body.id,
          },
        }
      );
      res.status(200).send({
        msg: "学生修改成功",
      });
    } catch (err) {
      res.status(201).send({
        msg: "学生修改失败",
      });
    }
  })();
};
//删除班级
exports.class_delete_delete = (req, res) => {
  (async () => {
    try {
      console.log(req.body.class);
      await Student.destroy({
        where: {
          class: req.body.class,
        },
      });
      res.status(200).send({
        msg: "已删除班级",
      });
    } catch (err) {
      console.log(err);
      res.status(201).send({
        msg: "失败",
      });
    }
  })();
};
//修改班级
// exports.class_update_post = (req, res) => {
//   (async () => {
//     try {
//       //获取原数据
//       const origin = await Class.findAll({
//         where: {
//           id: req.body.id,
//         },
//       });
//       //更新数据
//       await Class.update(
//         {
//           //所属班级
//           name: req.body.classname ?? origin.name,
//           //状态
//           status: req.body.state ?? origin.status,
//         },
//         {
//           where: {
//             id: req.body.id,
//           },
//         }
//       );
//       res.status(200).send({
//         msg: "班级修改成功",
//       });
//     } catch (err) {
//       res.status(201).send({
//         msg: "班级修改失败",
//       });
//     }
//   })();
// };
//查找班级学校名单
exports.student_read_get = (req, res) => {
  // console.log(req.params.schoolname);
  try {
    (async () => {
      const data = {
        classes: [],
        school: req.params.schoolname,
        students: [],
      };
      const origin = await Student.findAll({
        where: {
          school: req.params.schoolname,
        },
      });
      let classes = [];
      for (let i = 0; i < origin.length; i++) {
        classes.push(origin[i].dataValues.class);
        data.students.push({
          id: origin[i].dataValues.id,
          stuid: origin[i].dataValues.stuid,
          name: origin[i].dataValues.name,
          class: origin[i].dataValues.class,
          school: origin[i].dataValues.school,
        });
      }
      data.classes = Array.from(new Set(classes));
      // console.log(data);
      // console.log(data);
      res.status(200).send({
        msg: data,
      });
    })();
  } catch (err) {
    res.status(201).send({
      msg: "未查询到学生",
    });
  }
};

// 学生登录
// exports.class_read_post = (req, res) => {
//   (async () => {
//     try {
//       //获取数据
//       const origin = await Class.findAll({
//         where: {
//           schoolname: req.body.schoolname,
//         },
//       });
//       //返回数据
//       const classes = [];
//       for (let i = 0; i < origin.length; i++) {
//         classes.push({
//           id: origin[i].dataValues.id,
//           name: origin[i].dataValues.name,
//           status: origin[i].dataValues.status,
//           createdAt: origin[i].dataValues.createdAt,
//         });
//       }
//       res.status(200).send({
//         msg: classes,
//       });
//     } catch (err) {
//       res.status(201).send({
//         msg: "查询失败",
//       });
//     }
//   })();
// };
// 按照班级编号查询学生
// exports.student_read_post = (req, res) => {
//   (async () => {
//     try {
//       //获取数据
//       const origin = await Class.findAll({
//         where: {
//           id: req.body.id,
//         },
//       });
//       //返回数据
//       const student = [];
//       for (let i = 0; i < origin.length; i++) {
//         student.push({
//           id: origin[i].dataValues.id,
//           stuid: origin[i].dataValues.stuid,
//           name: origin[i].dataValues.name,
//           createdAt: origin[i].dataValues.createdAt,
//           courseware: origin[i].dataValues.courseware,
//           video: origin[i].dataValues.video,
//         });
//       }
//       res.status(200).send({
//         msg: student,
//       });
//     } catch (err) {
//       res.status(201).send({
//         msg: "未查询到学生",
//       });
//     }
//   })();
// };
//学生登录
exports.student_login_post = (req, res) => {
  // console.log(req.body);
  (async () => {
    // console.log(req.body);
    try {
      console.log(1, req.body);
      const sorigin = await Student.findAll({
        where: {
          name: req.body.username,
          stuid: req.body.password,
        },
      });
      if (sorigin.length > 0) {
        // console.log(origin[0].dataValues.id);
        res.status(200).send({
          msg: {
            //身份
            identity: "student",
            id: sorigin[0].dataValues.id,
            stuid: sorigin[0].dataValues.stuid,
            name: sorigin[0].dataValues.name,
          },
        });
      } else {
        const torigin = await Teacher.findAll({
          where: {
            name: req.body.username,
            pwd: req.body.password,
          },
        });
        if (torigin.length > 0) {
          // console.log(origin[0].dataValues.id);
          res.status(200).send({
            msg: {
              //身份
              identity: "teacher",
              id: torigin[0].dataValues.id,
              stuid: torigin[0].dataValues.stuid,
              name: torigin[0].dataValues.name,
            },
          });
        } else {
          res.status(201).send({
            msg: "学号或姓名错误",
          });
        }
      }
    } catch (err) {
      console.log(err);
      res.status(202).send({
        msg: "未查询到学生",
      });
    }
  })();
};

//修改课件查看
exports.courseware_update_post = (req, res) => {
  (async () => {
    try {
      //获取原数据
      const origin = await Student.findAll({
        where: {
          id: req.body.id,
        },
      });
      //更新数据
      await Student.update(
        {
          courseware: req.body.courseware ?? origin.courseware,
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
//查询课件查看
exports.courseware_read_get = async (req, res) => {
  async () => {
    try {
      //获取数据
      const origin = await Student.findAll({
        where: {
          id: req.body.id,
        },
      });
      const student = [];
      for (let i = 0; i < origin.length; i++) {
        student.push({
          courseware: origin[i].dataValues.courseware,
        });
      }
      res.status(200).send({
        msg: student,
      });
    } catch (err) {
      res.status(201).send({
        msg: "查询失败",
      });
    }
  };
};
//修改视频查看
exports.video_update_post = (req, res) => {
  (async () => {
    try {
      //获取原数据
      const origin = await Student.findAll({
        where: {
          id: req.body.id,
        },
      });
      //更新数据
      await Student.update(
        {
          video: req.body.video ?? origin.video,
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
//查询视频查看
exports.video_read_post = async (req, res) => {
  try {
    //获取数据
    const origin = await Student.findAll({
      where: {
        id: req.body.studentid,
      },
    });
    const student = [];
    for (let i = 0; i < origin.length; i++) {
      student.push({
        video: origin[i].dataValues.video,
      });
    }
    res.status(200).send({
      msg: student,
    });
  } catch (err) {
    res.status(201).send({
      msg: "查询失败",
    });
  }
};
