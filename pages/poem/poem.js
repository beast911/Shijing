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
        this.data.details = "Note";
        this.data.tabItems["note"].selected = "active";
        break;
    };
    this.setData(this.data);
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const poemFromStorage = wx.getStorageSync('poem');
    this.setData({
      poem: poemFromStorage,
      details: "Simple"
    })
  }
})