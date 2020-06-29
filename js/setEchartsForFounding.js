var data = [
  {
    name: '黄浦区',
    value: 70
  },
  {
    name: '徐汇区',
    value: 75
  },
  {
    name: '长宁区',
    value: 80
  },
  {
    name: '静安区',
    value: 85
  },
  {
    name: '普陀区',
    value: 90
  },
  {
    name: '闸北区',
    value: 95
  },
  {
    name: '虹口区',
    value: 100
  },
  {
    name: '杨浦区',
    value: 105
  },
  {
    name: '闵行区',
    value: 110
  }, {
    name: '宝山区',
    value: 115
  }, {
    name: '嘉定区',
    value: 120
  }, {
    name: '浦东新区',
    value: 100
  }, {
    name: '金山区',
    value: 77
  }, {
    name: '松江区',
    value: 90
  }, {
    name: '青浦区',
    value: 85
  }, {
    name: '奉贤区',
    value: 81
  },
  {
    name: '崇明区',
    value: 81
  }];
//声明所有图形
var MainMapchart;
var ech = {
  //地图
  MainMap: {
    tooltip: {
      trigger: 'item',
      // position:[10,10],
      backgroundColor: 'rgba(0,0,0,0.5)',
      padding: [20],
      // borderColor:'',
      formatter: function (params) {
        // console.log(params)
        if( params.data.taskName!=undefined){
          var tipHtml = '<div class="tip"><p class="tip-name">' + params.data.taskName + '</p><p class="tip-cont">' + params.data.stateName + '</p></div>';
          return tipHtml
        }else{
          return ''
        }
      }
    },
    visualMap: { //颜色的设置  dataRange
      show: false,
      x: 'left',
      y: 'center',
      seriesIndex: [1],
      min: 70,
      max: 120,
      text: ['高', '低'], // 文本，默认为数值文本
      textStyle: {
        color: 'red'
      },
      inRange: {
        color: ['#f7eaec', '#a6cefd', '#ffcdd1', '#febcaa', '#c1ebfb', '#c7ffd7', '#fbcff2']
      }
    },
    
    geo: [
      {
        show: true,
        map: '上海',
        label: {
          normal: {
            show: true,
            color: 'rgba(201, 20, 36, 0.75)'
          },
          emphasis: {
            show: true,
            color: 'rgba(201, 20, 36, 1)'
          }
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [{
                offset: 0,
                color: 'rgba(12, 26, 71, 1)' // 0% 处的颜色
              }, {
                offset: 1,
                color: 'rgba(9, 21, 56, 1)' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            },
            borderColor: '#666',
            borderWidth: 1,
          },

          emphasis: {
            areaColor: 'rgba(201, 20, 36, 0.75)',
            shadowColor: '#fff',
            itemStyle: {}
          }
        },
        data:data,
        left: 3,
        right: -3,
        top: -30,
        bottom: 100,
        zlevel: 1
      },
    ],
    series: [
      {
        symbolSize: 45,
        // label: {
        //   normal: {
        //     formatter: '{b}',
        //     position: 'right',
        //     color: 'red',
        //     show: false
        //   },
        //   emphasis: {
        //     show: false,

        //   }
        // },
        hoverAnimation: true,
        //不同数据设置不同的颜色
        // name: 'light',
        type: 'scatter',
        symbol: 'image://data:image/png;base64,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',
        rippleEffect: {
          scale: 4.5
        },
        coordinateSystem: 'geo',
        data: [],
        zlevel: 3
      },
      {
        type: 'map',
        mapType: '上海',
        left: 3,
        right: -3,
        top: -30,
        bottom: 0,
        // zoom: 1.2,
        roam: true, //是否开启鼠标缩放和平移漫游

        itemStyle: { //地图区域的多边形 图形样式
          // color: ['rgb(11,85,142)', 'rgb(13,106,177)'],
          normal: { //是图形在默认状态下的样式
            label: {
              show: true, //是否显示标签
              textStyle: {
                color: '#333'
              },
            },
            borderWidth: 1,
            borderColor: '#28729f',
            areaColor: '#29b4b7',
          },
          // emphasis: { //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
          //   label: {
          //     show: false,
          //     textStyle: {
          //       color: '#333'
          //     },
          //   },
          //   borderColor: '#28729f',
          //   areaColor: '#9ea9f7',
          // }
        },
        geoIndex:[0],
        data:data
      },
    ]
  },
};

