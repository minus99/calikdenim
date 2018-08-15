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



    var swiper = new Swiper('.swiper-container', {
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


    var swiper = new Swiper('.swiper-container2', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

    var swiper = new Swiper('.swiper-container3', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });


    var swiper = new Swiper('.swiper-container4', {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
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
    $(".items-details .left .img").attr("style",$(this).find(".img").attr("style"));
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
if($('#range-slider').length > 0){
    noUiSlider.create(slider, {
        start: [20, 80],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJjb21wb25lbnRzL3Rvb2x0aXBzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFUQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLmpzLWV4YW1wbGUtYmFzaWMtc2luZ2xlJykuc2VsZWN0Mih7XHJcbiAgICAgICAgbWluaW11bVJlc3VsdHNGb3JTZWFyY2g6IC0xXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLnJlcXVlc3QtaW52aXRhdGlvblwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIubG9naW4tYXJlYVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAkKFwiLnJlcXVlc3QtYXJlYVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcblxyXG4gICAgICAgICQoXCIubG9nby1hcmVhIC5sb2dvXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICQoXCIubG9nby1hcmVhIC5yZXF1ZXN0XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKFwiLmNsb3NlLWFyZWFcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKFwiLmNsb3NlLW1lbnVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQoXCIuY2xvc2UtbWVudVwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5wcm9maWxlLWFyZWEgPiAuc2VhcmNoXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5wcm9maWxlLWFyZWEgPiAucHJvZmlsZVwiKS5hZGRDbGFzcyhcImhpZGVcIik7XHJcbiAgICAgICAgJChcIi5wcm9maWxlLWFyZWEgPiAuc2VhcmNoXCIpLmFkZENsYXNzKFwiZml4XCIpO1xyXG4gICAgICAgICQoXCIuc2VhcmNoLWRpdlwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLnNlYXJjaC1kaXYgLnNlYXJjaC1pbnB1dCA+IC5iYWNrXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5wcm9maWxlLWFyZWEgPiAucHJvZmlsZVwiKS5yZW1vdmVDbGFzcyhcImhpZGVcIik7XHJcbiAgICAgICAgJChcIi5wcm9maWxlLWFyZWEgPiAuc2VhcmNoXCIpLnJlbW92ZUNsYXNzKFwiZml4XCIpO1xyXG4gICAgICAgICQoXCIuc2VhcmNoLWRpdlwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICBpZiAoISQoXCIuaGVhZGVyID4gLmNsb3NlLWFyZWFcIikuaGFzQ2xhc3MoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKFwiLmZpbHRlcnMtdG9wIC52aWV3cyA+IHNwYW5cIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLmZpbHRlcnMtdG9wIC52aWV3cyA+IHNwYW5cIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAkKCcud2FzaG91c2UgLml0ZW1zJykucmVtb3ZlQ2xhc3MoJ2ZvdXIgdHdvJyk7XHJcbiAgICAgICAgJCgnLndhc2hvdXNlIC5pdGVtcycpLmFkZENsYXNzKCQodGhpcykuYXR0cignbmFtZScpKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLyogRmFicmljIFNob3ctTW9yZSAqL1xyXG4gICAgJChcIi50YWJzIC5pbmZvID4gLnNob3ctbW9yZVwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJ3AnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLyogVHJlbmRzIFBvcC11cCAqL1xyXG4gICAgJChcIi50cmVuZHMgPiBhLnZpZXctbW9yZVwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwicG9wLWhpZFwiKTtcclxuICAgICAgICAkKHRoaXMpLm5leHQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG4gICAgJChcIi5mYWJyaWNzID4gLml0ZW1cIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcInBvcC1oaWRcIik7XHJcbiAgICAgICAgJCh0aGlzKS5uZXh0KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxuICAgICQoXCIucG9wdXAtaW4gPiBhLmNsb3NlXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJwb3AtaGlkXCIpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIC8qIFRyZW5kcyBQYWdlICovXHJcbiAgICAkKFwiLnRyZW5kcy1wYWdlIC5pdGVtID4gLmltZ1wiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIudHJlbmRzLXBhZ2UgLml0ZW1cIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8qIEZpbHRlciBPcGVuIENsb3NlICovXHJcbiAgICAkKFwiLmZpbHRlcnMtdG9wID4gLmZpbHRlcnNcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoXCIuZmlsdGVyLW9wZW5cIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKFwiLmZpbHRlci1vcGVuXCIpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoXCIuZmlsdGVyLXJvdyA+IC5iYWNrID4gLmxlZnRcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLmZpbHRlci1vcGVuXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICQoXCIuZmlsdGVycy10b3AgPiAuZmlsdGVyc1wiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAvKiBGaWx0ZXIgTGlzdCBPcGVuIENsb3NlICovXHJcbiAgICAkKFwiLmZpbHRlci1yb3cgPiB1bCA+IGxpID4gc3BhblwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIuZmlsdGVyLXJvdyA+IHVsID4gbGkgPiBzcGFuXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKFwiLmZpbHRlci1yb3cgPiB1bCA+IGxpID4gLmZpbHRlci1pblwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5uZXh0KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgMTEwMDoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyMicsIHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXIzJywge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXI0Jywge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgJGhlYWQgPSAkKCcucGFnZS11cCcpO1xyXG4gICAgICAgIGlmICgkdGhpcy5zY3JvbGxUb3AoKSA+IDI1MCkge1xyXG4gICAgICAgICAgICBpZiAoJChcIi5pdGVtcy1kZXRhaWxzIC5yZXF1ZXN0XCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICRoZWFkLmFkZENsYXNzKCdhY3RpdmUyJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkaGVhZC5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGhlYWQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZTInKTtcclxuICAgICAgICAgICAgJGhlYWQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKFwiLnBhZ2UtdXBcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgICAgfSwgNjAwKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLyogQ09VTlRFUiAqL1xyXG4gICAgJChcIi5pbnB1dCBidXR0b24ubWludXNcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbnVtYmVyID0gcGFyc2VJbnQoJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwiaW5wdXRcIikudmFsKCkpXHJcbiAgICAgICAgaWYgKG51bWJlciA+IDEpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwiaW5wdXRcIikudmFsKG51bWJlciAtPSAxKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoXCIuaW5wdXQgYnV0dG9uLnBsdXNcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbnVtYmVyID0gcGFyc2VJbnQoJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwiaW5wdXRcIikudmFsKCkpXHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwiaW5wdXRcIikudmFsKG51bWJlciArPSAxKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKFwiLml0ZW1zLWRldGFpbHMgLnNlZS1hbGxcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudChcIi50ZXh0XCIpLmZpbmQoXCJwXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5jb2xsZWN0aW9ucy1kZXRhaWxzIC5pbmZvID4gLnNlZS1hbGxcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudChcIi5pbmZvXCIpLmZpbmQoXCJwXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbi8qICBmYXEgIHN0YXJ0ICovXHJcbiQoXCIuZmFxIHVsIGxpIC5xdWVzdGlvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgaWYgKCQodGhpcykucGFyZW50KCkuaGFzQ2xhc3MoXCJub3RcIikpIHtcclxuICAgICAgICAkKFwiLmZhcSB1bCBsaVwiKS5hZGRDbGFzcyhcIm5vdFwiKTtcclxuICAgICAgICAkKFwiLmZhcSB1bCBsaVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwibm90XCIpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoXCJub3RcIik7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuXHJcblxyXG59KTtcclxuXHJcbi8qICBmYXEgZW5kICovXHJcblxyXG5cclxuLyogU2hvdyBQYXNzd29yZCovXHJcbiQoXCIuc2hvd3Bhc3Mtd29yZFwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJzaG93XCIpKSB7XHJcbiAgICAgICAgJCh0aGlzKS5wcmV2KCkucHJvcChcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJzaG93XCIpLmFkZENsYXNzKFwiaGlkZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCh0aGlzKS5wcmV2KCkucHJvcChcInR5cGVcIiwgXCJwYXNzd29yZFwiKTtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiaGlkZVwiKS5hZGRDbGFzcyhcInNob3dcIik7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcblxyXG4vKiAgU2VsZWN0IEJhciBDaGFuZ2UgICovXHJcbiQoXCIuYWNjb3VudC1hcmVhIC5zZWxlY3QyXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgZGF0ZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkKFwiLnJlcXVlc3QtYm94IC5pdGVtXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCQodGhpcykuYXR0cihcIml0ZW1WYWx1ZVwiKSk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcIm5vbmVcIik7XHJcbiAgICAgICAgaWYgKCQodGhpcykuYXR0cihcIml0ZW1WYWx1ZVwiKSA9PT0gZGF0ZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwibm9uZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuLyogIFNlbGVjdCBCYXIgQ2hhbmdlIFN0YXJ0ICovXHJcbiQoXCIuc2VsZWN0LWJhciAuc2VsZWN0MlwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgJChcIi5zZWxlY3QtYmFyIC5iYXJzXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgJChcIi5zZWxlY3QtYmFyIC5iYXJzIC5jb2xvclwiKS5jc3MoXCJ3aWR0aFwiLCBcIjBcIik7XHJcbiAgICBjaGFuZ2VTZWxlY3QoJCh0aGlzKS52YWwoKSk7XHJcbn0pO1xyXG5cclxuXHJcbi8qICBGYWJyaWMgU2VsZWN0ZWQgKi9cclxuJChcIi5mYWJyaWMtc2VsZWN0ID4gLml0ZW1cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgJChcIi5mYWJyaWMtc2VsZWN0ID4gLml0ZW1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgJChcIi5pdGVtcy1kZXRhaWxzIC5sZWZ0IC5pbWdcIikuYXR0cihcInN0eWxlXCIsJCh0aGlzKS5maW5kKFwiLmltZ1wiKS5hdHRyKFwic3R5bGVcIikpO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVNlbGVjdChlKSB7XHJcbiAgICAkKFwiLnNlbGVjdC1iYXIgLmJhcnNcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykuYXR0cihcIm9wdGlvbnZhbHVlXCIpID09PSBlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGJhcmxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmFybG9hZCgpIHtcclxuICAgICQoXCIuYmFycy5hY3RpdmUgLmJhclwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoXCIuY29sb3JcIikuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHdpZHRoOiAkKHRoaXMpLmZpbmQoXCIuY29sb3JcIikuYXR0cihcInJhdGVcIikgKyBcIiVcIlxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfSk7XHJcbn1cclxuJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQoXCIuYmFycy5hY3RpdmUgLmJhclwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgYmFybG9hZCgpO1xyXG4gICAgfVxyXG59KTtcclxuLyogIFNlbGVjdCBCYXIgQ2hhbmdlIEVuZCAqL1xyXG5cclxuXHJcbi8qIFJhbmdlIFNsaWRlciAqL1xyXG52YXIgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmdlLXNsaWRlcicpO1xyXG5pZigkKCcjcmFuZ2Utc2xpZGVyJykubGVuZ3RoID4gMCl7XHJcbiAgICBub1VpU2xpZGVyLmNyZWF0ZShzbGlkZXIsIHtcclxuICAgICAgICBzdGFydDogWzIwLCA4MF0sXHJcbiAgICAgICAgY29ubmVjdDogdHJ1ZSxcclxuICAgICAgICByYW5nZToge1xyXG4gICAgICAgICAgICAnbWluJzogMCxcclxuICAgICAgICAgICAgJ21heCc6IDEwMFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59IiwiIl19
