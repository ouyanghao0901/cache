/**
 * @name 程序入口文件
 * @author 欧阳浩
 * @version 1.0
 */
const express = require("express");
const template = require("express-art-template");
const http = require("http");
const path = require("path");
const Goods_infoRouter = require("./routers/Goods_infoRouter");
const User_infoRouter = require("./routers/User_infoRouter");
const User_goods_carRouter = require("./routers/User_goods_carRouter");
const Goods_infoServices = require("./services/Goods_infoServices");
const bodyParser = require("body-parser");
const session = require("express-session");
const MessageBox = require("./utils/MessageBox");
// const multer = require("multer");
let goods_infoServices = new Goods_infoServices();
let app = express();
//session中间件
app.use(
  session({
    secret: "666",
    resave: true,
    saveUninitialized: false,
  })
);
app.engine("html", template);
app.set("view engine", "html");
app.set("views", path.join(__dirname, "./views"));
app.use("/public", express.static(path.join(__dirname, "./public")));
//配置body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/goods_info", Goods_infoRouter);
app.use("/user_info", User_infoRouter);
app.use("/user_goods_car", User_goods_carRouter);
app.get("/", async (req, resp) => {
  try {
    let result = await goods_infoServices.goodsList();
    resp.render("goods_info/index", { result });
  } catch (error) {
    MessageBox.showBack("服务器错误",resp);
  }
});

http.createServer(app).listen(8886, () => {
  console.log("服务器启动成功");
});
