/**
 * @name user路由
 * @author 欧阳浩
 */

const express = require("express");
const UserInfoService = require("../services/UserInfoService");
const MessageBox = require("../utils/MessageBox");

let router = express.Router();
let userInfoService = new UserInfoService();

//登录
router.get("/login", (req, resp) => {
    resp.render("userInfo/login");
});
//忘记密码
router.get("/noPwd", (req, resp) => {
    resp.render("userInfo/noPwd");
});
//注册
router.get("/zhuce", (req, resp) => {
    resp.render("userInfo/zhuce");
});
//验证登录
router.get("/checkLogin", async (req, resp) => {
    let result = await userInfoService.checkLogin(req.query);
    if (result.length == 1) {
        req.session.userInfo = result[0];
        result[0].role == "admin"
            ? MessageBox.showAndRedirect("登录成功", "/adminIndex", resp)
            : resp.send("你好用户");
    } else {
        MessageBox.showAndBack("账号或密码错误,请重试", resp);
    }
});

//管理员列表
router.get("/adminList", async (req, resp) => {
    try {
        let result = await userInfoService.adminList("admin");
        resp.render("userInfo/adminList", { adminList: result });
    } catch (error) {
        MessageBox.showAndBack("服务器错误", resp);
    }
});

//用户列表
router.get("/userList", async (req, resp) => {
    try {
        let result = await userInfoService.userList("admin");
        resp.render("userInfo/userList", { userList: result });
    } catch (error) {
        MessageBox.showAndBack("服务器错误", resp);
    }
});
//新增用户页面
router.get("/addUser", (req, resp) => {
    resp.render("userInfo/addUser");
});

//新增用户
router.get("/doAddUser", async (req, resp) => {
    try {
        let flag = await userInfoService.doAddUser(req.query);
        flag
            ? MessageBox.showAndRedirect("添加成功", "/userInfo/userList", resp)
            : MessageBox.showAndBack("添加失败", resp);
    } catch (error) {
        MessageBox.showAndBack("服务器错误", resp);
    }
});

//检测id时候存在
router.get("/checkAdminId", async (req, resp) => {
    let { admin_id } = req.query;
    try {
        let flag = await userInfoService.checkAdminId(admin_id);
        flag ? resp.send("yes") : resp.send("no");
    } catch (error) {
        resp.send("服务器错误");
    }
});

//修改信息页面
router.get("/editUser", async (req, resp) => {
    let { admin_id } = req.query;
    try {
        let result = await userInfoService.editUser(admin_id);
        resp.render("userInfo/editUser", { result });
    } catch (error) {
        resp.send("服务器错误");
    }
});

//保存编辑的用户信息
router.get("/doEditUser", async (req, resp) => {
    try {
        let { admin_id, admin_pwd, admin_name, admin_sex } = req.query;
        let flag = await userInfoService.doEditUser(
            admin_id,
            admin_pwd,
            admin_name,
            admin_sex
        );
        flag
            ? MessageBox.showAndRedirect("修改成功", "/userInfo/userList", resp)
            : MessageBox.showAndBack("修改失败", resp);
    } catch (error) {
        resp.send("服务器错误");
    }
});

//删除用户
router.get("/deleteUser", async (req, resp) => {
    try {
        let { admin_id } = req.query;
        let flag = await userInfoService.deleteUser(admin_id);
        flag ? resp.send("yes") : resp.send("no");
    } catch (error) {
        resp.send("服务器错误");
    }
});

//批量删除用户
router.get("/deleteAllUser", async (req, resp) => {
    let { str } = req.query;
    let adminArr = str.split("-");
    try {
        let flag = await userInfoService.deleteUserAll(adminArr);
        flag ? resp.send("yes") : resp.send("no");
    } catch (error) {
        resp.send("服务器错误");
    }
});

//修改密码页
router.get("/changePwd", (req, resp) => {
    let userInfo = req.session.userInfo;
    resp.render("userInfo/changePwd", userInfo);
});

//修改密码
router.get("/doChangePwd", async (req, resp) => {
    try {
        let { admin_id, admin_pwd } = req.query;
        let flag = await userInfoService.doChangePwd(admin_id, admin_pwd);
        flag
            ? MessageBox.showAndRedirect("修改成功", "/hallInfo/hallList", resp)
            : MessageBox.showAndBack("修改失败", resp);
    } catch (error) {
        MessageBox.showAndBack("服务器错误", resp);
    }
});

//注册
router.get("/doZhuce", async (req, resp) => {
    try {
        let { admin_name, admin_id, admin_pwd, admin_sex } = req.query;
        let flag = await userInfoService.doZhuce(
            admin_id,
            admin_pwd,
            admin_name,
            "user",
            admin_sex
        );
        flag
            ? MessageBox.showAndRedirect("注册成功", "/userInfo/login", resp)
            : MessageBox.showAndBack("注册失败", resp);
    } catch (error) {
        MessageBox.showAndBack("服务器错误", resp);
    }
});

router.get("/loginOut", (req, resp) => {
    req.session.userInfo = undefined;
    resp.redirect("/userInfo/login");
});
module.exports = router;
