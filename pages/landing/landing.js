const API = require('../../api');

Page({
  onLoad(options) {
    const next = options.redirect || "/pages/gym/gym";
    wx.login({
      success(resp) {
        const result = API.login(resp.code);
        wx.setStorageSync('token', result.token);
        wx.reLaunch({
          url: next
        });
      }
    });
  }
});