/**
 * @name 数据库链接帮助类
 * @author 欧阳浩
 *
 *
 */
const mysql = require("mysql");

class DBHelper {
    getConn() {
        let conn = mysql.createConnection({
            host: "127.0.0.1",
            port: 3306,
            user: "root",
            password: "123456",
            database: "democat",
            multipleStatements: true
        });
        conn.connect();
        return conn;
    }
}

module.exports = DBHelper;
