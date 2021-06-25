$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 30) {
            $(".hidden_nav").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
          $(".hidden_nav").removeClass("active");
        }
    });
});