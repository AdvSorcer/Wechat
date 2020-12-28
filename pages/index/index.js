//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World!',
    userid: 123
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow : function(){
  },
  clickMe: function() {
    this.setData({ motto: "You Click Me" })
  },
  onLoad: function () {

  },

})
