const initialData = require('./resources/data.js');
wx.cloud.init();
wx.clearStorageSync();
wx.showLoading({
  title: 'Loading poems ...',
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