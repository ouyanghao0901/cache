/**
 * @name 弹窗返回和弹窗跳转
 * @author 欧阳浩
 */


class MessageBox {
    /**
     * @name 弹窗返回
     * @param {String} msg 要显示的消息
     * @param {Object} resp  服务器对象
     */
    static showAndBack(msg, resp) {
        resp.send(`<script>alert("${msg}");history.back();</script>`);
    }
    /**
     * @name 弹窗并跳转
     * @param {String} msg 要显示的消息 
     * @param {String} url 要跳转的地址
     * @param {Object} resp 服务对象
     */
    static showAndRedirect(msg, url, resp) {
        resp.send(`<script>alert("${msg}");location.href="${url}";</script>`);
    }
}
module.exports = MessageBox;