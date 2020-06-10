
//漏斗图渐变色定义
var FunnelColor = [new echarts.graphic.LinearGradient(
    1, 0, 0, 1,
    [
        { offset: 1, color: '#9912FF' },
        { offset: 0, color: '#9727FF' }
    ]
), new echarts.graphic.LinearGradient(
    1, 0, 0, 1,
    [
        { offset: 1, color: '#19479D' },
        { offset: 0, color: '#0E68E9' }
    ]
), new echarts.graphic.LinearGradient(
    1, 0, 0, 1,
    [
        { offset: 1, color: '#F1AB02' },
        { offset: 0, color: '#C2AE11' }
    ]
), new echarts.graphic.LinearGradient(
    1, 0, 0, 1,
    [
        { offset: 1, color: '#15AA29' },
        { offset: 0, color: '#269209' }
    ]
), new echarts.graphic.LinearGradient(
    1, 0, 0, 1,
    [
        { offset: 1, color: '#02F1BA' },
        { offset: 0, color: '#2184E4' }
    ]
)];

//横向柱状图
var BlueToPink = new echarts.graphic.LinearGradient(
    1, 0, 0, 1,
    [
        { offset: 1, color: '#54b2db' },
        { offset: 0, color: '#f77395' }
    ]
);
//横向柱状图
var TransverseBarColor = new echarts.graphic.LinearGradient(
    1, 0, 0, 1,
    [
        { offset: 1, color: '#00D2FF' },
        { offset: 0, color: '#FB7293' }
    ]
);
var TransverseBarColor2 = new echarts.graphic.LinearGradient(
    1, 0, 0, 1,
    [
        { offset: 0, color: '#2772EB' },
        { offset: 1, color: '#02F1BA' }
    ]
);

//柱状图的阴影设置
var data = [95.6, 91.4, 97.2, 91.3];
var yMax = 100;
var dataShadow = [];
for (var i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
}

