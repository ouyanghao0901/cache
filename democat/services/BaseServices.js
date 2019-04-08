/**
 * @name 数据库语句帮助类
 * @author 欧阳浩
 */

const DBHelper = require("../utils/DBHelper");

class BaseServices extends DBHelper {
    constructor(tableName) {
        super();
        this.tableName = tableName;
    }

    /**
     * @name 生成插入语句
     * @param {Object} model 要生成插入语句的对象
     * @returns 返回生成好的插入语句
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

    /**
     * 没有条件的查询语句
     */
    createSelectSql() {
        let strSql = `select * from ${this.tableName}`;
        return strSql;
    }
}

module.exports = BaseServices;
