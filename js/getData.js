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
      var mapData=res.data;
      var dataLength = mapData.length;
      var addHtml = '';
      var boxClass = ''; 
      var significanceDegreeText=''
      for(var i=0;i<dataLength;i++){
         if(mapData[i].state!=7){
          if(mapData[i].significanceDegree=='1'){
            boxClass='z-green';
            significanceDegreeText='低';
          }else if(mapData[i].significanceDegree=='2'){
            boxClass='z-yellow';
            significanceDegreeText='中';
          }else if(mapData[i].significanceDegree=='3'){
            boxClass='z-red';
            significanceDegreeText='高';
          }
          console.log(i)
          addHtml += '<div class="map-tip"><span class="'+boxClass+'">'+significanceDegreeText+mapData[i].taskName+'<i class="time">'+mapData[i].createTime+'</i></span></div>'
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

