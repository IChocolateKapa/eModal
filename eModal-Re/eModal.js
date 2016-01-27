/**
 * Created by Echo on 2015/8/10.
 */


define(['jquery'], function($){

    function eModal () {};

    eModal.prototype = {

        alert: function (msg, cfg, fn) {

            if ($(".hp-modal").length > 0 || $(".hp-modal-mask").length > 0) return;

            this.cfg = {
                width: 300,
                title: "信息",
                sureTitle: "确定",
                draggable: false,
                skin: "skin-blue",
                shade: true,
                clickShadeHide: true,
                sync: true
            };

            $.extend(this.cfg, cfg);


            var ifShade = this.cfg.shade,
                ifSync = this.cfg.sync,
                sureTitle = this.cfg.sureTitle,
                isDraggable = this.cfg.draggable,
                isClickShade = this.cfg.clickShadeHide,
                skin = this.cfg.skin,
                title2 = this.cfg.title;


            var ss = '<div class="hp-modal ' + skin + '">'
                + '<p id="hp-title">'+ title2 + '</p>'
                + '<span>'+ msg + '</span>'
                + '<div class="btn-group">'
                + '<a href="javascript:void(0)" id="hp-modal-btn-sure">' + sureTitle + '</a>'
                + '</div>'
                + '</div>';

            var docH = $(window.parent.document).height();

            if (ifShade) {
                var shade = '<div class="hp-modal-mask ' + skin + '"></div>';
                $('body').prepend($(shade));
                $('.hp-modal-mask').append($(ss)).css({'height': docH});
            } else {
                $(ss).prependTo($('body'));
            }


            $('.hp-modal').css({
                width: this.cfg.width
            });

            if (isDraggable) {
                $('#hp-title').css({'cursor': 'move'});
                var oDiv = document.getElementById('hp-title');
                this.dragEvent(oDiv);
            }

            if (ifShade) {
                if (isClickShade) {
                    $('.hp-modal-mask').click(function (eve) {
                        var event = eve || window.event;
                        var target = event.target || event.srcElement;
                        if ($(target).parents().hasClass('hp-modal')
                            && $(target).attr('id') != 'hp-modal-btn-sure') {
                            if (event.preventDefault) {
                                event.preventDefault();
                            } else {
                                event.returnValue = false;
                            }
                            return false;
                        }
                        $('.hp-modal-mask').remove();
                        ifSync? fn && fn(): "";
                    })
                }
            }

            $('#hp-modal-btn-sure').click(function () {
                if (ifSync) {
                    fn && fn();
                    if (ifShade) {
                        $(".hp-modal-mask").remove();
                    } else {
                        $('.hp-modal').remove();
                    }
                } else {
                    if (ifShade) {
                        $('.hp-modal-mask').remove();
                    } else {
                        $('.hp-modal').remove();
                    }
                    fn && fn();
                }
            });

            $('#hp-modal-btn-no').click(function () {
                if (ifShade) {
                    $('.hp-modal-mask').remove();
                } else {
                    $('.hp-modal').remove();
                }
            });



            $('<i class="closeX" title="关闭此窗口">X</i>')
                .prependTo($('.hp-modal'))
                .click(function () {
                    if(ifShade){
                        $('.hp-modal-mask').remove();
                    } else {
                        $('.hp-modal').remove();
                    }
                })
        },
        confirm: function (msg, fn, fn2, cfg) {

            if ($(".hp-modal").length > 0 || $(".hp-modal-mask").length > 0) return;

            this.cfg = {
                width: 300,
                title: "确认",
                sureTitle: "确定",
                cancleTitle: "取消",
                draggable: false,
                skin: "skin-blue",
                shade: true,
                clickShadeHide: true,
                sync: true
            };

            $.extend(this.cfg, cfg);


            var ifShade = this.cfg.shade,
                ifSync = this.cfg.sync,
                sureTitle = this.cfg.sureTitle,
                cancleTitle = this.cfg.cancleTitle,
                isDraggable = this.cfg.draggable,
                isClickShade = this.cfg.clickShadeHide,
                skin = this.cfg.skin,
                title2 = this.cfg.title;


            var ss = '<div class="hp-modal ' + skin + '">'
                + '<p id="hp-title">'+ title2 + '</p>'
                + '<span>'+ msg + '</span>'
                + '<div class="btn-group">'
                + '<a href="javascript:void(0)" id="hp-modal-btn-sure">' + sureTitle + '</a>'
                + '<a href="javascript:void(0)" id="hp-modal-btn-no">' + cancleTitle + '</a>'
                + '</div>'
                + '</div>';


            var docH = $(window.parent.document).height();

            if (ifShade) {
                var shade = '<div class="hp-modal-mask ' + skin + '"></div>';
                $('body').prepend($(shade));
                $('.hp-modal-mask').append($(ss)).css({'height': docH});
            } else {
                $(ss).prependTo($('body'));
            }


            $('.hp-modal').css({
                width: this.cfg.width
            });

            if (isDraggable) {
                $('#hp-title').css({'cursor': 'move'});
                var oDiv = document.getElementById('hp-title');
                this.dragEvent(oDiv);
            }

            if (ifShade) {
                if (isClickShade) {
                    $('.hp-modal-mask').click(function (eve) {
                        var event = eve || window.event;
                        var target = event.target || event.srcElement;
                        if ($(target).parents().hasClass('hp-modal')
                            && $(target).attr('id') != 'hp-modal-btn-sure') {
                            if (event.preventDefault) {
                                event.preventDefault();
                            } else {
                                event.returnValue = false;
                            }
                            return false;
                        }
                        $('.hp-modal-mask').remove();
                        ifSync? fn && fn(): "";
                    })
                }
            }


            $('#hp-modal-btn-sure').click(function () {
                if (ifSync) {
                    fn && fn();
                    if (ifShade) {
                        $(".hp-modal-mask").remove();
                    } else {
                        $('.hp-modal').remove();
                    }
                } else {
                    if (ifShade) {
                        $('.hp-modal-mask').remove();
                    } else {
                        $('.hp-modal').remove();
                    }
                    fn && fn();
                }
            });

            $('#hp-modal-btn-no').click(function () {
                if (fn2) {
                    fn2();
                }
                if (ifShade) {
                    $('.hp-modal-mask').remove();
                } else {
                    $('.hp-modal').remove();
                }
            });



            $('<i class="closeX" title="关闭此窗口">X</i>')
                .prependTo($('.hp-modal'))
                .click(function () {
                    if(ifShade){
                        $('.hp-modal-mask').remove();
                    } else {
                        $('.hp-modal').remove();
                    }
                })
        },
        prompt: function (msg) {
            //alert(msg);
        },

        modalDialog: function (msg, fn0, fn, fn2, cfg) {

            if ($(".hp-modal").length > 0 || $(".hp-modal-mask").length > 0) return;

            this.cfg = {
                width: 300,
                title: "确认",
                sureTitle: "确定",
                cancleTitle: "取消",
                draggable: false,
                skin: "skin-blue",
                shade: true,
                clickShadeHide: true,
                sync: true
            };

            $.extend(this.cfg, cfg);


            var ifShade = this.cfg.shade,
                ifSync = this.cfg.sync,
                sureTitle = this.cfg.sureTitle,
                cancleTitle = this.cfg.cancleTitle,
                isDraggable = this.cfg.draggable,
                isClickShade = this.cfg.clickShadeHide,
                skin = this.cfg.skin,
                title2 = this.cfg.title;

            var ss = "<div class=\"hp-modal " + skin + "\">"
                + "<div class=\"hp-modal-title\">"
                + "<i class=\"closeX\" title=\"关闭此窗口\">X</i>"
                + "<p id='hp-title'>"+ title2 + "</p>"
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
            if (ifShade) {
                var shade = '<div class="hp-modal-mask ' + skin + '"></div>';
                $('body').prepend($(shade));
                $('.hp-modal-mask').append($(ss)).css({'height': docH});
            } else {
                $(ss).prependTo($('body'));
            }


            $('.hp-modal').css({
                width: this.cfg.width
            });

            if (isDraggable) {
                $('#hp-title').css({'cursor': 'move'});
                var oDiv = document.getElementById('hp-title');
                this.dragEvent(oDiv);
            }

            if (ifShade) {
                if (isClickShade) {
                    $('.hp-modal-mask').click(function (eve) {
                        var event = eve || window.event;
                        var target = event.target || event.srcElement;
                        if ($(target).parents().hasClass('hp-modal')
                            && $(target).attr('id') != 'hp-modal-btn-sure') {
                            if (event.preventDefault) {
                                event.preventDefault();
                            } else {
                                event.returnValue = false;
                            }
                            return false;
                        }
                        $('.hp-modal-mask').remove();
                        ifSync? fn && fn(): "";
                    })
                }
            }

            $('#hp-modal-btn-sure').click(function () {
                if (ifSync) {
                    fn && fn();
                    if (ifShade) {
                        $(".hp-modal-mask").remove();
                    } else {
                        $('.hp-modal').remove();
                    }
                } else {
                    if (ifShade) {
                        $('.hp-modal-mask').remove();
                    } else {
                        $('.hp-modal').remove();
                    }
                    fn && fn();
                }
            });

            $('#hp-modal-btn-no').click(function () {
                if (fn2) {
                    fn2();
                }
                if (ifShade) {
                    $('.hp-modal-mask').remove();
                } else {
                    $('.hp-modal').remove();
                }
            });



            $(".closeX").click(function () {
                if (ifShade) {
                    $('.hp-modal-mask').remove();
                } else {
                    $('.hp-modal').remove();
                }
            });

            fn0();
        },

        dragEvent: function (oDiv) {

            /*var $mTitle = $("#hp-title");

             $mTitle.on('mousedown', function (e) {

             var event = e || window.event;

             var elePosY = $(".hp-modal").position().top,
             elePosX = $(".hp-modal").position().left;

             var orgX = event.pageX,
             orgY = event.pageY;

             console.log('orgX=%d, orgY=%d', orgX, orgY);

             $mTitle.on('mousemove', function (e) {

             var event2 = e || window.event;

             var curX = event2.pageX,
             curY = event2.pageY;

             console.log('curX=%d, curY=%d', curX, curY);

             var moveX = (curX - orgX)// + elePosX,
             moveY = (curY - orgY)// + elePosY;

             console.log('moveX = %d, moveY = %d', moveX, moveY);

             /!*$(".hp-modal").css({
             'top': curX + 'px',
             'left': curY + 'px'
             });*!/
             //$(".hp-modal").css({
             //    'transform': 'translate(' + moveX + 'px, ' + moveY + 'px)',
             //    '-webkit-transform': 'translate(' + moveX + 'px, ' + moveY + 'px)',
             //    '-moz-transform': 'translate(' + moveX + 'px, ' + moveY + 'px)',
             //    '-ms-transform': 'translate(' + moveX + 'px, ' + moveY + 'px)',
             //})


             });

             $mTitle.on('mouseup', function (e) {
             $mTitle.off('mousedown');
             });

             });*/



            oDiv.onmousedown = function (ev) {

                document.onmousemove = function (ev) {
                    /*获取鼠标相对于浏览器的偏移*/
                    var posX = ev.pageX;
                    var posY = ev.pageY;
                    var titleH = $("#hp-title").height();
                    $(".hp-modal").css({"top": posY+titleH + 25 + "px", "left": posX + "px"});
                };

                document.onmouseup = function () {
                    document.onmousemove = null;
                    document.onmouseup = null;

                    if(oDiv.releaseCapture) {
                        oDiv.releaseCapture();	//IE
                    }
                };

                if (oDiv.setCapture) {
                    oDiv.setCapture();	//IE
                }
                return false;
            };

        }
    };

    return {
        eModal: eModal
    };
})

