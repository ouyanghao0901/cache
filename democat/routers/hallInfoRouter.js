const express = require("express");
const MessageBox = require("../utils/MessageBox");
const HallInfoServices = require("../services/HallInfoServices");

let router = express.Router();

let hallInfoServices = new HallInfoServices();
//影厅列表
router.get("/hallList", async (req, resp) => {
    try {
        let result = await hallInfoServices.hallList();
        resp.render("hallInfo/hallList", { hallList: result });
    } catch (error) {
        resp.send("服务器错误");
    }
});
//增加影厅
router.get("/addHall", (req, resp) => {
    resp.render("hallInfo/addHall");
});
//根据id获取影厅信息
router.get("/editHall", async (req, resp) => {
    try {
        let { hall_id } = req.query;
        let result = await hallInfoServices.editHall(hall_id);
        resp.render("hallInfo/editHall", { hallList: result[0] });
    } catch (error) {
        resp.send(error);
    }
});
//修改影厅信息
router.get("/doEditHall", async (req, resp) => {
    try {
        let flag = await hallInfoServices.doEditHall(req.query);
        flag
            ? MessageBox.showAndRedirect("修改成功", "/hallInfo/hallList", resp)
            : MessageBox.showAndBack("修改失败", resp);
    } catch (error) {
        MessageBox.showAndBack("服务器错误", resp);
    }
});

//删除影厅
router.get("/deleteEditHall", async (req, resp) => {
    try {
        let { hall_id } = req.query;
        let flag = await hallInfoServices.deleteEditHall(hall_id);
        flag ? resp.send("yes") : resp.send("no");
    } catch (error) {
        MessageBox.showAndBack("服务器错误", resp);
    }
});
//添加影厅
router.get("/doAddHall", async (req, resp) => {
    try {
        let flag = await hallInfoServices.doAddHall(req.query);
        flag
            ? MessageBox.showAndRedirect("影厅添加成功", "/hallInfo/hallList", resp)
            : MessageBox.showAndBack("添加失败", resp);
    } catch (error) {
        MessageBox.showAndBack("服务器错误", resp);
    }
});

module.exports = router;
