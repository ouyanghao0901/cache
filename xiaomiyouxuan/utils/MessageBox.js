/**
 * @name 弹窗帮助
 * @author 欧阳浩
 * @version 1.0
 */
class MessageBox {
    /**
     *
     * @param {String} msg 要弹出的消息
     * @param {Response} resp response
     */
    static showBack(msg, resp) {
        resp.send(`<script>alert("${msg}");history.back();</script>`);
    }
    /**
     *
     * @param {string} msg 要弹出的消息
     * @param {URL} url  要跳转的地址
     * @param {Response} resp  response
     */
    static showGo(msg, url, resp) {
        resp.send(`<script>alert("${msg}");location.href="${url}";</script>`);
    }
}
module.exports = MessageBox;
