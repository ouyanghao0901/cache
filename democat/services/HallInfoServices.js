/**
 * @name hall_info 数据表啊帮助类
 * @author 欧阳浩
 * @version 1.0
 */
const BaseServices = require("./BaseServices");

class HallInfoServices extends BaseServices {
    constructor() {
        super("hall_info");
    }

    /**
     * @name 获取hallList所有数据
     */
    hallList() {
        return new Promise((resolve, reject) => {
            let conn = super.getConn();
            let strSql = `select * from ${this.tableName}`;
            conn.query(strSql, [], (err, result) => {
                err ? reject(err) : resolve(result);
            });
            conn.end();
        });
    }

    /**
     * @name 要修改的id
     * @param {String} id 要查找数据的id
     * @returns {Promise} 返回异步操作
     */
    editHall(id) {
        return new Promise((resolve, reject) => {
            let conn = super.getConn();
            let strSql = `select * from ${this.tableName} where hall_id=?`;
            conn.query(strSql, [id], (err, result) => {
                err ? reject(err) : resolve(result);
            });
            conn.end();
        });
    }

    /**
     *
     * @param {Object} model  要修改的数据
     * @returns {Promise} 返回异步操作
     */
    doEditHall(model) {
        return new Promise((resolve, reject) => {
            let { hall_name, hall_seat, hall_type, hall_id } = model;
            let conn = super.getConn();
            let strSql = `update ${
                this.tableName
                } set hall_name=?,hall_seat=?,hall_type=? where hall_id=?`;
            conn.query(
                strSql,
                [hall_name, hall_seat, hall_type, hall_id],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        let flag = result.affectedRows > 0 ? true : false;
                        resolve(flag);
                    }
                }
            );
            conn.end();
        });
    }
/**
 * @name 删除影厅
 * @param {*} hall_id 
 */
    deleteEditHall(hall_id) {
        return new Promise((resolve, reject) => {
            let conn = super.getConn();
            let strSql = `delete from ${this.tableName} where hall_id=?`;
            conn.query(strSql, [hall_id], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    let flag = result.affectedRows > 0 ? true : false;
                    resolve(flag);
                }
            });
            conn.end();
        });
    }
    /**
     * @name 添加影厅
     * @param {*} model 
     */

    doAddHall(model) {
        return new Promise((resolve, reject) => {
            let values = Object.values(model);
            let conn = super.getConn();
            let strSql = super.createInsertSql(model);
            conn.query(strSql, values, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    let flag = result.affectedRows > 0 ? true : false;
                    resolve(flag);
                }
            });
            conn.end();
        });
    }
}

module.exports = HallInfoServices;
