// pages/poems/poems.js
Page({

  /**
   * Page initial data
   */
  data: {
    chapter: {}
  },

  loadPoem: function(e) {
    wx.navigateTo({
      url: '../poem/poem?poem=' + e.currentTarget.id + '&chptTitle=' + this.data.chapter.title + '&chpt=' + this.data.chptId + '&book=' + this.data.book
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const app = getApp();
    const chapter = app.poems[options.book].chapters[options.chpt];
    const splitChapterTitle = chapter.title.split('·');
    chapter.title = splitChapterTitle[0];
    if (splitChapterTitle[1]) {
      chapter.title = splitChapterTitle[0] + ' · ' + splitChapterTitle[1];
    }
    this.setData({
      chapter: chapter,
      book: options.book,
      chptId: options.chpt
    })
  }
})