//声明所有图形
var FunnelChart, TransverseBarChart, BarChart, TransverseBar2Chart, MainMapchart;
var ech = {
    //漏斗图设计
    Funnel: {//['#931FFF', '#1749A4', '#DCAC08', '#18A523','#07E1C0']
        color: FunnelColor,
        // title: {
        //   text: '运维效能漏斗图',
        //   left: '30px',
        //   top: '30px',
        //   textStyle: {
        //     color: '#25BCF8',
        //     fontSize: '12'
        //   },
        // },
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0,0,0,0.5)',
            formatter: "{a} <br/>{b}  {c}%"

        },
        toolbox: {
            feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
            }
        },
        // legend: {
        //     data: ['展现','点击','访问','咨询','订单']
        // },
        series: [
            {
                name: '运维效能',
                type: 'funnel',
                left: '10%',
                bottom: '15%',
                width: '80%',
                maxSize: '80%',
                label: {
                    // position: 'inside',
                    formatter: '{c}%',
                    color: '#25BCF8'
                },
                itemStyle: {
                    opacity: 0.5,
                    // borderColor: '#fff',
                    borderWidth: 0
                },
                // emphasis: {
                //     label: {
                //         position: 'inside',
                //         formatter: '{b}实际: {c}%'
                //     }
                // },
                data: [
                    { value: 8, name: '' },
                    { value: 10, name: '' },
                    { value: 18, name: '' },
                    { value: 25, name: '' },
                    { value: 36, name: '' },
                ]
            }
        ]
    },
    //横向柱状图
    EchaertsTotalBar: {
        color: BlueToPink,
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0,0,0,0.5)',
            formatter: "{a} <br/>{b} : {c}%"
        },
        grid: {
            top: '10%',
            left: '10%',
            right: '15%',
            bottom: '0',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            show: false,
        },
        yAxis: {
            type: 'category',
            offset: 10,
            // boundaryGap: false,
            align: 'left',
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    color: '#25BCF8'
                }
            },
            axisTick: {
                //刻度线不显示
                show: false,
                alignWithLabel: true,
            },
            data: ['未上传', '已上传', '总数']
        },
        series: [
            // {
            //     name: '时效',
            //     type: 'bar',
            //     stack: 'amount',
            //     barWidth: 10,
            //     label: {
            //         show: false,
            //         position: 'insideRight'
            //     },
            //     itemStyle: {
            //         normal: {
            //             barBorderColor: 'rgba(0,0,0,0)',
            //             color: 'rgba(0,0,0,0)'
            //         },
            //         emphasis: {
            //             barBorderColor: 'rgba(0,0,0,0)',
            //             color: 'rgba(0,0,0,0)'
            //         }
            //     },
            //     data: [10, 10, 10, 10]
            // },
            {
                name: 'time',
                stack: 'amount',
                type: 'bar',
                barWidth: 5,
                itemStyle: {    // 图形的形状
                    barBorderRadius: 15
                },
                label: {
                    show: true,
                    color: '#25BCF8',
                    fontSize: 10,
                    fontWeight: 700,
                    position: 'right',
                    formatter: '{c}',
                    offset: [10, 0]
                },
                data: [38, 3800, 3838]
            }
        ]
    },
    WorkBar: {
        color: BlueToPink,
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0,0,0,0.5)',
            formatter: "{a} <br/>{b} : {c}%"
        },
        grid: {
            top: '10%',
            left: '10%',
            right: '15%',
            bottom: '0',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            show: false,
        },
        yAxis: {
            type: 'category',
            offset: 10,
            // boundaryGap: false,
            align: 'left',
            axisLine: {
                show: false,
                lineStyle: {
                    width: 0,
                    color: '#25BCF8'
                }
            },
            axisTick: {
                //刻度线不显示
                show: false,
                alignWithLabel: true,
            },
            data: ['待上传', '已上传', '总数']
        },
        series: [
            {
                name: 'time',
                stack: 'amount',
                type: 'bar',
                barWidth: 5,
                itemStyle: {    // 图形的形状
                    barBorderRadius: 15
                },
                label: {
                    show: true,
                    color: '#25BCF8',
                    fontSize: 10,
                    fontWeight: 700,
                    position: 'right',
                    formatter: '{c}',
                    offset: [10, 0]
                },
                data: [38, 3800, 3838]
            }
        ]
    },
    TransverseBar: {
        color: TransverseBarColor,
        // title: {
        //     text: '应急响应有效时间（分钟）',
        // },

        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0,0,0,0.5)',
            formatter: "{a} <br/>{b} : {c}%"
        },
        // tooltip: {
        //     trigger: 'axis',
        //     axisPointer: {
        //         type: 'shadow'
        //     }
        // },
        // legend: {
        //     data: ['2011年', '2012年']
        // },
        grid: {
            top: '30%',
            left: '10%',
            right: '15%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            show: false,
        },
        yAxis: {
            type: 'category',
            offset: 10,
            boundaryGap: false,
            align: 'left',
            axisLine: {
                show: false,
                lineStyle: {
                    width: 5,
                    color: '#25BCF8'
                }
            },
            axisTick: {
                //刻度线不显示
                show: false,
                alignWithLabel: true,
            },
            data: ['请假', '休假', '外勤', '出勤人数', '总数']
        },
        series: [
            {
                name: '时效',
                type: 'bar',
                stack: 'amount',
                barWidth: 5,
                label: {
                    show: false,
                    position: 'insideRight'
                },
                itemStyle: {
                    normal: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    },
                    emphasis: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [10, 10, 10, 10]
            },
            {
                name: 'time',
                stack: 'amount',
                type: 'bar',
                barWidth: 15,
                itemStyle: {    // 图形的形状
                    barBorderRadius: 15
                },
                label: {
                    show: true,
                    color: '#25BCF8',
                    fontSize: 10,
                    fontWeight: 700,
                    position: 'right',
                    formatter: '{c}人',
                    offset: [10, 0]
                },
                data: [34, 66, 122, 1795, 1867]
            }
        ]
    },
    TransverseBar2: {
        color: TransverseBarColor2,
        // title: {
        //     text: '应急响应有效时间（分钟）',
        // },

        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0,0,0,0.5)',
            formatter: "{a} <br/>{b} : {c}%"
        },
        // tooltip: {
        //     trigger: 'axis',
        //     axisPointer: {
        //         type: 'shadow'
        //     }
        // },
        // legend: {
        //     data: ['2011年', '2012年']
        // },
        grid: {
            top: '40%',
            left: '10%',
            right: '15%',
            bottom: '15%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            show: false,
        },
        yAxis: {
            type: 'category',
            offset: 10,
            boundaryGap: false,
            align: 'left',
            axisLine: {
                show: true,
                lineStyle: {
                    width: 5,
                    color: '#25BCF8'
                }
            },
            axisTick: {
                //刻度线不显示
                show: false,
                alignWithLabel: true,
            },
            data: ['90以上', '60-90', '30-60', '0-30']
        },
        series: [
            {
                name: '时效',
                type: 'bar',
                stack: 'amount',
                barWidth: 10,
                label: {
                    show: false,
                    position: 'insideRight'
                },
                itemStyle: {
                    normal: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    },
                    emphasis: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [10, 10, 10, 10]
            },
            {
                name: 'time',
                stack: 'amount',
                type: 'bar',
                barWidth: 15,
                itemStyle: {    // 图形的形状
                    barBorderRadius: 15
                },
                label: {
                    show: true,
                    color: '#25BCF8',
                    fontSize: 10,
                    fontWeight: 700,
                    position: 'right',
                    formatter: '{c}%',
                    offset: [10, 0]
                },
                data: [0.6, 1.5, 2.3, 95.6]
            }
        ]
    },
    //柱状图
    Bar: {
        color: TransverseBarColor2,
        grid: {
            top: '40%',
            left: '15%',
            right: '15%',
            bottom: '10%',
            containLabel: true
        },
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0,0,0,0.5)',
            formatter: "{a} <br/>{b}  {c}%"

        },
        xAxis: {
            type: 'category',

            axisLine: {
                show: true,
                lineStyle: {
                    width: 3,
                    color: '#161F3C'
                },

            },
            axisLabel: {
                show: true,
                color: '#26BCF8'
            },
            axisTick: {
                show: false,
                // alignWithLabel: true,
            },
            data: ['红外测温', '耐压测温', '通道施工', '测验']
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: true,
                interval: 0,
                lineStyle: {
                    color: '#081B3F',
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
            }
        },
        dataZoom: [
            {
                type: 'inside'
            }
        ],
        series: [
            // { // For shadow
            //   type: 'bar',

            //   barWidth: 5,
            //   itemStyle: {    // 图形的形状
            //     barBorderRadius: 15,
            //     color: '#26306D'
            //   },
            //         emphasis: {
            //     show: false,
            //     areaColor: 'raba(0,0,0,0)',
            //     itemStyle: {}
            //   },
            //   barGap: '-100%',
            //   barCategoryGap: '40%',
            //   data: dataShadow,
            //   animation: false,
            //   zlevel: 0
            // }, 
            {

                name: '班组生产计划',
                barWidth: 5,
                itemStyle: {    // 图形的形状
                    barBorderRadius: [15, 15, 0, 0]
                },
                label: {
                    show: true,
                    color: '#25BCF8',
                    fontSize: 10,
                    fontWeight: 700,
                    position: 'top',
                    formatter: '{c}%',
                    offset: [0, -20]
                },
                data: data,
                type: 'bar',
                zlevel: 1
            }]
    },
    //地图
    MainMap: {
        tooltip: {
            trigger: 'item',
            // position:[10,10],
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: [20],
            // borderColor:'',
            formatter: function (params) {
                var tipHtml = '<div class="tip"><p class="tip-name">' + params.name + '</p><p class="tip-cont">' + params.data.taskName + '</p></div>';
                return tipHtml
            }
        },
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
                symbolSize: 10,
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
                itemStyle: {
                    normal: {
                        color: function (e) {
                            var data = e.data;
                            // console.log(e)
                            if (data.state == 7) {
                                return 'gray';
                            } else if (data.significanceDegree == '1') {
                                return 'green';
                            } else if (data.significanceDegree == '2') {
                                return 'orange';
                            } else if (data.significanceDegree == '3') {
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
    //漏斗图
    Funnel: function (obj) {
        // 基于准备好的dom，初始化echarts实例
        FunnelChart = echarts.init(document.getElementById('Funnel'));
        var option = ech.Funnel; // 指定图表的类型
        //  option.series.data = obj;
        //   //图例数值
        // obj.forEach(function (x, index) {
        //   x.name = x.name + ' ' + x.value;
        //   option.legend.data.push(x.name);
        //   x.value = parseInt(x.value)
        // });
        FunnelChart.setOption(option)
    },
    EchaertsTotalBar: function (obj) {
        // 基于准备好的dom，初始化echarts实例
        EchaertsTotalBarChart = echarts.init(document.getElementById('EchaertsTotalBar'));
        var option = ech.EchaertsTotalBar; // 指定图表的类型
        //  option.series.data = obj;
        //   //图例数值
        // obj.forEach(function (x, index) {
        //   x.name = x.name + ' ' + x.value;
        //   option.legend.data.push(x.name);
        //   x.value = parseInt(x.value)
        // });
        EchaertsTotalBarChart.setOption(option)
    },
    WorkBar: function (obj) {
        // 基于准备好的dom，初始化echarts实例
        WorkBarChart = echarts.init(document.getElementById('WorkBar'));
        var option = ech.WorkBar; // 指定图表的类型
        //  option.series.data = obj;
        //   //图例数值
        // obj.forEach(function (x, index) {
        //   x.name = x.name + ' ' + x.value;
        //   option.legend.data.push(x.name);
        //   x.value = parseInt(x.value)
        // });
        WorkBarChart.setOption(option)
    },
    TransverseBar: function (obj) {
        // 基于准备好的dom，初始化echarts实例
        TransverseBarChart = echarts.init(document.getElementById('TransverseBar'));
        var option = ech.TransverseBar; // 指定图表的类型
        //  option.series.data = obj;
        //   //图例数值
        // obj.forEach(function (x, index) {
        //   x.name = x.name + ' ' + x.value;
        //   option.legend.data.push(x.name);
        //   x.value = parseInt(x.value)
        // });
        TransverseBarChart.setOption(option)
    },
    TransverseBar2: function (obj) {
        // 基于准备好的dom，初始化echarts实例
        TransverseBar2Chart = echarts.init(document.getElementById('TransverseBar2'));
        var option = ech.TransverseBar2; // 指定图表的类型
        //  option.series.data = obj;
        //   //图例数值
        // obj.forEach(function (x, index) {
        //   x.name = x.name + ' ' + x.value;
        //   option.legend.data.push(x.name);
        //   x.value = parseInt(x.value)
        // });
        TransverseBar2Chart.setOption(option)
    },
    Bar: function (obj) {
        // 基于准备好的dom，初始化echarts实例
        BarChart = echarts.init(document.getElementById('Bar'));
        var option = ech.Bar; // 指定图表的类型
        //  option.series.data = obj;
        //   //图例数值
        // obj.forEach(function (x, index) {
        //   x.name = x.name + ' ' + x.value;
        //   option.legend.data.push(x.name);
        //   x.value = parseInt(x.value)
        // });
        BarChart.setOption(option)
    },
    MainMap: function (obj) {
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                res.push({
                    name: data[i].circuitName,
                    value: data[i].latitudeAndLongitudeArray,
                    taskName: data[i].taskName,
                    significanceDegree: data[i].significanceDegree,
                    state: data[i].state,
                });
            }
            return res;
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




        var MainMapIndex = 0; //播放所在下标
        var MainMapTime = setInterval(function () {
            MainMapchart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: MainMapIndex
            });
            MainMapIndex++;
            if (MainMapIndex > convertData(obj).length) {
                MainMapIndex = 0;
            }
        }, 1000);


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






//地图的提示款无缝上滚
var box = document.getElementById('scrollBox');
var con1 = document.getElementById('con1');
var con2 = document.getElementById('con2');
con2.innerHTML = con1.innerHTML;

function scrollUp() {
    if (box.scrollTop >= con1.offsetHeight) {
        box.scrollTop = 0;
        console.log(box.scrollTop, con1.offsetHeight)
    } else {
        box.scrollTop++
        // console.log( box.scrollTop,con1.offsetHeight)
    }
}
var time = 50;
var mytimer = setInterval(scrollUp, time);
box.onmouseover = function () {
    clearInterval(mytimer);
}
box.onmouseout = function () {
    mytimer = setInterval(scrollUp, time);
}


//图形响应大小
window.addEventListener("resize", (e) => {
    TransverseBarChart.resize();
    TransverseBar2Chart.resize();
    MainMapchart.resize();
});

