const express = require("express");
const MessageBox = require("../utils/MessageBox");
const User_goods_carServices = require("../services/User_goods_carServices");
let user_goods_carServices = new User_goods_carServices();

let router = express.Router();

//加入购物车
router.get("/addgoods", async (req, resp) => {
  try {
    if (req.session.userinfo == undefined) {
      resp.send("noLogin");
    } else {
      let goodsArr = req.query.goodsinfo.split("-");
      let userid = req.session.userinfo.user_id;
      let flag = await user_goods_carServices.addgoods(userid, goodsArr);
      flag ? resp.send("ok") : resp.send("no");
    }
  } catch (error) {
    MessageBox.showBack("服务器错误");
  }
});

//购物车
router.get("/goods_car", async (req, resp) => {
  try {
    if (req.session.userinfo == undefined) {
      resp.redirect("/user_info/login");
    }
    let userinfo = req.session.userinfo;
    let id = userinfo.user_id;
    let result =await user_goods_carServices.goods_car(id);
    console.log(result);
    resp.render("user_goods_car/goods_car",{result,userinfo});
  } catch (error) {
    MessageBox.showBack("服务器错误", resp);
  }
});


router.get("/removeDoods",async (req,resp)=>{
  try {
    let id = req.query.id.del;
    let flag= await user_goods_carServices.removeDoods(id);
    flag?resp.send("ok"):resp.send("no");
  } catch (error) {
    MessageBox.showBack("服务器错误",resp);
  }
});

module.exports = router;
