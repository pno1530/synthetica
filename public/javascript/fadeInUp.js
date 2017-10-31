// $(function() {

//     // var $meters = $(".getStarted-container");
//     var $section = $('.synthetica-getStarted');
//     var $queue = $({});

    

//     var $window = $(window);
//     var $elem = $(".getStarted-container")

//     function isScrolledIntoView($elem, $window) {
//         var docViewTop = $window.scrollTop();
//         var docViewBottom = docViewTop + $window.height();

//         var elemTop = $elem.offset().top;
//         var elemBottom = elemTop + $elem.height();

//         return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
//     }

//     $(document).on("scroll", function () {
//         console.log("hey");
//         if (isScrolledIntoView($elem, $window)) {
//             $elem.addClass("fadeInUp")
//             console.log("hel")
//         }
//     });

// });

$(function() {
    $('.synthetica-getStarted').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
          
            $(".getStarted-container").addClass("fadeInUp");
            $(this).unbind('inview');
        }
    });

    $('.synthetica-slider').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        console.log("hello");
        if (visible) {
          
            $(".container-ad").addClass("fadeInUp");
            $(this).unbind('inview');
        }
    });

});


