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

function splash() {
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
            if ($('.swiper-pagination > span:last-child').hasClass('swiper-pagination-bullet-active'))
                clickable = true;
            else
                clickable = false;
        },
    },
});

$(".splash-slider .swiper-button-next").bind("click", function () {
    if (clickable) {
        $(".splash-slider").addClass('hide');
        $("body").removeClass('bdy-splash');
    }
});

$(".splash .close").bind('click', function () {
    $('input').attr('value', '');
    $('input').val('');

    $("body").addClass('bdy-splash');
    $(".splash-slider").removeClass('hide');
    swiper5.slideTo(0);
    $('.login-area').removeAttr('style');
    $('.request-area').css('display', 'none');
    $('.splash-screen').removeClass('hide bordernone active');

    splash();
});
// Splash Screen //











$(".news .show").bind('click', function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.category-open').removeClass('active');
        $('body').removeClass('hidden');
    } else {
        $(this).addClass('active');
        $('.category-open').addClass('active');
        $('body').addClass('hidden');
    }

});


$(".category-open .back .left").bind('click', function () {
    $(".news .show").removeClass('active');
    $('.category-open').removeClass('active');
    $('body').removeClass('hidden');
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJjb21wb25lbnRzL3Rvb2x0aXBzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3YkEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5qcy1leGFtcGxlLWJhc2ljLXNpbmdsZScpLnNlbGVjdDIoe1xyXG4gICAgICAgIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiAtMVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5yZXF1ZXN0LWludml0YXRpb25cIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLmxvZ2luLWFyZWFcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJChcIi5yZXF1ZXN0LWFyZWFcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG5cclxuICAgICAgICAkKFwiLmxvZ28tYXJlYSAubG9nb1wiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAkKFwiLmxvZ28tYXJlYSAucmVxdWVzdFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICB9KTsgXHJcblxyXG5cclxuICAgICQoXCIuY2xvc2UtYXJlYVwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQoXCIuY2xvc2UtbWVudVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJChcIi5jbG9zZS1tZW51XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLnByb2ZpbGUtYXJlYSA+IC5zZWFyY2hcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnByb2ZpbGUtYXJlYSA+IC5wcm9maWxlXCIpLmFkZENsYXNzKFwiaGlkZVwiKTtcclxuICAgICAgICAkKFwiLnByb2ZpbGUtYXJlYSA+IC5zZWFyY2hcIikuYWRkQ2xhc3MoXCJmaXhcIik7XHJcbiAgICAgICAgJChcIi5zZWFyY2gtZGl2XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuc2VhcmNoLWRpdiAuc2VhcmNoLWlucHV0ID4gLmJhY2tcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnByb2ZpbGUtYXJlYSA+IC5wcm9maWxlXCIpLnJlbW92ZUNsYXNzKFwiaGlkZVwiKTtcclxuICAgICAgICAkKFwiLnByb2ZpbGUtYXJlYSA+IC5zZWFyY2hcIikucmVtb3ZlQ2xhc3MoXCJmaXhcIik7XHJcbiAgICAgICAgJChcIi5zZWFyY2gtZGl2XCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGlmICghJChcIi5oZWFkZXIgPiAuY2xvc2UtYXJlYVwiKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoXCIuZmlsdGVycy10b3AgLnZpZXdzID4gc3BhblwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIuZmlsdGVycy10b3AgLnZpZXdzID4gc3BhblwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICQoJy53YXNob3VzZSAuaXRlbXMnKS5yZW1vdmVDbGFzcygnZm91ciB0d28nKTtcclxuICAgICAgICAkKCcud2FzaG91c2UgLml0ZW1zJykuYWRkQ2xhc3MoJCh0aGlzKS5hdHRyKCduYW1lJykpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvKiBGYWJyaWMgU2hvdy1Nb3JlICovXHJcbiAgICAkKFwiLnRhYnMgLmluZm8gPiAuc2hvdy1tb3JlXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuZmluZCgncCcpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvKiBUcmVuZHMgUG9wLXVwICovXHJcbiAgICAkKFwiLnRyZW5kcyA+IGEudmlldy1tb3JlXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJwb3AtaGlkXCIpO1xyXG4gICAgICAgICQodGhpcykubmV4dCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiLmZhYnJpY3MgPiAuaXRlbVwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwicG9wLWhpZFwiKTtcclxuICAgICAgICAkKHRoaXMpLm5leHQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG4gICAgJChcIi5wb3B1cC1pbiA+IGEuY2xvc2VcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcInBvcC1oaWRcIik7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLyogVHJlbmRzIFBhZ2UgKi9cclxuICAgICQoXCIudHJlbmRzLXBhZ2UgLml0ZW0gPiAuaW1nXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi50cmVuZHMtcGFnZSAuaXRlbVwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLyogRmlsdGVyIE9wZW4gQ2xvc2UgKi9cclxuICAgICQoXCIuZmlsdGVycy10b3AgPiAuZmlsdGVyc1wiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJChcIi5maWx0ZXItb3BlblwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoXCIuZmlsdGVyLW9wZW5cIikuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJChcIi5maWx0ZXItcm93ID4gLmJhY2sgPiAubGVmdFwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIuZmlsdGVyLW9wZW5cIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgJChcIi5maWx0ZXJzLXRvcCA+IC5maWx0ZXJzXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgIC8qIEZpbHRlciBMaXN0IE9wZW4gQ2xvc2UgKi9cclxuICAgICQoXCIuZmlsdGVyLXJvdyA+IHVsID4gbGkgPiBzcGFuXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5maWx0ZXItcm93ID4gdWwgPiBsaSA+IHNwYW5cIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoXCIuZmlsdGVyLXJvdyA+IHVsID4gbGkgPiAuZmlsdGVyLWluXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLm5leHQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIC8qIFdhc2hob3VzZSBDaG9vc2UgKi9cclxuICAgICQoXCIuaGVscCA+IHVsID4gbGkgPiBzcGFuXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5oZWxwID4gdWwgPiBsaSA+IHNwYW5cIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoXCIuaGVscCA+IHVsID4gbGkgPiAuZmlsdGVyLWluXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLm5leHQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIC8qIEZhYnJpYyBBcmNoaXZlIENvbGxldGlvbiBUYWJzICovXHJcbiAgICAkKFwiLnRhYnMgLmhlYWRzIHNwYW5cIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnRhYnMgLmhlYWRzIHNwYW5cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgJChcIi50YWJzID4gLmluXCIpLmFkZENsYXNzKCdub25lJyk7XHJcbiAgICAgICAgJChcIi50YWJzID4gLmluXCIpLmVxKCQodGhpcykuaW5kZXgoKSkucmVtb3ZlQ2xhc3MoJ25vbmUnKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgIHZhciBzd2lwZXIxID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgMTEwMDoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdmFyIHN3aXBlcjIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcjInLCB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHN3aXBlcjMgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcjMnLCB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHZhciBzd2lwZXI0ID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXI0Jywge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uOiB7XHJcbiAgICAgICAgICAgIHNsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLnJpZ2h0ID4gLnNsaWRlci10YWJzJykuYWRkQ2xhc3MoJ25vbmUnKTtcclxuICAgICAgICAgICAgICAgICQoJy5yaWdodCA+IC5zbGlkZXItdGFicycpLmVxKCQoJy5zd2lwZXItY29udGFpbmVyNCAuc3dpcGVyLXNsaWRlLnN3aXBlci1zbGlkZS1hY3RpdmUnKS5pbmRleCgpKS5yZW1vdmVDbGFzcygnbm9uZScpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJChcIi5zd2lwZXItY29udGFpbmVyNCAuc3dpcGVyLXNsaWRlXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc3dpcGVyNC5zbGlkZVRvKCQodGhpcykuaW5kZXgoKSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICRoZWFkID0gJCgnLnBhZ2UtdXAnKTtcclxuICAgICAgICBpZiAoJHRoaXMuc2Nyb2xsVG9wKCkgPiAyNTApIHtcclxuICAgICAgICAgICAgaWYgKCQoXCIuaXRlbXMtZGV0YWlscyAucmVxdWVzdFwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAkaGVhZC5hZGRDbGFzcygnYWN0aXZlMicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJGhlYWQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRoZWFkLnJlbW92ZUNsYXNzKCdhY3RpdmUyJyk7XHJcbiAgICAgICAgICAgICRoZWFkLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJChcIi5wYWdlLXVwXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxyXG4gICAgICAgIH0sIDYwMCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8qIENPVU5URVIgKi9cclxuICAgICQoXCIuaW5wdXQgYnV0dG9uLm1pbnVzXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG51bWJlciA9IHBhcnNlSW50KCQodGhpcykucGFyZW50KCkuZmluZChcImlucHV0XCIpLnZhbCgpKVxyXG4gICAgICAgIGlmIChudW1iZXIgPiAxKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuZmluZChcImlucHV0XCIpLnZhbChudW1iZXIgLT0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkKFwiLmlucHV0IGJ1dHRvbi5wbHVzXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG51bWJlciA9IHBhcnNlSW50KCQodGhpcykucGFyZW50KCkuZmluZChcImlucHV0XCIpLnZhbCgpKVxyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuZmluZChcImlucHV0XCIpLnZhbChudW1iZXIgKz0gMSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJChcIi5pdGVtcy1kZXRhaWxzIC5zZWUtYWxsXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoXCIudGV4dFwiKS5maW5kKFwicFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuY29sbGVjdGlvbnMtZGV0YWlscyAuaW5mbyA+IC5zZWUtYWxsXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoXCIuaW5mb1wiKS5maW5kKFwicFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4vKiAgZmFxICBzdGFydCAqL1xyXG4kKFwiLmZhcSB1bCBsaSAucXVlc3Rpb25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgIGlmICgkKHRoaXMpLnBhcmVudCgpLmhhc0NsYXNzKFwibm90XCIpKSB7XHJcbiAgICAgICAgJChcIi5mYXEgdWwgbGlcIikuYWRkQ2xhc3MoXCJub3RcIik7XHJcbiAgICAgICAgJChcIi5mYXEgdWwgbGlcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcIm5vdFwiKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKFwibm90XCIpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcblxyXG5cclxufSk7XHJcblxyXG4vKiAgZmFxIGVuZCAqL1xyXG5cclxuXHJcbi8qIFNob3cgUGFzc3dvcmQqL1xyXG4kKFwiLnNob3dwYXNzLXdvcmRcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwic2hvd1wiKSkge1xyXG4gICAgICAgICQodGhpcykucHJldigpLnByb3AoXCJ0eXBlXCIsIFwidGV4dFwiKTtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwic2hvd1wiKS5hZGRDbGFzcyhcImhpZGVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQodGhpcykucHJldigpLnByb3AoXCJ0eXBlXCIsIFwicGFzc3dvcmRcIik7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImhpZGVcIikuYWRkQ2xhc3MoXCJzaG93XCIpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG5cclxuLyogIFNlbGVjdCBCYXIgQ2hhbmdlICAqL1xyXG4kKFwiLmFjY291bnQtYXJlYSAuc2VsZWN0MlwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGRhdGUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJChcIi5yZXF1ZXN0LWJveCAuaXRlbVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygkKHRoaXMpLmF0dHIoXCJpdGVtVmFsdWVcIikpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJub25lXCIpO1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmF0dHIoXCJpdGVtVmFsdWVcIikgPT09IGRhdGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm5vbmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbi8qICBTZWxlY3QgQmFyIENoYW5nZSBTdGFydCAqL1xyXG4kKFwiLnNlbGVjdC1iYXIgLnNlbGVjdDJcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICQoXCIuc2VsZWN0LWJhciAuYmFyc1wiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICQoXCIuc2VsZWN0LWJhciAuYmFycyAuY29sb3JcIikuY3NzKFwid2lkdGhcIiwgXCIwXCIpO1xyXG4gICAgY2hhbmdlU2VsZWN0KCQodGhpcykudmFsKCkpO1xyXG59KTtcclxuXHJcblxyXG4vKiAgRmFicmljIFNlbGVjdGVkICovXHJcbiQoXCIuZmFicmljLXNlbGVjdCA+IC5pdGVtXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICQoXCIuZmFicmljLXNlbGVjdCA+IC5pdGVtXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICQoXCIuaXRlbXMtZGV0YWlscyAubGVmdCAuaW1nXCIpLmF0dHIoXCJzdHlsZVwiLCAkKHRoaXMpLmZpbmQoXCIuaW1nXCIpLmF0dHIoXCJzdHlsZVwiKSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY2hhbmdlU2VsZWN0KGUpIHtcclxuICAgICQoXCIuc2VsZWN0LWJhciAuYmFyc1wiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwib3B0aW9udmFsdWVcIikgPT09IGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgYmFybG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiYXJsb2FkKCkge1xyXG4gICAgJChcIi5iYXJzLmFjdGl2ZSAuYmFyXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuZmluZChcIi5jb2xvclwiKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgd2lkdGg6ICQodGhpcykuZmluZChcIi5jb2xvclwiKS5hdHRyKFwicmF0ZVwiKSArIFwiJVwiXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9KTtcclxufVxyXG4kKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJChcIi5iYXJzLmFjdGl2ZSAuYmFyXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBiYXJsb2FkKCk7XHJcbiAgICB9XHJcbn0pO1xyXG4vKiAgU2VsZWN0IEJhciBDaGFuZ2UgRW5kICovXHJcblxyXG5cclxuLyogUmFuZ2UgU2xpZGVyICovXHJcbnZhciBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZ2Utc2xpZGVyJyk7XHJcbmlmICgkKCcjcmFuZ2Utc2xpZGVyJykubGVuZ3RoID4gMCkge1xyXG4gICAgbm9VaVNsaWRlci5jcmVhdGUoc2xpZGVyLCB7XHJcbiAgICAgICAgc3RhcnQ6IFsyMCwgODBdLFxyXG4gICAgICAgIGNvbm5lY3Q6IHRydWUsXHJcbiAgICAgICAgcmFuZ2U6IHtcclxuICAgICAgICAgICAgJ21pbic6IDAsXHJcbiAgICAgICAgICAgICdtYXgnOiAxMDBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gU3BsYXNoIFNjcmVlbiBcclxuJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgc3BsYXNoKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc3BsYXNoKCkge1xyXG4gICAgaWYgKCQoJy5zcGxhc2gtc2NyZWVuJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICQoJy5zcGxhc2gtc2NyZWVuJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcuc3BsYXNoLXNjcmVlbicpLmFkZENsYXNzKCdib3JkZXJub25lJyk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLnNwbGFzaC1zY3JlZW4nKS5hZGRDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICB9LCAxNTAwKTtcclxuICAgICAgICB9LCAxNTAwKTtcclxuICAgIH1cclxufVxyXG5cclxudmFyIGNsaWNrYWJsZSA9IGZhbHNlO1xyXG52YXIgc3dpcGVyNSA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyNScsIHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBzcGFjZUJldHdlZW46IDAsXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICB9LFxyXG4gICAgb246IHtcclxuICAgICAgICBzbGlkZUNoYW5nZVRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQoJy5zd2lwZXItcGFnaW5hdGlvbiA+IHNwYW46bGFzdC1jaGlsZCcpLmhhc0NsYXNzKCdzd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlJykpXHJcbiAgICAgICAgICAgICAgICBjbGlja2FibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBjbGlja2FibGUgPSBmYWxzZTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSk7XHJcblxyXG4kKFwiLnNwbGFzaC1zbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dFwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGNsaWNrYWJsZSkge1xyXG4gICAgICAgICQoXCIuc3BsYXNoLXNsaWRlclwiKS5hZGRDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKCdiZHktc3BsYXNoJyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuJChcIi5zcGxhc2ggLmNsb3NlXCIpLmJpbmQoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnaW5wdXQnKS5hdHRyKCd2YWx1ZScsICcnKTtcclxuICAgICQoJ2lucHV0JykudmFsKCcnKTtcclxuXHJcbiAgICAkKFwiYm9keVwiKS5hZGRDbGFzcygnYmR5LXNwbGFzaCcpO1xyXG4gICAgJChcIi5zcGxhc2gtc2xpZGVyXCIpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICBzd2lwZXI1LnNsaWRlVG8oMCk7XHJcbiAgICAkKCcubG9naW4tYXJlYScpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAkKCcucmVxdWVzdC1hcmVhJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICQoJy5zcGxhc2gtc2NyZWVuJykucmVtb3ZlQ2xhc3MoJ2hpZGUgYm9yZGVybm9uZSBhY3RpdmUnKTtcclxuXHJcbiAgICBzcGxhc2goKTtcclxufSk7XHJcbi8vIFNwbGFzaCBTY3JlZW4gLy9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4kKFwiLm5ld3MgLnNob3dcIikuYmluZCgnY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcuY2F0ZWdvcnktb3BlbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcuY2F0ZWdvcnktb3BlbicpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG5cclxuJChcIi5jYXRlZ29yeS1vcGVuIC5iYWNrIC5sZWZ0XCIpLmJpbmQoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5uZXdzIC5zaG93XCIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJy5jYXRlZ29yeS1vcGVuJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxufSk7IiwiIl19
