Page({
  data: {
    tags: [
      {
        name: "减脂瘦身",
        icon: "fatloss"
      },
      {
        name: "增肌塑形",
        icon: "shaping"
      },
      {
        name: "早餐",
        icon: "breakfast"
      },
      {
        name: "午餐",
        icon: "launch"
      },
      {
        name: "晚餐",
        icon: "dinner"
      }
    ],
    foods: []
  },
  onLoad: function () {
    setTimeout(() => {
      this.setData({
        foods: MOCK_FOODS
      })
    })
  }
})

const MOCK_FOODS = [
  {
    "id": "1",
    "name": "轻体健康沙拉",
    "imgUrl": "https://img.yzcdn.cn/upload_files/2016/03/21/Fgk2IyTQWwNL2t7hnw5OvTP63tIp.jpg?imageView2/2/w/580/h/580/q/75/format/jpg",
    "kcal": 300,
    "tags": ["减脂瘦身", "午餐"]
  },
  {
    "id": "1",
    "name": "轻体健康沙拉",
    "imgUrl": "https://img.yzcdn.cn/upload_files/2016/03/21/Fgk2IyTQWwNL2t7hnw5OvTP63tIp.jpg?imageView2/2/w/580/h/580/q/75/format/jpg",
    "kcal": 300,
    "tags": ["减脂瘦身", "午餐"]
  },
  {
    "id": "1",
    "name": "轻体健康沙拉",
    "imgUrl": "https://img.yzcdn.cn/upload_files/2016/03/21/Fgk2IyTQWwNL2t7hnw5OvTP63tIp.jpg?imageView2/2/w/580/h/580/q/75/format/jpg",
    "kcal": 300,
    "tags": ["减脂瘦身", "午餐"]
  }
]
