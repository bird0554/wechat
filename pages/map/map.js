// map.js
Page({
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        // this.mapCtx.moveToLocation()
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation();
    this.mapCtx.getCenterLocation({
      success: function (res) {
        // this.mapCtx.moveToLocation()
        console.log(res.longitude)
        console.log(res.latitude)
      }
    });
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 0,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude:39.10229,
        longitude: 116.3345211,
      }, {
        latitude: 39.00229,
        longitude: 116.3345211,
      }]
    })
  }
})