var s = {

  MainMap: function (obj) {
    var convertData = function (data) {
      // var res = [];
      var stateName = '';
      for (var i = 0; i < data.length; i++) {
        /**
         *  任务状态 0.待领取 1.待勘察 2.待审核 3.待试验 4.现场安全措施 5.实验工作开始 6待复核7 完成
         */

        if (data[i].state == 0) stateName = '待领取';
        if (data[i].state == 1) stateName = '待勘察';
        if (data[i].state == 2) stateName = '待审核';
        if (data[i].state == 3) stateName = '待试验';
        if (data[i].state == 4) stateName = '现场安全措施';
        if (data[i].state == 5) stateName = '实验工作开始';
        if (data[i].state == 6) stateName = '待复核';
        if (data[i].state == 7) stateName = '完成';
        data[i].name = data[i].circuitName;
        data[i].value = data[i].latitudeAndLongitudeArray;
        data[i].stateName = stateName;

      }
      return data;
    };
    // 基于准备好的dom，初始化echarts实例
    MainMapchart = echarts.init(document.getElementById('MainMap'));
    var option = ech.MainMap; // 指定图表的类型
    //  option.series.data = obj;
    //   //图例数值
    // obj.forEach(function (x, index) {
    //   x.name = x.name + ' ' + x.value;
    //   option.legend.data.push(x.name);
    //   x.value = parseInt(x.value)
    // });
    $.get('province/310000.json', function (geoJson) {
      echarts.registerMap('上海', geoJson);
      option.series[0].data = convertData(obj);
      // option.series[1].data = convertData(obj);
      MainMapchart.setOption(option)
    })





    // start();








    //捕捉georoam事件，使下层的geo随着上层的geo一起缩放拖曳
    // MainMapchart.on('georoam', function (params) {
    //   var option = MainMapchart.getOption();//获得option对象
    //   if (params.zoom != null && params.zoom != undefined) { //捕捉到缩放时
    //     option.geo[1].zoom = option.geo[0].zoom;//下层geo的缩放等级跟着上层的geo一起改变
    //     option.geo[1].center = option.geo[0].center;//下层的geo的中心位置随着上层geo一起改变
    //   } else {//捕捉到拖曳时
    //     option.geo[1].center = option.geo[0].center;//下层的geo的中心位置随着上层geo一起改变
    //   }
    //   MainMapchart.setOption(option);//设置option
    // })



  },
};



//循环播放悬浮框
//    var TransverseBarIndex = 0; //播放所在下标
//    var TransverseBarTime = setInterval(function () {
//     TransverseBarChart.dispatchAction({
//        type: 'showTip',
//        seriesIndex: 0,
//        dataIndex: TransverseBarIndex
//      });
//      TransverseBarIndex++;
//      if (TransverseBarIndex > data.length) {
//        TransverseBarIndex = 0;
//      }
//    }, 1000);

//    var TransverseBar2Index = 0; //播放所在下标
//    var TransverseBar2Time = setInterval(function () {
//     TransverseBar2Chart.dispatchAction({
//        type: 'showTip',
//        seriesIndex: 0,
//        dataIndex: TransverseBar2Index
//      });
//      TransverseBar2Index++;
//      if (TransverseBar2Index > data.length) {
//        TransverseBar2Index = 0;
//      }
//    }, 1000);






//图形响应大小
window.addEventListener("resize", (e) => {
  // TransverseBarChart.resize();
  // TransverseBar2Chart.resize();
  MainMapchart.resize();
});


