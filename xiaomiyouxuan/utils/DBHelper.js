/**
 * @name 数据库链接帮助类
 * @author 欧阳浩
 * @version 1.0
 */

const mysql = require("mysql");
class DBHelper {
    getConn() {
        let conn = mysql.createConnection({
            host: "127.0.0.1",
            post: 3306,
            user: "root",
            password: "123456",
            database: "xiaomiyoupin",
            multipleStatements: true
        });
        conn.connect();
        return conn;
    }
}
module.exports = DBHelper;
