// pages/poem/poem.js
Page({

  /**
   * Page initial data
   */
  data: {
    poem: {},
    tabItems: {
      "simple": {
        text: ""
      },
      "note": {
        text: "",
        selected: "active"
      },
      "analysis": {
        text: ""
      }
  },
    details: ""
  },

  onShareAppMessage: function () {
    return {
      title: '',
      success: function (res) {
        // Forwarding successful
      },
      fail: function (res) {
        // Forwarding failed
      }
    }
  },

  loadDetails: function(e) {
    for (let prop in this.data.tabItems) {
      if (this.data.tabItems.hasOwnProperty(prop)) {
        if (e.currentTarget.id !== prop) {
          delete this.data.tabItems[prop].selected
        }
      }
    }
    switch (e.currentTarget.id) {
      // pick the category from data loaded
      case "simple": 
        this.data.details = "Simple";
        this.data.tabItems["simple"].selected = "active";
        break;
      case "analysis":
        this.data.details = this.data.poem.analysis;
        this.data.tabItems["analysis"].selected = "active";
        break;
      case "note":
        this.data.details = this.data.poem.note ? this.data.poem.note : "NOTE";
        this.data.tabItems["note"].selected = "active";
        break;
    };
    this.setData(this.data);
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let poemFromStorage = wx.getStorageSync('poem');
    const chapterFromStorage = wx.getStorageSync('chapter');
    const splitChapterTitle = chapterFromStorage.title.split('·');
    chapterFromStorage.title = splitChapterTitle[0];
    if (splitChapterTitle[1]) {
      chapterFromStorage.title = splitChapterTitle[0] + ' · ' + splitChapterTitle[1];
    }
    poemFromStorage.title = chapterFromStorage.title + ' · ' + poemFromStorage.title;
    this.setData({
      poem: poemFromStorage,
      details: "Note"
    })
  }
})