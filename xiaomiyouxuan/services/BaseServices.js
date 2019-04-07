/**
 * @name sql语句帮助类
 * @author 欧阳浩
 */

const DBHelper = require("../utils/DBHelper");

class BaseServices extends DBHelper{
/**
 * @param {String} tableName 
 */
    constructor(tableName){
        super();
        this.tableName=tableName;
    }


    
    /**
     * @returns 返回没有条件的sql查询语句
     */
    getSelectAllSql(){
        let sql =`select * from ${this.tableName}`;
        return sql;
    }
}

module.exports=BaseServices;

