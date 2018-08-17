'use strict';

$(document).ready(function () {
    $('.js-example-basic-single').select2({
        minimumResultsForSearch: -1
    });

    $(".request-invitation").bind("click", function () {
        $(".login-area").css("display", "none");
        $(".request-area").css("display", "block");

        $(".logo-area .logo").css("display", "none");
        $(".logo-area .request").css("display", "block");
    });


    $(".close-area").bind("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(".close-menu").removeClass("active");
            $("body").removeClass("hidden");
        } else {
            $(this).addClass("active");
            $(".close-menu").addClass("active");
            $("body").addClass("hidden");
        }
    });

    $(".profile-area > .search").bind("click", function () {
        $(".profile-area > .profile").addClass("hide");
        $(".profile-area > .search").addClass("fix");
        $(".search-div").addClass("active");

        $("body").addClass("hidden");
    });

    $(".search-div .search-input > .back").bind("click", function () {
        $(".profile-area > .profile").removeClass("hide");
        $(".profile-area > .search").removeClass("fix");
        $(".search-div").removeClass("active");
        if (!$(".header > .close-area").hasClass("active")) {
            $("body").removeClass("hidden");
        }

    });


    $(".filters-top .views > span").bind("click", function () {
        $(".filters-top .views > span").removeClass('active');
        $(this).addClass('active');

        $('.washouse .items').removeClass('four two');
        $('.washouse .items').addClass($(this).attr('name'));
    });



    /* Fabric Show-More */
    $(".tabs .info > .show-more").bind("click", function () {
        $(this).css('display', 'none');
        $(this).parent().find('p').css('display', 'block');
    });



    /* Trends Pop-up */
    $(".trends > a.view-more").bind("click", function () {
        $("body").addClass("pop-hid");
        $(this).next().addClass("active");
    });
    $(".fabrics > .item").bind("click", function () {
        $("body").addClass("pop-hid");
        $(this).next().addClass("active");
    });
    $(".popup-in > a.close").bind("click", function () {
        $("body").removeClass("pop-hid");
        $(this).parent().parent().removeClass("active");
    });



    /* Trends Page */
    $(".trends-page .item > .img").bind("click", function () {
        $(".trends-page .item").removeClass('active');
        $(this).parent().addClass('active');
    });


    /* Filter Open Close */
    $(".filters-top > .filters").bind("click", function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(".filter-open").removeClass('active');
            $('body').addClass('hidden');
        } else {
            $(this).addClass('active');
            $(".filter-open").addClass('active');
            $('body').addClass('hidden');
        }
    });
    $(".filter-row > .back > .left").bind("click", function () {
        $(".filter-open").removeClass('active');
        $('body').removeClass('hidden');
        $(".filters-top > .filters").removeClass('active');
    });




    /* Filter List Open Close */
    $(".filter-row > ul > li > span").bind("click", function () {
        $(".filter-row > ul > li > span").removeClass('active');
        $(".filter-row > ul > li > .filter-in").removeClass('active');
        $(this).next().addClass('active');
        $(this).addClass('active');
    });



    /* Washhouse Choose */
    $(".help > ul > li > span").bind("click", function () {
        $(".help > ul > li > span").removeClass('active');
        $(".help > ul > li > .filter-in").removeClass('active');
        $(this).next().addClass('active');
        $(this).addClass('active');
    });



    /* Fabric Archive Colletion Tabs */
    $(".tabs .heads span").bind("click", function () {
        $(".tabs .heads span").removeClass("active");
        $(this).addClass("active");

        $(".tabs > .in").addClass('none');
        $(".tabs > .in").eq($(this).index()).removeClass('none');
    });




    var swiper1 = new Swiper('.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1100: {
                slidesPerView: 'auto',
                spaceBetween: 10,
            },
        }
    });


    var swiper2 = new Swiper('.swiper-container2', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

    var swiper3 = new Swiper('.swiper-container3', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });


    var swiper4 = new Swiper('.swiper-container4', {
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            slideChangeTransitionEnd: function () {
                $('.right > .slider-tabs').addClass('none'); 
                $('.right > .slider-tabs').eq($('.swiper-container4 .swiper-slide.swiper-slide-active').index()).removeClass('none'); 
            },
        }
    });
    $(".swiper-container4 .swiper-slide").bind("click", function () {
        swiper4.slideTo($(this).index());
    });






    $(window).scroll(function () {
        var $this = $(this),
            $head = $('.page-up');
        if ($this.scrollTop() > 250) {
            if ($(".items-details .request").length > 0) {
                $head.addClass('active2');
            } else {
                $head.addClass('active');
            }

        } else {
            $head.removeClass('active2');
            $head.removeClass('active');
        }
    });


    $(".page-up").bind("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


    /* COUNTER */
    $(".input button.minus").bind("click", function () {
        var number = parseInt($(this).parent().find("input").val())
        if (number > 1) {
            $(this).parent().find("input").val(number -= 1);
        }
    });
    $(".input button.plus").bind("click", function () {
        var number = parseInt($(this).parent().find("input").val())
        $(this).parent().find("input").val(number += 1);
    });


    $(".items-details .see-all").bind("click", function () {
        $(this).parent(".text").find("p").css("display", "block");
        $(this).css("display", "none");
    });

    $(".collections-details .info > .see-all").bind("click", function () {
        $(this).parent(".info").find("p").css("display", "block");
        $(this).css("display", "none");
    });
});


