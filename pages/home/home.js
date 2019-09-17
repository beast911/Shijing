// pages/contents/contents.js
const app = getApp();
Page({

  onLoad: function(op) {
    this.data = {};
    this.data.books = app.poems;
    this.data.selectedTab = 0;
    this.setData(this.data);
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
  }
})