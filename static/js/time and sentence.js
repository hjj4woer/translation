
    function getSentence(){
    var url2 = 'http://open.iciba.com/dsapi'
        $.ajax({
                    url: url2,
                    type: 'get',
                    dataType: 'jsonp',
                    jsonp: "callback",
                    jsonpCallback:"goSentence",
                    success: function (data) {
                    //$("#Trans").html(data.trans_result[0].dst);
                    
                    var img = new Image();
    
                    $(img).error(function() {
        //加载失败时的处理
                    }).attr({"src":data.picture,"id":"img","class":"img-rounded"});
                    
                    $("#S").html("每日一句:<br>"+data.content+"<br><br><br>"+data.translation);
                    $("#Sentence").append(img);
                    } });
    }
    window.onload = function(){
        getTime();
        getSentence();
    }
    function getTime(){
        $.ajax({
            url: 'showTime.php',
            type: 'post',
            jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
            jsonpCallback:"success_jsonpCallback",
            dataType: 'jsonp',
            success: function(data){
                
                $("#time").html("您登陆的时间为"+data.time[0]+" "+data.week[0]);
                
            },
            error:function(){
                alert('请求异常');
            }
        });
    }
