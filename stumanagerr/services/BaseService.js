/**
 * @name 数据库增删改查语句帮助类
 */

const DBHelper = require("../utils/DBHelper");

class BaseService extends DBHelper {
    //接受Stu_h1802Services传过来的表名
    //子类拿父类
    constructor(tableName) {
        super();
        this.tableName = tableName;
    }

    /**
     * @name 根据模型对象自动创建新增的sql语句
     * @param {Object} model 模型对象
     * @returns {String} 返货创建好的SQL语句
     */
    createInsertSql(model) {
        let keys = Object.keys(model);
        let strSql = `insert into ${
            this.tableName
            } (${keys.toString()}) values (${new Array(keys.length)
                .fill("?")
                .toString()})`;
        return strSql;
    }

    selectAll() {
        let strSql = `select * from ${this.tableName}`;
        return strSql;
    }
}

module.exports = BaseService;
