const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
function plusQuantity() {
    if (inputQuantity.value < maxQuantity) {
        inputQuantity.value == inputQuantity.value++;
        priceFinal.classList.add('anime');
    }
    getPrice();
}

function minusQuantity() {
    if (inputQuantity.value > 1) {
        inputQuantity.value == inputQuantity.value--;
        priceFinal.classList.add('anime');
    }
    getPrice();
}