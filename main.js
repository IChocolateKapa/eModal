/**
 * Created by Echo on 2015/8/10.
 */

require.config({
    //baseUrl: "",
    paths: {
        jquery: 'jquery-2.1.3.min'//,
        /*千万注意不能后面加.js后缀*/
    }
});


require(["jquery", 'window'], function($, w){
    new w.window().alert("信息", "1861255296318612552963186125529631861255296318612552963186125529631861255296318612552963");
})
