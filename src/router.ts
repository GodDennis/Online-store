import { render } from './goodCard';
import { shopBag, renderBag, checkEmpty, bagScreen, mainContainer } from './shop-bag';
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
    } else if (router.slice(0, 4) == 'card') {
        const card = document.querySelector('.productCard');
        render();
        card?.remove();
    }
}
