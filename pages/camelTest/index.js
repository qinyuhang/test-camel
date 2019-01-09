"use strict";

var pageConfig = {
  data: {
    keyWord: ''
  },
  onLoad: function onLoad(options) {
    
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
  onUnload: function onUnload() {},
  onPullDownRefresh: function onPullDownRefresh() {}
};
Page(pageConfig);