
    $("#subText").click(function(){
        if($('#baidu').is(':checked')){
     
                    var appid = '20160415000018794';
                    var key = '9FgqLYlcpDoCh96c1G9R';
                    var salt = (new Date).getTime();
                    var query = $("#wordText").val();
                    var from = 'en';
                    var to = 'zh';
                    var str1 = appid + query + salt +key;
                    var sign = MD5(str1);
                    $.ajax({
                    url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
                    type: 'get',
                    dataType: 'jsonp',
                    data: {
                    q: query,
                    appid: appid,
                    salt: salt,
                    from: from,
                    to: to,
                    sign: sign
                    },
                    success: function (data) {
                    $("#Trans").html(data.trans_result[0].dst);
                    } 
            });
        
    }else if($('#youdao').is(':checked')){
        var url1 = 'http://fanyi.youdao.com/openapi.do?keyfrom=12345667&key=1861353372&type=data&doctype=jsonp&version=1.1&q='+$("#wordText").val();
        $.ajax({
                    url: url1,
                    type: 'get',
                    dataType: 'jsonp',
                  
                    success: function (data) {
                    //$("#Trans").html(data.trans_result[0].dst);
                    $("#Trans").html(data.basic.explains);
                    
                    } });
    }
});
