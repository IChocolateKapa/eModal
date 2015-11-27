/**
 * Created by Echo on 2015/8/10.
 * Version: 0.3
 * Author: Echo
 */


var eModal = {
    alert: function(msg, cfg, fn){
        if($(".hp-modal").length > 0 || $(".hp-modal-mask").length > 0) return;
        this.cfg = {
            width: 300,
            title: "信息",
            sureTitle: "确定",
            skin: "0",
            shade: true,
            sync: true
        };

        $.extend(this.cfg, cfg);


        var ifShade = this.cfg.shade;
        var ifSync = this.cfg.sync;
        var sureTitle = this.cfg.sureTitle;


        var title2 = "信息";
        var ss = "<div class=\"hp-modal\">"
            + "<p id='hp-title'>"+ title2 + "</p>"
            + "<span>"+ msg + "</span>"
            + "<div class='btn-group'>"
            + "<a href='javascript:void(0)' id='hp-modal-btn-sure'>" + sureTitle + "</a>"
                //+ "<a href='javascript:void(0)' id='hp-modal-btn-no'>取消</a>"
            + "</div>"
            + "</div>";

        var docH = $(window.parent.document).height();
        //var docH = $(document).height();
        if(ifShade){
            var shade = "<div class='hp-modal-mask'></div>";
            $("body").prepend(shade);
            $(ss).appendTo($(".hp-modal-mask"));
            $(".hp-modal-mask").css({"height": docH});
        } else {
            $(ss).prependTo($("body"));
        }


        var eleH = $(".hp-modal").height();
        var winH = $(window.parent.window).height();
        var topH = winH * 0.5 - 40 + "px";
        $(".hp-modal").css({
            width: this.cfg.width/*,
            "margin-left": "-" + this.cfg.width/2 + "px",
            "top": topH,
            "margin-top": "-" + eleH/2 + "px"*/
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
                if($(target).parents().hasClass("hp-modal")
                    && $(target).attr("id") != "hp-modal-btn-sure"){
                    if(event.preventDefault){
                        event.preventDefault();
                    } else{
                        event.returnValue = false;
                    }
                    return false;
                }
                $(".hp-modal-mask").remove();
                ifSync? fn && fn(): "";
                /*if(ifSync){
                    if(fn){
                        fn();
                    }
                }*/
            })
        }

        $("#hp-modal-btn-sure").click(function(){
            if (ifSync) {
                fn && fn();
                if(ifShade){
                    $(".hp-modal-mask").remove();
                } else {
                    $(".hp-modal").remove();
                }
            } else {
                if(ifShade){
                    $(".hp-modal-mask").remove();
                } else {
                    $(".hp-modal").remove();
                }
                fn && fn();
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
        if($(".hp-modal").length > 0 || $(".hp-modal-mask").length > 0) return;
        this.cfg = {
            width: 300,
            skin: "0",
            shade: true,
            sureTitle: "确定",
            cancleTitle: "取消"
        };

        $.extend(this.cfg, cfg);


        var ifShade = this.cfg.shade;
        var sureTitle = this.cfg.sureTitle;
        var cancleTitle = this.cfg.cancleTitle;

        var title2 = "确认框";
        var ss = "<div class=\"hp-modal\">"
            + "<p id='hp-title'>"+ title2 + "</p>"
            + "<span>"+ msg + "</span>"
            + "<div class='btn-group'>"
            + "<a href='javascript:void(0)' id='hp-modal-btn-sure'>" + sureTitle + "</a>"
            + "<a href='javascript:void(0)' id='hp-modal-btn-no'>" + cancleTitle + "</a>"
            + "</div>"
            + "</div>";

        var docH = $(window.parent.document).height();
        if(ifShade){
            var shade = "<div class='hp-modal-mask'></div>";
            $("body").prepend(shade);
            $(ss).appendTo($(".hp-modal-mask"));
            $(".hp-modal-mask").css({"height": docH});
        } else {
            $(ss).prependTo($("body"));
        }


        var eleH = $(".hp-modal").height();

        var winH = $(window.parent.window).height();
        var topH = winH * 0.5 - 40 + "px";
        $(".hp-modal").css({
            width: this.cfg.width,
            //"margin-left": "-" + this.cfg.width/2 + "px",
            //"top": topH,
            //"margin-top": "-" + eleH/2 + "px"
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
    },

    modalDialog: function(msg, fn0, fn, fn2, cfg){
        if($(".hp-modal").length > 0 || $(".hp-modal-mask").length > 0) return;
        this.cfg = {
            title: "信息",
            width: "auto",
            skin: "0",
            shade: true,
            sureTitle: "确定",
            cancleTitle: "取消"
        };

        $.extend(this.cfg, cfg);


        var ifShade = this.cfg.shade;
        var sureTitle = this.cfg.sureTitle;
        var cancleTitle = this.cfg.cancleTitle;

        //var title = "信息";
        var ss = "<div class=\"hp-modal\">"
                + "<div class=\"hp-modal-title\">"
                    + "<i class=\"closeX\" title=\"关闭此窗口\">X</i>"
                    + "<p id='hp-title'>"+ this.cfg.title + "</p>"
                + "</div>"
                + "<div class=\"hp-modal-body\">"
                    + msg
                + "</div>"
                + "<div class='btn-group'>"
                    + "<a href='javascript:void(0)' id='hp-modal-btn-sure'>" + sureTitle + "</a>"
                    + "<a href='javascript:void(0)' id='hp-modal-btn-no'>" + cancleTitle + "</a>"
                + "</div>"
            + "</div>";

        var docH = $(window.parent.document).height();
        if(ifShade){
            var shade = "<div class='hp-modal-mask'></div>";
            $("body").prepend(shade);
            $(ss).appendTo($(".hp-modal-mask"));
            $(".hp-modal-mask").css({"height": docH});
        } else {
            $(ss).prependTo($("body"));
        }


        var eleH = $(".hp-modal").height();

        var winH = $(window.parent.window).height();
        //var topH = winH * 0.5 - 40 + "px";
        $(".hp-modal").css({
            width: this.cfg.width,
            //"margin-left": "-" + this.cfg.width/2 + "px",
            //"top": topH,
            //"margin-top": "-" + eleH/2 + "px"
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
                $(".hp-modal").css({"top": posY+titleH + 20 + "px", "left": posX+"px"});
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



        $(".closeX").click(function(){
            if(ifShade){
                $(".hp-modal-mask").remove();
            } else {
                $(".hp-modal").remove();
            }
        });

        fn0();
    },
}
