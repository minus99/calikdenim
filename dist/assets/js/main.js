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
        } else {
            $(this).addClass("active");
            $(".close-menu").addClass("active");
        }
    });

    $(".profile-area > .search").bind("click", function () {
        $(".profile-area > .profile").addClass("hide");
        $(".profile-area > .search").addClass("fix");
        $(".search-div").addClass("active");

        $("body").addClass("hidden");
    });

    $(".search-div .search-input > .back").bind("click", function(){
        $(".profile-area > .profile").removeClass("hide");
        $(".profile-area > .search").removeClass("fix");
        $(".search-div").removeClass("active");
        $("body").removeClass("hidden");
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJjb21wb25lbnRzL3Rvb2x0aXBzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcuanMtZXhhbXBsZS1iYXNpYy1zaW5nbGUnKS5zZWxlY3QyKHtcclxuICAgICAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogLTFcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgJChcIi5yZXF1ZXN0LWludml0YXRpb25cIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLmxvZ2luLWFyZWFcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJChcIi5yZXF1ZXN0LWFyZWFcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG5cclxuICAgICAgICAkKFwiLmxvZ28tYXJlYSAubG9nb1wiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAkKFwiLmxvZ28tYXJlYSAucmVxdWVzdFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJChcIi5jbG9zZS1hcmVhXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJChcIi5jbG9zZS1tZW51XCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQoXCIuY2xvc2UtbWVudVwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLnByb2ZpbGUtYXJlYSA+IC5zZWFyY2hcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnByb2ZpbGUtYXJlYSA+IC5wcm9maWxlXCIpLmFkZENsYXNzKFwiaGlkZVwiKTtcclxuICAgICAgICAkKFwiLnByb2ZpbGUtYXJlYSA+IC5zZWFyY2hcIikuYWRkQ2xhc3MoXCJmaXhcIik7XHJcbiAgICAgICAgJChcIi5zZWFyY2gtZGl2XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuc2VhcmNoLWRpdiAuc2VhcmNoLWlucHV0ID4gLmJhY2tcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJChcIi5wcm9maWxlLWFyZWEgPiAucHJvZmlsZVwiKS5yZW1vdmVDbGFzcyhcImhpZGVcIik7XHJcbiAgICAgICAgJChcIi5wcm9maWxlLWFyZWEgPiAuc2VhcmNoXCIpLnJlbW92ZUNsYXNzKFwiZml4XCIpO1xyXG4gICAgICAgICQoXCIuc2VhcmNoLWRpdlwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgIH0pO1xyXG59KTsiLCIiXX0=
