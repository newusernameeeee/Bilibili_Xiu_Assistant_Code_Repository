// pages/houduanTab/houduanTab.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    list: '',
    word: '',
    message:''

  },
// houduanButton1的网络请求
  houduanButton1: function () {
    var that = this;
    wx.request({
      url: 'http://localhost:443/getUser',
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)//打印到控制台
        var list = res.data.list;
        if (list == null) {
          var toastText = '数据获取失败';
          wx.showToast({
            title: toastText,
            icon: '',
            duration: 2000
          });
        } else {
          that.setData({
            list: list
          })
        }
      }
    })
  },
  //获取输入框的内容
  houduanTab_input: function (e) {
    this.setData({
      word: e.detail.value
    })
  },
  // houduanButton2的网络请求
  houduanButton2: function () {
    var that = this;
    wx.request({
      url: 'http://localhost:443/getWord',
      data:{
        word: that.data.word
      },
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)//打印到控制台
        var message = res.data.message;
        if (message == null) {
          var toastText = '数据获取失败';
          wx.showToast({
            title: toastText,
            icon: '',
            duration: 2000
          });
        } else {
          that.setData({
            message: message
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})