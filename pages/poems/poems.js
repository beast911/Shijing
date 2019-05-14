// pages/poems/poems.js
Page({

  /**
   * Page initial data
   */
  data: {
    chapter: {}
  },

  loadPoem: function(e) {
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
    chapterFromStorage.title = splitChapterTitle[0];
    if (splitChapterTitle[1]) {
      chapterFromStorage.title = splitChapterTitle[0] + ' · ' + splitChapterTitle[1];
    }
    this.setData({
      chapter: chapterFromStorage
    })
  }
})