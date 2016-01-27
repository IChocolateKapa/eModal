/**
 * Created by Echo on 2015/8/10.
 */



function testeee(arr){
    alert(arr)
}

function test(){
    require(['jquery', 'eModal'], function ($, emd) {
        new emd.eModal().confirm("确定要点击我吗？",
            function () {
                alert("加速技术峰会的后果");
            },
            function () {
                testeee(56);
            },
            {
                skin: 'skin-gray'
            });
    });
}
function test1(){
    require(['jquery', 'eModal'], function ($, emd) {
        new emd.eModal().confirm("确定要点击我吗？",
            function () {
                alert("加速技术峰会的后果");
            },
            function () {
                testeee(56);
            },
            {
                sureTitle: "快来点我呀",
                cancleTitle: "布点我就走漏",
                skin: 'skin-gray'
            });
    });
}
function test2 () {
    require(['jquery', 'eModal'], function ($, emd) {
        new emd.eModal().alert("3333333？",
            {
                shade: false,
                skin: 'skin-molv'
            });
    });
}

function test4 () {
    require(['jquery', 'eModal'], function ($, emd) {
        new emd.eModal().alert("wqedwdfef？",
            {
                shade: true,
                skin: 'skin-gray',
                draggable: true,
                clickShadeHide: false
            });
    });
}
function test3 () {
    require(['jquery', 'eModal'], function ($, emd) {
        new emd.eModal().modalDialog(
            $("#test").html(),
            function () {
                /*在这个函数中进行左边标签的修改*/
                alert("这个函数中对引入的页面进行一些Dom操作");
            },
            function () {
                alert("确定, 这个函数写确定事件");
            },
            function () {
                alert("取消, 这个函数写取消事件");
            },
            {
                sureTitle: "快来点我呀",
                draggable: true,
                cancleTitle: "布点我就走漏",
                skin: 'skin-molv'
            }
        )
    });
}
