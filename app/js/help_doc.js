$().ready(function () {

    var oTime = null;
    $('.grids-nav-title').mouseover(function () {
        clearTimeout(oTime);
        //$('.grids-h_elplist').show();
        oTime = setTimeout(function () {
            $('.grids-h_elplist').show();
        }, 200);
    });
    $('.grids-nav-title').mouseout(function () {
        clearTimeout(oTime);
        oTime = setTimeout(function () {
            $('.grids-h_elplist').hide();
        }, 200);
    });
    $('.grids-h_elplist').mouseover(function () {
        clearTimeout(oTime);
        $('.grids-h_elplist').show();
    });
    $('.grids-h_elplist').mouseout(function () {
        oTime = setTimeout(function () {
            $('.grids-h_elplist').hide();
        }, 200);
    });

    $('#solve-yes').click(function () {
        $('#grids-height-sbm').show();
        $('.grids-height-solve').hide();
    });
    $('#solve-no').click(function () {
        $('.grids-height-problem').show();
        $('.grids-height-solve').hide();
    });
    $('.solve-no2').click(function () {
        $('.grids-height-problem').hide();
        $('.grids-height-solve').show();
        $('#feedbackTips').hide();
    });

    $('.grids-nav-innerbox').find('.grids-nav-inner-list').eq(0).find('a').find('i').css('background-position', '-108px 0px');
    $('.grids-nav-innerbox').find('.grids-nav-inner-list').eq(0).find('.nav-inner-list-2').addClass('grids-hide');

    //每个ul-li按钮点击
    //$('.grids-nav-inner-list .nav-inner-list-2>li').eq(0).find('a').addClass('list-focus');
    $('.nav-inner-list-2>li').click(function () {
        var _this = $(this);
        _this.siblings('li').find('a').removeClass('list-focus');
        _this.find('a').addClass('list-focus').parent('li').siblings('li').find('a').removeClass('list-focus');
        _this.parent('.nav-inner-list-2').parent('.grids-nav-inner-list').siblings('.grids-nav-inner-list').find('.nav-inner-list-2').removeClass('grids-hide');
        _this.parent('.nav-inner-list-2').parent('.grids-nav-inner-list').siblings('.grids-nav-inner-list').find('.grids-side-navLayer').find('.nav-drop-down-icon').css('background-position', '-98px 0px')
        //点击后刷新
        // window.location.reload();
        $(window).scrollTop(0);
        $('body').css('scrollTop', '0');
    });
    /* $('.grids-nav-inner-list>.nav-inner-list-2>li>.side-nav-title-2').click(function(){
     var _this=$(this);
     _this.addClass('list-focus').parent('li').siblings('li').find('a').removeClass('list-focus');
     });*/

    //单个按钮点击
    /* $('.grids-nav-inner-list .grids-side-navLayer2').click(function(){
     //点击后刷新
     window.location.reload();
     });*/
    $('.grids-nav-inner-list .grids-side-navLayer2').each(function () {
        var _this = $(this);
        if (_this.find('a').attr('data-href') == location.hash) {
            _this.addClass('list-focus');
            _this.parent('.grids-nav-inner-list').siblings('.grids-nav-inner-list').find('.grids-side-navLayer2').removeClass('list-focus');
        }
    });


    //判断浏览器和按钮的href;
    $('.grids-nav-inner-list .nav-inner-list-2>li').each(function () {
        var _this = $(this);
        if (_this.find('a').attr('data-href') == location.hash) {
            _this.find('a').addClass('list-focus');
            _this.parent('ul').addClass('grids-hide');
            _this.parent('.nav-inner-list-2').parent('.grids-nav-inner-list').siblings('.grids-nav-inner-list').find('.nav-inner-list-2').removeClass('grids-hide');
            _this.parent('ul').parent('.grids-nav-inner-list').find('.grids-side-navLayer').find('.nav-drop-down-icon').css('background-position', '-108px 0px');
            _this.parent('.nav-inner-list-2').parent('.grids-nav-inner-list').siblings('.grids-nav-inner-list').find('.grids-side-navLayer').find('.nav-drop-down-icon').css('background-position', '-98px 0px');
            _this.parent('ul').parent('.grids-nav-inner-list').siblings('.grids-nav-inner-list').find('.nav-inner-list-2').find('li').find('a').removeClass('list-focus');
        }
    });

    $('.grids-nav-inner-list>a').click(function () {
        var _this = $(this);
        _this.parent('.grids-nav-inner-list').find('.nav-inner-list-2').toggleClass('grids-hide').siblings('a').find('.nav-drop-down-icon').css('background-position', '-108px 0px');
        var display = _this.parent('.grids-nav-inner-list').find('.nav-inner-list-2').css('display');
        if (display == 'none') {
            _this.find('.nav-drop-down-icon').css('background-position', '-98px 0px');
        }
        else {
            _this.find('.nav-drop-down-icon').css('background-position', '-108px 0px');
        }
        //_this.parent('.grids-nav-inner-list').find('.nav-inner-list-2').show().parent('.grids-nav-inner-list').siblings('.grids-nav-inner-list').find('.nav-inner-list-2').hide().siblings('a').find('.nav-drop-down-icon').css('background-position','-98px 0px');
    });
    //*****左侧侧边栏已完成

    //content-state
    $('.grids-height-solve>a').click(function () {
        $(this).addClass('j-solve-active').siblings('a').removeClass('j-solve-active');
    });

    var aRadiobox = $('#helpdocum .grids-details .grids-height-problem>ul>li>.tc-15-radio-wrap');
    aRadiobox.click(function () {
        $('#feedbackTips').hide();
        $(this).find('input').css({
            backgroundPosition: '-170px 0px'
        }).parent('label').parent('li').siblings('li').find('label').find('input').css({
            backgroundPosition: '-154px 0px'
        });
        if ($(this).find('input').css('background-position') == '-170px 0px') {
            $('#toolbtnbox .solve-yes2').click(function () {
                $('#feedbackTips').hide();
                $('.grids-height-problem').hide();
                $('.grids-height-sbm').show();
            })
        }
    });
    $('#toolbtnbox button').click(function () {
        $(this).addClass('j-solve-active2').siblings('button').removeClass('j-solve-active2');
    });
    // console.log(aRadiobox)

    $('#toolbtnbox .solve-yes2').click(function () {
        aRadiobox.each(function () {
            if (aRadiobox.find('input').css('background-position') == '-154px 0px') {
                $('#feedbackTips').show();
            }
            else {
                $('#feedbackTips').hide();
            }
        });
    });


    //滚动侧边栏浮空
    $(document).scroll(function () {
        var topDist = linjieTop - $(window).scrollTop(),
            top = 0;
            //console.log(topDist)
        if (topDist <= 0) {
            var linjieBottom = $list.height() - ($('.footer').offset().top - $(window).scrollTop());
            if (linjieBottom > 0) {
                top = -linjieBottom;
            }
            $list.css({
                position: 'fixed',
                top: top,
                width: '233px',
                borderLeft: '1px solid #e9e9e9',
                borderRight: '1px solid #e9e9e9',
                fontSize: '16px',
                zIndex: '99',
                background: '#F5F5F5'
            });
        } else {
            $list.css({
                position: 'relative',
                borderLeft: 'none',
            });
            //  $('#helpdocum .maincont .grids-nav-innerbox').css('height','400px');
        }
    });
    /*$(window).scroll(function(){
        var  linjieTop = linjie-$(window).scrollTop();
        //console.log(linjieTop)
        if(linjieTop <= 0)
        {
            $list.css({
                            position: 'fixed',
                            top: 0,
                            width: '233px',
                            borderLeft: '1px solid #e9e9e9',
                            borderRight: '1px solid #e9e9e9',
                            fontSize: '16px',
                            zIndex: '99',
                            background: '#F5F5F5'
                        });
        }
        else{
            $list.css({
                            position: 'relative',
                            borderLeft: 'none',
                        });
        }
        var aLinjieH  = $list.offset().top+$list.height(); //左侧nav距离上面+自身的高度
        //console.log(aLinjieH)
        var ofootTop=$('.footer').offset().top; //footer 距离上面
        var oHtml_height=ofootTop+$('.footer').height();  //整个页面的高度
        var footbottom=oHtml_height-ofootTop; //footer的高度
        console.log(footbottom)
      // console.log('footer 距离上面'+ofootTop);
        var aTop=ofootTop-aLinjieH;
        var oTop=aLinjieH+aTop;
       // console.log('左侧nav距离上面+自身的高度'+oTop)

    });*/

});