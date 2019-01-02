// pages/contents/contents.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    books: app.poems.poems,
    selectedTab: 0
  },

  loadPoems: function(e) {
    wx.clearStorageSync();
    wx.setStorageSync('chapter', this.data.books[this.data.selectedTab].chapters[e.currentTarget.id]);
    wx.navigateTo({
      url: '../poems/poems?id=' + e.currentTarget.id,
    })
  },

  loadChapters: function (event) {
    this.data.books[event.currentTarget.id].selected = "active";
    this.data.selectedTab = event.currentTarget.id;
    this.data.books.forEach(function(book, index){
      if (index !== parseInt(event.currentTarget.id)) {
        if (book.selected) {
          delete book.selected;
        }
      }
    });
    this.setData(this.data);
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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