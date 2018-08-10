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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJjb21wb25lbnRzL3Rvb2x0aXBzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzT0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5qcy1leGFtcGxlLWJhc2ljLXNpbmdsZScpLnNlbGVjdDIoe1xyXG4gICAgICAgIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiAtMVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5yZXF1ZXN0LWludml0YXRpb25cIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLmxvZ2luLWFyZWFcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJChcIi5yZXF1ZXN0LWFyZWFcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG5cclxuICAgICAgICAkKFwiLmxvZ28tYXJlYSAubG9nb1wiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAkKFwiLmxvZ28tYXJlYSAucmVxdWVzdFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJChcIi5jbG9zZS1hcmVhXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJChcIi5jbG9zZS1tZW51XCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKFwiLmNsb3NlLW1lbnVcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIucHJvZmlsZS1hcmVhID4gLnNlYXJjaFwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIucHJvZmlsZS1hcmVhID4gLnByb2ZpbGVcIikuYWRkQ2xhc3MoXCJoaWRlXCIpO1xyXG4gICAgICAgICQoXCIucHJvZmlsZS1hcmVhID4gLnNlYXJjaFwiKS5hZGRDbGFzcyhcImZpeFwiKTtcclxuICAgICAgICAkKFwiLnNlYXJjaC1kaXZcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5zZWFyY2gtZGl2IC5zZWFyY2gtaW5wdXQgPiAuYmFja1wiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIucHJvZmlsZS1hcmVhID4gLnByb2ZpbGVcIikucmVtb3ZlQ2xhc3MoXCJoaWRlXCIpO1xyXG4gICAgICAgICQoXCIucHJvZmlsZS1hcmVhID4gLnNlYXJjaFwiKS5yZW1vdmVDbGFzcyhcImZpeFwiKTtcclxuICAgICAgICAkKFwiLnNlYXJjaC1kaXZcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgaWYgKCEkKFwiLmhlYWRlciA+IC5jbG9zZS1hcmVhXCIpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJChcIi5maWx0ZXJzLXRvcCAudmlld3MgPiBzcGFuXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5maWx0ZXJzLXRvcCAudmlld3MgPiBzcGFuXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgJCgnLndhc2hvdXNlIC5pdGVtcycpLnJlbW92ZUNsYXNzKCdmb3VyIHR3bycpO1xyXG4gICAgICAgICQoJy53YXNob3VzZSAuaXRlbXMnKS5hZGRDbGFzcygkKHRoaXMpLmF0dHIoJ25hbWUnKSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAvKiBGYWJyaWMgU2hvdy1Nb3JlICovXHJcbiAgICAkKFwiLnRhYnMgLmluZm8gPiAuc2hvdy1tb3JlXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCdwJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLyogVHJlbmRzIFBvcC11cCAqL1xyXG4gICAgJChcIi50cmVuZHMgPiBhLnZpZXctbW9yZVwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwicG9wLWhpZFwiKTtcclxuICAgICAgICAkKHRoaXMpLm5leHQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG4gICAgJChcIi5wb3B1cC1pbiA+IGEuY2xvc2VcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcInBvcC1oaWRcIik7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgMTEwMDoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyMicsIHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXIzJywge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgJGhlYWQgPSAkKCcucGFnZS11cCcpO1xyXG4gICAgICAgIGlmICgkdGhpcy5zY3JvbGxUb3AoKSA+IDI1MCkge1xyXG4gICAgICAgICAgICBpZiAoJChcIi5pdGVtcy1kZXRhaWxzIC5yZXF1ZXN0XCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICRoZWFkLmFkZENsYXNzKCdhY3RpdmUyJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkaGVhZC5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGhlYWQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZTInKTtcclxuICAgICAgICAgICAgJGhlYWQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKFwiLnBhZ2UtdXBcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgICAgfSwgNjAwKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLyogQ09VTlRFUiAqL1xyXG4gICAgJChcIi5pbnB1dCBidXR0b24ubWludXNcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbnVtYmVyID0gcGFyc2VJbnQoJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwiaW5wdXRcIikudmFsKCkpXHJcbiAgICAgICAgaWYgKG51bWJlciA+IDEpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwiaW5wdXRcIikudmFsKG51bWJlciAtPSAxKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoXCIuaW5wdXQgYnV0dG9uLnBsdXNcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbnVtYmVyID0gcGFyc2VJbnQoJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwiaW5wdXRcIikudmFsKCkpXHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwiaW5wdXRcIikudmFsKG51bWJlciArPSAxKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKFwiLml0ZW1zLWRldGFpbHMgLnNlZS1hbGxcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudChcIi50ZXh0XCIpLmZpbmQoXCJwXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5jb2xsZWN0aW9ucy1kZXRhaWxzIC5pbmZvID4gLnNlZS1hbGxcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudChcIi5pbmZvXCIpLmZpbmQoXCJwXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbi8qICBmYXEgIHN0YXJ0ICovXHJcbiQoXCIuZmFxIHVsIGxpIC5xdWVzdGlvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgaWYgKCQodGhpcykucGFyZW50KCkuaGFzQ2xhc3MoXCJub3RcIikpIHtcclxuICAgICAgICAkKFwiLmZhcSB1bCBsaVwiKS5hZGRDbGFzcyhcIm5vdFwiKTtcclxuICAgICAgICAkKFwiLmZhcSB1bCBsaVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwibm90XCIpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoXCJub3RcIik7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuXHJcblxyXG59KTtcclxuXHJcbi8qICBmYXEgZW5kICovXHJcblxyXG5cclxuLyogU2hvdyBQYXNzd29yZCovXHJcbiQoXCIuc2hvd3Bhc3Mtd29yZFwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJzaG93XCIpKSB7XHJcbiAgICAgICAgJCh0aGlzKS5wcmV2KCkucHJvcChcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJzaG93XCIpLmFkZENsYXNzKFwiaGlkZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCh0aGlzKS5wcmV2KCkucHJvcChcInR5cGVcIiwgXCJwYXNzd29yZFwiKTtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiaGlkZVwiKS5hZGRDbGFzcyhcInNob3dcIik7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcblxyXG4vKiAgU2VsZWN0IEJhciBDaGFuZ2UgICovXHJcbiQoXCIuYWNjb3VudC1hcmVhIC5zZWxlY3QyXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgZGF0ZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkKFwiLnJlcXVlc3QtYm94IC5pdGVtXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCQodGhpcykuYXR0cihcIml0ZW1WYWx1ZVwiKSk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcIm5vbmVcIik7XHJcbiAgICAgICAgaWYgKCQodGhpcykuYXR0cihcIml0ZW1WYWx1ZVwiKSA9PT0gZGF0ZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwibm9uZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuLyogIFNlbGVjdCBCYXIgQ2hhbmdlIFN0YXJ0ICovXHJcbiQoXCIuc2VsZWN0LWJhciAuc2VsZWN0MlwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgJChcIi5zZWxlY3QtYmFyIC5iYXJzXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgJChcIi5zZWxlY3QtYmFyIC5iYXJzIC5jb2xvclwiKS5jc3MoXCJ3aWR0aFwiLCBcIjBcIik7XHJcbiAgICBjaGFuZ2VTZWxlY3QoJCh0aGlzKS52YWwoKSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlU2VsZWN0KGUpIHtcclxuICAgICQoXCIuc2VsZWN0LWJhciAuYmFyc1wiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwib3B0aW9udmFsdWVcIikgPT09IGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgYmFybG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiYXJsb2FkKCkge1xyXG4gICAgJChcIi5iYXJzLmFjdGl2ZSAuYmFyXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuZmluZChcIi5jb2xvclwiKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgd2lkdGg6ICQodGhpcykuZmluZChcIi5jb2xvclwiKS5hdHRyKFwicmF0ZVwiKSArIFwiJVwiXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9KTtcclxufVxyXG4kKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJChcIi5iYXJzLmFjdGl2ZSAuYmFyXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBiYXJsb2FkKCk7XHJcbiAgICB9XHJcbn0pO1xyXG4vKiAgU2VsZWN0IEJhciBDaGFuZ2UgRW5kICovIiwiIl19
