const util = require("./utils/util")

App({
  onLaunch() {
    util.promisify(wx.getSystemInfo)()
      .then(result => {
        this.globalData.systemInfo = result
      })
  },
  globalData: {
    systemInfo: null
  }
})