

/**
 * @name 对象帮助工具
 * @author 欧阳浩
 */


class ObjectHelper {
    /**
     * @name 验证某个值我是否为空
     * @param {Object} v 要验证的值
     * @returns {Boolean} true为空 false不为空
     * 
     */
    static isNullOrUndefined(v) {
        if (v != "" && v != null && v != undefined) {
            return false;
        } else {
            return true;
        }
    }
}

module.exports = ObjectHelper;