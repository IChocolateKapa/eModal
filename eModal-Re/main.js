/**
 * Created by Echo on 2015/8/10.
 */

require.config({
    //baseUrl: "",
    paths: {
        jquery: '../example/jquery-2.1.3.min.js',
        window: 'window'
        /*千万注意不能后面加.js后缀*/
    }
});


require(["jquery", 'window'], function($, w){
    new w.window().confirm("确定要点击我吗？",function(){
        alert("加速技术峰会的后果");
    }, function () {
        test(56);
    });
})

function test(arr){
    alert(arr)
}