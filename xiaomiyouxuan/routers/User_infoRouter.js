const express = require("express");
const User_infoServices = require("../services/User_infoServices");
const multer = require("multer");
const path = require("path");
const MessageBox = require("../utils/MessageBox");
let user_infoServices = new User_infoServices();
let router = express.Router();
let upload = multer({
    dest:path.join(__dirname,"./public/images/userphoto")
  });

//登陆页
router.get("/login", (req, resp) => {
    req.session.userinfo = undefined;
    resp.render("user_info/login");
});
//验证登陆
router.get("/checkLogin", async (req, resp) => {
    try {
        let result = await user_infoServices.checkLogin(req.query);
        if (result.length == 1) {
            req.session.userinfo = result[0];
            resp.redirect("/goods_info/index");
        } else {
            MessageBox.showBack("账号或密码错误", resp);
        }
    } catch (error) {
        MessageBox.showBack("服务器错误", resp);
    }
});
//注册页
router.get("/zhuce", (req, resp) => {
    resp.render("user_info/zhuce");
});
//注册账号
router.get("/doZhuce", async (req, resp) => {
    try {
        let flag = await user_infoServices.doZhuce(req.query);
        flag
            ? MessageBox.showGo("注册成功", "/user_info/login", resp)
            : MessageBox.showBack("注册失败", resp);
    } catch (error) {
        MessageBox.showBack("服务器错误", resp);
    }
});

//账号验证
router.get("/checkID",async (req,resp)=>{
    try {
        let result = await user_infoServices.checkID(req.query);
        result.length>0?resp.send("1"):resp.send("0");
    } catch (error) {
        MessageBox.showBack("服务器错误",resp);
    }
});

//修改信息页
router.get("/changeinfo",(req,resp)=>{
    let userinfo = req.session.userinfo;
    resp.render("user_info/changeinfo",{userinfo});
});


router.post("/upImg",upload.single("userPhoto"),(req,resp)=>{
    let file = req.file;
    console.log(file);
});

module.exports = router;
