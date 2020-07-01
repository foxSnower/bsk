
//横向柱状图
var TransverseBarColor = new echarts.graphic.LinearGradient(
  1, 0, 0, 1,
  [
    { offset: 1, color: '#486eec' },
    { offset: 0, color: '#00a1b5' }
  ]
);

//声明所有图形
var  TransverseBar;
var ech = {
  //横向柱状图
  TransverseBar: {
    color: TransverseBarColor,

    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(0,0,0,0.5)',
      formatter: "{a} <br/>{b} : {c}"
    },

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
      // axisLine: {
      //   show: true,
      //   lineStyle: {
      //     width: 1,
      //     opacity: 0.7,
      //     color: '#25BCF8'
      //   }
      // },
     
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
      inverse: true,//倒叙
      axisTick: {
        //刻度线不显示
        show: false,
        alignWithLabel: true,
      },
      data: ['请假', '休假', '外勤', '出勤人数', '总数']
    },
    series: [
      // {
      //   name: '时效',
      //   type: 'bar',
      //   stack: 'amount',
      //   barWidth: 5,
      //   label: {
      //     show: false,
      //     position: 'insideRight'
      //   },
      //   itemStyle: {
      //     normal: {
      //       barBorderColor: 'rgba(0,0,0,0)',
      //       color: 'rgba(0,0,0,0)'
      //     },
      //     emphasis: {
      //       barBorderColor: 'rgba(0,0,0,0)',
      //       color: 'rgba(0,0,0,0)'
      //     }
      //   },
      //   data: [10, 10, 10, 10]
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
        data: [34, 66, 122, 1795, 1867]
      }
    ]
  },
};

var s = {
  TransverseBar: function (name,obj) {
    // 基于准备好的dom，初始化echarts实例
    TransverseBarChart = echarts.init(document.getElementById(name));
    var option = ech.TransverseBar; // 指定图表的类型
    option.series[0].data=[];
    TransverseBarChart.setOption(option)
    option.series[0].data = obj;
    if(name=='Bar1'){
      option.yAxis.data=['待领取','待勘察','待审核','待实验','现场安全措施','试验工作开始','待复核','已完成'];
      option.series[0].name='试验任务';
      option.grid.top='30%';
      option.grid.bottom='15%';
    }
    if(name=='Bar2'){
      option.yAxis.data=['待领取','待拍摄','待验收','完成'];
      option.series[0].name='排管任务';
      option.grid.top='40%';
      option.grid.bottom='20%';
    }
    if(name=='Bar3'){
      option.yAxis.data=['待打卡','待核对','待拍摄','任务完成'];
      option.series[0].name='红外测温任务';
      option.grid.top='40%';
      option.grid.bottom='20%';
    }
    if(name=='Bar4'){
      option.yAxis.data=['待核对','待拍摄','待确认','待完成','已完成'];
      option.series[0].name='测绘任务';
      option.grid.top='30%';
      option.grid.bottom='20%';
    }
    if(name=='Bar5'){
      option.yAxis.data=['待勘察','待审核','监护施工','任务完成'];
      option.series[0].name='反外损任务';
      option.grid.top='40%';
      option.grid.bottom='20%';
    }
   
    //  option.series.data = obj;
    //   //图例数值
    // obj.forEach(function (x, index) {
    //   x.name = x.name + ' ' + x.value;
    //   option.legend.data.push(x.name);
    //   x.value = parseInt(x.value)
    // });
    TransverseBarChart.setOption(option)
  },
};


//图形响应大小
window.addEventListener("resize", (e) => {
  TransverseBarChart.resize();
});

