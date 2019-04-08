/**
 * @name 程序入口文件
 * @author 欧阳浩
 */
const express = require("express");
const template = require("express-art-template");
const path = require("path");
const http = require("http");
const userInfoRouter = require("./routers/userInfoRouter");
const hallInfoRouter = require("./routers/hallInfoRouter");
const session = require("express-session");

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
//设置静态路径
app.use("/public", express.static(path.join(__dirname, "./public")));

//添加拦截器
app.use((req, resp, next) => {
  if (req.session.userInfo != undefined) {
    next();
  } else {
    if (
      req.path == "/userInfo/login" ||
      req.path == "/userInfo/checkLogin" ||
      req.path == "/userInfo/noPwd" ||
      req.path == "/userInfo/zhuce" ||
      req.path == "userInfo/doZhuce"
    ) {
      next();
    } else {
      resp.redirect("userInfo/login");
    }
  }
});

//设置路由
app.use("/userInfo", userInfoRouter);
app.use("/hallInfo", hallInfoRouter);

app.get("/", (req, resp) => {
  resp.render("userInfo/login");
});

app.get("/adminIndex", (req, resp) => {
  let userInfo = req.session.userInfo;
  resp.render("admin/adminIndex", userInfo);
});

http.createServer(app).listen(8889, () => {
  console.log("服务器启动成功!!!");
});
