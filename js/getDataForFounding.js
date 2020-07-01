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

//获取数据
var g = {
    getTaskList: function () {
        getData('/cable/task/getTaskAll', {}, function (res) {
            s.MainMap(res.data);
        })
    },
    getPoliticsGroupList: function () {
        getData('/cable/getPoliticsGroupList', {}, function (res) {
            var resArr = res.data;
            var addhtml1 = '';
            let resDataLength = resArr.length;
            var userList = [];
            var userListHtml = '';
            for (var i = 0; i < resDataLength; i++) {
                var linePosition = '';
                if (i == 0) {
                    linePosition = 'line-h-r';
                } else if (0 < i < resDataLength - 1) {
                    linePosition = 'line-h-c';
                } else {
                    linePosition = 'line-h-l';
                }
                //第二层
                var addhtml2 = '';

                var cablePoliticsGroupList = resArr[i].cablePoliticsGroupList;
                var cablePoliticsGroupListLength = cablePoliticsGroupList.length;
                var isActive = '';
                for (var j = 0; j < cablePoliticsGroupListLength; j++) {
                    var linePosition2 = '';
                    if (j == 0) {
                        linePosition2 = 'line-h-r';
                    } else if (0 < j < cablePoliticsGroupListLength - 1) {
                        linePosition2 = 'line-h-c';
                    } else {
                        linePosition2 = 'line-h-l';
                    }
                    if (i == 0 && j == 0) {
                        isActive = 'active';
                        userList = cablePoliticsGroupList[0].userList;
                    } else {
                        isActive = '';
                    }
                    addhtml2 += '<div class="strt-part"><span class="line-h ' + linePosition2 + '"></span><div class="line-v"><span></span></div>' +
                        '<span class="strt-name three ' + isActive + '" politicsGroupId="'+cablePoliticsGroupList[j].politicsGroupId+'">' + cablePoliticsGroupList[j].politicsGroupName + '</div>';

                }
                //第二层
                addhtml1 += '<div class="strt-part"><span class="line-h ' + linePosition + '"></span><div class="line-v"><span></span></div>' +
                    '<span class="strt-name two">' + resArr[i].politicsGroupName + '</span><div class="line-v"><span></span></div>' +
                    '<div class="strt-block">' + addhtml2 + '</div></div>'

            }
            $("#PoliticsGroup").html(addhtml1);
            for (var k = 0; k < userList.length; k++) {
                userListHtml += '<div class="name" userId="'+userList[k].userId+'">' + userList[k].userName + '</div>'
            }
            $("#userList").html(userListHtml);
            $('.three').click(function () {
                $('.three').removeClass('active');
                $(this).addClass('active');
                var politicsGroupId= $(this).attr('politicsGroupId');
                var curUserList=[];
                var curUserListHtml='';
                for (var i = 0; i < resDataLength; i++) {
                    //第二层
                    var cablePoliticsGroupList = resArr[i].cablePoliticsGroupList;
                    var cablePoliticsGroupListLength = cablePoliticsGroupList.length;
                    for (var j = 0; j < cablePoliticsGroupListLength; j++) {
                        if(politicsGroupId==cablePoliticsGroupList[j].politicsGroupId){
                            curUserList = cablePoliticsGroupList[j].userList;
                        }
                    }
                }
                for (var k = 0; k < curUserList.length; k++) {
                    curUserListHtml += '<div class="name" userId="'+curUserList[k].userId+'">' + curUserList[k].userName + '</div>'
                }
                $("#userList").html(curUserListHtml);
                $('#userList .name').click(function () {
                    $('#userList .name').removeClass('active');
                    $(this).addClass('active');
                    g.getTaskLog($(this).attr('userId'));
                })
            })

            $('#userList .name').click(function () {
                $('#userList .name').removeClass('active');
                $(this).addClass('active');
                g.getTaskLog($(this).attr('userId'));
            })
        })
    },
    getBoardUserNumber: function () {
        getData('/cable/getBoardUserNumber', {}, function (res) {
            var userNumberLength = res.data.userNumber / res.data.all;
            $('#all').text(res.data.all + ' 人');
            $('#userNumber').text(res.data.userNumber + ' 人');
            $('.userNumberLength').css('width', userNumberLength * 100 + '%');
            $('#userNumberLength').text((userNumberLength * 100).toFixed(0) + '%');
        })
    },
    getTwoLevelPartyTaskList: function () {
        getData('/cable/getTwoLevelPartyTaskList', {}, function (res) {
            var taskList = res.data;
            var taskListLength = res.data.length;
            var taskHtml = '';
            for (var i = 0; i < taskListLength; i++) {
                taskHtml += '<p>' + (i + 1) + ')' + taskList[i].partyName + '<span> 100%</span></p>'
            }
            $('#task').html(taskHtml);
        })
    },
    getTaskLog: function (userId) {
        getData('/cable/getTaskLog', {
            userId: userId
        }, function (res) {
            var addHtml = '';
            var cableUser = res.data.cableUser;
            var cableLogs = res.data.cableLogs;
            for (var i = 0; i < cableLogs.length; i++) {
                addHtml += '<li>' +
                    '<div class="bullet pink"></div>' +
                    '<div class="desc">' +
                    '<h3>'+cableLogs[i].createTime+'</h3>' +
                    '<h4>'+cableLogs[i].logContent+'</h4>' +
                    '</div>' +
                    '</li>';
            }
            // $('#timeLineImg').html(addHtml);
            $('#timeLineName').text(cableUser.userName);
            $('#timeLinePosition').html(cableUser.politicsGroupPost);

            $('#timeLine').html(addHtml);
            $('.user-info').css('display','block');

            $(document).on('click','.user-info .close',function (e) {  
                $(this).parent('.user-info').css('display','none');      
            })
        })
    },


}


g.getTaskList();
g.getPoliticsGroupList();
g.getBoardUserNumber();
g.getTwoLevelPartyTaskList();










