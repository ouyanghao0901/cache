/**
 * @name goosd_info表的数据库操作帮助类
 * 
 */

const BaseServices = require("./BaseServices");

/**
 * @name 继承BaseServices,传表名
 */
class Goods_infoService extends BaseServices {
    constructor() {
        super("goods_info");
    }
    /**
     * @name 首页
     */
    goodsList() {
        return new Promise((resolve, reject) => {
            let conn = super.getConn();
            let strSql1 = `SELECT type_name FROM goods_type `;
            let strSql2 = `SELECT goods_info.*,goods_type.type_name FROM goods_info,goods_type WHERE goods_info.type_id = goods_type.type_id`;
            conn.query(strSql1 + ';' + strSql2, [], (err, result) => {
                err ? reject(err) : resolve(result);
            });
            conn.end();
        });
    }

    //首页新方法
    // goodsType(){
    //     return new Promise((resolve,reject)=>{
    //         let conn = super.getConn();
    //         let strSql = "select * from goods_type";
    //         conn.query(strSql,[],(err,result)=>{
    //             err?reject(err):resolve(result);
    //         });
    //         conn.end();
    //     });
    // }


    // goods(s){
    //     return new Promise((resolve,reject)=>{
    //         let conn =super.getConn();
    //         let strSql = `select * from ${this.tableName} where type_id = ? limit 1`;
    //         conn.query(strSql,[s],(err,result)=>{
    //             err?reject(err):resolve(result);
    //         });
    //         conn.end();
    //     });
    // }








    goodsDetail(goods_id) {
        return new Promise((resolve, reject) => {
            let conn = super.getConn();
            let strSql1 = "SELECT * FROM goods_info WHERE goods_id = ?"; //基本信息
            let strSql2 = "SELECT goods_xinghao from goods_detail WHERE goods_id = ?"; //规格
            let strSql3 = "SELECT goods_fuwu FROM goods_fuwu WHERE goods_id = ?";     //服务
            let strSql4 = "SELECT goods_imgs FROM goods_imgs WHERE goods_id = ?";       //小图片
            conn.query(strSql1 + ";" + strSql2 + ";" + strSql3 + ";" + strSql4, [goods_id, goods_id, goods_id, goods_id], (err, result) => {
                
                err ? reject(err) : resolve(result);
            });
            conn.end();
        });
    }



    chazhaos(s){
        return new Promise((resolve,reject)=>{
            let conn=super.getConn();
            let strSql =`SELECT * FROM ${this.tableName} where goods_name like "%${s}%" or goods_miaoshu like "%${s}%"`;
            conn.query(strSql,[],(err,result)=>{
                err?reject(err):resolve(result);
            });
            conn.end();
        });
    }
}

module.exports = Goods_infoService;