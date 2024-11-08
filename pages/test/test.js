Page({
  data: {
    swipeArr: ['/images/banner/menubanner1.jpg', '/images/banner/menubanner2.jpg', '/images/banner/menubanner3.jpg'],
    menuArr: [{
        "id": 0,
        "title": "标题一",
        "subArr": [{
            "imgSrc": "/images/menu/1-1.jpg",
            "imgDesc": "图一"
          },
          {
            "imgSrc": "/images/menu/1-1.jpg",
            "imgDesc": "图二"
          },
          {
            "imgSrc": "/images/menu/1-1.jpg",
            "imgDesc": "图三"
          },
        ]
      },
      {
        "id": 1,
        "title": "标题二",
        "subArr": [{
            "imgSrc": "/images/menu/1-2.jpg",
            "imgDesc": "图一"
          },
          {
            "imgSrc": "/images/menu/1-2.jpg",
            "imgDesc": "图二"
          },
          {
            "imgSrc": "/images/menu/1-2.jpg",
            "imgDesc": "图三"
          }
        ]
      },
      {
        "id": 2,
        "title": "标题三",
        "subArr": [{
            "imgSrc": "/images/menu/1-3.jpg",
            "imgDesc": "图一"
          },
          {
            "imgSrc": "/images/menu/1-3.jpg",
            "imgDesc": "图二"
          },
          {
            "imgSrc": "/images/menu/1-3.jpg",
            "imgDesc": "图三"
          }
        ]
      },
      {
        "id": 3,
        "title": "标题四",
        "subArr": [{
            "imgSrc": "/images/menu/1-1.jpg",
            "imgDesc": "图一"
          },
          {
            "imgSrc": "/images/menu/1-2.jpg",
            "imgDesc": "图二"
          },
          {
            "imgSrc": "/images/menu/1-3.jpg",
            "imgDesc": "图三"
          }
        ]
      },
      {
        "id": 4,
        "title": "标题五",
        "subArr": [{
            "imgSrc": "/images/menu/1-3.jpg",
            "imgDesc": "图一"
          },
          {
            "imgSrc": "/images/menu/1-2.jpg",
            "imgDesc": "图二"
          },
          {
            "imgSrc": "/images/menu/1-1.jpg",
            "imgDesc": "图三"
          }
        ]
      }
    ],
    // 
    leftId: "left0",
    rightId: "right0",
    lifeActiveNum: 0,
    heightArr: []
  },
  leftClick(e) {
    this.setData({
      lifeActiveNum: e.target.dataset.myid,
      leftId: "left" + e.target.dataset.myid,
      rightId: "right" + e.target.dataset.myid
    })

  },
  // vue中的mounted也没有说白分白的组件熏染完成
  onReady() {
    let _this = this
    setTimeout(() => {
      let initArr = [0]; //初始数组
      let initNum = 0; //初始数值
      const query = wx.createSelectorQuery()
      query.selectAll('.rightblock').boundingClientRect()
      query.selectViewport().scrollOffset()
      query.exec(function (res) {
        console.log(res[0]);
        res[0].map(val => {
          initNum += val.height; //实现高度的累加
          initArr.push(initNum) //初始数值加进数组中
        })
        console.log(initArr); //拿到每一个height  存起来
        _this.setData({
          heightArr: initArr
        })
      })
    }, 300)
  },
  // 右边滚动事件
  rightScrollTop(e){
    let st=e.detail.scrollTop;
    let myarr=this.data.heightArr;
    for(let i=0;i<myarr.length;i++){
      if(st>=myarr[i]&&st<myarr[i+1]-10){
        this.setData({
          leftId:"left"+i,
          lifeActiveNum:i
        })
        return;
      }

    }
  } 

})