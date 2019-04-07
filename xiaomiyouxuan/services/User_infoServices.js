/**
 * @name 用户信息表帮助类
 * @author欧阳浩
 * @version 1.0
 */
const BaseServices = require("./BaseServices");

class User_infoServices extends BaseServices {
    constructor() {
        super("user_info");
    }
    /**
     * @name 验证登陆
     * @param {Object} model
     */
    checkLogin(model) {
        return new Promise((resolve, reject) => {
            let conn = super.getConn();
            let strSql = `select * from ${
                this.tableName
                } where user_id=? and user_pwd=?`;
            conn.query(strSql, Object.values(model), (err, result) => {
                err ? reject(err) : resolve(result);
            });
            conn.end();
        });
    }
    /**
     * @name 注册账号
     * @param {Object} model
     */
    doZhuce(model) {
        return new Promise((resolve, reject) => {
            let conn = super.getConn();
            let strSql = `INSERT INTO ${
                this.tableName
                } (user_id,user_pwd) VALUES (?,?) `;
            conn.query(strSql, [model.user_id, model.user_pwd], (err, result) => {
                err ? reject(err) : resolve(result.affectedRows > 0 ? true : false);
            });
            conn.end();
        });
    }

    /**
     * @name 验证ID
     * @param {Object} model
     */
    checkID(model) {
        return new Promise((resolve, reject) => {
            let conn = super.getConn();
            let id = model.user_id;
            let strSql = `SELECT * FROM ${this.tableName} WHERE user_id = ?`;
            conn.query(strSql, [id], (err, result) => {
                err ? reject(err) : resolve(result);
            });
            conn.end();
        });
    }


    
}

module.exports = User_infoServices;
