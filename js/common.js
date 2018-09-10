
var ieClass = function () {
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent) || navigator.userAgent.indexOf("Trident/") > -1 ){
        $("body").addClass("ie");
    }
};

var is_safari= function(){
    if(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)){
        $("body").addClass("safari");
    }
};

var bodyLoaded = function () {
    document.querySelector("body").classList.add("loaded-page");
};

var ww = window.innerWidth;

/*Sound play when checkbox clicked*/

var toggleAudio = new Audio('sound/toggle.mp3');
var slideIndex2 = 1, sliding = false;

function movingToSection(numb, delay){

    var myVar = setTimeout(function(){
            $.fn.fullpage.setScrollingSpeed(0);
            $.fn.fullpage.moveTo(numb);
            $.fn.fullpage.setScrollingSpeed(1000);

    }, delay);

};

$(document).on("click", ".fp-viewing-1-1 .section00__button label", function() {
    toggleAudio.load();
    toggleAudio.play();
    if($(".checkbox").is(":checked") && !sliding){
        sliding = true;
        $.fn.fullpage.moveSlideRight();
        // return false;
    }
    setTimeout("$('.checkbox')[0].checked = false", 100);
});
$(document).on("click", ".fp-viewing-1-2 .section00__button label", function() {
    toggleAudio.load();
    toggleAudio.play();

    if(!sliding){
        sliding = true;
        $.fn.fullpage.moveSlideLeft();
        // return false;
    }
    setTimeout("$('.checkbox')[0].checked = true", 100);
});


/*End Sound play when checkbox clicked*/

$(document).on("click", ".menu__block--main > li[data-menuanchor='firstPage'] a", function(e) {
    e.preventDefault();
    $(".popup__close").trigger("click");
    $.fn.fullpage.moveTo(1);
    $(".header").removeClass("hide");
});
$(document).on("click", ".menu__block--inside > li[data-menuanchor='firstPage'] a", function(e) {
    $(".popup__close").trigger("click");
});


$(document).on("click", "#fp-nav ul li:nth-child(3) a", function(e) {
    if(slideIndex2 <= 3){
        $(".fp-viewing-1-0, .fp-viewing-1-1, .fp-viewing-1-2").addClass("movingToThird");
    }

});

$(document).on("click", "#fp-nav ul li:nth-child(4) a", function(e) {
    if(slideIndex2 <= 3){
        $(".fp-viewing-1-0, .fp-viewing-1-1, .fp-viewing-1-2").addClass("movingToFourth");
    }
});

$(document).on("click", "#fp-nav ul li:nth-child(5) a", function(e) {
    if(slideIndex2 <= 3){
        $(".fp-viewing-1-0, .fp-viewing-1-1, .fp-viewing-1-2").addClass("movingToFifth");
    }
});



$(document).on("click", ".menu__block--main > li[data-menuanchor='secondPage'] > a", function(e) {
    e.preventDefault();
    $(".popup__close").trigger("click");
    slideIndex2 = 3;
    $.fn.fullpage.moveTo(2);
    $(".header").removeClass("hide");
});

$(document).on("click", ".menu__block--inside > li[data-menuanchor='secondPage'] > a, .popup__block.menu__block.menu--inside li a", function(e) {
    $(".popup__close").trigger("click");
});


$(document).on("click", ".menu__block > li li a", function(e) {
    $(".popup__close").trigger("click");
});


$(document).on("click", ".header__logo-feron--main", function(e) {
    e.preventDefault();
    $(".popup__close").trigger("click");
    $.fn.fullpage.moveTo(1);
});
$(document).on("click", ".single-page-wrapper .menu-wrap__logo-feron", function(e) {
    $(".popup__close").trigger("click");
});
$(document).on("click", ".section1-block__txt-link", function(e) {
    e.preventDefault();
    $.fn.fullpage.moveTo(3);
});

$(document).on("click", ".fp-viewing-1-0 #section00 .section00__scroll.scroll-wrap, .fp-viewing-1-1 #section00 .section00__scroll.scroll-wrap", function(e) {
    $.fn.fullpage.moveSlideRight();
});
$(document).on("click", ".fp-viewing-1-2 #section00 .section00__scroll.scroll-wrap", function(e) {
    $.fn.fullpage.moveTo(2);
});



function activeLink() {
    $("#fp-nav ul li a").each(function(){
        if($(this).hasClass("active")) {
            $(this).parent().addClass("active");
        }
    });
};

function jump() {

    if (location.hash.search('2') != -1){
        $("#fp-nav ul li:nth-child(3) a").trigger("click");
        // history.replaceState(null, null, ' ');
    }
    else if (location.hash.search('3') != -1){
        $("#fp-nav ul li:nth-child(4) a").trigger("click");
        if(ww < 1200){
            $('.header').addClass('hide');
        }
        // history.replaceState(null, null, ' ');
    }

    else {

    }

};

function moving(){
    if($(".movingToThird").length > 0){
        $.fn.fullpage.moveSlideRight();
    }
    if($(".movingToFourth").length > 0){
        $.fn.fullpage.moveSlideRight();
    }
    if($(".movingToFifth").length > 0){
        $.fn.fullpage.moveSlideRight();
    }
};

