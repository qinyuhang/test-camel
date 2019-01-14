"use strict";

var pageConfig = {
  data: {
    keyWord: ''
  },
  onLoad: function onLoad(options) {
    console.log('current, there should be 2 page stack, [pageA, pageB]')
    var currentPage = getCurrentPages();
    console.log('page B onLoad', JSON.stringify(currentPage.length));
  },
  handleSearchChange: function(e){
    console.log(e);
    this.setData({
      keyWord: e.detail.value
    })
  },
  go: function(){
    console.log(this.data.keyWord)
  },
  myevent: function(e){
    console.log(e)
  },
  
  onReady: function onReady() {},
  onShow: function onShow() {

  },
  onHide: function onHide() {},
  onUnload: function onUnload() {
    console.log('current, there should be 2 page stack, [pageA, pageB]')
    var currentPage = getCurrentPages();
    console.log('page B onUnload', JSON.stringify(currentPage.length));
  },
  onPullDownRefresh: function onPullDownRefresh() {}
};
Page(pageConfig);