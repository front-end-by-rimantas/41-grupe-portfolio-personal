const header = document.getElementById('header');

let lastScroll = 0;

window.onscroll = function () {
    let currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScroll) {
        header.classList.add('header-scrolled');
    }
    lastScroll = currentScroll;
};

export { header };
