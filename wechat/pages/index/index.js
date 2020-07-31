Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  },
  methods: {
    onFocus(){
      wx.redirectTo({
        url: '/pages/search/index'
      })
    }
  }
})
