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
        $(this).css('display','none');
        $(this).parent().find('p').css('display','block');
    });



    /* Trends Pop-up */
    $(".trends > a.view-more").bind("click", function () {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJjb21wb25lbnRzL3Rvb2x0aXBzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JQQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLmpzLWV4YW1wbGUtYmFzaWMtc2luZ2xlJykuc2VsZWN0Mih7XHJcbiAgICAgICAgbWluaW11bVJlc3VsdHNGb3JTZWFyY2g6IC0xXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLnJlcXVlc3QtaW52aXRhdGlvblwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIubG9naW4tYXJlYVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAkKFwiLnJlcXVlc3QtYXJlYVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcblxyXG4gICAgICAgICQoXCIubG9nby1hcmVhIC5sb2dvXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICQoXCIubG9nby1hcmVhIC5yZXF1ZXN0XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKFwiLmNsb3NlLWFyZWFcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKFwiLmNsb3NlLW1lbnVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQoXCIuY2xvc2UtbWVudVwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5wcm9maWxlLWFyZWEgPiAuc2VhcmNoXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5wcm9maWxlLWFyZWEgPiAucHJvZmlsZVwiKS5hZGRDbGFzcyhcImhpZGVcIik7XHJcbiAgICAgICAgJChcIi5wcm9maWxlLWFyZWEgPiAuc2VhcmNoXCIpLmFkZENsYXNzKFwiZml4XCIpO1xyXG4gICAgICAgICQoXCIuc2VhcmNoLWRpdlwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLnNlYXJjaC1kaXYgLnNlYXJjaC1pbnB1dCA+IC5iYWNrXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5wcm9maWxlLWFyZWEgPiAucHJvZmlsZVwiKS5yZW1vdmVDbGFzcyhcImhpZGVcIik7XHJcbiAgICAgICAgJChcIi5wcm9maWxlLWFyZWEgPiAuc2VhcmNoXCIpLnJlbW92ZUNsYXNzKFwiZml4XCIpO1xyXG4gICAgICAgICQoXCIuc2VhcmNoLWRpdlwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICBpZiAoISQoXCIuaGVhZGVyID4gLmNsb3NlLWFyZWFcIikuaGFzQ2xhc3MoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKFwiLmZpbHRlcnMtdG9wIC52aWV3cyA+IHNwYW5cIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLmZpbHRlcnMtdG9wIC52aWV3cyA+IHNwYW5cIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAkKCcud2FzaG91c2UgLml0ZW1zJykucmVtb3ZlQ2xhc3MoJ2ZvdXIgdHdvJyk7XHJcbiAgICAgICAgJCgnLndhc2hvdXNlIC5pdGVtcycpLmFkZENsYXNzKCQodGhpcykuYXR0cignbmFtZScpKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgIC8qIEZhYnJpYyBTaG93LU1vcmUgKi9cclxuICAgICQoXCIudGFicyAuaW5mbyA+IC5zaG93LW1vcmVcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJ3AnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvKiBUcmVuZHMgUG9wLXVwICovXHJcbiAgICAkKFwiLnRyZW5kcyA+IGEudmlldy1tb3JlXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJwb3AtaGlkXCIpO1xyXG4gICAgICAgICQodGhpcykubmV4dCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiLnBvcHVwLWluID4gYS5jbG9zZVwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwicG9wLWhpZFwiKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvKiBUcmVuZHMgUGFnZSAqL1xyXG4gICAgJChcIi50cmVuZHMtcGFnZSAuaXRlbSA+IC5pbWdcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnRyZW5kcy1wYWdlIC5pdGVtXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiA1LFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAxMTAwOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXIyJywge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcjMnLCB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAkaGVhZCA9ICQoJy5wYWdlLXVwJyk7XHJcbiAgICAgICAgaWYgKCR0aGlzLnNjcm9sbFRvcCgpID4gMjUwKSB7XHJcbiAgICAgICAgICAgIGlmICgkKFwiLml0ZW1zLWRldGFpbHMgLnJlcXVlc3RcIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgJGhlYWQuYWRkQ2xhc3MoJ2FjdGl2ZTInKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRoZWFkLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkaGVhZC5yZW1vdmVDbGFzcygnYWN0aXZlMicpO1xyXG4gICAgICAgICAgICAkaGVhZC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoXCIucGFnZS11cFwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcclxuICAgICAgICB9LCA2MDApO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvKiBDT1VOVEVSICovXHJcbiAgICAkKFwiLmlucHV0IGJ1dHRvbi5taW51c1wiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBudW1iZXIgPSBwYXJzZUludCgkKHRoaXMpLnBhcmVudCgpLmZpbmQoXCJpbnB1dFwiKS52YWwoKSlcclxuICAgICAgICBpZiAobnVtYmVyID4gMSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoXCJpbnB1dFwiKS52YWwobnVtYmVyIC09IDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJChcIi5pbnB1dCBidXR0b24ucGx1c1wiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBudW1iZXIgPSBwYXJzZUludCgkKHRoaXMpLnBhcmVudCgpLmZpbmQoXCJpbnB1dFwiKS52YWwoKSlcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoXCJpbnB1dFwiKS52YWwobnVtYmVyICs9IDEpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoXCIuaXRlbXMtZGV0YWlscyAuc2VlLWFsbFwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykucGFyZW50KFwiLnRleHRcIikuZmluZChcInBcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLmNvbGxlY3Rpb25zLWRldGFpbHMgLmluZm8gPiAuc2VlLWFsbFwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykucGFyZW50KFwiLmluZm9cIikuZmluZChcInBcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuLyogIGZhcSAgc3RhcnQgKi9cclxuJChcIi5mYXEgdWwgbGkgLnF1ZXN0aW9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICBpZiAoJCh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcyhcIm5vdFwiKSkge1xyXG4gICAgICAgICQoXCIuZmFxIHVsIGxpXCIpLmFkZENsYXNzKFwibm90XCIpO1xyXG4gICAgICAgICQoXCIuZmFxIHVsIGxpXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJub3RcIik7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcyhcIm5vdFwiKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0pO1xyXG5cclxuLyogIGZhcSBlbmQgKi9cclxuXHJcblxyXG4vKiBTaG93IFBhc3N3b3JkKi9cclxuJChcIi5zaG93cGFzcy13b3JkXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcInNob3dcIikpIHtcclxuICAgICAgICAkKHRoaXMpLnByZXYoKS5wcm9wKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcInNob3dcIikuYWRkQ2xhc3MoXCJoaWRlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKHRoaXMpLnByZXYoKS5wcm9wKFwidHlwZVwiLCBcInBhc3N3b3JkXCIpO1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJoaWRlXCIpLmFkZENsYXNzKFwic2hvd1wiKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuXHJcbi8qICBTZWxlY3QgQmFyIENoYW5nZSAgKi9cclxuJChcIi5hY2NvdW50LWFyZWEgLnNlbGVjdDJcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBkYXRlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQoXCIucmVxdWVzdC1ib3ggLml0ZW1cIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJCh0aGlzKS5hdHRyKFwiaXRlbVZhbHVlXCIpKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwibm9uZVwiKTtcclxuICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwiaXRlbVZhbHVlXCIpID09PSBkYXRlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJub25lXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4vKiAgU2VsZWN0IEJhciBDaGFuZ2UgU3RhcnQgKi9cclxuJChcIi5zZWxlY3QtYmFyIC5zZWxlY3QyXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkKFwiLnNlbGVjdC1iYXIgLmJhcnNcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAkKFwiLnNlbGVjdC1iYXIgLmJhcnMgLmNvbG9yXCIpLmNzcyhcIndpZHRoXCIsIFwiMFwiKTtcclxuICAgIGNoYW5nZVNlbGVjdCgkKHRoaXMpLnZhbCgpKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VTZWxlY3QoZSkge1xyXG4gICAgJChcIi5zZWxlY3QtYmFyIC5iYXJzXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmF0dHIoXCJvcHRpb252YWx1ZVwiKSA9PT0gZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBiYXJsb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJhcmxvYWQoKSB7XHJcbiAgICAkKFwiLmJhcnMuYWN0aXZlIC5iYXJcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKFwiLmNvbG9yXCIpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICB3aWR0aDogJCh0aGlzKS5maW5kKFwiLmNvbG9yXCIpLmF0dHIoXCJyYXRlXCIpICsgXCIlXCJcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH0pO1xyXG59XHJcbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKFwiLmJhcnMuYWN0aXZlIC5iYXJcIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGJhcmxvYWQoKTtcclxuICAgIH1cclxufSk7XHJcbi8qICBTZWxlY3QgQmFyIENoYW5nZSBFbmQgKi8iLCIiXX0=