// //声明所有图形
// var MainMapchart;
// var ech = {
//   //地图
//   MainMap: {
//     //   tooltip: {
//     //     trigger: 'item',
//     //     // position:[10,10],
//     //     backgroundColor: 'rgba(0,0,0,0.5)',
//     //     padding: [20],
//     //     // borderColor:'',
//     //     formatter: function (params) {
//     //       console.log(params)
//     //       var tipHtml = '<div class="tip"><div class="tip-hd"><img src="' + params.data.constructionPic + '"/></div><div  class="tip-bd"><p class="tip-name">' + params.name + '</p><p class="tip-cont">' + params.data.address + '</p></div></div>';
//     //       return tipHtml
//     //     }
//     //   },
//     visualMap: { //颜色的设置  dataRange
//       show: true,
//       x: 'left',
//       y: 'center',
//       seriesIndex: [0],
//       min: 70,
//       max: 90,
//       text: ['高', '低'], // 文本，默认为数值文本
//       textStyle: {
//         color: 'red'
//       },
//       inRange: {
//         color: ['#5cd2c3', '#419bd3', '#7a95d2', '#5dcbdc', '#838dcd', '#5de9b1', '#5dc6df', '#5db8ea', '#2bbc90', '#5dc4e3']
//       }
//     },
//     geo: [
//       // {
//       //   map: '上海',
//       //   left: '350',
//       //   itemStyle: { //地图区域的多边形 图形样式
//       //     color: '#fff',
//       //     normal: { //是图形在默认状态下的样式
//       //       label: {
//       //         show: true, //是否显示标签
//       //         textStyle: {
//       //           color: '#ff0'
//       //         },
//       //       },

//       //       borderWidth: 1,
//       //       borderColor: 'rgba(37,124,169)',
//       //       shadowColor: '#e8e8e8',
//       //       shadowOffsetY: 15,
//       //       shadowOffsetX: 8,

//       //     },
//       //   }
//       // },
//       // {
//       //   show: true,
//       //   map: '上海',
//       //   label: {
//       //     normal: {
//       //       show: true,
//       //       color: 'rgba(37,188,248,0.5)'
//       //     },
//       //     emphasis: {
//       //       show: true,
//       //       color: '#bb82b1'
//       //     }
//       //   },
//       //   roam: true,
//       //   // itemStyle: {
//       //   //   color: 'rgba(10, 133, 171, 0.4)',
//       //   //   opacity: 1,
//       //   //   borderWidth: 0.4,
//       //   //   borderColor: '#00FFF8' // 地图边配色
//       //   // },
//       //   // viewControl: {
//       //   //   distance: 90,
//       //   //   alpha: 50,
//       //   //   beta: 0,
//       //   //   center: [-4, -4, 0]
//       //   // },
//       //   // shading: 'lambert',
//       //   // light: { // 光照阴影
//       //   //   main: {
//       //   //     color: '#fff', // 光照颜色
//       //   //     intensity: 1, // 光照强度
//       //   //     shadowQuality: 'height',
//       //   //     shadow: false, // 是否显示阴影
//       //   //     alpha: 45,
//       //   //     beta: 45
//       //   //   },
//       //   //   ambient: {
//       //   //     intensity: 0.7
//       //   //   }
//       //   // },
//       //   left: 3,
//       //   right: -3,
//       //   top: -30,
//       //   bottom: 0,
//       //   zlevel: 1
//       // }
//     ],
//     series: [
//       {
//         type: 'map',
//         mapType: '上海',
//         left: 3,
//         right: -3,
//         top: -30,
//         bottom: 0,
//         // zoom: 1.2,
//         roam: true, //是否开启鼠标缩放和平移漫游

//         itemStyle: { //地图区域的多边形 图形样式
//           // color: ['rgb(11,85,142)', 'rgb(13,106,177)'],
//           normal: { //是图形在默认状态下的样式
//             label: {
//               show: true, //是否显示标签
//               textStyle: {
//                 color: '#333'
//               },
//             },
//             borderWidth: 1,
//             borderColor: '#28729f',
//             areaColor: '#29b4b7',
//           },
//           emphasis: { //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
//             label: {
//               show: false,
//               textStyle: {
//                 color: '#333'
//               },
//             },
//             borderColor: '#28729f',
//             areaColor: '#9ea9f7',
//           }
//         },

//         data: []
//       },
//       {
//         symbolSize: 20,
//         // label: {
//         //   normal: {
//         //     formatter: '{b}',
//         //     position: 'right',
//         //     color: 'red',
//         //     show: true
//         //   },
//         //   emphasis: {
//         //     show: false,

