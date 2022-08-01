$(document).on(
    "click",
    ".components-header .header-mb .hamburger, .components-header .close-mb",
    function () {
        $(this).toggleClass("active");
        $(".components-header .header").toggleClass("active");
    }
);

//

$(document).on("click", ".components-popup", function () {
    $(this).toggleClass("hide");
});

// $(document).on("click", ".popup-video", function () {
//     $(this).toggleClass("hide");
//     $(".popup-video iframe").attr("src", "");
// });

$(document).on("click", ".js-openVideo", function () {
    $(".popup-video").toggleClass("hide");
    $(".popup-video iframe").attr("src", $(this).data("src"));
});

function isNumeric(str) {
    return (
        !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str))
    ); // ...and ensure strings of whitespace fail
}

var increaseNumberItv = [];
function increaseNumber() {
    $(".js-increase-number").each(function (i) {
        var number = $(this).data("number");
        var str = number.replace(/[0-9]/g, '');
        if (!isNumeric(number)) {
            number = number.replace(/\D/g, "");
        }

        number = parseInt(number);

        var x = 0;

        increaseNumberItv[i] = setInterval(() => {
            $(this).html(x+ str);
            x += Math.ceil(number / 100);
            if (x > number) {
                $(this).html(number + str);
                clearInterval(increaseNumberItv[i]);
            }
        }, 50);
    });
}

function clearIncreaseNumber() {
    increaseNumberItv.forEach(function (e) {
        clearInterval(e);
    });
}

// $(window).scroll(function () {
//     var top_of_element = $(".js-increase-number").offset().top;
//     var bottom_of_element =
//         $(".js-increase-number").offset().top +
//         $(".js-increase-number").outerHeight();
//     var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
//     var top_of_screen = $(window).scrollTop();

//     if (
//         bottom_of_screen > top_of_element &&
//         top_of_screen < bottom_of_element
//     ) {
//         console.log("visible");
//     } else {
//         console.log("none");
//     }
// });
