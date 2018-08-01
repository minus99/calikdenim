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
        $("body").removeClass("hidden");
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
        slidesPerView: 'auto',
        spaceBetween: 10
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
$(".showpass-word").bind("click", function(){
    if($(this).hasClass("show")){
        $(this).prev().prop("type","text");
        $(this).removeClass("show").addClass("hide");
    }
    else{
        $(this).prev().prop("type","password");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJjb21wb25lbnRzL3Rvb2x0aXBzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakxBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcuanMtZXhhbXBsZS1iYXNpYy1zaW5nbGUnKS5zZWxlY3QyKHtcclxuICAgICAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogLTFcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIucmVxdWVzdC1pbnZpdGF0aW9uXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5sb2dpbi1hcmVhXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICQoXCIucmVxdWVzdC1hcmVhXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuXHJcbiAgICAgICAgJChcIi5sb2dvLWFyZWEgLmxvZ29cIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJChcIi5sb2dvLWFyZWEgLnJlcXVlc3RcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoXCIuY2xvc2UtYXJlYVwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQoXCIuY2xvc2UtbWVudVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJChcIi5jbG9zZS1tZW51XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLnByb2ZpbGUtYXJlYSA+IC5zZWFyY2hcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnByb2ZpbGUtYXJlYSA+IC5wcm9maWxlXCIpLmFkZENsYXNzKFwiaGlkZVwiKTtcclxuICAgICAgICAkKFwiLnByb2ZpbGUtYXJlYSA+IC5zZWFyY2hcIikuYWRkQ2xhc3MoXCJmaXhcIik7XHJcbiAgICAgICAgJChcIi5zZWFyY2gtZGl2XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuc2VhcmNoLWRpdiAuc2VhcmNoLWlucHV0ID4gLmJhY2tcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnByb2ZpbGUtYXJlYSA+IC5wcm9maWxlXCIpLnJlbW92ZUNsYXNzKFwiaGlkZVwiKTtcclxuICAgICAgICAkKFwiLnByb2ZpbGUtYXJlYSA+IC5zZWFyY2hcIikucmVtb3ZlQ2xhc3MoXCJmaXhcIik7XHJcbiAgICAgICAgJChcIi5zZWFyY2gtZGl2XCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLyogVHJlbmRzIFBvcC11cCAqL1xyXG4gICAgJChcIi50cmVuZHMgPiBhLnZpZXctbW9yZVwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICQodGhpcykubmV4dCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiLnBvcHVwID4gYS5jbG9zZVwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDEwXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgJGhlYWQgPSAkKCcucGFnZS11cCcpO1xyXG4gICAgICAgIGlmICgkdGhpcy5zY3JvbGxUb3AoKSA+IDI1MCkge1xyXG4gICAgICAgICAgICBpZiAoJChcIi5pdGVtcy1kZXRhaWxzIC5yZXF1ZXN0XCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICRoZWFkLmFkZENsYXNzKCdhY3RpdmUyJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkaGVhZC5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGhlYWQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZSwgYWN0aXZlMicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKFwiLnBhZ2UtdXBcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgICAgfSwgNjAwKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLyogQ09VTlRFUiAqL1xyXG4gICAgJChcIi5pbnB1dCBidXR0b24ubWludXNcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbnVtYmVyID0gcGFyc2VJbnQoJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwiaW5wdXRcIikudmFsKCkpXHJcbiAgICAgICAgaWYgKG51bWJlciA+IDEpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwiaW5wdXRcIikudmFsKG51bWJlciAtPSAxKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoXCIuaW5wdXQgYnV0dG9uLnBsdXNcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbnVtYmVyID0gcGFyc2VJbnQoJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwiaW5wdXRcIikudmFsKCkpXHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwiaW5wdXRcIikudmFsKG51bWJlciArPSAxKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKFwiLml0ZW1zLWRldGFpbHMgLnNlZS1hbGxcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudChcIi50ZXh0XCIpLmZpbmQoXCJwXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcblxyXG4vKiAgZmFxICBzdGFydCAqL1xyXG4kKFwiLmZhcSB1bCBsaSAucXVlc3Rpb25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgIGlmICgkKHRoaXMpLnBhcmVudCgpLmhhc0NsYXNzKFwibm90XCIpKSB7XHJcbiAgICAgICAgJChcIi5mYXEgdWwgbGlcIikuYWRkQ2xhc3MoXCJub3RcIik7XHJcbiAgICAgICAgJChcIi5mYXEgdWwgbGlcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcIm5vdFwiKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKFwibm90XCIpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcblxyXG5cclxufSk7XHJcblxyXG4vKiAgZmFxIGVuZCAqL1xyXG5cclxuXHJcbi8qIFNob3cgUGFzc3dvcmQqL1xyXG4kKFwiLnNob3dwYXNzLXdvcmRcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICBpZigkKHRoaXMpLmhhc0NsYXNzKFwic2hvd1wiKSl7XHJcbiAgICAgICAgJCh0aGlzKS5wcmV2KCkucHJvcChcInR5cGVcIixcInRleHRcIik7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcInNob3dcIikuYWRkQ2xhc3MoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICAkKHRoaXMpLnByZXYoKS5wcm9wKFwidHlwZVwiLFwicGFzc3dvcmRcIik7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImhpZGVcIikuYWRkQ2xhc3MoXCJzaG93XCIpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG5cclxuLyogIFNlbGVjdCBCYXIgQ2hhbmdlICAqL1xyXG4kKFwiLmFjY291bnQtYXJlYSAuc2VsZWN0MlwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGRhdGUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJChcIi5yZXF1ZXN0LWJveCAuaXRlbVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygkKHRoaXMpLmF0dHIoXCJpdGVtVmFsdWVcIikpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJub25lXCIpO1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmF0dHIoXCJpdGVtVmFsdWVcIikgPT09IGRhdGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm5vbmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbi8qICBTZWxlY3QgQmFyIENoYW5nZSBTdGFydCAqL1xyXG4kKFwiLnNlbGVjdC1iYXIgLnNlbGVjdDJcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICQoXCIuc2VsZWN0LWJhciAuYmFyc1wiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICQoXCIuc2VsZWN0LWJhciAuYmFycyAuY29sb3JcIikuY3NzKFwid2lkdGhcIiwgXCIwXCIpO1xyXG4gICAgY2hhbmdlU2VsZWN0KCQodGhpcykudmFsKCkpO1xyXG59KTtcclxuZnVuY3Rpb24gY2hhbmdlU2VsZWN0KGUpIHtcclxuICAgICQoXCIuc2VsZWN0LWJhciAuYmFyc1wiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwib3B0aW9udmFsdWVcIikgPT09IGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgYmFybG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGJhcmxvYWQoKSB7XHJcbiAgICAkKFwiLmJhcnMuYWN0aXZlIC5iYXJcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKFwiLmNvbG9yXCIpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICB3aWR0aDogJCh0aGlzKS5maW5kKFwiLmNvbG9yXCIpLmF0dHIoXCJyYXRlXCIpICsgXCIlXCJcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH0pO1xyXG59XHJcbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKFwiLmJhcnMuYWN0aXZlIC5iYXJcIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGJhcmxvYWQoKTtcclxuICAgIH1cclxufSk7XHJcbi8qICBTZWxlY3QgQmFyIENoYW5nZSBFbmQgKi8iLCIiXX0=
