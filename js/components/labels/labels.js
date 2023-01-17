import { IsValid } from '../is-valid/is-valid.js';

function labels(selector, data) {
    if (typeof selector !== 'string' || selector === '') {
        throw new Error('Selector must be string');
    }

    if (!IsValid.nonEmptyArray(data)) {
        throw new Error('Data array is empty');
    }

    const labelsDOM = document.getElementById(selector);
    if (labelsDOM === null) {
        throw new Error(`Selector (${selector}) can't find element with it`);
    }

    let HTML = '';
    for (const item of data) {
        if (
            !IsValid.object(item) ||
            !IsValid.sCardTitle(item.brand) ||
            !IsValid.sCardDescription(item.imgPath)
        ) {
            continue;
        }

        HTML += `<div class="labels-img i1"><img class="brand-logo" src="${item.imgPath}" alt="${item.brand}" /></div>`;
    }

    labelsDOM.innerHTML = HTML;
}

export { labels };
