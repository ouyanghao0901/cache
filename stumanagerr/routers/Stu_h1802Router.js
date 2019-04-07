/**
 * @name 数据库stu_h1802的路由操作
 * @author 欧阳浩
 * @description 路由
 */

const express = require("express"),
    Stu_h1802Service = require("../services/Stu_h1802Service"),
    MessageBox = require("../utils/MessageBox"),
    Stu_h1802 = require("../model/Stu_h1802"),
    PageJson = require("../model/PageJson");

let router = express.Router();

//登陆页面
router.get("/login", (req, resp) => {
    resp.render("stu_h1802/login");
});

//验证登陆
router.post("/checkLogin", async (req, resp) => {
    let pramas = ({ s_id, s_qq } = req.body); //eslint-disable-line
    try {
        let result = await new Stu_h1802Service().chenkLogin(pramas);
        if (result.length == 1) {
            req.session.stuInfo = result[0];
            MessageBox.showAndRedirect("登录成功", "/adminIndex", resp);
        } else {
            MessageBox.showAndBack("登陆失败", resp);
        }
    } catch (err) {
        MessageBox.showAndBack("服务器错误!", resp);
    }
});

//查询信息
router.get("/queryByList", async (req, resp) => {
    //可以得到前面传过来的查询条件
    let pageIndex = req.query.pageIndex || 1;
    try {
        let pageList = await new Stu_h1802Service().queryByList(
            req.query,
            pageIndex
        );
        resp.render("stu_h1802/stuList", pageList);
    } catch (err) {
        resp.send("服务器错误!");
    }
});

//学生列表
router.get("/stuList", async (req, resp) => {
    //可以得到前面传过来的查询条件
    let pageIndex = req.query.pageIndex || 1;
    try {
        let pageList = await new Stu_h1802Service().queryByList(
            req.query,
            pageIndex
        );
        resp.render("stu_h1802/stuList", pageList);
    } catch (err) {
        resp.send("服务器错误!");
        // console.log(err);
    }
});

//新增学生页面
router.get("/addStu", (req, resp) => {
    let objArr = Object.entries(new Stu_h1802());
    resp.render("stu_h1802/addStu", { objArr });
});

//添加学生
router.post("/doAddStu", async (req, resp) => {
    try {
        let result = await new Stu_h1802Service().addStu(req.body);
        result.affectedRows > 0
            ? MessageBox.showAndRedirect("添加成功!", "/stu_h1802/stuList", resp)
            : MessageBox.showAndBack("添加失败", resp);
    } catch (err) {
        MessageBox.showAndBack("服务器错误", resp);
    }
});

//学生考勤
router.get("/checking", (req, resp) => {
    resp.render("stu_h1802/checking");
});

//检测学号
router.get("/checkS_id", async (req, resp) => {
    try {
        let result = await new Stu_h1802Service().chenkSid(req.query.s_id);
        result.length > 0 ? resp.send("1") : resp.send("0");
    } catch (error) {
        console.log(error);
    }
});

//修改密码
router.get("/changePwd", (res, resp) => {
    resp.render("stu_h1802/changePwd");
});

//删除
router.get("/deleteById", async (req, resp) => {
    let { s_id } = req.query;
    try {
        let flag = await new Stu_h1802Service().deleteById(s_id);
        if (flag) {
            let pageJson = new PageJson("success", "删除成功");
            let jsonObj = JSON.stringify(pageJson);
            resp.send(jsonObj);
            // resp.json(pageJson);
        } else {
            let pageJson = new PageJson("error", "删除失败");
            let jsonObj = JSON.stringify(pageJson);
            resp.send(jsonObj);
            // resp.json(pageJson);
        }
    } catch (error) {
        let pageJson = new PageJson("error", "服务器错误");
        let jsonObj = JSON.stringify(pageJson);
        resp.send(jsonObj);
        // resp.json(pageJson);
    }
});

//批量删除
router.get("/deleteByChecked", async (req, resp) => {
    let { s_idArr } = req.query;
    let arr = s_idArr.split("-");
    try {
        let flag = await new Stu_h1802Service().deleteByChecked(arr);
        if (flag) {
            let pageJson = new PageJson("success", "删除成功");
            let jsonObj = JSON.stringify(pageJson);
            resp.send(jsonObj);
            // resp.json(pageJson);
        } else {
            let pageJson = new PageJson("error", "删除失败");
            let jsonObj = JSON.stringify(pageJson);
            resp.send(jsonObj);
            // resp.json(pageJson);
        }
    } catch (error) {
        let pageJson = new PageJson("error", "服务器错误");
        let jsonObj = JSON.stringify(pageJson);
        resp.send(jsonObj);
        // resp.json(pageJson);
    }
});

//根据学号获取所有信息
router.get("/editStudent", async (req, resp) => {
    let { s_id } = req.query;
    try {
        let result = await new Stu_h1802Service().findByS_id(s_id);
        result.length == 1
            ? resp.render("stu_h1802/editStudent", { model: result[0] })
            : MessageBox.showAndBack("信息不存在,请刷新重试", resp);
    } catch (error) {
        MessageBox.showAndBack("服务器错误", resp);
    }
});

//修改学生信息
router.post("/doEditStudent", async (req, resp) => {
    try {
        let flag = await new Stu_h1802Service().editStudent(req.body);
        flag
            ? MessageBox.showAndRedirect("修改成功", "/stu_h1802/stuList", resp)
            : MessageBox.showAndBack("修改失败", resp);
    } catch (error) {
        MessageBox.showAndBack("服务器错误", resp);
    }
});

//退出登录
router.get("/logOut", (req, resp) => {
    //首先要清空session 和跳到登录页
    req.session.stuInfo = undefined;
    resp.redirect("/stu_h1802/login");
});

module.exports = router;