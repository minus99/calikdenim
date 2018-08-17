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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJjb21wb25lbnRzL3Rvb2x0aXBzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3YkEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5qcy1leGFtcGxlLWJhc2ljLXNpbmdsZScpLnNlbGVjdDIoe1xyXG4gICAgICAgIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiAtMVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5yZXF1ZXN0LWludml0YXRpb25cIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLmxvZ2luLWFyZWFcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJChcIi5yZXF1ZXN0LWFyZWFcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG5cclxuICAgICAgICAkKFwiLmxvZ28tYXJlYSAubG9nb1wiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAkKFwiLmxvZ28tYXJlYSAucmVxdWVzdFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJChcIi5jbG9zZS1hcmVhXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJChcIi5jbG9zZS1tZW51XCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKFwiLmNsb3NlLW1lbnVcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIucHJvZmlsZS1hcmVhID4gLnNlYXJjaFwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIucHJvZmlsZS1hcmVhID4gLnByb2ZpbGVcIikuYWRkQ2xhc3MoXCJoaWRlXCIpO1xyXG4gICAgICAgICQoXCIucHJvZmlsZS1hcmVhID4gLnNlYXJjaFwiKS5hZGRDbGFzcyhcImZpeFwiKTtcclxuICAgICAgICAkKFwiLnNlYXJjaC1kaXZcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5zZWFyY2gtZGl2IC5zZWFyY2gtaW5wdXQgPiAuYmFja1wiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIucHJvZmlsZS1hcmVhID4gLnByb2ZpbGVcIikucmVtb3ZlQ2xhc3MoXCJoaWRlXCIpO1xyXG4gICAgICAgICQoXCIucHJvZmlsZS1hcmVhID4gLnNlYXJjaFwiKS5yZW1vdmVDbGFzcyhcImZpeFwiKTtcclxuICAgICAgICAkKFwiLnNlYXJjaC1kaXZcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgaWYgKCEkKFwiLmhlYWRlciA+IC5jbG9zZS1hcmVhXCIpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJChcIi5maWx0ZXJzLXRvcCAudmlld3MgPiBzcGFuXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5maWx0ZXJzLXRvcCAudmlld3MgPiBzcGFuXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgJCgnLndhc2hvdXNlIC5pdGVtcycpLnJlbW92ZUNsYXNzKCdmb3VyIHR3bycpO1xyXG4gICAgICAgICQoJy53YXNob3VzZSAuaXRlbXMnKS5hZGRDbGFzcygkKHRoaXMpLmF0dHIoJ25hbWUnKSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIC8qIEZhYnJpYyBTaG93LU1vcmUgKi9cclxuICAgICQoXCIudGFicyAuaW5mbyA+IC5zaG93LW1vcmVcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCdwJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIC8qIFRyZW5kcyBQb3AtdXAgKi9cclxuICAgICQoXCIudHJlbmRzID4gYS52aWV3LW1vcmVcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcInBvcC1oaWRcIik7XHJcbiAgICAgICAgJCh0aGlzKS5uZXh0KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxuICAgICQoXCIuZmFicmljcyA+IC5pdGVtXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJwb3AtaGlkXCIpO1xyXG4gICAgICAgICQodGhpcykubmV4dCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiLnBvcHVwLWluID4gYS5jbG9zZVwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwicG9wLWhpZFwiKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvKiBUcmVuZHMgUGFnZSAqL1xyXG4gICAgJChcIi50cmVuZHMtcGFnZSAuaXRlbSA+IC5pbWdcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnRyZW5kcy1wYWdlIC5pdGVtXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvKiBGaWx0ZXIgT3BlbiBDbG9zZSAqL1xyXG4gICAgJChcIi5maWx0ZXJzLXRvcCA+IC5maWx0ZXJzXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKFwiLmZpbHRlci1vcGVuXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJChcIi5maWx0ZXItb3BlblwiKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkKFwiLmZpbHRlci1yb3cgPiAuYmFjayA+IC5sZWZ0XCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5maWx0ZXItb3BlblwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAkKFwiLmZpbHRlcnMtdG9wID4gLmZpbHRlcnNcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgLyogRmlsdGVyIExpc3QgT3BlbiBDbG9zZSAqL1xyXG4gICAgJChcIi5maWx0ZXItcm93ID4gdWwgPiBsaSA+IHNwYW5cIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLmZpbHRlci1yb3cgPiB1bCA+IGxpID4gc3BhblwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJChcIi5maWx0ZXItcm93ID4gdWwgPiBsaSA+IC5maWx0ZXItaW5cIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQodGhpcykubmV4dCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLyogV2FzaGhvdXNlIENob29zZSAqL1xyXG4gICAgJChcIi5oZWxwID4gdWwgPiBsaSA+IHNwYW5cIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLmhlbHAgPiB1bCA+IGxpID4gc3BhblwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJChcIi5oZWxwID4gdWwgPiBsaSA+IC5maWx0ZXItaW5cIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQodGhpcykubmV4dCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLyogRmFicmljIEFyY2hpdmUgQ29sbGV0aW9uIFRhYnMgKi9cclxuICAgICQoXCIudGFicyAuaGVhZHMgc3BhblwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIudGFicyAuaGVhZHMgc3BhblwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICAkKFwiLnRhYnMgPiAuaW5cIikuYWRkQ2xhc3MoJ25vbmUnKTtcclxuICAgICAgICAkKFwiLnRhYnMgPiAuaW5cIikuZXEoJCh0aGlzKS5pbmRleCgpKS5yZW1vdmVDbGFzcygnbm9uZScpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgdmFyIHN3aXBlcjEgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiA1LFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAxMTAwOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB2YXIgc3dpcGVyMiA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyMicsIHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgc3dpcGVyMyA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyMycsIHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdmFyIHN3aXBlcjQgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcjQnLCB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb246IHtcclxuICAgICAgICAgICAgc2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcucmlnaHQgPiAuc2xpZGVyLXRhYnMnKS5hZGRDbGFzcygnbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnJpZ2h0ID4gLnNsaWRlci10YWJzJykuZXEoJCgnLnN3aXBlci1jb250YWluZXI0IC5zd2lwZXItc2xpZGUuc3dpcGVyLXNsaWRlLWFjdGl2ZScpLmluZGV4KCkpLnJlbW92ZUNsYXNzKCdub25lJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkKFwiLnN3aXBlci1jb250YWluZXI0IC5zd2lwZXItc2xpZGVcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzd2lwZXI0LnNsaWRlVG8oJCh0aGlzKS5pbmRleCgpKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgJGhlYWQgPSAkKCcucGFnZS11cCcpO1xyXG4gICAgICAgIGlmICgkdGhpcy5zY3JvbGxUb3AoKSA+IDI1MCkge1xyXG4gICAgICAgICAgICBpZiAoJChcIi5pdGVtcy1kZXRhaWxzIC5yZXF1ZXN0XCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICRoZWFkLmFkZENsYXNzKCdhY3RpdmUyJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkaGVhZC5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGhlYWQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZTInKTtcclxuICAgICAgICAgICAgJGhlYWQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKFwiLnBhZ2UtdXBcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgICAgfSwgNjAwKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLyogQ09VTlRFUiAqL1xyXG4gICAgJChcIi5pbnB1dCBidXR0b24ubWludXNcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbnVtYmVyID0gcGFyc2VJbnQoJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwiaW5wdXRcIikudmFsKCkpXHJcbiAgICAgICAgaWYgKG51bWJlciA+IDEpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwiaW5wdXRcIikudmFsKG51bWJlciAtPSAxKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoXCIuaW5wdXQgYnV0dG9uLnBsdXNcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbnVtYmVyID0gcGFyc2VJbnQoJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwiaW5wdXRcIikudmFsKCkpXHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwiaW5wdXRcIikudmFsKG51bWJlciArPSAxKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKFwiLml0ZW1zLWRldGFpbHMgLnNlZS1hbGxcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudChcIi50ZXh0XCIpLmZpbmQoXCJwXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5jb2xsZWN0aW9ucy1kZXRhaWxzIC5pbmZvID4gLnNlZS1hbGxcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudChcIi5pbmZvXCIpLmZpbmQoXCJwXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbi8qICBmYXEgIHN0YXJ0ICovXHJcbiQoXCIuZmFxIHVsIGxpIC5xdWVzdGlvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgaWYgKCQodGhpcykucGFyZW50KCkuaGFzQ2xhc3MoXCJub3RcIikpIHtcclxuICAgICAgICAkKFwiLmZhcSB1bCBsaVwiKS5hZGRDbGFzcyhcIm5vdFwiKTtcclxuICAgICAgICAkKFwiLmZhcSB1bCBsaVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwibm90XCIpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoXCJub3RcIik7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuXHJcblxyXG59KTtcclxuXHJcbi8qICBmYXEgZW5kICovXHJcblxyXG5cclxuLyogU2hvdyBQYXNzd29yZCovXHJcbiQoXCIuc2hvd3Bhc3Mtd29yZFwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJzaG93XCIpKSB7XHJcbiAgICAgICAgJCh0aGlzKS5wcmV2KCkucHJvcChcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJzaG93XCIpLmFkZENsYXNzKFwiaGlkZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCh0aGlzKS5wcmV2KCkucHJvcChcInR5cGVcIiwgXCJwYXNzd29yZFwiKTtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiaGlkZVwiKS5hZGRDbGFzcyhcInNob3dcIik7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcblxyXG4vKiAgU2VsZWN0IEJhciBDaGFuZ2UgICovXHJcbiQoXCIuYWNjb3VudC1hcmVhIC5zZWxlY3QyXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgZGF0ZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkKFwiLnJlcXVlc3QtYm94IC5pdGVtXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCQodGhpcykuYXR0cihcIml0ZW1WYWx1ZVwiKSk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcIm5vbmVcIik7XHJcbiAgICAgICAgaWYgKCQodGhpcykuYXR0cihcIml0ZW1WYWx1ZVwiKSA9PT0gZGF0ZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwibm9uZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuLyogIFNlbGVjdCBCYXIgQ2hhbmdlIFN0YXJ0ICovXHJcbiQoXCIuc2VsZWN0LWJhciAuc2VsZWN0MlwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgJChcIi5zZWxlY3QtYmFyIC5iYXJzXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgJChcIi5zZWxlY3QtYmFyIC5iYXJzIC5jb2xvclwiKS5jc3MoXCJ3aWR0aFwiLCBcIjBcIik7XHJcbiAgICBjaGFuZ2VTZWxlY3QoJCh0aGlzKS52YWwoKSk7XHJcbn0pO1xyXG5cclxuXHJcbi8qICBGYWJyaWMgU2VsZWN0ZWQgKi9cclxuJChcIi5mYWJyaWMtc2VsZWN0ID4gLml0ZW1cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgJChcIi5mYWJyaWMtc2VsZWN0ID4gLml0ZW1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgJChcIi5pdGVtcy1kZXRhaWxzIC5sZWZ0IC5pbWdcIikuYXR0cihcInN0eWxlXCIsICQodGhpcykuZmluZChcIi5pbWdcIikuYXR0cihcInN0eWxlXCIpKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VTZWxlY3QoZSkge1xyXG4gICAgJChcIi5zZWxlY3QtYmFyIC5iYXJzXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmF0dHIoXCJvcHRpb252YWx1ZVwiKSA9PT0gZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBiYXJsb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJhcmxvYWQoKSB7XHJcbiAgICAkKFwiLmJhcnMuYWN0aXZlIC5iYXJcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKFwiLmNvbG9yXCIpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICB3aWR0aDogJCh0aGlzKS5maW5kKFwiLmNvbG9yXCIpLmF0dHIoXCJyYXRlXCIpICsgXCIlXCJcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH0pO1xyXG59XHJcbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKFwiLmJhcnMuYWN0aXZlIC5iYXJcIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGJhcmxvYWQoKTtcclxuICAgIH1cclxufSk7XHJcbi8qICBTZWxlY3QgQmFyIENoYW5nZSBFbmQgKi9cclxuXHJcblxyXG4vKiBSYW5nZSBTbGlkZXIgKi9cclxudmFyIHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5nZS1zbGlkZXInKTtcclxuaWYgKCQoJyNyYW5nZS1zbGlkZXInKS5sZW5ndGggPiAwKSB7XHJcbiAgICBub1VpU2xpZGVyLmNyZWF0ZShzbGlkZXIsIHtcclxuICAgICAgICBzdGFydDogWzIwLCA4MF0sXHJcbiAgICAgICAgY29ubmVjdDogdHJ1ZSxcclxuICAgICAgICByYW5nZToge1xyXG4gICAgICAgICAgICAnbWluJzogMCxcclxuICAgICAgICAgICAgJ21heCc6IDEwMFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBTcGxhc2ggU2NyZWVuIFxyXG4kKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBzcGxhc2goKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBzcGxhc2goKSB7XHJcbiAgICBpZiAoJCgnLnNwbGFzaC1zY3JlZW4nKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgJCgnLnNwbGFzaC1zY3JlZW4nKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy5zcGxhc2gtc2NyZWVuJykuYWRkQ2xhc3MoJ2JvcmRlcm5vbmUnKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuc3BsYXNoLXNjcmVlbicpLmFkZENsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIH0sIDE1MDApO1xyXG4gICAgICAgIH0sIDE1MDApO1xyXG4gICAgfVxyXG59XHJcblxyXG52YXIgY2xpY2thYmxlID0gZmFsc2U7XHJcbnZhciBzd2lwZXI1ID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXI1Jywge1xyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcbiAgICBvbjoge1xyXG4gICAgICAgIHNsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCgnLnN3aXBlci1wYWdpbmF0aW9uID4gc3BhbjpsYXN0LWNoaWxkJykuaGFzQ2xhc3MoJ3N3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUnKSlcclxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbiQoXCIuc3BsYXNoLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoY2xpY2thYmxlKSB7XHJcbiAgICAgICAgJChcIi5zcGxhc2gtc2xpZGVyXCIpLmFkZENsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoJ2JkeS1zcGxhc2gnKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4kKFwiLnNwbGFzaCAuY2xvc2VcIikuYmluZCgnY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCdpbnB1dCcpLmF0dHIoJ3ZhbHVlJywgJycpO1xyXG4gICAgJCgnaW5wdXQnKS52YWwoJycpO1xyXG5cclxuICAgICQoXCJib2R5XCIpLmFkZENsYXNzKCdiZHktc3BsYXNoJyk7XHJcbiAgICAkKFwiLnNwbGFzaC1zbGlkZXJcIikucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgIHN3aXBlcjUuc2xpZGVUbygwKTtcclxuICAgICQoJy5sb2dpbi1hcmVhJykucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgICQoJy5yZXF1ZXN0LWFyZWEnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgJCgnLnNwbGFzaC1zY3JlZW4nKS5yZW1vdmVDbGFzcygnaGlkZSBib3JkZXJub25lIGFjdGl2ZScpO1xyXG5cclxuICAgIHNwbGFzaCgpO1xyXG59KTtcclxuLy8gU3BsYXNoIFNjcmVlbiAvL1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiQoXCIubmV3cyAuc2hvd1wiKS5iaW5kKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5jYXRlZ29yeS1vcGVuJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5jYXRlZ29yeS1vcGVuJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcblxyXG4kKFwiLmNhdGVnb3J5LW9wZW4gLmJhY2sgLmxlZnRcIikuYmluZCgnY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLm5ld3MgLnNob3dcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnLmNhdGVnb3J5LW9wZW4nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG59KTsiLCIiXX0=
