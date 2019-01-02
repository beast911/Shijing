// pages/poem/poem.js
Page({

  /**
   * Page initial data
   */
  data: {
    poem: {},
    tabItems: [
      {
        id: "simple",
        text: "",
        selected: "active"
      },
      {
        id: "note",
        text: ""
      },
      {
        id: "analysis",
        text: ""
      }
    ],
    details: ""
  },

  loadDetails: function(e) {
    switch (e.currentTarget.id) {
      case "simple": 
        this.data.details = "Simple";
        break;
      case "analysis":
        this.data.details = "Analysis";
        break;
      case "note":
        this.data.details = "Note";
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