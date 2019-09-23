wx.cloud.init();
wx.clearStorageSync();
wx.showLoading({
  title: 'Loading poems ...',
  mask: true
});

App({
  onLaunch: function () {
    // Triggered after the Mini Program starts
    wx.cloud.database().collection('shijing').get().then( res => {
      wx.hideLoading();
      this.poems = res.data;
    })
  }
})