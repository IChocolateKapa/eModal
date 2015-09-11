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
    $("#phone").click(function(){
        new w.window().alert("手机号", "18612552963", {
                "width": 400,
                "height": 120,
                "x": '50%',
                "y": '20%'
            }
        );
    })
})



require(['jquery'], function($){
    $(window).resize(function(){
        var h = $(window).height()-$(".header").height() - 5;
        $(".content").height(h);
    })
})

require(["../map/mapController"]);



require(['jquery', '../map/mapIndex', 'window'], function($, mp, w){
    //动态调整地图高度
    var h = $(window).height() - $(".header").height() - 3;
    $(".content").height(h);

    /*预览toggle*/
    $(".staylogin").click(function () {
        $("._chbx").toggleClass("_nologin");
    })

    var init = new mp.init();

    $("#_rect .staylogin").click(function () {
        init.foreSeeRectsMarkers();
    })

    $("#rectRow").change(function(){
        init.foreSeeRectsMarkers();
    })
    $("#rectColumn").change(function(){
        init.foreSeeRectsMarkers();
    })

    $("#_poly .staylogin").click(function () {
        init.foreSeePolysMarkers();
    })
    $("#polylineNum").change(function(){
        init.foreSeePolysMarkers();
    })

    /*输入地址转到相应位置*/
    $("#search").click(function () {
        MAP.codeAddress(GLOBAL_MapParams.geocoder, GLOBAL_MapParams.map, GLOBAL_MapParams.addrId);
    })


    /*刷新地图*/
    $("#refresh").click(function () {
        init.initialize(true);
        MAP.setCusMap(GLOBAL_MapParams.rectArray, GLOBAL_MapParams.map);
        MAP.setCusMap(GLOBAL_MapParams.polylineArray, GLOBAL_MapParams.map);
        MAP.setCusMap(GLOBAL_MapParams.markerArray, GLOBAL_MapParams.map);
    })


})