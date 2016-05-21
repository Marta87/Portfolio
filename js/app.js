$(function () {

    //Hmaburger menu 

    var burger = $(".hamburger_menu");
    var menu = $(".menu");

    burger.on("click", function () {
        menu.show();
        burger.hide();
    });

    //Scrolling
    var link = $(".menu li a");

    link.on("click", function () {
        var position = $($(this).attr("href")).position().top;
        $("html, body").animate({
            scrollTop: position
        }, 700)
    });

    //Menu 
    var nav = $(".navigation");
    var menu_fixed = $(".menu_fixed");
    var scrollingStartDistance = $(".navigation").offset().top;

    $(document).scroll(function () {
        var scrollTop = $(document).scrollTop();

        $(".menu_fixed").toggleClass("sticky", scrollTop > scrollingStartDistance);
    });

    //Skills

    $(document).on("load", function () {
        var span = $(".html p" + $(this).attr('data-width') + ' p');
        span.animate({
            width: $(this).attr('data-width')
        }, 1800);
    })

    var documentscroll = $('body').scrollTop();

    $(window).on('scroll resize', function () {
        var position = $(".about-my-skills").position().top
        var documentscroll = $('body').scrollTop();

        if (documentscroll === position) {
            $(".progress > .color").each(function () {
                $(this)
                    .data("width", $(this).width())
                    .width(0)
                    .finish()
                    .animate({
                        width: $(this).data("width")
                    }, 1200);
            })
        }
    })

    //Portfolio 

    var img = $(".box");
    var inf = $(".modal");


    img.on('click', function () {
        $(".decor").addClass("add_decor");
        $(".portfolio").addClass("add");

        inf.fadeOut(300)
        var visible = $(this).next().is(':visible')
        inf.fadeOut(700)
        if (visible == true) {
            $(".decor").removeClass("add_decor")
            $(".portfolio").removeClass("add");

        } else {
            $(this).next().fadeIn(700)

        }
    });
})