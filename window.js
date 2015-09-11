/**
 * Created by Echo on 2015/8/10.
 */


define(['jquery'], function($){
    function window(){};

    window.prototype = {
        alert: function(title, msg, cfg){

            this.cfg = {
                width: "400",
                "height": "110",
                "x": "50%",
                "y": "20%"
            };
            $.extend(this.cfg, cfg);

            var title2 = "" || title;
            var ss = "<div class=\"modal\">"
            + "<span>"+ title2 + "</span>"
            + "<span>"+ msg + "</span>"
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
            console.log(x, y)
            $(".modal").css({
                "width": this.cfg.width + "px",
                "height": this.cfg.height + "px",
                "left": x,
                "margin-left": "-" + this.cfg.width/2 + "px",
                "top": y
            })

            var clx = $("<i class=\"closeX\" title=\"关闭此窗口\">X</i>").prependTo($(".modal")).click(function(){
                $(".modal").hide();
                $(".modal").remove();
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

