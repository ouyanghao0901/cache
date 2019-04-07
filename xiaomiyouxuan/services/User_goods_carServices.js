const BaseServices = require("./BaseServices");

class User_goods_carServices extends BaseServices {
    constructor() {
        super("user_goods_car");
    }
    /**
     * 
     * @param {Object} id  用户id 
     * @param {Array} arr 商品信息
     */
    addgoods(id, arr) {
        return new Promise((resolve, reject) => {
            let conn = super.getConn();
            let strSql = `INSERT INTO ${this.tableName} (user_id,goods_id,goods_img,goods_name,goods_price,goods_xinghao,goods_num) VALUES (${new Array(arr.length + 1).fill("?").toString()})`;
            
            let arr1=[];
            arr1.push(id);
            arr.forEach(function(item){
                arr1.push(item);
            });
            conn.query(strSql, arr1, (err, result) => {
                err?reject(err):resolve(result.affectedRows>0?true:false);
            });
            conn.end();
        });
    }
    /**
     * @name 根据id获取购物车商品
     * @param {String} id 
     */
    goods_car(id){
        return new Promise((resolve,reject)=>{
            let conn = super.getConn();
            let strSql = `SELECT * FROM user_goods_car WHERE user_id = ?`;
            conn.query(strSql,[id],(err,result)=>{
                err?reject(err):resolve(result);
            });
            conn.end();
        });
    }


    /**
     * @name 根据商品id删除数据库商品
     * @param {String} id 字符串
     */
    removeDoods(id){
        return new Promise((resolve,reject)=>{
            let conn = super.getConn();
            let strSql = `DELETE FROM ${this.tableName} WHERE id = ?`;
            conn.query(strSql,[id],(err,result)=>{
                err?reject(err):resolve(result.affectedRows>0?true:false);
            });
            conn.end();
        });
    }















}



module.exports = User_goods_carServices;

