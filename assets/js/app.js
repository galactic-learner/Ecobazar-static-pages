$(function () {
    let mobileSearch = document.querySelector('.mobile_search');
    let searchBody = document.querySelector('#mobile_search');

    let searchClose = document.querySelector('.close');


    mobileSearch.addEventListener('click', function () {
        searchBody.classList.add('mobile_search_active');

    });

    searchClose.addEventListener('click', function () {
        searchBody.classList.remove('mobile_search_active');
    });

    // banner slider
    $('.parent_slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: '<span class="right"><iconify-icon icon="prime:arrow-right" width="24" height="24"></iconify-icon></span>',
        prevArrow: '<span class="left"><iconify-icon icon="prime:arrow-left" width="24" height="24"></iconify-icon></span>',
    });

    // category filter
    $('.category-button').categoryFilter();

    // Enable tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    // ad (not fully integrated)
    window.addEventListener('load', function () {
        setTimeout(function () {
            document.querySelector('.ad').classList.add('ad-active');
        }, 2000);
    });

    // timer
    $("#getting-started")
        .countdown("2029/02/01", function (event) {
            // $(this).text(event.strftime('%W weeks %D days %H:%M:%S'));
            $('.sec').text(event.strftime('%S'));
            $('.min').text(event.strftime('%M'));
            $('.hour').text(event.strftime('%H'));
            $('.day').text(event.strftime('%D'));
        });


    // ad section
    // window.addEventListener('load', function () {

    // }


    // zoom
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        dots: false,
        centerMode: false,
        centerPadding: '0px',
        arrows: true,
        prevArrow: '<span class="top"><iconify-icon icon="iconamoon:arrow-up-2-thin" width="24" height="24"></iconify-icon></span>',
        nextArrow: '<span class="down"><iconify-icon icon="iconamoon:arrow-down-2-thin" width="24" height="24"></iconify-icon></span>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    vertical: false,
                    arrows: false,
                }
            },
        ]
    });

    // ZOOMSL
    $(function () {
        $(".example").imagezoomsl();
    });

    // counter
    $('#getting-started2').countdown('2030/01/01', function (event) {
        $(this).html(event.strftime('<span>%d <p>days</p></span> : <span>%H <p>Hours</p> </span>:<span>%M <p>MINS</p> </span>:<span>%S <p>Secs</p> </span>'));
    });



/* ================ JS manual + (A. try) START ================ */

// counter (prod details)

// touch_spin
$("input[name='counter']").TouchSpin({
    min: 1,
    max: 5,
    decimals: 0,
    buttondown_txt: '-',
    buttonup_txt: '+',
    forcestepdivisibility: 'round',
    mousewheel: false,
});

// product_price
$(".product").each(function () {
    let $product = $(this);
    let basePrice = parseFloat($product.find(".price").data("price"));
    let $priceElement = $product.find(".price_discounted");
    let $qtyInput = $product.find("input[name='counter']");

    function updatePrice() {
        let qty = parseInt($qtyInput.val());
        let total = (basePrice * qty).toFixed(2);
        $priceElement.text("$" + total);
    }

    // Update price on change
    $qtyInput.on("change touchspin.on.stopspin", function () {
        updatePrice();
    });

    // Set initial price
    updatePrice();
});

// tabs 
$(".js-tabs-link").aniTabs({
    animation: "slide",
    slideDirection: "left",
    autoHeight: true,
});

// pagination
$(document).ready(function () {
    generatePagination('.js-pagination', '.js-pagination-item', 12, '<iconify-icon icon="iconamoon:arrow-left-2" width="24" height="24"></iconify-icon>', '<iconify-icon icon="iconamoon:arrow-right-2" width="24" height="24"></iconify-icon>');
});


});




/* ================ JS manual + (A. try) END ================ */






