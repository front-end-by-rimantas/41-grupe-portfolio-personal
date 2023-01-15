// IMPORT
import { shop } from '../components/shop/shop-cards.js';
import { shopData } from '../data/shopData.js';
import { labels3 } from '../data/labelsData.js';
import { labels } from '../components/labels/labels.js';
import Drag from '../components/labels/labelsDrag.js';

// EXECUTION

/* header start */
/* header end */

/* hero start */
/* hero end */

/* personal start */
/* personal end */

/* services start */
/* services end */

/* counter start */
/* counter end */

/* gallery start */
/* gallery end */

/* feedback start */
/* feedback end */

/* shop start */
shop('shop', shopData);
/* shop end */

/* blog start */
/* blog end */

/* Brand slideshow start */
labels('labels-container', labels3);
Drag();
/* Brand slideshow end */

/* footer start */
/* footer end */
