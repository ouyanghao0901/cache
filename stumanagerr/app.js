/**
 * @name 程序入口文件
 * @author 欧阳浩
 * @requires express
 */

//const可批量定义
const express = require("express"),
    http = require("http"),
    template = require("express-art-template"),
    path = require("path"),
    menuConfig = require("./config/menuConfig"),
    //POST请求插件
    bodyParser = require("body-parser"),
    //导入路由
    Stu_h1802Router = require("./routers/Stu_h1802Router"),
    session = require("express-session");

let app = express();

//加载session中间件
app.use(
    session({
        secret: "666",
        saveUninitialized: false,
        resave: true
    })
);

app.engine("html", template);
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "html");
app.use("/public", express.static(path.join(__dirname, "./public")));
//下面两个配置POST请求
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//添加拦截器
app.use((req, resp, next) => {
    //所有请求都会经过拦截器
    //判断是否登录
    if (req.session.stuInfo != undefined) {
        next();
    } else {
        if (req.path == "/stu_h1802/login" || req.path == "/stu_h1802/checkLogin") {
            next();
        } else {
            resp.redirect("/stu_h1802/login");
        }
    }
});

//设置路由
app.use("/stu_h1802", Stu_h1802Router);

//直接跳转到登录页
app.get("/", (req, resp) => {
    resp.redirect("stu_h1802/login");
});

//首页
app.get("/adminIndex", (req, resp) => {
    let stuInfo = req.session.stuInfo;
    resp.render("admin/adminIndex", { menuConfig, stuInfo });
});

//创建服务器 并启动监听
http.createServer(app).listen(8884, () => {
    console.log("服务器启动成功");
});
