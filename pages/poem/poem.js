// pages/poem/poem.js
const app = getApp();
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
        this.data.details = this.data.simple;
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

  setInitialData: function(options, poems) {
    const poemFromStorage = poems[options.book].chapters[options.chpt].poems[options.poem];
    const splitChapterTitle = poems[options.book].chapters[options.chpt].title.split('·');
    let chptTitle = splitChapterTitle[0];
    let poemTitle = poemFromStorage.title;

    if (splitChapterTitle[1]) {
      chptTitle = splitChapterTitle[0].trim() + ' · ' + splitChapterTitle[1].trim();
    }
    let title = chptTitle + ' · ' + poemTitle;
    this.setData({
      poem: poemFromStorage,
      details: "Note",
      title: title
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    if(app.poems == undefined) {
      // case when coming directly from mini program share
      wx.cloud.database().collection('shijing').get().then(res => {
        wx.hideLoading();
        getApp().poems = res.data;
        this.setInitialData(options, res.data);
      })
    } else {
        this.setInitialData(options, app.poems);
    }
  }
})