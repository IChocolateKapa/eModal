/**
 * Created by Echo on 2015/8/10.
 */


define(['jquery'], function($){
    function window(){};

    window.prototype = {
        alert: function(title, msg, cfg){

            this.cfg = {
                width: "300",
                "height": "auto",
                "x": "50%",
                "y": "20%"
            };
            $.extend(this.cfg, cfg);

            console.log(this.cfg)

            var title2 = "" || title;
            var ss = "<div class=\"hp-modal\">"
                    + "<p class='title'>"+ title2 + "</p>"
                    + "<span>"+ msg + "</span>"
                    + "<input type='button' value='确定' id=''/>"
                    + "</div>";

            $(ss).appendTo($("body"));

            if(this.cfg.x.indexOf("%") > 0){
                var x = this.cfg.x;
            } else {
                var x = this.cfg.x + "px";
            }
            if(this.cfg.y.indexOf("%") > 0){
                var y = this.cfg.y
            } else {
                var y = this.cfg.y + "px"
            }
            var eleH = $(".hp-modal").height();

            console.log(this.cfg.width)
            console.log(this.cfg.height)
            $(".hp-modal").css({
                "position": "absolute",
                "left": "50%",
                "margin-left": "-150px",
                "top": "50%",
                "margin-top": "-" + eleH/2 + "px"
            })

            var clx = $("<i class=\"closeX\" title=\"关闭此窗口\">X</i>").prependTo($(".hp-modal")).click(function(){
                $(".hp-modal").hide();
                $(".hp-modal").remove();
            })
        },
        confirm: function(msg){
            //alert(msg);
        },
        prompt: function(msg){
            //alert(msg);
        }
    }

    return {
        window: window
    };
})

