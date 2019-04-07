/**
 * @name 封装的页面对象,里面有页码,
 * 
 * @author 欧阳浩
 * 
 */

class PageList {
    /**
     * @name 返回到页面的数据
     * @param {Number} pageIndex 代表当前页
     * @param {Number} sumCount 共多少条数据
     * @param {Array} listData 查询结果
     */
    constructor(pageIndex,sumCount, listData) {
        this.pageIndex = pageIndex; //当前页
        this.sumCount = sumCount; //记录总条数
        this.listData = listData; //内容
        this.pageSize = 10;
        this.pageCount = Math.ceil(this.sumCount / this.pageSize);  //计算要分成多少页
    }
}

module.exports = PageList;