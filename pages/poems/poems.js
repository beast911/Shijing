// pages/poems/poems.js
Page({

  /**
   * Page initial data
   */
  data: {
    chapter: {}
  },

  loadPoem: function(e) {
    const splitTitle = this.data.chapter.title.split('·'); 
    const titleBuilt = splitTitle[0] + ' · ' + splitTitle[1] + ' · ' + this.data.chapter.poems[e.currentTarget.id].title;
    this.data.chapter.poems[e.currentTarget.id].title = titleBuilt;
    wx.setStorageSync('poem', this.data.chapter.poems[e.currentTarget.id]);
    wx.navigateTo({
      url: '../poem/poem?id=' + e.currentTarget.id,
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const chapterFromStorage = wx.getStorageSync('chapter');
    const splitChapterTitle = chapterFromStorage.title.split('·');
    chapterFromStorage.title = splitChapterTitle[0] + ' · ' + splitChapterTitle[1];
    this.setData({
      chapter: chapterFromStorage
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})