const main = document.querySelector('.main');
const mainContainer = document.querySelector('.main__container');
const bagScreen = document.createElement('div');
const logo = document.querySelector('.logo');
const total = document.querySelector('.sum') as HTMLElement;
export function shopBag() {
    bagScreen.classList.add('bag__container', 'hide');
    //создаем контрейнер для корзины
    const bag = document.querySelector('.shop-bag');
    main?.append(bagScreen);
    //вешаем обработчик на иконку корзины
    bag?.addEventListener('click', renderBag);
    //возвращаемся на странцу товаров
    logo?.addEventListener('click', () => {
        mainContainer?.classList.remove('hide');
        bagScreen.classList.add('hide');
    });
}
function renderBag() {
    // включаем выключаем основной контейнер
    mainContainer?.classList.add('hide');
    bagScreen.classList.remove('hide');
    //
}
let countTotal = 0;
export function addCard() {
    const cart: NodeListOf<HTMLElement> = document.querySelectorAll('.cart');
    for (let i = 0; i < cart.length; i++) {
        cart[i].children[1].children[1].addEventListener('click', () => {
            const bagCartContainer = document.createElement('div');
            const bagCartInfo = document.createElement('div');
            const bagInfoImg = document.createElement('img');
            const cartInfo = document.createElement('div');
            const cartName = document.createElement('a');
            const cartDesc = document.createElement('div');
            const bagCartPrice = document.createElement('div');
            const cartPrice = document.createElement('div');
            const discPrice = document.createElement('div');
            const remove = document.createElement('div');
            const left = document.createElement('span');
            const right = document.createElement('span');
            left.classList.add('left');
            right.classList.add('right');
            remove.classList.add('remove');
            bagCartPrice.classList.add('bag__cart-price');
            cartName.classList.add('bag__cart-name');
            cartDesc.classList.add('bag__cart-descr');
            cartInfo.classList.add('bag__cart-info');
            bagCartInfo.classList.add('bag__info');
            bagInfoImg.classList.add('bag__img');
            bagCartContainer.classList.add('bagCartContainer');
            cartPrice.classList.add('cartPrice');
            bagCartContainer.append(remove);
            remove.append(left);
            remove.append(right);
            bagScreen.append(bagCartContainer);
            bagCartContainer.append(bagCartInfo);
            bagCartContainer.append(bagCartPrice);
            bagCartPrice.append(cartPrice);
            bagCartPrice.append(discPrice);
            bagCartInfo.append(bagInfoImg);
            bagCartInfo.append(cartInfo);
            cartInfo.append(cartName);
            cartInfo.append(cartDesc);
            const price = cart[i].children[1].children[0].children[3].children[0].textContent as string;
            const name = cart[i].children[0].textContent as string;
            const ImgContainer = cart[i].children[1] as HTMLElement;
            const urlImg = ImgContainer.style.backgroundImage;
            const description = cart[i].children[1].children[0].children[6].textContent as string;
            const discount = cart[i].children[1].children[0].children[2].children[0].textContent as string;
            bagInfoImg.src = urlImg.slice(5, -2);
            cartName.innerText = name;
            cartName.href = '#';
            const percent = (100 - +discount.slice(0, -1)) / 100;
            cartPrice.innerText = `Price : ${+price}$`;
            discPrice.innerText = `Price : ${(+price * percent).toFixed(2)}$`;
            cartDesc.innerText = description;
            const discountTotal = +price * percent;
            countTotal += discountTotal;
            (total?.children[0] as HTMLElement).innerText = `${countTotal.toFixed(2)}$`;
            removeCards();
            remove.addEventListener('click', () => {
                countTotal -= +discountTotal;
                (total?.children[0] as HTMLElement).innerText = `${countTotal.toFixed(2)}$`;
            });
        });
    }
}
function removeCards() {
    const removed = document.querySelectorAll('.remove');
    const bagCartContainer = document.querySelectorAll('.bagCartContainer');
    const price: string[] = [];
    for (let i = 0; i < removed.length; i++) {
        price.push(bagCartContainer[i].children[2].children[1].textContent?.slice(8, -1) as string);

        removed[i].addEventListener('click', () => {
            bagCartContainer[i].remove();
        });
    }
}