var animOn = function () {
    var ww = $( document ).width();
    if(ww > 1200){
        if ($(".sect-second").length > 0) {
            var item1 = $(".sect-second");
            var h_window = $(window).height();
            var h_offsetTop = item1.offset().top;

            if ($(this).scrollTop() > h_offsetTop - h_window/2) {
                item1.addClass("visible");
            }
        };
        if ($(".sect-fifth").length > 0) {
            var item2 = $(".sect-fifth");
            var h_window = $(window).height();
            var h_offsetTop = item2.offset().top;

            if ($(this).scrollTop() > h_offsetTop - h_window/2) {
                item2.addClass("visible");
            }
        };
        if ($(".sect-third").length > 0) {
            var item3 = $(".sect-third");
            var h_window = $(window).height();
            var h_offsetTop = item3.offset().top;

            if ($(this).scrollTop() > h_offsetTop - h_window/2) {
                item3.addClass("visible");
            }
        };
    }
};


var fullPageInit = function(){

    if($('#fullpage').length > 0){

        $('#fullpage').fullpage({
            anchors: ['0', '1', '2', '3', '4', '5', '6', '7'],
            navigation: true,
            slidesNavigation: true,
            scrollingSpeed: 1000,
            // recordHistory: false,
            css3: true,
            fitToSection: true,
            fitToSectionDelay: 400,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            onLeave: function(index, nextIndex, direction){

                if (index == 2 && !sliding) {
                    if (direction == 'down' && slideIndex2 < 3) {
                        sliding = true;
                        $.fn.fullpage.moveSlideRight();
                        return false;
                    } else if (direction == 'up' && slideIndex2 > 1) {
                        sliding = true;
                        $.fn.fullpage.moveSlideLeft();
                        return false;
                    }
                } else if (sliding) {
                    return false;
                }

                if((index == 3 && direction == "down") || (index == 5 && direction == "up")) {
                    $(".header").addClass("hide");
                }
                if(index == 4) {
                    $(".header").removeClass("hide");
                }
            },
            afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
                $('.checkbox').removeClass("disabled");
                sliding = false;


                if (slideIndex == 0) {
                    slideIndex2 = 1;
                    $('.checkbox')[0].checked = true;
                    setTimeout(moving, 50);

                }
                if (slideIndex == 1) {
                    slideIndex2 = 2;
                    setTimeout(moving, 50);
                }
                if (slideIndex == 2) {
                    slideIndex2 = 3;

                    if($(".movingToThird").length > 0){
                        $.fn.fullpage.moveTo(2);
                    }
                    if($(".movingToFourth").length > 0){
                        $.fn.fullpage.moveTo(3);
                    }
                    if($(".movingToFifth").length > 0){
                        $.fn.fullpage.moveTo(4);
                    }
                }

            },
            onSlideLeave  : function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
                $('.checkbox').addClass("disabled");
                if (slideIndex == 0 && direction == "right") {
                    $('.checkbox')[0].checked = true;
                }
                if (slideIndex == 1 && direction == "right") {
                    $('.checkbox')[0].checked = false;
                }
                if (slideIndex == 1 && direction == "left") {
                    $('.checkbox')[0].checked = true;
                }
                if (slideIndex == 2 && direction == "left") {
                    $('.checkbox')[0].checked = true;
                }

                if (index == 2) {
                    if (direction == 'right') {
                        sliding = true;
                        slideIndex2++;
                    }

                    if (direction == 'left') {
                        sliding = true;
                        slideIndex2--;
                    }
                }
            },
            afterRender: function(anchorLink, index) {
                if(index == 1) {
                    $.fn.fullpage.moveTo(1,0);
                }
            },
            afterLoad: function(anchorLink, index){
                if(index == 1) {
                    $.fn.fullpage.moveTo(1,0);
                }
                // window.location.hash = $(this).attr("id");
                activeLink();
                if(index == 3) {
                    $("body").removeClass("movingToThird movingToFourth movingToFifth");
                }
                if(index == 4) {
                    $("body").removeClass("movingToThird movingToFourth movingToFifth");
                }
                if(index == 5) {
                    $("body").removeClass("movingToThird movingToFourth movingToFifth");
                }


            }
        });

    }

};

$(document).ready(function() {
    ieClass();
    is_safari();
    /*BEGIN popup*/
    $(document).on("click", ".header__hamburger", function(e) {
        e.preventDefault();
        $(".popup").addClass("open");

        if (ww < 1024) {
            $("body").css("overflow","hidden");
        } else {
            $("body").css("overflow","");
        }
    });
    $(document).on("click", ".popup__close", function(e) {
        e.preventDefault();
        $(".popup").removeClass("open");
        $("body").css("overflow","");
    });
    /*END popup*/
});

$(window).load(function(){
    fullPageInit();
    bodyLoaded();
    jump();
    animOn();
    $(window).scroll(function () {
        animOn();
    });
    $(window).resize(function () {
        animOn();
    });
});
