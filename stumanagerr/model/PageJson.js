/**
 * @name 前后台的Ajax的JSON传输
 * 
 */

class PageJson {
    /**
     * 
     * @param {String} status success代表成功 error代表请求失败
     * @param {*} msg 请求返回的消息
     * @param {*} data 请求返回的数据
     */
    constructor(status, msg, data) {
        this.status = status;
        this.msg = msg; 
        this.data = data || {};
    }
}
module.exports = PageJson;