//         //   }
//         // },
//         hoverAnimation: true,
//         //不同数据设置不同的颜色
//         itemStyle: {
//           normal: {
//             color: function (e) {
//               var data = e.data;
//               // console.log(e)
//               if (data.constructionLevel == 3) {
//                 return 'green';
//               } else if (data.constructionLevel == 2) {
//                 return 'orange';
//               } else if (data.constructionLevel == 1) {
//                 return 'red';
//               }
//             }
//           }
//         },
//         // name: 'light',
//         type: 'effectScatter',
//         rippleEffect: {
//           scale: 4.5
//         },
//         coordinateSystem: 'geo',
//         data: [],
//         zlevel: 3
//       },
//     ]
//   },
// };

// var s = {
//   MainMap: function (obj) {
//     var geoCoordMap = {
//       '黄浦区': [121.490317, 31.222771],
//       '徐汇区': [121.43752, 31.179973],
//       '长宁区': [121.4222, 31.218123],
//       '静安区': [121.448224, 31.229003],
//       '普陀区': [121.392499, 31.241701],
//       '闸北区': [121.465689, 31.25318],
//       '虹口区': [121.491832, 31.26097],
//       '杨浦区': [121.522797, 31.270755],
//       '闵行区': [121.375972, 31.111658],
//       '宝山区': [121.489934, 31.398896],
//       '嘉定区': [121.250333, 31.383524],
//       '浦东新区': [121.7795171, 31.13357039],
//       '金山区': [121.330736, 30.724697],
//       '松江区': [121.223543, 31.03047],
//       '青浦区': [121.113021, 31.151209],
//       '奉贤区': [121.458472, 30.912345],
//       '崇明县': [121.397516, 31.626946]
//     };
//     var data = [
//       {
//         name: '黄浦区',
//         value: 85
//       },
//       {
//         name: '徐汇区',
//         value: 85
//       },
//       {
//         name: '长宁区',
//         value: 85
//       },
//       {
//         name: '静安区',
//         value: 85
//       },
//       {
//         name: '普陀区',
//         value: 85
//       },
//       {
//         name: '闸北区',
//         value: 85
//       },
//       {
//         name: '虹口区',
//         value: 85
//       },
//       {
//         name: '杨浦区',
//         value: 85
//       },
//       {
//         name: '闵行区',
//         value: 70
//       }, {
//         name: '宝山区',
//         value: 75
//       }, {
//         name: '嘉定区',
//         value: 80
//       }, {
//         name: '浦东新区',
//         value: 78
//       }, {
//         name: '金山区',
//         value: 77
//       }, {
//         name: '松江区',
//         value: 90
//       }, {
//         name: '青浦区',
//         value: 85
//       }, {
//         name: '奉贤区',
//         value: 81
//       }];
//     var convertData = function (data) {
//       var res = [];
//       for (var i = 0; i < data.length; i++) {
//         var geoCoord = geoCoordMap[data[i].name];
//         if (geoCoord) {
//           res.push({
//             name: data[i].name,
//             value: geoCoord.concat(data[i].value)
//           });
//         }
//       }
//       return res;
//     };
//     // 基于准备好的dom，初始化echarts实例
//     MainMapchart = echarts.init(document.getElementById('MainMap'));
//     var option = ech.MainMap; // 指定图表的类型
//     //  option.series.data = obj;
//     //   //图例数值
//     // obj.forEach(function (x, index) {
//     //   x.name = x.name + ' ' + x.value;
//     //   option.legend.data.push(x.name);
//     //   x.value = parseInt(x.value)
//     // });
//     $.get('province/310000.json', function (geoJson) {
//       echarts.registerMap('上海', geoJson);
//       option.series[0].data = data;
//       option.series[1].data = convertData(data);
//       console.log(geoJson,option.series[0].data, option.series[1].data)
//       // option.series[1].data = convertData(obj);
//       MainMapchart.setOption(option)
//     })



//   },
// };


//图形响应大小
window.addEventListener("resize", (e) => {
  MainMapchart.resize();

});

