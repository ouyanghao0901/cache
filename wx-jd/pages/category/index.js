const interfaces = require("../../utils/url.config.js")
// pages/category/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navLeftItem: [],
        navRightItem: [],
        curIndex: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        const self = this
        wx.showLoading()
        wx.request({
            url: interfaces.productions,
            header: {
                "content-type": "application/json"
            },
            success(res) {
                self.setData({
                    navLeftItem: res.data.navLeftItems,
                    navRightItem: res.data.navRightItems,
                })
                wx.hideLoading()
            }
        })
    },

    swichRightTab(e) {
        this.setData({
            curIndex: e.currentTarget.dataset.index
        })
    },
    showListView(e) {
        let txt = e.currentTarget.dataset.txt
        //导航跳转
        wx.navigateTo({
            url: '/pages/list/index?title=' + txt,
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})