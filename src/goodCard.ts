import { dataCase } from './data';
import { mainContainer, logo, main } from './shop-bag';
export function RenderCard() {
    const goodCards = document.querySelectorAll('.cart');
    for (let i = 0; i < goodCards.length; i++) {
        const property = goodCards[i].children[1].children[0];
        const category = property.children[0].children[0].textContent;
        const brand = property.children[1].children[0].textContent;
        const discount = property.children[2].children[0].textContent;
        const price = property.children[3].children[0].textContent;
        const rating = property.children[4].children[0].textContent;
        const stock = property.children[5].children[0].textContent;
        const description = property.children[6].textContent;
        const name = goodCards[i].children[0].textContent;
        let id: number;
        let img: string[] = [];
        for (let j = 0; j < dataCase.limit; j++) {
            if (dataCase.products[j].title == name) {
                id = dataCase.products[j].id;
                img = [...dataCase.products[j].images];
            }
        }
        console.log(img);
        goodCards[i].children[1].children[2].addEventListener('click', () => {
            mainContainer?.classList.add('hide');
            logo?.addEventListener('click', () => {
                mainContainer?.classList.remove('hide');
                card.classList.add('hide');
            });

            const card = document.createElement('div');
            main?.append(card);
            card.classList.add('productCard');
            card.innerHTML = `
                    <div class='productcard__container'>
                        <div class='product__info'>
                            <div class='product__image'>
                                <div><img src="${img[0]}" alt=""></div>
                                <div><img src="${img[1]}" alt=""></div>
                                <div><img src="${img[2]}" alt=""></div>
                                <div><img src="${img[3]}" alt=""></div>
                                <div><img src="${img[4]}" alt=""></div>
                            </div>
                            <div class='product__text'>
                                <div class='product__name'>${name}</div>
                                <div class='product__desc'>${description}</div>
                            </div>
                            <div class='product__characteristic'>
                                <div class='product__rating'>${rating}</div>
                                <div class='product__price'>${price}</div>
                                <div class='product__discount'>${discount}</div>
                                <div class='product__stock'>${stock}</div>
                                <div class='product__brand'>${brand}</div>
                                <div class='product__category'>${category}</div>
                            </div>
                        </div>
                    </div>`;
        });
    }
}
