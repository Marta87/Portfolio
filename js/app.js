$(function () {

    //Hmaburger menu 

    var burger = $(".hamburger_menu");
    var menu = $(".menu");

    burger.on("click", function () {
        menu.toggle();
    });

    //Scroll
    var link = $(".menu li a");

    link.on("click", function () { //to jest moja funkcja, że jak klikam na link to stanie się.... :
        var position = $($(this).attr("href")).position().top; //definiuję pozycję, pobieram atrybut href, bo jest on taki sam jak id mojego p, więc zamiast deifniować każdy element osobno, będe za każdym razem pobierać go z hrefa.Pobieram z niego pozycję (tylko wartość wrtykalną)
        $("html, body").animate({ //mówię mojemu body czego od niego oczekuję
            scrollTop: position //scrollujemy, aż do wartości zdefiniowanej wyżej
        }, 700)
    });

    //Menu 
    var nav = $(".navigation");
    var menu_fixed = $(".menu_fixed");
    console.log(menu_fixed)

    var scrollingStartDistance = $(".navigation").offset().top;

    $(document).scroll(function () {
        var scrollTop = $(document).scrollTop();

        $(".menu_fixed").toggleClass("sticky", scrollTop > scrollingStartDistance);
    });

    //Umiejętności

    $(document).on("load", function () {
        var span = $(".html p" + $(this).attr('data-width') + ' p');
        span.animate({
            width: $(this).attr('data-width')
        }, 300);
    })

    //Portfolio okno modalne

    var img = $(".box");
    var inf = $(".modal");

    img.on('click', function () {
        //   $(".about-my-portfolio").addClass("remove");
        $(".decor").addClass("add_decor");
        $(".portfolio").addClass("add");
        inf.fadeOut(300)
        var visible = $(this).next().is(':visible')
        inf.fadeOut(700)
        if (visible == true) {
            //       $(".about-my-portfolio").removeClass("remove");
            $(".decor").removeClass("add_decor")
            $(".portfolio").removeClass("add");
        } else {
            $(this).next().fadeIn(700)

        }
    });

    var documentscroll = $('body').scrollTop();

    $(window).on('scroll resize', function () {
        var position = $(".about-my-scills").position().top
        console.log(position)
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
})