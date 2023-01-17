function renderMobileNav() {
    const primaryNav = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const maskToggle = document.querySelector('.page-mask');

    navToggle.addEventListener('click', () => {
        const visibility = primaryNav.getAttribute('data-visible');

        if (visibility === 'false') {
            primaryNav.setAttribute('data-visible', true);
            maskToggle.setAttribute('data-visible', true);
        } else if (visibility === 'true') {
            primaryNav.setAttribute('data-visible', false);
            maskToggle.setAttribute('data-visible', false);
        }
    });
    maskToggle.addEventListener('click', () => {
        const visibility = primaryNav.getAttribute('data-visible');
        if (visibility === 'true') {
            primaryNav.setAttribute('data-visible', false);
            maskToggle.setAttribute('data-visible', false);
        }
    });
}
export default renderMobileNav;
