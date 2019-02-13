// pages/home/home.js
Page({

  /**
   * Page initial data
   */
  data: {},

  /**
   * Open the main content page
   */

  openContents: function() {
    wx.navigateTo({
      url: '../home/home',
    })
  }
})