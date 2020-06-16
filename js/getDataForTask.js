var DEV = "http://dianlan.yuanjingweb.com"
var getData = function (url, callback) {
  url = DEV + url;
  $.ajax({
    type: "Post",
    url: url,
    // data: {username:$("#username").val(), content:$("#content").val()},
    dataType: "json",
    success: function (res) {
      // console.log(res.data)
      callback(res);
    }
  });
}

//获取数据
var g = {
  getTaskList: function () {
    getData('/cable/task/getTaskAll', function (res) {
      s.MainMap(res.data);
      setProgress(res.data);
      var mapData = res.data;
      var dataLength = mapData.length;
      var addHtml = '';
      var boxClass = '';
      var significanceDegreeText = ''
      for (var i = 0; i < dataLength; i++) {
        if (mapData[i].state != 7) {
          if (mapData[i].significanceDegree == '1') {
            boxClass = 'z-green';

          } else if (mapData[i].significanceDegree == '2') {
            boxClass = 'z-yellow';

          } else if (mapData[i].significanceDegree == '3') {
            boxClass = 'z-red';

          }
          console.log(i)
          addHtml += '<div class="map-tip"><span class="' + boxClass + '">' + mapData[i].taskName + '<i class="time">' + mapData[i].createTime + '</i></span></div>'
        }
      }
      $("#con1").html(addHtml);
      // console.log(res)
    })
  },
}



g.getTaskList();




var curTime = function () {
  var today = new Date()
  var h = today.getHours()
  var m = today.getMinutes()
  var s = today.getSeconds()
  if (h < 10) m = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;
  // add a zero in front of numbers<10
  return h + ":" + m + ":" + s;

};



var setProgress = function (data) {
  var taskId = window.localStorage.getItem("taskId");
  if (taskId != undefined) {
    for (var j = 0; j < data.length; j++) {
      // debugger
      if (data[j].taskId == taskId) {
        for (var i = 0; i <= 7; i++) {
          if (i <= data[j].state) {
            $('.step' + (i - 1)).addClass('finish');
          } else {
            $('.step' + (i - 1)).removeClass('finish');
          }
        }
      }
    }
  }

}


var getDataTime = null;
var start = function () {
  getDataTime = setInterval(function () {
    g.getTaskList();
    // console.log(data == data1)
    // if (data == data1) {
    //   data = data2;
    //   s.MainMap(data);
    //   setProgress();
    // } else {
    //   data = data1;
    //   s.MainMap(data);
    //   setProgress();
    // }

  }, 5000);
}
start();