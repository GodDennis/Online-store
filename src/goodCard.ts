import { dataCase } from './data';
import { mainContainer, logo, main } from './shop-bag';

export function RenderCardHash() {
    const goodCards = document.querySelectorAll('.cart');
    for (let i = 0; i < goodCards.length; i++) {
        goodCards[i].children[1].children[2].addEventListener('click', () => {
            window.location.hash = `card/${goodCards[i].id}`;
        });
    }
}

export function render() {
    const goodCards = document.querySelectorAll('.cart');
    for (let i = 0; i < goodCards.length; i++) {
        const card = document.createElement('div');
        const name = goodCards[i].children[0].textContent;
        let img: string[] = [];
        if (+goodCards[i].id == +window.location.hash.slice(6)) {
            const property = goodCards[i].children[1].children[0];
            const category = property.children[0].children[0].textContent;
            const brand = property.children[1].children[0].textContent;
            const discount = property.children[2].children[0].textContent;
            const price = property.children[3].children[0].textContent;
            const rating = property.children[4].children[0].textContent;
            const stock = property.children[5].children[0].textContent;
            const description = property.children[6].textContent;
            mainContainer?.classList.add('hide');
            main?.append(card);
            for (let j = 0; j < dataCase.limit; j++) {
                if (dataCase.products[j].title == name) {
                    img = [...dataCase.products[j].images];
                }
            }
            card.classList.add('productCard');
            card.innerHTML = `
                    <div class='productcard__container'>
                        <div class='product__info'>
                            <div class='product__image'>
                                <div><img class='img1' src="${img[0]}" alt=""></div>
                                <div><img class='img2' src="${img[1]}" alt=""></div>
                                <div><img class='img3' src="${img[2]}" alt=""></div>
                                <div><img class='img4' src="${img[3]}" alt=""></div>
                                <div><img class='img5' src="${img[4]}" alt=""></div>
                            </div>
                            <div class='product__text'>
                                <div class='product__name'>${name}</div>
                                <div class='product__desc'>${description}</div>
                                <button class ='product__buy btn'>Buy now</button>
                            </div>
                            <div class='product__characteristic'>Characteristic
                                <div class='product__rating txt'>Rating: ${rating}</div>
                                <div class='product__price txt'>Price: ${price}</div>
                                <div class='product__discount txt'>Discount: ${discount}</div>
                                <div class='product__stock txt'>Stock: ${stock}</div>
                                <div class='product__brand txt'>Brand: ${brand}</div>
                                <div class='product__category txt'>Category: ${category}</div>
                            </div>
                        </div>
                    </div>`;
        }

        logo?.addEventListener('click', () => {
            mainContainer?.classList.remove('hide');
            window.location.hash === '';
            card?.remove();
        });
        const bag = document.querySelector('.shop-bag');
        bag?.addEventListener('click', () => {
            card?.remove();
        });
    }
}
