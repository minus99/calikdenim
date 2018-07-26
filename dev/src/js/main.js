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