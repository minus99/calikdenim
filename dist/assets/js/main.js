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
            $head.removeClass('active, active2');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJjb21wb25lbnRzL3Rvb2x0aXBzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbk1BIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcuanMtZXhhbXBsZS1iYXNpYy1zaW5nbGUnKS5zZWxlY3QyKHtcclxuICAgICAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogLTFcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIucmVxdWVzdC1pbnZpdGF0aW9uXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5sb2dpbi1hcmVhXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICQoXCIucmVxdWVzdC1hcmVhXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuXHJcbiAgICAgICAgJChcIi5sb2dvLWFyZWEgLmxvZ29cIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJChcIi5sb2dvLWFyZWEgLnJlcXVlc3RcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoXCIuY2xvc2UtYXJlYVwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQoXCIuY2xvc2UtbWVudVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJChcIi5jbG9zZS1tZW51XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLnByb2ZpbGUtYXJlYSA+IC5zZWFyY2hcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnByb2ZpbGUtYXJlYSA+IC5wcm9maWxlXCIpLmFkZENsYXNzKFwiaGlkZVwiKTtcclxuICAgICAgICAkKFwiLnByb2ZpbGUtYXJlYSA+IC5zZWFyY2hcIikuYWRkQ2xhc3MoXCJmaXhcIik7XHJcbiAgICAgICAgJChcIi5zZWFyY2gtZGl2XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuc2VhcmNoLWRpdiAuc2VhcmNoLWlucHV0ID4gLmJhY2tcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnByb2ZpbGUtYXJlYSA+IC5wcm9maWxlXCIpLnJlbW92ZUNsYXNzKFwiaGlkZVwiKTtcclxuICAgICAgICAkKFwiLnByb2ZpbGUtYXJlYSA+IC5zZWFyY2hcIikucmVtb3ZlQ2xhc3MoXCJmaXhcIik7XHJcbiAgICAgICAgJChcIi5zZWFyY2gtZGl2XCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBpZiAoISQoXCIuaGVhZGVyID4gLmNsb3NlLWFyZWFcIikuaGFzQ2xhc3MoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8qIFRyZW5kcyBQb3AtdXAgKi9cclxuICAgICQoXCIudHJlbmRzID4gYS52aWV3LW1vcmVcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICAkKHRoaXMpLm5leHQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG4gICAgJChcIi5wb3B1cCA+IGEuY2xvc2VcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiA1LFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAxMTAwOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAkaGVhZCA9ICQoJy5wYWdlLXVwJyk7XHJcbiAgICAgICAgaWYgKCR0aGlzLnNjcm9sbFRvcCgpID4gMjUwKSB7XHJcbiAgICAgICAgICAgIGlmICgkKFwiLml0ZW1zLWRldGFpbHMgLnJlcXVlc3RcIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgJGhlYWQuYWRkQ2xhc3MoJ2FjdGl2ZTInKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRoZWFkLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkaGVhZC5yZW1vdmVDbGFzcygnYWN0aXZlLCBhY3RpdmUyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoXCIucGFnZS11cFwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcclxuICAgICAgICB9LCA2MDApO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvKiBDT1VOVEVSICovXHJcbiAgICAkKFwiLmlucHV0IGJ1dHRvbi5taW51c1wiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBudW1iZXIgPSBwYXJzZUludCgkKHRoaXMpLnBhcmVudCgpLmZpbmQoXCJpbnB1dFwiKS52YWwoKSlcclxuICAgICAgICBpZiAobnVtYmVyID4gMSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoXCJpbnB1dFwiKS52YWwobnVtYmVyIC09IDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJChcIi5pbnB1dCBidXR0b24ucGx1c1wiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBudW1iZXIgPSBwYXJzZUludCgkKHRoaXMpLnBhcmVudCgpLmZpbmQoXCJpbnB1dFwiKS52YWwoKSlcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoXCJpbnB1dFwiKS52YWwobnVtYmVyICs9IDEpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoXCIuaXRlbXMtZGV0YWlscyAuc2VlLWFsbFwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykucGFyZW50KFwiLnRleHRcIikuZmluZChcInBcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuXHJcbi8qICBmYXEgIHN0YXJ0ICovXHJcbiQoXCIuZmFxIHVsIGxpIC5xdWVzdGlvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgaWYgKCQodGhpcykucGFyZW50KCkuaGFzQ2xhc3MoXCJub3RcIikpIHtcclxuICAgICAgICAkKFwiLmZhcSB1bCBsaVwiKS5hZGRDbGFzcyhcIm5vdFwiKTtcclxuICAgICAgICAkKFwiLmZhcSB1bCBsaVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwibm90XCIpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoXCJub3RcIik7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuXHJcblxyXG59KTtcclxuXHJcbi8qICBmYXEgZW5kICovXHJcblxyXG5cclxuLyogU2hvdyBQYXNzd29yZCovXHJcbiQoXCIuc2hvd3Bhc3Mtd29yZFwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJzaG93XCIpKSB7XHJcbiAgICAgICAgJCh0aGlzKS5wcmV2KCkucHJvcChcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJzaG93XCIpLmFkZENsYXNzKFwiaGlkZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCh0aGlzKS5wcmV2KCkucHJvcChcInR5cGVcIiwgXCJwYXNzd29yZFwiKTtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiaGlkZVwiKS5hZGRDbGFzcyhcInNob3dcIik7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcblxyXG4vKiAgU2VsZWN0IEJhciBDaGFuZ2UgICovXHJcbiQoXCIuYWNjb3VudC1hcmVhIC5zZWxlY3QyXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgZGF0ZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkKFwiLnJlcXVlc3QtYm94IC5pdGVtXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCQodGhpcykuYXR0cihcIml0ZW1WYWx1ZVwiKSk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcIm5vbmVcIik7XHJcbiAgICAgICAgaWYgKCQodGhpcykuYXR0cihcIml0ZW1WYWx1ZVwiKSA9PT0gZGF0ZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwibm9uZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuLyogIFNlbGVjdCBCYXIgQ2hhbmdlIFN0YXJ0ICovXHJcbiQoXCIuc2VsZWN0LWJhciAuc2VsZWN0MlwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgJChcIi5zZWxlY3QtYmFyIC5iYXJzXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgJChcIi5zZWxlY3QtYmFyIC5iYXJzIC5jb2xvclwiKS5jc3MoXCJ3aWR0aFwiLCBcIjBcIik7XHJcbiAgICBjaGFuZ2VTZWxlY3QoJCh0aGlzKS52YWwoKSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlU2VsZWN0KGUpIHtcclxuICAgICQoXCIuc2VsZWN0LWJhciAuYmFyc1wiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwib3B0aW9udmFsdWVcIikgPT09IGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgYmFybG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiYXJsb2FkKCkge1xyXG4gICAgJChcIi5iYXJzLmFjdGl2ZSAuYmFyXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuZmluZChcIi5jb2xvclwiKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgd2lkdGg6ICQodGhpcykuZmluZChcIi5jb2xvclwiKS5hdHRyKFwicmF0ZVwiKSArIFwiJVwiXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9KTtcclxufVxyXG4kKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJChcIi5iYXJzLmFjdGl2ZSAuYmFyXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBiYXJsb2FkKCk7XHJcbiAgICB9XHJcbn0pO1xyXG4vKiAgU2VsZWN0IEJhciBDaGFuZ2UgRW5kICovIiwiIl19
