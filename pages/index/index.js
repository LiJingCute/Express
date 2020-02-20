//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imageList: [{ pic: "https://636c-cloud-912718-1257892962.tcb.qcloud.la/images2/ad.jpg?sign=6c1c406cdf1201e0565109538c43f493&t=1542775780" },
    { pic: "https://636c-cloud-912718-1257892962.tcb.qcloud.la/images2/a22.jpg?sign=7052fea5df9db31e671f55d073d3a059&t=1542775807" },
    { pic: "https://636c-cloud-912718-1257892962.tcb.qcloud.la/images2/a3.jpg?sign=4089fa08789d318b21cdcd363425aeb3&t=1542775829" }],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
