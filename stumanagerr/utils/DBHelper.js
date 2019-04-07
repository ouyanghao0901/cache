/**
 * @name 数据库操作对象
 * @author 欧阳浩
 * @version 1.0
 * @requires mysql
 */

const mysql = require("mysql");

class DBHelper {
    getConn() {
        let conn = mysql.createConnection({
            "host": "127.0.0.1",
            "port": 3306,
            "user": "root",
            "password": "123456",
            "database": "studentmanager",
            //开启外挂模式  允许执行多条sql语句
            multipleStatements: true   
        });
        conn.connect();
        return conn;
    }
}

module.exports = DBHelper;