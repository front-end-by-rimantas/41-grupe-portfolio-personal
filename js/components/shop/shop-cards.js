import { IsValid } from '../is-valid/is-valid.js';

function shop(selector, data) {
    if (typeof selector !== 'string' || selector === '') {
        throw new Error('Selector must be string');
    }

    if (!IsValid.nonEmptyArray(data)) {
        throw new Error('Data array is empty');
    }

    const shopDOM = document.getElementById(selector);
    if (shopDOM === null) {
        throw new Error(`Selector (${selector}) can't find element with it`);
    }

    let HTML = '';

    for (const item of data) {
        if (
            !IsValid.object(item) ||
            !IsValid.sCardTitle(item.icon) ||
            !IsValid.sCardDescription(item.text) ||
            !IsValid.sCardPerks(item.text)
        ) {
            continue;
        }

        HTML += `<div class="col-12 col-md-6 col-lg-3 shop-card">
        <div class="c-top">
            <div class="c-number-bg">
                <div class="c-number"><h3 class="c-text">01</h3></div>
            </div>
        </div>
        <div class="c-title-wrapper">
            <h4 class="c-title c-text">Economy</h4>
            <p class="c-title-description c-text">For the individuals</p>
        </div>
        <div class="c-list">
            <div class="c-list-item"><p class="c-text">Secure Online Transfer</p></div>
            <div class="c-list-item"><p class="c-text">Secure Online Transfer</p></div>
            <div class="c-list-item"><p class="c-text">Secure Online Transfer</p></div>
        </div>
        <div class="price-wrap">
            <h3 class="item-price"><span>&euro;</span> 199.00</h3>
            <a class="buy-btn" href="#">Buy Now</a>
        </div>
    </div>`;
    }

    shopDOM.innerHTML = HTML;
}

export { shop };