/*  faq  start */
$(".faq ul li .question").on("click", function (e) {

    if ($(this).parent().hasClass("not")) {
        $(".faq ul li").addClass("not");
        $(".faq ul li").removeClass("active");
        $(this).parent().removeClass("not");
        $(this).parent().addClass("active");
    } else {
        $(this).parent().addClass("not");
        $(this).parent().removeClass("active");
    }


});

/*  faq end */


/* Show Password*/
$(".showpass-word").bind("click", function () {
    if ($(this).hasClass("show")) {
        $(this).prev().prop("type", "text");
        $(this).removeClass("show").addClass("hide");
    } else {
        $(this).prev().prop("type", "password");
        $(this).removeClass("hide").addClass("show");
    }
});



/*  Select Bar Change  */
$(".account-area .select2").on("change", function (e) {
    var date = $(this).val();
    $(".request-box .item").each(function () {
        console.log($(this).attr("itemValue"));
        $(this).addClass("none");
        if ($(this).attr("itemValue") === date) {
            $(this).removeClass("none");
        }
    });
});


/*  Select Bar Change Start */
$(".select-bar .select2").on("change", function (e) {
    $(".select-bar .bars").removeClass("active");
    $(".select-bar .bars .color").css("width", "0");
    changeSelect($(this).val());
});


/*  Fabric Selected */
$(".fabric-select > .item").on("click", function (e) {
    $(".fabric-select > .item").removeClass("active");
    $(this).addClass("active");
    $(".items-details .left .img").attr("style", $(this).find(".img").attr("style"));
});




function changeSelect(e) {
    $(".select-bar .bars").each(function () {
        if ($(this).attr("optionvalue") === e) {
            $(this).addClass("active");
            barload();
        }
    });
}

function barload() {
    $(".bars.active .bar").each(function () {
        $(this).find(".color").animate({
            width: $(this).find(".color").attr("rate") + "%"
        }, 1000);
    });
}
$(window).on('load', function () {
    if ($(".bars.active .bar").length > 0) {
        barload();
    }
});
/*  Select Bar Change End */


/* Range Slider */
var slider = document.getElementById('range-slider');
if ($('#range-slider').length > 0) {
    noUiSlider.create(slider, {
        start: [20, 80],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });
}







// Splash Screen 
$(window).on('load', function () {
    splash();
});
function splash(){
    if ($('.splash-screen').length > 0) {
        $('.splash-screen').addClass('active');
        setTimeout(function () {
            $('.splash-screen').addClass('bordernone');
            setTimeout(function () {
                $('.splash-screen').addClass('hide');
            }, 1500);
        }, 1500);
    }
}

var clickable = false;
var swiper5 = new Swiper('.swiper-container5', {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        slideChangeTransitionEnd: function () {
          if($('.swiper-pagination > span:last-child').hasClass('swiper-pagination-bullet-active'))
            clickable = true;
          else
            clickable = false;
        },
      },
});

