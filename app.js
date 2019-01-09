"use strict";

var appConfig = {
  onLaunch: function onLaunch(options) {  },
  globalData: {
  },
  onShow: function onShow(options) {},
  onHide: function onHide() {},
  onError: function onError(msg) {
    console.log(msg);
  },
  onPageNotFound: function onPageNotFound() {}
};
App(appConfig);