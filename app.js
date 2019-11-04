wx.cloud.init();
wx.clearStorageSync();
wx.showLoading({
  title: 'Loading poems ...',
  mask: true
});

App({
  onLaunch: function (options) {
    // Triggered after the Mini Program starts
    if (options.path.endsWith('landing')) {
      wx.cloud.database().collection('shijing').get().then(res => {
        wx.hideLoading();
        this.poems = res.data;
        setTimeout(() => {
          wx.navigateTo({
            url: '../home/home',
          })
        }, 1500);
      })
    }
  }
})