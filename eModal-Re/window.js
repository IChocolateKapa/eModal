/**
 * Created by Echo on 2015/8/10.
 */


define(['jquery'], function($){
    function window(){};

    window.prototype = {
        alert: function(msg, cfg, fn){

            this.cfg = {
                title: "信息",
                skin: "0",
                shade: true
            };

            $.extend(this.cfg, cfg);


            var ifShade = this.cfg.shade;

            var title2 = "信息" || title;
            var ss = "<div class=\"hp-modal\">"
                    + "<p id='hp-title'>"+ title2 + "</p>"
                    + "<span>"+ msg + "</span>"
                    + "<div class='btn-group'>"
                    + "<a href='javascript:void(0)' id='hp-modal-btn-sure'>确定</a>"
                    //+ "<a href='javascript:void(0)' id='hp-modal-btn-no'>取消</a>"
                    + "</div>"
                    + "</div>";


            if(ifShade){
                var shade = "<div class='hp-modal-mask'></div>";
                $("body").append(shade);
                var docH = $(document).height();
                $(".hp-modal-mask").css({"height": docH});
                $(ss).appendTo($(".hp-modal-mask"));
            } else {
                $(ss).appendTo($("body"));
            }


            var eleH = $(".hp-modal").height();

            $(".hp-modal").css({
                "position": "absolute",
                "left": "50%",
                "margin-left": "-150px",
                "top": "50%",
                "margin-top": "-" + eleH/2 + "px"
            });

            var oDiv=document.getElementById('hp-title');

            oDiv.onmousedown=function (ev)
            {
                document.onmousemove=function (ev)
                {
                    /*获取鼠标相对于浏览器的偏移*/
                    var posX = ev.pageX;
                    var posY = ev.pageY;
                    var titleH = $("#hp-title").height();
                    $(".hp-modal").css({"top": posY+titleH+25 + "px", "left": posX+"px"});

                    var winW = $(window).width();
                };

                document.onmouseup=function ()
                {
                    document.onmousemove=null;
                    document.onmouseup=null;

                    if(oDiv.releaseCapture)
                    {
                        oDiv.releaseCapture();	//IE
                    }
                };

                if(oDiv.setCapture)
                {
                    oDiv.setCapture();	//IE
                }

                return false;
            };


            if(ifShade){
                $(".hp-modal-mask").click(function(eve){
                    var event = eve || window.event;
                    var target = event.target || event.srcElement;
                    console.log($(target))
                    if($(target).parents().hasClass("hp-modal")){
                        if(event.preventDefault){
                            event.preventDefault();
                        } else{
                            event.returnValue = false;
                        }
                        return false;
                    }
                    $(".hp-modal-mask").remove();
                })
            }

            $("#hp-modal-btn-sure").click(function(){
                if(fn){
                    fn();
                }
                if(ifShade){
                    $(".hp-modal-mask").remove();
                } else {
                    $(".hp-modal").remove();
                }

            })

            $("#hp-modal-btn-no").click(function(){
                if(ifShade){
                    $(".hp-modal-mask").remove();
                } else {
                    $(".hp-modal").remove();
                }
            })



            var clx = $("<i class=\"closeX\" title=\"关闭此窗口\">X</i>").prependTo($(".hp-modal")).click(function(){
                if(ifShade){
                    $(".hp-modal-mask").remove();
                } else {
                    $(".hp-modal").remove();
                }
            })
        },
        confirm: function(msg, fn, fn2, cfg){
            this.cfg = {
                skin: "0",
                shade: false
            };

            $.extend(this.cfg, cfg);


            var ifShade = this.cfg.shade;

            var title2 = "确认框" || title;
            var ss = "<div class=\"hp-modal\">"
                + "<p id='hp-title'>"+ title2 + "</p>"
                + "<span>"+ msg + "</span>"
                + "<div class='btn-group'>"
                + "<a href='javascript:void(0)' id='hp-modal-btn-sure'>确定</a>"
                + "<a href='javascript:void(0)' id='hp-modal-btn-no'>取消</a>"
                + "</div>"
                + "</div>";


            if(ifShade){
                var shade = "<div class='hp-modal-mask'></div>";
                $("body").append(shade);
                var docH = $(document).height();
                $(".hp-modal-mask").css({"height": docH});
                $(ss).appendTo($(".hp-modal-mask"));
            } else {
                $(ss).appendTo($("body"));
            }


            var eleH = $(".hp-modal").height();

            $(".hp-modal").css({
                "position": "absolute",
                "left": "50%",
                "margin-left": "-150px",
                "top": "50%",
                "margin-top": "-" + eleH/2 + "px"
            });

            var oDiv=document.getElementById('hp-title');

            oDiv.onmousedown=function (ev)
            {
                document.onmousemove=function (ev)
                {
                    /*获取鼠标相对于浏览器的偏移*/
                    var posX = ev.pageX;
                    var posY = ev.pageY;
                    var titleH = $("#hp-title").height();
                    $(".hp-modal").css({"top": posY+titleH+25 + "px", "left": posX+"px"});

                    var winW = $(window).width();
                };

                document.onmouseup=function ()
                {
                    document.onmousemove=null;
                    document.onmouseup=null;

                    if(oDiv.releaseCapture)
                    {
                        oDiv.releaseCapture();	//IE
                    }
                };

                if(oDiv.setCapture)
                {
                    oDiv.setCapture();	//IE
                }

                return false;
            };


            if(ifShade){
                $(".hp-modal-mask").click(function(eve){
                    var event = eve || window.event;
                    var target = event.target || event.srcElement;
                    console.log($(target))
                    if($(target).parents().hasClass("hp-modal")){
                        if(event.preventDefault){
                            event.preventDefault();
                        } else{
                            event.returnValue = false;
                        }
                        return false;
                    }
                    $(".hp-modal-mask").remove();
                })
            }

            $("#hp-modal-btn-sure").click(function(){
                if(fn){
                    fn();
                }
                if(ifShade){
                    $(".hp-modal-mask").remove();
                } else {
                    $(".hp-modal").remove();
                }

            })

            $("#hp-modal-btn-no").click(function(){
                if(fn2){
                    fn2();
                }

                if(ifShade){
                    $(".hp-modal-mask").remove();
                } else {
                    $(".hp-modal").remove();
                }
            })



            var clx = $("<i class=\"closeX\" title=\"关闭此窗口\">X</i>").prependTo($(".hp-modal")).click(function(){
                if(ifShade){
                    $(".hp-modal-mask").remove();
                } else {
                    $(".hp-modal").remove();
                }
            })
        },
        prompt: function(msg){
            //alert(msg);
        }
    }

    return {
        window: window
    };
})

