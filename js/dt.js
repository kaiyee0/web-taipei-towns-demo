// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});

//to-top buttons about where to show
var fixed = false;
var amountScrolled = 300;
$(document).scroll(function() {
    if ($(this).scrollTop() > amountScrolled) {
        $('#to-top').fadeIn('slow');
    } 
    else {
        $('#to-top').fadeOut('slow');
    }
});
$('#to-top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 700);
    return false;
});



// // Plugin options and our code
// $("#modal_trigger").leanModal({
//         top: 100,
//         overlay: 0.6,
//         closeButton: ".modal_close"
// });

// $(function() {
//         // Calling Login Form
//         $("#login_form").click(function() {
//                 $(".social_login").hide();
//                 $(".user_login").show();
//                 return false;
//         });

//         // Calling Register Form
//         $("#register_form").click(function() {
//                 $(".social_login").hide();
//                 $(".user_register").show();
//                 $(".header_title").text('Register');
//                 return false;
//         });

//         // Going back to Social Forms
//         $(".back_btn").click(function() {
//                 $(".user_login").hide();
//                 $(".user_register").hide();
//                 $(".social_login").show();
//                 $(".header_title").text('Login');
//                 return false;
//         });
// });

