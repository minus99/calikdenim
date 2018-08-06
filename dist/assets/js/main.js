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

    /* Trends Pop-up */
    $(".trends > a.view-more").bind("click", function () {
        $("body").addClass("hidden");
        $(this).next().addClass("active");
    });
    $(".popup > a.close").bind("click", function () {
        $("body").removeClass("hidden");
        $(this).parent().removeClass("active");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJjb21wb25lbnRzL3Rvb2x0aXBzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwTUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5qcy1leGFtcGxlLWJhc2ljLXNpbmdsZScpLnNlbGVjdDIoe1xyXG4gICAgICAgIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiAtMVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5yZXF1ZXN0LWludml0YXRpb25cIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLmxvZ2luLWFyZWFcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJChcIi5yZXF1ZXN0LWFyZWFcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG5cclxuICAgICAgICAkKFwiLmxvZ28tYXJlYSAubG9nb1wiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAkKFwiLmxvZ28tYXJlYSAucmVxdWVzdFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJChcIi5jbG9zZS1hcmVhXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJChcIi5jbG9zZS1tZW51XCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKFwiLmNsb3NlLW1lbnVcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIucHJvZmlsZS1hcmVhID4gLnNlYXJjaFwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIucHJvZmlsZS1hcmVhID4gLnByb2ZpbGVcIikuYWRkQ2xhc3MoXCJoaWRlXCIpO1xyXG4gICAgICAgICQoXCIucHJvZmlsZS1hcmVhID4gLnNlYXJjaFwiKS5hZGRDbGFzcyhcImZpeFwiKTtcclxuICAgICAgICAkKFwiLnNlYXJjaC1kaXZcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5zZWFyY2gtZGl2IC5zZWFyY2gtaW5wdXQgPiAuYmFja1wiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIucHJvZmlsZS1hcmVhID4gLnByb2ZpbGVcIikucmVtb3ZlQ2xhc3MoXCJoaWRlXCIpO1xyXG4gICAgICAgICQoXCIucHJvZmlsZS1hcmVhID4gLnNlYXJjaFwiKS5yZW1vdmVDbGFzcyhcImZpeFwiKTtcclxuICAgICAgICAkKFwiLnNlYXJjaC1kaXZcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGlmICghJChcIi5oZWFkZXIgPiAuY2xvc2UtYXJlYVwiKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLyogVHJlbmRzIFBvcC11cCAqL1xyXG4gICAgJChcIi50cmVuZHMgPiBhLnZpZXctbW9yZVwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICQodGhpcykubmV4dCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiLnBvcHVwID4gYS5jbG9zZVwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDUsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgIDExMDA6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICRoZWFkID0gJCgnLnBhZ2UtdXAnKTtcclxuICAgICAgICBpZiAoJHRoaXMuc2Nyb2xsVG9wKCkgPiAyNTApIHtcclxuICAgICAgICAgICAgaWYgKCQoXCIuaXRlbXMtZGV0YWlscyAucmVxdWVzdFwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAkaGVhZC5hZGRDbGFzcygnYWN0aXZlMicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJGhlYWQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRoZWFkLnJlbW92ZUNsYXNzKCdhY3RpdmUyJyk7XHJcbiAgICAgICAgICAgICRoZWFkLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJChcIi5wYWdlLXVwXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxyXG4gICAgICAgIH0sIDYwMCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8qIENPVU5URVIgKi9cclxuICAgICQoXCIuaW5wdXQgYnV0dG9uLm1pbnVzXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG51bWJlciA9IHBhcnNlSW50KCQodGhpcykucGFyZW50KCkuZmluZChcImlucHV0XCIpLnZhbCgpKVxyXG4gICAgICAgIGlmIChudW1iZXIgPiAxKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuZmluZChcImlucHV0XCIpLnZhbChudW1iZXIgLT0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkKFwiLmlucHV0IGJ1dHRvbi5wbHVzXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG51bWJlciA9IHBhcnNlSW50KCQodGhpcykucGFyZW50KCkuZmluZChcImlucHV0XCIpLnZhbCgpKVxyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuZmluZChcImlucHV0XCIpLnZhbChudW1iZXIgKz0gMSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJChcIi5pdGVtcy1kZXRhaWxzIC5zZWUtYWxsXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoXCIudGV4dFwiKS5maW5kKFwicFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG5cclxuLyogIGZhcSAgc3RhcnQgKi9cclxuJChcIi5mYXEgdWwgbGkgLnF1ZXN0aW9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICBpZiAoJCh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcyhcIm5vdFwiKSkge1xyXG4gICAgICAgICQoXCIuZmFxIHVsIGxpXCIpLmFkZENsYXNzKFwibm90XCIpO1xyXG4gICAgICAgICQoXCIuZmFxIHVsIGxpXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJub3RcIik7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcyhcIm5vdFwiKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0pO1xyXG5cclxuLyogIGZhcSBlbmQgKi9cclxuXHJcblxyXG4vKiBTaG93IFBhc3N3b3JkKi9cclxuJChcIi5zaG93cGFzcy13b3JkXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcInNob3dcIikpIHtcclxuICAgICAgICAkKHRoaXMpLnByZXYoKS5wcm9wKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcInNob3dcIikuYWRkQ2xhc3MoXCJoaWRlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKHRoaXMpLnByZXYoKS5wcm9wKFwidHlwZVwiLCBcInBhc3N3b3JkXCIpO1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJoaWRlXCIpLmFkZENsYXNzKFwic2hvd1wiKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuXHJcbi8qICBTZWxlY3QgQmFyIENoYW5nZSAgKi9cclxuJChcIi5hY2NvdW50LWFyZWEgLnNlbGVjdDJcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBkYXRlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQoXCIucmVxdWVzdC1ib3ggLml0ZW1cIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJCh0aGlzKS5hdHRyKFwiaXRlbVZhbHVlXCIpKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwibm9uZVwiKTtcclxuICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwiaXRlbVZhbHVlXCIpID09PSBkYXRlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJub25lXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4vKiAgU2VsZWN0IEJhciBDaGFuZ2UgU3RhcnQgKi9cclxuJChcIi5zZWxlY3QtYmFyIC5zZWxlY3QyXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkKFwiLnNlbGVjdC1iYXIgLmJhcnNcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAkKFwiLnNlbGVjdC1iYXIgLmJhcnMgLmNvbG9yXCIpLmNzcyhcIndpZHRoXCIsIFwiMFwiKTtcclxuICAgIGNoYW5nZVNlbGVjdCgkKHRoaXMpLnZhbCgpKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VTZWxlY3QoZSkge1xyXG4gICAgJChcIi5zZWxlY3QtYmFyIC5iYXJzXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmF0dHIoXCJvcHRpb252YWx1ZVwiKSA9PT0gZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBiYXJsb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJhcmxvYWQoKSB7XHJcbiAgICAkKFwiLmJhcnMuYWN0aXZlIC5iYXJcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKFwiLmNvbG9yXCIpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICB3aWR0aDogJCh0aGlzKS5maW5kKFwiLmNvbG9yXCIpLmF0dHIoXCJyYXRlXCIpICsgXCIlXCJcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH0pO1xyXG59XHJcbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKFwiLmJhcnMuYWN0aXZlIC5iYXJcIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGJhcmxvYWQoKTtcclxuICAgIH1cclxufSk7XHJcbi8qICBTZWxlY3QgQmFyIENoYW5nZSBFbmQgKi8iLCIiXX0=
