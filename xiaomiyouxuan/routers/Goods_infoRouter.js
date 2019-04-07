
/**
 * @name goods_info表的路由操作
 * @author 欧阳浩
 */


const express = require("express");
const Goods_infoServices = require("../services/Goods_infoServices");
const MessageBox = require("../utils/MessageBox");

let router = express.Router();
let goods_infoServices = new Goods_infoServices();



//首页
router.get("/index", async (req, resp) => {
    try {
        let userinfo = req.session.userinfo;
        let result = await goods_infoServices.goodsList();
         console.log(result);          //得到的是两个数组   没报错
        resp.render("goods_info/index", { result,userinfo });
    } catch (error) {
        MessageBox.showBack("服务器错误",resp);
    }
});

//首页新方法
// router.get("/index", async (req, resp) => {
//     try {
//         // let userinfo = req.session.userinfo;
//         var result = await goods_infoServices.goodsType();
//         var result1 = [];
//         result.forEach(async (item) => {
//             try {
//                 let type_id = item.type_id;
//                 let resu = await goods_infoServices.goods(type_id);
//                 result1.push(resu);
//                 if(result1.length==result.length){
//                     console.log(result1);
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         });
//     } catch (error) {
//         console.log(error);
//     }
// });


//商品详情页
router.get("/goodsDetail", async (req, resp) => {
    try {
        let userinfo = req.session.userinfo;
        let { goods_id } = req.query;  //可以获取到id  没有报错
        //console.log(req.query);
        let result = await goods_infoServices.goodsDetail(goods_id);
        resp.render("goods_info/goodsDetail", { result, userinfo });
    } catch (error) {
        MessageBox.showBack("服务器错误", resp);
    }
});
//立即购买
router.get("/payNow", (req, resp) => {
    let items = req.query;
    let userinfo = req.session.userinfo;
    userinfo == undefined ? resp.redirect("/user_info/login") : resp.render("goods_info/payNow", { items, userinfo });
});
//退出登录
router.get("/logOut", (req, resp) => {
    req.session.userinfo = undefined;
    resp.redirect("goods_info/index");
});

//更多
router.get("/goodsMore", (req, resp) => {
    resp.send("更多");
});
//查找
router.get("/chazhaos", async (req, resp) => {
    try {
        let tj = req.query.tiaojian;
        let result = await goods_infoServices.chazhaos(tj);
        resp.render("goods_info/chazhaos", { result, tj });
    } catch (error) {
        MessageBox.showBack("服务器错误", resp);
    }
});





module.exports = router;