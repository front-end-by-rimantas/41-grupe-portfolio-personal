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
    let nr = 1;
    for (const item of data) {
        if (
            !IsValid.object(item) ||
            !IsValid.sCardTitle(item.title) ||
            !IsValid.sCardDescription(item.description) ||
            !IsValid.sCardPerk(item.firstPerk) ||
            !IsValid.sCardPerk(item.secondPerk) ||
            !IsValid.sCardPerk(item.thirdPerk) ||
            !IsValid.sPrice(item.price)
        ) {
            continue;
        }

        HTML += `<div class="col-12 col-md-6 col-lg-3 shop-card">
        <div class="c-top">
            <div class="c-number-bg">
                <div class="c-number"><h3 class="c-text">${nr++}</h3></div>
            </div>
        </div>
        <div class="c-title-wrapper">
            <h4 class="c-title c-text">${item.title}</h4>
            <p class="c-title-description c-text">${item.description}</p>
        </div>
        <div class="c-list">
            <div class="c-list-item"><p class="c-text">${
                item.firstPerk
            }</p></div>
            <div class="c-list-item"><p class="c-text">${
                item.secondPerk
            }</p></div>
            <div class="c-list-item"><p class="c-text">${
                item.thirdPerk
            }</p></div>
        </div>
        <div class="price-wrap">
            <h3 class="item-price"><span>&euro;</span>${item.price}</h3>
            <a class="buy-btn" href="#">Buy Now</a>
        </div>
    </div>`;
    }

    shopDOM.innerHTML = HTML;
}

export { shop };
