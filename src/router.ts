import { shopBag, renderBag, checkEmpty } from './shop-bag';
import { bagScreen } from './shop-bag';
import { mainContainer } from './shop-bag';
export function Router() {
    window.addEventListener('load', renderRoud);
    window.addEventListener('hashchange', renderRoud);
}
function renderRoud() {
    const router = window.location.hash.slice(1);

    if (router == 'bag/') {
        shopBag();
        checkEmpty();
        renderBag();
    } else if (router == '') {
        mainContainer?.classList.remove('hide');
        bagScreen.classList.add('hide');
    }
}
