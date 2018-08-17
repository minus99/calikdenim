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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJjb21wb25lbnRzL3Rvb2x0aXBzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeFpBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcuanMtZXhhbXBsZS1iYXNpYy1zaW5nbGUnKS5zZWxlY3QyKHtcclxuICAgICAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogLTFcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIucmVxdWVzdC1pbnZpdGF0aW9uXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5sb2dpbi1hcmVhXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICQoXCIucmVxdWVzdC1hcmVhXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuXHJcbiAgICAgICAgJChcIi5sb2dvLWFyZWEgLmxvZ29cIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJChcIi5sb2dvLWFyZWEgLnJlcXVlc3RcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoXCIuY2xvc2UtYXJlYVwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQoXCIuY2xvc2UtbWVudVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJChcIi5jbG9zZS1tZW51XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLnByb2ZpbGUtYXJlYSA+IC5zZWFyY2hcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnByb2ZpbGUtYXJlYSA+IC5wcm9maWxlXCIpLmFkZENsYXNzKFwiaGlkZVwiKTtcclxuICAgICAgICAkKFwiLnByb2ZpbGUtYXJlYSA+IC5zZWFyY2hcIikuYWRkQ2xhc3MoXCJmaXhcIik7XHJcbiAgICAgICAgJChcIi5zZWFyY2gtZGl2XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuc2VhcmNoLWRpdiAuc2VhcmNoLWlucHV0ID4gLmJhY2tcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnByb2ZpbGUtYXJlYSA+IC5wcm9maWxlXCIpLnJlbW92ZUNsYXNzKFwiaGlkZVwiKTtcclxuICAgICAgICAkKFwiLnByb2ZpbGUtYXJlYSA+IC5zZWFyY2hcIikucmVtb3ZlQ2xhc3MoXCJmaXhcIik7XHJcbiAgICAgICAgJChcIi5zZWFyY2gtZGl2XCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGlmICghJChcIi5oZWFkZXIgPiAuY2xvc2UtYXJlYVwiKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoXCIuZmlsdGVycy10b3AgLnZpZXdzID4gc3BhblwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIuZmlsdGVycy10b3AgLnZpZXdzID4gc3BhblwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICQoJy53YXNob3VzZSAuaXRlbXMnKS5yZW1vdmVDbGFzcygnZm91ciB0d28nKTtcclxuICAgICAgICAkKCcud2FzaG91c2UgLml0ZW1zJykuYWRkQ2xhc3MoJCh0aGlzKS5hdHRyKCduYW1lJykpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvKiBGYWJyaWMgU2hvdy1Nb3JlICovXHJcbiAgICAkKFwiLnRhYnMgLmluZm8gPiAuc2hvdy1tb3JlXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuZmluZCgncCcpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvKiBUcmVuZHMgUG9wLXVwICovXHJcbiAgICAkKFwiLnRyZW5kcyA+IGEudmlldy1tb3JlXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJwb3AtaGlkXCIpO1xyXG4gICAgICAgICQodGhpcykubmV4dCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiLmZhYnJpY3MgPiAuaXRlbVwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwicG9wLWhpZFwiKTtcclxuICAgICAgICAkKHRoaXMpLm5leHQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG4gICAgJChcIi5wb3B1cC1pbiA+IGEuY2xvc2VcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcInBvcC1oaWRcIik7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLyogVHJlbmRzIFBhZ2UgKi9cclxuICAgICQoXCIudHJlbmRzLXBhZ2UgLml0ZW0gPiAuaW1nXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi50cmVuZHMtcGFnZSAuaXRlbVwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLyogRmlsdGVyIE9wZW4gQ2xvc2UgKi9cclxuICAgICQoXCIuZmlsdGVycy10b3AgPiAuZmlsdGVyc1wiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJChcIi5maWx0ZXItb3BlblwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoXCIuZmlsdGVyLW9wZW5cIikuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJChcIi5maWx0ZXItcm93ID4gLmJhY2sgPiAubGVmdFwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIuZmlsdGVyLW9wZW5cIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgJChcIi5maWx0ZXJzLXRvcCA+IC5maWx0ZXJzXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgIC8qIEZpbHRlciBMaXN0IE9wZW4gQ2xvc2UgKi9cclxuICAgICQoXCIuZmlsdGVyLXJvdyA+IHVsID4gbGkgPiBzcGFuXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5maWx0ZXItcm93ID4gdWwgPiBsaSA+IHNwYW5cIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoXCIuZmlsdGVyLXJvdyA+IHVsID4gbGkgPiAuZmlsdGVyLWluXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLm5leHQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIC8qIFdhc2hob3VzZSBDaG9vc2UgKi9cclxuICAgICQoXCIuaGVscCA+IHVsID4gbGkgPiBzcGFuXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5oZWxwID4gdWwgPiBsaSA+IHNwYW5cIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoXCIuaGVscCA+IHVsID4gbGkgPiAuZmlsdGVyLWluXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLm5leHQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIC8qIEZhYnJpYyBBcmNoaXZlIENvbGxldGlvbiBUYWJzICovXHJcbiAgICAkKFwiLnRhYnMgLmhlYWRzIHNwYW5cIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnRhYnMgLmhlYWRzIHNwYW5cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgJChcIi50YWJzID4gLmluXCIpLmFkZENsYXNzKCdub25lJyk7XHJcbiAgICAgICAgJChcIi50YWJzID4gLmluXCIpLmVxKCQodGhpcykuaW5kZXgoKSkucmVtb3ZlQ2xhc3MoJ25vbmUnKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgIHZhciBzd2lwZXIxID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgMTEwMDoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdmFyIHN3aXBlcjIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcjInLCB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHN3aXBlcjMgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcjMnLCB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHZhciBzd2lwZXI0ID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXI0Jywge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoXCIuc3dpcGVyLWNvbnRhaW5lcjQgLnN3aXBlci1zbGlkZVwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHN3aXBlcjQuc2xpZGVUbygkKHRoaXMpLmluZGV4KCkpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAkaGVhZCA9ICQoJy5wYWdlLXVwJyk7XHJcbiAgICAgICAgaWYgKCR0aGlzLnNjcm9sbFRvcCgpID4gMjUwKSB7XHJcbiAgICAgICAgICAgIGlmICgkKFwiLml0ZW1zLWRldGFpbHMgLnJlcXVlc3RcIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgJGhlYWQuYWRkQ2xhc3MoJ2FjdGl2ZTInKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRoZWFkLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkaGVhZC5yZW1vdmVDbGFzcygnYWN0aXZlMicpO1xyXG4gICAgICAgICAgICAkaGVhZC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoXCIucGFnZS11cFwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcclxuICAgICAgICB9LCA2MDApO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvKiBDT1VOVEVSICovXHJcbiAgICAkKFwiLmlucHV0IGJ1dHRvbi5taW51c1wiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBudW1iZXIgPSBwYXJzZUludCgkKHRoaXMpLnBhcmVudCgpLmZpbmQoXCJpbnB1dFwiKS52YWwoKSlcclxuICAgICAgICBpZiAobnVtYmVyID4gMSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoXCJpbnB1dFwiKS52YWwobnVtYmVyIC09IDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJChcIi5pbnB1dCBidXR0b24ucGx1c1wiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBudW1iZXIgPSBwYXJzZUludCgkKHRoaXMpLnBhcmVudCgpLmZpbmQoXCJpbnB1dFwiKS52YWwoKSlcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoXCJpbnB1dFwiKS52YWwobnVtYmVyICs9IDEpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoXCIuaXRlbXMtZGV0YWlscyAuc2VlLWFsbFwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykucGFyZW50KFwiLnRleHRcIikuZmluZChcInBcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLmNvbGxlY3Rpb25zLWRldGFpbHMgLmluZm8gPiAuc2VlLWFsbFwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykucGFyZW50KFwiLmluZm9cIikuZmluZChcInBcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuLyogIGZhcSAgc3RhcnQgKi9cclxuJChcIi5mYXEgdWwgbGkgLnF1ZXN0aW9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICBpZiAoJCh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcyhcIm5vdFwiKSkge1xyXG4gICAgICAgICQoXCIuZmFxIHVsIGxpXCIpLmFkZENsYXNzKFwibm90XCIpO1xyXG4gICAgICAgICQoXCIuZmFxIHVsIGxpXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJub3RcIik7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcyhcIm5vdFwiKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0pO1xyXG5cclxuLyogIGZhcSBlbmQgKi9cclxuXHJcblxyXG4vKiBTaG93IFBhc3N3b3JkKi9cclxuJChcIi5zaG93cGFzcy13b3JkXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcInNob3dcIikpIHtcclxuICAgICAgICAkKHRoaXMpLnByZXYoKS5wcm9wKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcInNob3dcIikuYWRkQ2xhc3MoXCJoaWRlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKHRoaXMpLnByZXYoKS5wcm9wKFwidHlwZVwiLCBcInBhc3N3b3JkXCIpO1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJoaWRlXCIpLmFkZENsYXNzKFwic2hvd1wiKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuXHJcbi8qICBTZWxlY3QgQmFyIENoYW5nZSAgKi9cclxuJChcIi5hY2NvdW50LWFyZWEgLnNlbGVjdDJcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBkYXRlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQoXCIucmVxdWVzdC1ib3ggLml0ZW1cIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJCh0aGlzKS5hdHRyKFwiaXRlbVZhbHVlXCIpKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwibm9uZVwiKTtcclxuICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwiaXRlbVZhbHVlXCIpID09PSBkYXRlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJub25lXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4vKiAgU2VsZWN0IEJhciBDaGFuZ2UgU3RhcnQgKi9cclxuJChcIi5zZWxlY3QtYmFyIC5zZWxlY3QyXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkKFwiLnNlbGVjdC1iYXIgLmJhcnNcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAkKFwiLnNlbGVjdC1iYXIgLmJhcnMgLmNvbG9yXCIpLmNzcyhcIndpZHRoXCIsIFwiMFwiKTtcclxuICAgIGNoYW5nZVNlbGVjdCgkKHRoaXMpLnZhbCgpKTtcclxufSk7XHJcblxyXG5cclxuLyogIEZhYnJpYyBTZWxlY3RlZCAqL1xyXG4kKFwiLmZhYnJpYy1zZWxlY3QgPiAuaXRlbVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkKFwiLmZhYnJpYy1zZWxlY3QgPiAuaXRlbVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAkKFwiLml0ZW1zLWRldGFpbHMgLmxlZnQgLmltZ1wiKS5hdHRyKFwic3R5bGVcIiwgJCh0aGlzKS5maW5kKFwiLmltZ1wiKS5hdHRyKFwic3R5bGVcIikpO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVNlbGVjdChlKSB7XHJcbiAgICAkKFwiLnNlbGVjdC1iYXIgLmJhcnNcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykuYXR0cihcIm9wdGlvbnZhbHVlXCIpID09PSBlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGJhcmxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmFybG9hZCgpIHtcclxuICAgICQoXCIuYmFycy5hY3RpdmUgLmJhclwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoXCIuY29sb3JcIikuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHdpZHRoOiAkKHRoaXMpLmZpbmQoXCIuY29sb3JcIikuYXR0cihcInJhdGVcIikgKyBcIiVcIlxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfSk7XHJcbn1cclxuJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQoXCIuYmFycy5hY3RpdmUgLmJhclwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgYmFybG9hZCgpO1xyXG4gICAgfVxyXG59KTtcclxuLyogIFNlbGVjdCBCYXIgQ2hhbmdlIEVuZCAqL1xyXG5cclxuXHJcbi8qIFJhbmdlIFNsaWRlciAqL1xyXG52YXIgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmdlLXNsaWRlcicpO1xyXG5pZiAoJCgnI3JhbmdlLXNsaWRlcicpLmxlbmd0aCA+IDApIHtcclxuICAgIG5vVWlTbGlkZXIuY3JlYXRlKHNsaWRlciwge1xyXG4gICAgICAgIHN0YXJ0OiBbMjAsIDgwXSxcclxuICAgICAgICBjb25uZWN0OiB0cnVlLFxyXG4gICAgICAgIHJhbmdlOiB7XHJcbiAgICAgICAgICAgICdtaW4nOiAwLFxyXG4gICAgICAgICAgICAnbWF4JzogMTAwXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIFNwbGFzaCBTY3JlZW4gXHJcbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHNwbGFzaCgpO1xyXG59KTtcclxuZnVuY3Rpb24gc3BsYXNoKCl7XHJcbiAgICBpZiAoJCgnLnNwbGFzaC1zY3JlZW4nKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgJCgnLnNwbGFzaC1zY3JlZW4nKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy5zcGxhc2gtc2NyZWVuJykuYWRkQ2xhc3MoJ2JvcmRlcm5vbmUnKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuc3BsYXNoLXNjcmVlbicpLmFkZENsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIH0sIDE1MDApO1xyXG4gICAgICAgIH0sIDE1MDApO1xyXG4gICAgfVxyXG59XHJcblxyXG52YXIgY2xpY2thYmxlID0gZmFsc2U7XHJcbnZhciBzd2lwZXI1ID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXI1Jywge1xyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcbiAgICBvbjoge1xyXG4gICAgICAgIHNsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgaWYoJCgnLnN3aXBlci1wYWdpbmF0aW9uID4gc3BhbjpsYXN0LWNoaWxkJykuaGFzQ2xhc3MoJ3N3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUnKSlcclxuICAgICAgICAgICAgY2xpY2thYmxlID0gdHJ1ZTtcclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgY2xpY2thYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxufSk7XHJcblxyXG4kKFwiLnNwbGFzaC1zbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dFwiKS5iaW5kKFwiY2xpY2tcIixmdW5jdGlvbigpe1xyXG4gICAgaWYoY2xpY2thYmxlKXtcclxuICAgICAgICAkKFwiLnNwbGFzaC1zbGlkZXJcIikuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcygnYmR5LXNwbGFzaCcpO1xyXG4gICAgfSAgICBcclxufSk7XHJcblxyXG4kKFwiLnNwbGFzaCAuY2xvc2VcIikuYmluZCgnY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnaW5wdXQnKS5hdHRyKCd2YWx1ZScsICcnKTsgIFxyXG4gICAgJCgnaW5wdXQnKS52YWwoJycpOyAgXHJcblxyXG4gICAgJChcImJvZHlcIikuYWRkQ2xhc3MoJ2JkeS1zcGxhc2gnKTtcclxuICAgICQoXCIuc3BsYXNoLXNsaWRlclwiKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgc3dpcGVyNS5zbGlkZVRvKDApO1xyXG4gICAgJCgnLmxvZ2luLWFyZWEnKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgJCgnLnJlcXVlc3QtYXJlYScpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgICQoJy5zcGxhc2gtc2NyZWVuJykucmVtb3ZlQ2xhc3MoJ2hpZGUgYm9yZGVybm9uZSBhY3RpdmUnKTtcclxuXHJcbiAgICBzcGxhc2goKTtcclxufSk7XHJcbi8vIFNwbGFzaCBTY3JlZW4gLy8iLCIiXX0=
