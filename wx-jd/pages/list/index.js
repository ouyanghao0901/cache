const interfaces = require("../../utils/url.config.js")
// pages/list/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        prolist: [],
        page: 1,
        size: 5,
        noData: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        wx.showLoading()
        wx.setNavigationBarTitle({
            title: options.title,
        })
        const self = this
        wx.request({
            url: interfaces.productionsList,
            success(res) {
                self.setData({
                    prolist: res.data
                })
                wx.hideLoading()
            }
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
        //显示加载状态
        wx.showNavigationBarLoading()
        this.setData({
            page: 1
        })
        const self = this;
        wx.request({
            url: interfaces.productionsList,
            success(res) {
                self.setData({
                    prolist: res.data
                })
                wx.stopPullDownRefresh()
                wx.hideNavigationBarLoading()
            }
        })
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {
        //首先停止下拉刷新
        wx.stopPullDownRefresh()

        wx.showNavigationBarLoading()

        const prolist = this.data.prolist;
        let page = this.data.page;
        this.setData({
            page: ++page
        })
        const self = this
        wx.request({
            url: interfaces.productionsList + '/' + self.data.page + '/' + self.data.size,
            success(res) {
                // if(res.data.length===0){
                //     self.setData({
                //         noData:true
                //     })
                // }else{
                //     res.data.forEach(item=>{
                //         prolist.push(item)
                //     }) 
                // }
                res.data.length === 0 ? self.setData({
                    noData: true
                }) : res.data.forEach(item => prolist.push(item))
                setTimeout(() => {
                        self.setData({
                            noData: false
                        })
                    }, 3000),
                    self.setData({
                        prolist
                    })
                wx.hideNavigationBarLoading()
            }
        })
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})