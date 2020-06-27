
  //声明所有图形
  var MainMapchart;
  var ech = {
    //地图
    MainMap: {
    //   tooltip: {
    //     trigger: 'item',
    //     // position:[10,10],
    //     backgroundColor: 'rgba(0,0,0,0.5)',
    //     padding: [20],
    //     // borderColor:'',
    //     formatter: function (params) {
    //       console.log(params)
    //       var tipHtml = '<div class="tip"><div class="tip-hd"><img src="' + params.data.constructionPic + '"/></div><div  class="tip-bd"><p class="tip-name">' + params.name + '</p><p class="tip-cont">' + params.data.address + '</p></div></div>';
    //       return tipHtml
    //     }
    //   },
      visualMap: {
        min: 0,
        max: 500,
        show: false,
        splitNumber: 5,
        inRange: {
          color: ['#26BCF8', '#26BCF8', '#26BCF8'].reverse()
        },
        textStyle: {
          color: '#fff'
        }
      },
      
      geo: [
        //   {
        //   show: true,
        //   map: '上海',
        //   roam: true,
        //   itemStyle: {
        //     normal: {
        //       areaColor: '#000',
        //       borderColor: '#13518a',
        //       borderWidth: 0,
        //       shadowOffsetX: -2,
        //       shadowOffsetY: 2,
        //     },
        //     emphasis: {
        //       show: false,
        //       areaColor: 'raba(0,0,0,0)',
        //       itemStyle: {}
        //     },
  
        //   },
        //   left: 0,
        //   right: 0,
        //   top: -20,
        //   bottom: -10,
        //   zlevel: 0
        // },
        {
          show: true,
          map: '上海',
          label: {
            normal: {
              show: true,
              color: 'rgba(37,188,248,0.5)'
            },
            emphasis: {
              show: true,
              color: '#bb82b1'
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
              borderColor: '#26BCF8',
              borderWidth: 1,
            },
  
            emphasis: {
              areaColor: '#070f29',
              shadowColor: '#fff',
              itemStyle: {}
            }
          },
          left: 3,
          right: -3,
          top: -30,
          bottom: 0,
          zlevel: 1
        }],
      series: [
        {
          symbolSize: 20,
          // label: {
          //   normal: {
          //     formatter: '{b}',
          //     position: 'right',
          //     color: 'red',
          //     show: true
          //   },
          //   emphasis: {
          //     show: false,
  
          //   }
          // },
          hoverAnimation: true,
          //不同数据设置不同的颜色
          itemStyle: {
            normal: {
              color: function (e) {
                var data = e.data;
                // console.log(e)
                if (data.constructionLevel == 3) {
                  return 'green';
                } else if (data.constructionLevel == 2) {
                  return 'orange';
                } else if (data.constructionLevel == 1) {
                  return 'red';
                }
              }
            }
          },
          // name: 'light',
          type: 'effectScatter',
          rippleEffect: {
            scale: 4.5
          },
          coordinateSystem: 'geo',
          data: [],
          zlevel: 3
        },
      ]
    },
  };
  
  var s = {
    MainMap: function (obj) {
      var convertData = function (data) {
        // var res = [];
        // for (var i = 0; i < data.length; i++) {
        //   data[i].name = data[i].constructionName;
        //   data[i].value = data[i].longitudeAndLatitudeArray;
        // }
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
        console.log(convertData(obj))
        option.series[0].data = convertData(obj);
        // option.series[1].data = convertData(obj);
        MainMapchart.setOption(option)
      })
  


    },
  };
  
 
  //图形响应大小
  window.addEventListener("resize", (e) => {
    FunnelChart.resize();
    TransverseBarChart.resize();
    TransverseBar2Chart.resize();
    BarChart.resize();
    MainMapchart.resize();
  
  });
  
  