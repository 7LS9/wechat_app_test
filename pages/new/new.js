// pages/new/new.js

//获取应用实例
const app = getApp()

Page({
   /**
   * 页面的初始数据
   */
  data: {
    list: '',
    word: '',
    message:''
  },
  getMessage: function () {
    var that = this;
    wx.request({
      url: 'http://localhost:1234/getUser',
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)//打印到控制台
        that.setData({
          list: res.data,
          //res代表success函数的事件对，data是收到的数据
        })
      }
    })
  }
})