$(".splash-slider .swiper-button-next").bind("click",function(){
    if(clickable){
        $(".splash-slider").addClass('hide');
        $("body").removeClass('bdy-splash');
    }    
});

$(".splash .close").bind('click', function(){
    $('input').attr('value', '');  
    $('input').val('');  

    $("body").addClass('bdy-splash');
    $(".splash-slider").removeClass('hide');
    swiper5.slideTo(0);
    $('.login-area').removeAttr('style');
    $('.request-area').css('display','none');
    $('.splash-screen').removeClass('hide bordernone active');

    splash();
});
// Splash Screen //

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJjb21wb25lbnRzL3Rvb2x0aXBzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOVpBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcuanMtZXhhbXBsZS1iYXNpYy1zaW5nbGUnKS5zZWxlY3QyKHtcclxuICAgICAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogLTFcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIucmVxdWVzdC1pbnZpdGF0aW9uXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5sb2dpbi1hcmVhXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICQoXCIucmVxdWVzdC1hcmVhXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuXHJcbiAgICAgICAgJChcIi5sb2dvLWFyZWEgLmxvZ29cIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJChcIi5sb2dvLWFyZWEgLnJlcXVlc3RcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoXCIuY2xvc2UtYXJlYVwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQoXCIuY2xvc2UtbWVudVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJChcIi5jbG9zZS1tZW51XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLnByb2ZpbGUtYXJlYSA+IC5zZWFyY2hcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnByb2ZpbGUtYXJlYSA+IC5wcm9maWxlXCIpLmFkZENsYXNzKFwiaGlkZVwiKTtcclxuICAgICAgICAkKFwiLnByb2ZpbGUtYXJlYSA+IC5zZWFyY2hcIikuYWRkQ2xhc3MoXCJmaXhcIik7XHJcbiAgICAgICAgJChcIi5zZWFyY2gtZGl2XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuc2VhcmNoLWRpdiAuc2VhcmNoLWlucHV0ID4gLmJhY2tcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnByb2ZpbGUtYXJlYSA+IC5wcm9maWxlXCIpLnJlbW92ZUNsYXNzKFwiaGlkZVwiKTtcclxuICAgICAgICAkKFwiLnByb2ZpbGUtYXJlYSA+IC5zZWFyY2hcIikucmVtb3ZlQ2xhc3MoXCJmaXhcIik7XHJcbiAgICAgICAgJChcIi5zZWFyY2gtZGl2XCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGlmICghJChcIi5oZWFkZXIgPiAuY2xvc2UtYXJlYVwiKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoXCIuZmlsdGVycy10b3AgLnZpZXdzID4gc3BhblwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIuZmlsdGVycy10b3AgLnZpZXdzID4gc3BhblwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICQoJy53YXNob3VzZSAuaXRlbXMnKS5yZW1vdmVDbGFzcygnZm91ciB0d28nKTtcclxuICAgICAgICAkKCcud2FzaG91c2UgLml0ZW1zJykuYWRkQ2xhc3MoJCh0aGlzKS5hdHRyKCduYW1lJykpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvKiBGYWJyaWMgU2hvdy1Nb3JlICovXHJcbiAgICAkKFwiLnRhYnMgLmluZm8gPiAuc2hvdy1tb3JlXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuZmluZCgncCcpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvKiBUcmVuZHMgUG9wLXVwICovXHJcbiAgICAkKFwiLnRyZW5kcyA+IGEudmlldy1tb3JlXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJwb3AtaGlkXCIpO1xyXG4gICAgICAgICQodGhpcykubmV4dCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiLmZhYnJpY3MgPiAuaXRlbVwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwicG9wLWhpZFwiKTtcclxuICAgICAgICAkKHRoaXMpLm5leHQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG4gICAgJChcIi5wb3B1cC1pbiA+IGEuY2xvc2VcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcInBvcC1oaWRcIik7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLyogVHJlbmRzIFBhZ2UgKi9cclxuICAgICQoXCIudHJlbmRzLXBhZ2UgLml0ZW0gPiAuaW1nXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi50cmVuZHMtcGFnZSAuaXRlbVwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLyogRmlsdGVyIE9wZW4gQ2xvc2UgKi9cclxuICAgICQoXCIuZmlsdGVycy10b3AgPiAuZmlsdGVyc1wiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJChcIi5maWx0ZXItb3BlblwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoXCIuZmlsdGVyLW9wZW5cIikuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJChcIi5maWx0ZXItcm93ID4gLmJhY2sgPiAubGVmdFwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIuZmlsdGVyLW9wZW5cIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgJChcIi5maWx0ZXJzLXRvcCA+IC5maWx0ZXJzXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgIC8qIEZpbHRlciBMaXN0IE9wZW4gQ2xvc2UgKi9cclxuICAgICQoXCIuZmlsdGVyLXJvdyA+IHVsID4gbGkgPiBzcGFuXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5maWx0ZXItcm93ID4gdWwgPiBsaSA+IHNwYW5cIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoXCIuZmlsdGVyLXJvdyA+IHVsID4gbGkgPiAuZmlsdGVyLWluXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLm5leHQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIC8qIFdhc2hob3VzZSBDaG9vc2UgKi9cclxuICAgICQoXCIuaGVscCA+IHVsID4gbGkgPiBzcGFuXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5oZWxwID4gdWwgPiBsaSA+IHNwYW5cIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoXCIuaGVscCA+IHVsID4gbGkgPiAuZmlsdGVyLWluXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLm5leHQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIC8qIEZhYnJpYyBBcmNoaXZlIENvbGxldGlvbiBUYWJzICovXHJcbiAgICAkKFwiLnRhYnMgLmhlYWRzIHNwYW5cIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnRhYnMgLmhlYWRzIHNwYW5cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgJChcIi50YWJzID4gLmluXCIpLmFkZENsYXNzKCdub25lJyk7XHJcbiAgICAgICAgJChcIi50YWJzID4gLmluXCIpLmVxKCQodGhpcykuaW5kZXgoKSkucmVtb3ZlQ2xhc3MoJ25vbmUnKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgIHZhciBzd2lwZXIxID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgMTEwMDoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdmFyIHN3aXBlcjIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcjInLCB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHN3aXBlcjMgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcjMnLCB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHZhciBzd2lwZXI0ID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXI0Jywge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uOiB7XHJcbiAgICAgICAgICAgIHNsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLnJpZ2h0ID4gLnNsaWRlci10YWJzJykuYWRkQ2xhc3MoJ25vbmUnKTsgXHJcbiAgICAgICAgICAgICAgICAkKCcucmlnaHQgPiAuc2xpZGVyLXRhYnMnKS5lcSgkKCcuc3dpcGVyLWNvbnRhaW5lcjQgLnN3aXBlci1zbGlkZS5zd2lwZXItc2xpZGUtYWN0aXZlJykuaW5kZXgoKSkucmVtb3ZlQ2xhc3MoJ25vbmUnKTsgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkKFwiLnN3aXBlci1jb250YWluZXI0IC5zd2lwZXItc2xpZGVcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzd2lwZXI0LnNsaWRlVG8oJCh0aGlzKS5pbmRleCgpKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgJGhlYWQgPSAkKCcucGFnZS11cCcpO1xyXG4gICAgICAgIGlmICgkdGhpcy5zY3JvbGxUb3AoKSA+IDI1MCkge1xyXG4gICAgICAgICAgICBpZiAoJChcIi5pdGVtcy1kZXRhaWxzIC5yZXF1ZXN0XCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICRoZWFkLmFkZENsYXNzKCdhY3RpdmUyJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkaGVhZC5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGhlYWQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZTInKTtcclxuICAgICAgICAgICAgJGhlYWQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKFwiLnBhZ2UtdXBcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgICAgfSwgNjAwKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLyogQ09VTlRFUiAqL1xyXG4gICAgJChcIi5pbnB1dCBidXR0b24ubWludXNcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbnVtYmVyID0gcGFyc2VJbnQoJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwiaW5wdXRcIikudmFsKCkpXHJcbiAgICAgICAgaWYgKG51bWJlciA+IDEpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwiaW5wdXRcIikudmFsKG51bWJlciAtPSAxKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoXCIuaW5wdXQgYnV0dG9uLnBsdXNcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbnVtYmVyID0gcGFyc2VJbnQoJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwiaW5wdXRcIikudmFsKCkpXHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwiaW5wdXRcIikudmFsKG51bWJlciArPSAxKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKFwiLml0ZW1zLWRldGFpbHMgLnNlZS1hbGxcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudChcIi50ZXh0XCIpLmZpbmQoXCJwXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5jb2xsZWN0aW9ucy1kZXRhaWxzIC5pbmZvID4gLnNlZS1hbGxcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudChcIi5pbmZvXCIpLmZpbmQoXCJwXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbi8qICBmYXEgIHN0YXJ0ICovXHJcbiQoXCIuZmFxIHVsIGxpIC5xdWVzdGlvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgaWYgKCQodGhpcykucGFyZW50KCkuaGFzQ2xhc3MoXCJub3RcIikpIHtcclxuICAgICAgICAkKFwiLmZhcSB1bCBsaVwiKS5hZGRDbGFzcyhcIm5vdFwiKTtcclxuICAgICAgICAkKFwiLmZhcSB1bCBsaVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwibm90XCIpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoXCJub3RcIik7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuXHJcblxyXG59KTtcclxuXHJcbi8qICBmYXEgZW5kICovXHJcblxyXG5cclxuLyogU2hvdyBQYXNzd29yZCovXHJcbiQoXCIuc2hvd3Bhc3Mtd29yZFwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJzaG93XCIpKSB7XHJcbiAgICAgICAgJCh0aGlzKS5wcmV2KCkucHJvcChcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJzaG93XCIpLmFkZENsYXNzKFwiaGlkZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCh0aGlzKS5wcmV2KCkucHJvcChcInR5cGVcIiwgXCJwYXNzd29yZFwiKTtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiaGlkZVwiKS5hZGRDbGFzcyhcInNob3dcIik7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcblxyXG4vKiAgU2VsZWN0IEJhciBDaGFuZ2UgICovXHJcbiQoXCIuYWNjb3VudC1hcmVhIC5zZWxlY3QyXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgZGF0ZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkKFwiLnJlcXVlc3QtYm94IC5pdGVtXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCQodGhpcykuYXR0cihcIml0ZW1WYWx1ZVwiKSk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcIm5vbmVcIik7XHJcbiAgICAgICAgaWYgKCQodGhpcykuYXR0cihcIml0ZW1WYWx1ZVwiKSA9PT0gZGF0ZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwibm9uZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuLyogIFNlbGVjdCBCYXIgQ2hhbmdlIFN0YXJ0ICovXHJcbiQoXCIuc2VsZWN0LWJhciAuc2VsZWN0MlwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgJChcIi5zZWxlY3QtYmFyIC5iYXJzXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgJChcIi5zZWxlY3QtYmFyIC5iYXJzIC5jb2xvclwiKS5jc3MoXCJ3aWR0aFwiLCBcIjBcIik7XHJcbiAgICBjaGFuZ2VTZWxlY3QoJCh0aGlzKS52YWwoKSk7XHJcbn0pO1xyXG5cclxuXHJcbi8qICBGYWJyaWMgU2VsZWN0ZWQgKi9cclxuJChcIi5mYWJyaWMtc2VsZWN0ID4gLml0ZW1cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgJChcIi5mYWJyaWMtc2VsZWN0ID4gLml0ZW1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgJChcIi5pdGVtcy1kZXRhaWxzIC5sZWZ0IC5pbWdcIikuYXR0cihcInN0eWxlXCIsICQodGhpcykuZmluZChcIi5pbWdcIikuYXR0cihcInN0eWxlXCIpKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VTZWxlY3QoZSkge1xyXG4gICAgJChcIi5zZWxlY3QtYmFyIC5iYXJzXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmF0dHIoXCJvcHRpb252YWx1ZVwiKSA9PT0gZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBiYXJsb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJhcmxvYWQoKSB7XHJcbiAgICAkKFwiLmJhcnMuYWN0aXZlIC5iYXJcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKFwiLmNvbG9yXCIpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICB3aWR0aDogJCh0aGlzKS5maW5kKFwiLmNvbG9yXCIpLmF0dHIoXCJyYXRlXCIpICsgXCIlXCJcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH0pO1xyXG59XHJcbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKFwiLmJhcnMuYWN0aXZlIC5iYXJcIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGJhcmxvYWQoKTtcclxuICAgIH1cclxufSk7XHJcbi8qICBTZWxlY3QgQmFyIENoYW5nZSBFbmQgKi9cclxuXHJcblxyXG4vKiBSYW5nZSBTbGlkZXIgKi9cclxudmFyIHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5nZS1zbGlkZXInKTtcclxuaWYgKCQoJyNyYW5nZS1zbGlkZXInKS5sZW5ndGggPiAwKSB7XHJcbiAgICBub1VpU2xpZGVyLmNyZWF0ZShzbGlkZXIsIHtcclxuICAgICAgICBzdGFydDogWzIwLCA4MF0sXHJcbiAgICAgICAgY29ubmVjdDogdHJ1ZSxcclxuICAgICAgICByYW5nZToge1xyXG4gICAgICAgICAgICAnbWluJzogMCxcclxuICAgICAgICAgICAgJ21heCc6IDEwMFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBTcGxhc2ggU2NyZWVuIFxyXG4kKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBzcGxhc2goKTtcclxufSk7XHJcbmZ1bmN0aW9uIHNwbGFzaCgpe1xyXG4gICAgaWYgKCQoJy5zcGxhc2gtc2NyZWVuJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICQoJy5zcGxhc2gtc2NyZWVuJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcuc3BsYXNoLXNjcmVlbicpLmFkZENsYXNzKCdib3JkZXJub25lJyk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLnNwbGFzaC1zY3JlZW4nKS5hZGRDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICB9LCAxNTAwKTtcclxuICAgICAgICB9LCAxNTAwKTtcclxuICAgIH1cclxufVxyXG5cclxudmFyIGNsaWNrYWJsZSA9IGZhbHNlO1xyXG52YXIgc3dpcGVyNSA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyNScsIHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBzcGFjZUJldHdlZW46IDAsXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICB9LFxyXG4gICAgb246IHtcclxuICAgICAgICBzbGlkZUNoYW5nZVRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmKCQoJy5zd2lwZXItcGFnaW5hdGlvbiA+IHNwYW46bGFzdC1jaGlsZCcpLmhhc0NsYXNzKCdzd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlJykpXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbn0pO1xyXG5cclxuJChcIi5zcGxhc2gtc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHRcIikuYmluZChcImNsaWNrXCIsZnVuY3Rpb24oKXtcclxuICAgIGlmKGNsaWNrYWJsZSl7XHJcbiAgICAgICAgJChcIi5zcGxhc2gtc2xpZGVyXCIpLmFkZENsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoJ2JkeS1zcGxhc2gnKTtcclxuICAgIH0gICAgXHJcbn0pO1xyXG5cclxuJChcIi5zcGxhc2ggLmNsb3NlXCIpLmJpbmQoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICQoJ2lucHV0JykuYXR0cigndmFsdWUnLCAnJyk7ICBcclxuICAgICQoJ2lucHV0JykudmFsKCcnKTsgIFxyXG5cclxuICAgICQoXCJib2R5XCIpLmFkZENsYXNzKCdiZHktc3BsYXNoJyk7XHJcbiAgICAkKFwiLnNwbGFzaC1zbGlkZXJcIikucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgIHN3aXBlcjUuc2xpZGVUbygwKTtcclxuICAgICQoJy5sb2dpbi1hcmVhJykucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgICQoJy5yZXF1ZXN0LWFyZWEnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAkKCcuc3BsYXNoLXNjcmVlbicpLnJlbW92ZUNsYXNzKCdoaWRlIGJvcmRlcm5vbmUgYWN0aXZlJyk7XHJcblxyXG4gICAgc3BsYXNoKCk7XHJcbn0pO1xyXG4vLyBTcGxhc2ggU2NyZWVuIC8vIiwiIl19
