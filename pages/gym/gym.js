Page({
  data: {
    imgUrls: [
      "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1701513648,1288985781&fm=26&gp=0.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536984849&di=c09d88ee9b2a1920e1a5754be70ca9c1&imgtype=jpg&er=1&src=http%3A%2F%2Fpic2.ooopic.com%2F12%2F58%2F70%2F48bOOOPIC52_1024.jpg"
    ],
    gyms: []
  },
  onLoad() {
    setTimeout(() => {
      this.setData({
        gyms: MOCK_GYMS
      })
    })
  }
})


const MOCK_GYMS = [
  {
    id: "1",
    name: "乐刻运动健身(城西银泰店)",
    logoUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537005055&di=7abfc8b95f03bcf62e9754bd3b3125cf&imgtype=jpg&er=1&src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Frecom%2F2017%2F05%2F03%2F149380884419645760.JPEG",
    category: "健身中心",
    rating: 5,
    address: {
      province: "浙江省",
      city: "杭州市",
      district: "西湖区"
    },
    distance: 713.781
  },
  {
    id: "2",
    name: "Reebok 1030 CrossFit",
    logoUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537005055&di=7abfc8b95f03bcf62e9754bd3b3125cf&imgtype=jpg&er=1&src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Frecom%2F2017%2F05%2F03%2F149380884419645760.JPEG",
    category: "健身中心",
    rating: 5,
    address: {
      province: "浙江省",
      city: "杭州市",
      district: "高新文教区"
    },
    distance: 3213.781
  }
]