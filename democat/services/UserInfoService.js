/**
 * @name user_info 数据表操作帮助类
 * @author 欧阳浩
 * @version 1.0
 */
const BaseServices = require("../services/BaseServices");
class UserInfoService extends BaseServices {
    constructor() {
        super("admin_info");
    }

    /**
     * @name 检测登录
     * @param {Object} id和密码
     * @returns {Promise} 异步操作
     *
     */
    checkLogin({ admin_id, admin_pwd }) {
        return new Promise((resolve, reject) => {
            let conn = super.getConn();
            let strSql = `select * from ${
                this.tableName
                } where admin_id=? and admin_pwd=?`;
            conn.query(strSql, [admin_id, admin_pwd], (err, result) => {
                err ? reject(err) : resolve(result);
            });
            conn.end();
        });
    }
    /**
     * @name 管理员列表
     * @param {String} s role 管理或普通用户
     * @returns {Promise} 异步操作
     */
    adminList(s) {
        return new Promise((resolve, reject) => {
            let conn = super.getConn();
            let strSql = `select * from ${this.tableName} where role =?`;
            conn.query(strSql, [s], (err, result) => {
                err ? reject(err) : resolve(result);
                conn.end();
            });
        });
    }

    /**
     * @name 用户列表
     * @param {Object} s 用户角色 管理或普通用户
     * @returns {Promise} 异步操作
     */
    userList(s) {
        return new Promise((resolve, reject) => {
            let conn = super.getConn();
            let strSql = `select * from ${this.tableName} where role !=?`;
            conn.query(strSql, [s], (err, result) => {
                err ? reject(err) : resolve(result);
                conn.end();
            });
        });
    }

    /**
     * @name 新增用户
     * @param {Object} s 新增的信息对象
     * @returns {Promise} 异步操作
     */
    doAddUser(s) {
        return new Promise((resolve, reject) => {
            let values = Object.values(s);
            let conn = super.getConn();
            let strSql = super.createInsertSql(s);
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

    /**
     * @name 检测学号时候存在
     * @param {Object} id 要检测是否存在的id
     * @returns {Promise} 返回异步操作
     */

    checkAdminId(id) {
        return new Promise((resolve, reject) => {
            let conn = super.getConn();
            let strSql = `select * from ${this.tableName} where admin_id=?`;
            conn.query(strSql, [id], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    let flag = result.length > 0 ? true : false;
                    resolve(flag);
                }
            });
            conn.end();
        });
    }

    /**
     * @name 获取要编辑用户的信息
     * @param {Object} id 要编辑的ID
     * @returns {Promise} 返回异步操作
     */

    //编辑用户信息
    editUser(id) {
        return new Promise((resolve, reject) => {
            let conn = super.getConn();
            let strSql = `select * from ${this.tableName} where admin_id=?`;
            conn.query(strSql, [id], (err, result) => {
                err ? reject(err) : resolve(result);
            });
            conn.end();
        });
    }

    /**
     * @name 修改用户信息
     * @param {*} admin_id
     * @param {*} admin_pwd
     * @param {*} admin_name
     * @param {*} admin_sex
     * @returns {Promise} 异步操作
     */
    doEditUser(admin_id, admin_pwd, admin_name, admin_sex) {
        return new Promise((resolve, reject) => {
            let conn = super.getConn();
            let strSql = `update ${
                this.tableName
                } set admin_pwd=?,admin_name=?,role=?,admin_sex=? where admin_id=? `;
            conn.query(
                strSql,
                [admin_pwd, admin_name, "", admin_sex, admin_id],
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
     * @name 删除用户
     * @param {String} admin_id 要删除到的用户id
     * @returns {Promise} 异步操作
     */
    deleteUser(admin_id) {
        return new Promise((resolve, reject) => {
            let conn = super.getConn();
            let strSql = `delete from ${this.tableName} where admin_id=?`;
            conn.query(strSql, [admin_id], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    var flag = result.affectedRows > 0 ? true : false;
                    resolve(flag);
                }
            });
            conn.end();
        });
    }

    /**
     * @name 批量删除
     * @param {Array} idArr 要删除的id的数组
     * @returns {Promise} 返回异步操作
     */
    deleteUserAll(idArr) {
        return new Promise((resolve, reject) => {
            let conn = super.getConn();
            let strSql = `delete from ${
                this.tableName
                } where admin_id in (${new Array(idArr.length).fill("?")})`;
            conn.query(strSql, idArr, (err, result) => {
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
     * @name 修改密码
     * @param {String} id
     * @param {String} pwd
     *
     */
    doChangePwd(id, pwd) {
        return new Promise((resolve, reject) => {
            let conn = super.getConn();
            let strSql = `update ${this.tableName} set admin_pwd=? where admin_id=?`;
            conn.query(strSql, [pwd, id], (err, result) => {
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
     * @name 注册
     * @param {*} a
     * @param {*} b
     * @param {*} c
     * @param {*} d
     * @param {*} e
     * @returns {Promise} 返回异步操作
     */
    doZhuce(a, b, c, d, e) {
        return new Promise((resolve, reject) => {
            let conn = super.getConn();
            let strSql = `insert into ${
                this.tableName
                } (admin_id,admin_pwd,admin_name,role,admin_sex) values (?,?,?,?,?)`;
            conn.query(strSql, [a, b, c, d, e], (err, result) => {
                if (err) {
                    console.log(err);
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

module.exports = UserInfoService;
