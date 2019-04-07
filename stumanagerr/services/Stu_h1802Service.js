/**
 * @name 数据表stu_h1802操作对象
 * @author 欧阳浩
 * @version 2.0
 * @requires BaseService
 * @class Stu_h1802Service
 * @description 2.0版本 增加promise 实现继承
 */

//Stu_h1802Service  继承   BaseService
//BaseService     继承     DBHelper

const BaseService = require("./BaseService"),
    ObjectHelper = require("../utils/ObjectHelper"),
    PageList = require("../model/PageList");

class Stu_h1802Service extends BaseService {
    constructor() {
        //实现继承后他一定要调用super()
        //将表明传到BaseService  子类拿父类
        super("stu_h1802");
    }

    /**
     * @name 登录检测
     * @param {Object}  学号和qq号
     * @returns {Promise}  异步操作
     */
    chenkLogin({ s_id, s_qq }) {
        return new Promise((resolve, reject) => {
            let conn = super.getConn();
            let strSql = `select * from ${this.tableName} where s_id=? and s_qq=?`;
            conn.query(strSql, [s_id, s_qq], (err, result) => {
                err ? reject(err) : resolve(result);
                conn.end();
            });
        });
    }

    /**
     * @name 检测学号是否存在
     * @param {String} s_id 学号
     */
    chenkSid(s_id) {
        return new Promise((resolve, reject) => {
            let conn = super.getConn();
            let strSql = `select * from ${this.tableName} where s_id=?`;
            conn.query(strSql, [s_id], (err, result) => {
                err ? reject(err) : resolve(result);
                conn.end();
            });
        });
    }

    /**
     * @name 获取学生数据表
     * @returns {Promise} 异步操作
     */
    // getAllList() {
    // return new Promise((resolve, reject) => {
    // let strSql = `select * from ${this.tableName} limit ?,?`;
    // let strCountSql = `select count(*) sumCount from ${this.tableName}`;
    // let conn = super.getConn();
    // conn.query(strSql + ";" + strCountSql, [(pageIndex - 1) * 5,5], (err, result) => {
    //     if (err) {
    //         reject(err);
    //     } else {
    //         let sum = result[1][0].sumCount;//总条数
    //         let data = reject[0];
    //         let pageList = new PageList(pageIndex, sum, data);
    //         resolve(pageList);
    //     }
    // });
    //     let strSql = super.selectAll();
    //     let conn = super.getConn();
    //     conn.query(strSql, [], (err, result) => {
    //         err ? reject(err) : resolve(result);
    //         conn.end();
    //     });
    // });
    // }

    /**
     * @name 新增学生
     * @param {Object} model
     * @returns {Promise} 返回异步操作
     */
    addStu(model) {
        return new Promise((resolve, reject) => {
            let values = Object.values(model);
            let conn = super.getConn();
            let insertSql = super.createInsertSql(model);
            conn.query(insertSql, values, (err, result) => {
                err ? reject(err) : resolve(result);
                conn.end();
            });
        });
    }

    /**
     * @name 根据参数查询分页信息
     * @param {Object} param 要查询的参数
     * @returns {Promise} 返回查询后的promise
     */
    queryByList({ s_id, s_name, s_sex }, pageIndex) {
        return new Promise((resolve, reject) => {
            let conn = super.getConn();
            //查询sql
            let strSql = `select * from ${this.tableName} where 1=1`;
            //计数sql
            let strCountSql = `select count(*) sumCount from ${
                this.tableName
                } where 1=1`;
            //公共条件sql
            let paramSql = "";
            if (!ObjectHelper.isNullOrUndefined(s_id)) {
                paramSql += ` and s_id like "%${s_id}%"`;
            }
            if (!ObjectHelper.isNullOrUndefined(s_name)) {
                paramSql += ` and s_name like "%${s_name}%"`;
            }
            if (!ObjectHelper.isNullOrUndefined(s_sex)) {
                paramSql += ` and s_sex = "${s_sex}"`;
            }
            strSql += paramSql + " limit ?,?"; //拼接分页的sql
            strCountSql += paramSql; //拼接计数的sql
            conn.query(
                strSql + ";" + strCountSql,
                [(pageIndex - 1) * 10, 10],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        //result是一个分页信息和总条数的结果
                        let sumCount = result[1][0].sumCount; //取到总的信息条数
                        let pageList = new PageList(pageIndex, sumCount, result[0]);
                        resolve(pageList); //返回分页信息的对象
                    }
                    conn.end();
                }
            );
        });
    }

    /**
     * @name 根据学号删除记录
     * @param {String} s_id 要删除的学号
     * @returns {Boolean} 返回操作结果
     */
    deleteById(s_id) {
        return new Promise((resolve, reject) => {
            let conn = super.getConn();
            let deleteSql = `delete from ${this.tableName} where s_id=?`;
            conn.query(deleteSql, [s_id], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    let flag = result.affectedRows > 0 ? true : false;
                    resolve(flag);
                }
                conn.end();
            });
        });
    }

    /**
     * @name 批量删除
     * @param {Array} s_idArr 套批量删除的学号的数组
     * @returns {Promise} 异步操作
     */
    deleteByChecked(s_idArr) {
        return new Promise((resolve, reject) => {
            let conn = super.getConn();
            let strSql = `delete from ${this.tableName} where s_id in (${new Array(
                s_idArr.length
            )
                .fill("?")
                .toString()})`;
            conn.query(strSql, s_idArr, (err, result) => {
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
     * @name 根据传过来的学号查询学生所有信息
     * @param {String} s_id 要编辑信息的学号
     * @returns {Promise} 返回异步操作
     */

    findByS_id(s_id) {
        return new Promise((resolve, reject) => {
            let conn = super.getConn();
            let strSql = `select * from ${this.tableName} where s_id=?`;
            conn.query(strSql, [s_id], (err, result) => {
                err ? reject(err) : resolve(result);
                conn.end();
            });
        });
    }

    /**
     * @name 修改学生信息
     * @param {Object} model 要修改的对象
     * @returns {Promise} 异步操作
     */

    editStudent(model) {
        return new Promise((resolve, reject) => {
            let conn = super.getConn();
            let {
                s_name,
                s_sex,
                s_age,
                s_qq,
                s_school,
                s_major,
                s_education,
                s_id
            } = model;
            let updateSql = `update ${
                this.tableName
                } set s_name=?,s_sex=?,s_age=?,s_qq=?,s_school=?,s_major=?,s_education=? where s_id=?`;
            conn.query(
                updateSql,
                [s_name, s_sex, s_age, s_qq, s_school, s_major, s_education, s_id],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        let flag = result.affectedRows > 0 ? true : false;
                        resolve(flag);
                    }
                    conn.end();
                }
            );
        });
    }
}
module.exports = Stu_h1802Service;
