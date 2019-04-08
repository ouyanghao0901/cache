/**
 * @name 弹窗返回和跳转
 * @author 欧阳浩
 */

class MessageBox {
    /**
     *
     * @param {String} msg 要弹出的信息
     * @param {Object} resp 服务器对象
     */
    static showAndBack(msg, resp) {
        resp.send(`<script>alert("${msg}");history.back();</script>`);
    }
    /**
     *
     * @param {String} msg 弹出的信息
     * @param {URL} url 跳转的地址
     * @param {Object} resp 服务器对象
     */
    static showAndRedirect(msg, url, resp) {
        resp.send(`<script>alert("${msg}");location.href="${url}";</script>`);
    }
}

module.exports = MessageBox;
