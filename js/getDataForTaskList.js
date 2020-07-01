var DEV = "http://dianlan.yuanjingweb.com"
var getData = function (url, param, callback) {
  url = DEV + url;
  $.ajax({
    type: "Post",
    url: url,
    data: param,
    dataType: "json",
    success: function (res) {
      // console.log(res.data)
      callback(res);
    }
  });
}


var taskType = 0;
//获取数据
var g = {
  countTaskAll: function () {
    getData('/cable/countTaskAll', {}, function (res) {
    
      var todayAll = res.data.todayAll;
      var thisWeek = res.data.thisWeek;
      var thisMonth = res.data.thisMonth;
     
      //本月
      var todayFinish = todayAll.finish;
      var todayCreate = todayAll.create;
      var todayPercent = ((todayFinish/todayCreate)*100).toFixed(2)+'%';
      $("#todayFinish span").text(todayFinish);
      $("#todayCreate span").text(todayCreate);
      $("#todayPercent span").text(todayFinish==0?'0%':todayPercent);
      //本季度
      var thisWeekFinish = thisWeek.finish;
      var thisWeekCreate = thisWeek.create;
      var thisWeekPercent = ((thisWeekFinish/thisWeekCreate)*100).toFixed(2)+'%';
      $("#thisWeekFinish span").text(thisWeekFinish);
      $("#thisWeekCreate span").text(thisWeekCreate);
      $("#thisWeekPercent span").text(thisWeekFinish==0?'0%':thisWeekPercent);
      //全年
      var thisMonthFinish = thisMonth.finish;
      var thisMonthCreate = thisMonth.create;
      var thisMonthPercent = ((thisMonthFinish/thisMonthCreate)*100).toFixed(2)+'%';
      $("#thisMonthFinish span").text(thisMonthFinish);
      $("#thisMonthCreate span").text(thisMonthCreate);
      $("#thisMonthPercent span").text(thisMonthFinish==0?'0%':thisMonthPercent);
       
      
      
    
    })
  },
  countTaskAllByTaskType: function (taskType) {
    //taskType 0 本月 1 本季度 2本年
    getData('/cable/countTaskAllByTaskType', {
      taskType: taskType
    }, function (res) {
       //testTaskList 试验任务
      // calandriaTaskList 排管任务
      // mappingTaskList 测绘任务
      // outsideTheLossTaskList 反外损任务
      // thermometryTaskList 红外测温任务
      var completeness = res.data.completeness;
      var testTaskList = res.data.testTaskList;
      var calandriaTaskList = res.data.calandriaTaskList;
      var thermometryTaskList = res.data.thermometryTaskList;
      var mappingTaskList = res.data.mappingTaskList;
      var outsideTheLossTaskList = res.data.outsideTheLossTaskList;

      var testTaskListData=[];
      for(var i=0;i<testTaskList.length;i++){
        testTaskListData.push(testTaskList[i].countNumber);
      }
      var calandriaTaskListData=[];
      for(var i=0;i<calandriaTaskList.length;i++){
        calandriaTaskListData.push(calandriaTaskList[i].countNumber);
      }
      var thermometryTaskListData=[];
      for(var i=0;i<thermometryTaskList.length;i++){
        thermometryTaskListData.push(thermometryTaskList[i].countNumber);
      }
      var mappingTaskListData=[];
      for(var i=0;i<mappingTaskList.length;i++){
        mappingTaskListData.push(mappingTaskList[i].countNumber);
      }
      var outsideTheLossTaskListData=[];
      for(var i=0;i<outsideTheLossTaskList.length;i++){
        outsideTheLossTaskListData.push(outsideTheLossTaskList[i].countNumber);
      }
      console.log(testTaskListData)
      s.TransverseBar('Bar1',testTaskListData);
      s.TransverseBar('Bar2',calandriaTaskListData);
      s.TransverseBar('Bar3',thermometryTaskListData);
      s.TransverseBar('Bar4',mappingTaskListData);
      s.TransverseBar('Bar5',outsideTheLossTaskListData);

      $("#testTask span").text(completeness.testTask);
      $("#calandriaTask span").text(completeness.calandriaTask);
      $("#thermometryTask span").text(completeness.thermometryTask);
      $("#mappingTask span").text(completeness.mappingTask);
      $("#outsideTheLossTask span").text(completeness.outsideTheLossTask);
    })
  }
}


g.countTaskAll();
g.countTaskAllByTaskType(taskType);



var getDataTime = null;
var start = function () {
  getDataTime = setInterval(function () {
    g.countTaskAll();
  }, 10000);
}
start();