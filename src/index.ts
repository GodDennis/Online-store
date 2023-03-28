import './nullstyle.css';
import './Index.css';
import { dataCase } from './data';
interface products {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}
type FiltersType = 'brand' | 'category';

// interface FilteredProducts {
//     [key in filtersType]: products[];
// }

const domFilter = {
    category: document.querySelector('.category__items') as HTMLElement,
    brand: document.querySelector('.brand__items') as HTMLElement,
};

const goodsContainer: HTMLElement = document.querySelector('.goods__container') as HTMLElement;
function cart(data: products[]): void {
    for (let i = 0; i < dataCase.limit; i++) {
        //Init cart elements
        const cart = document.createElement('div');
        const cartContainer = document.createElement('div');
        const cartName = document.createElement('div');
        const cartDescription = document.createElement('div');
        const cartAdd = document.createElement('button');
        const cartLink = document.createElement('button');
        const descCategory = document.createElement('div');
        const descBrand = document.createElement('div');
        const descPrice = document.createElement('div');
        const descDiscount = document.createElement('div');
        const descRating = document.createElement('div');
        const descStock = document.createElement('div');
        const descPriceSpan = document.createElement('span');
        const descBrandSpan = document.createElement('span');
        const descCategorySpan = document.createElement('span');
        const descRatingSpan = document.createElement('span');
        const descStockSpan = document.createElement('span');
        const descDiscountSpan = document.createElement('span');
        //classAdd

        cart.classList.add('cart');
        cartContainer.classList.add('cartContainer');
        cartName.classList.add('cartName');
        cartDescription.classList.add('cartDescription');
        cartAdd.classList.add('cartAdd');
        cartAdd.classList.add('btn');
        cartLink.classList.add('cartLink');
        cartLink.classList.add('btn');
        descCategory.classList.add('descriprion__text');
        descBrand.classList.add('descriprion__text');
        descPrice.classList.add('descriprion__text');
        descDiscount.classList.add('descriprion__text');
        descRating.classList.add('descriprion__text');
        descStock.classList.add('descriprion__text');
        descPriceSpan.classList.add('price');
        descBrandSpan.classList.add('brand');
        descCategorySpan.classList.add('category');
        descRatingSpan.classList.add('rating');
        descStockSpan.classList.add('stock');
        descDiscountSpan.classList.add('discount');
        //
        cartName.innerText = data[i].title;
        cartLink.innerText = 'Copy Link';
        cartAdd.innerText = 'Add Cart';
        //
        descBrand.innerText = `Brand: `;
        descBrandSpan.innerText = `${data[i].brand}`;
        //
        descCategory.innerText = `Category: `;
        descCategorySpan.innerText = `${data[i].category}`;
        //
        descDiscountSpan.innerText = `${data[i].discountPercentage}`;
        descDiscount.innerText = `Discount: `;
        //
        descPrice.innerText = `Price: `;
        descPriceSpan.innerText = `${data[i].price}`;
        //
        descRatingSpan.innerText = `${data[i].rating}`;
        descRating.innerText = `Rating: `;
        //
        descStockSpan.innerText = `${data[i].stock}`;
        descStock.innerText = `Stock: `;
        //
        cartContainer.style.backgroundImage = `url(${data[i].images[0]})`;

        // insert elements of cart

        goodsContainer.append(cart);
        cart.prepend(cartName);
        cart.append(cartContainer);
        cartContainer.append(cartDescription);
        cartDescription.append(descCategory);
        cartDescription.append(descBrand);
        cartDescription.append(descDiscount);
        cartDescription.append(descPrice);
        cartDescription.append(descRating);
        cartDescription.append(descStock);
        cartContainer.append(cartAdd);
        cartContainer.append(cartLink);

        //span description
        descPrice.append(descPriceSpan);
        descDiscount.append(descDiscountSpan);
        descBrand.append(descBrandSpan);
        descCategory.append(descCategorySpan);
        descRating.append(descRatingSpan);
        descStock.append(descStockSpan);
    }
}

cart(dataCase.products);

const items: Element = document.querySelector('.goods__container') as HTMLElement;

function ASCPrice(a: number) {
    for (let i = 0; i < items.children.length; i++) {
        for (let j = i; j < items.children.length; j++) {
            if (
                +items.children[i].children[1].children[0].children[a].children[0].innerHTML >
                +items.children[j].children[1].children[0].children[a].children[0].innerHTML
            ) {
                const replacedNode = items.replaceChild(items.children[j], items.children[i]);
                insertAfter(replacedNode, items.children[i]);
            }
        }
    }
}
function insertAfter(elem: Element, refElem: Element) {
    return refElem.parentNode?.insertBefore(elem, refElem.nextSibling);
}
// sortPrice();

function DESCPrice(a: number) {
    for (let i = 0; i < items.children.length; i++) {
        for (let j = i; j < items.children.length; j++) {
            if (
                +items.children[i].children[1].children[0].children[a].children[0].innerHTML <
                +items.children[j].children[1].children[0].children[a].children[0].innerHTML
            ) {
                const replacedNode = items.replaceChild(items.children[j], items.children[i]);
                insertAfter(replacedNode, items.children[i]);
            }
        }
    }
}

const sortList = document.querySelector('.sort__list') as HTMLSelectElement;
sortList?.addEventListener('change', () => {
    if (sortList.selectedIndex === 1) {
        ASCPrice(3);
    }
    if (sortList.selectedIndex === 2) {
        DESCPrice(3);
    }
    if (sortList.selectedIndex === 3) {
        ASCPrice(4);
    }
    if (sortList.selectedIndex === 4) {
        DESCPrice(4);
    }
    if (sortList.selectedIndex === 5) {
        ASCPrice(2);
    }
    if (sortList.selectedIndex === 6) {
        DESCPrice(2);
    }
});

// search

const search: HTMLInputElement = document.querySelector('.search') as HTMLInputElement;
search.addEventListener('input', function () {
    const val: string = this.value.trim() as string;
    const arr = Array.from(items.children);
    if (val != '') {
        arr.forEach((el) => {
            if (
                el.children[0].innerHTML.toLowerCase().search(val.toLowerCase()) == -1 &&
                el.children[1].children[0].children[0].children[0].innerHTML.toLowerCase().search(val.toLowerCase()) ==
                    -1 &&
                el.children[1].children[0].children[1].children[0].innerHTML.toLowerCase().search(val.toLowerCase()) ==
                    -1
            ) {
                el.classList.add('hide');
            } else {
                el.classList.remove('hide');
            }
        });
    } else {
        arr.forEach((el) => {
            el.classList.remove('hide');
        });
    }
});

// filter

function filterRander(by: Element, type: string) {
    const filterSet = new Set();
    dataCase.products.forEach((el) => {
        if (type == 'brand') {
            filterSet.add(el.brand as string);
        }
        if (type == 'category') {
            filterSet.add(el.category as string);
        }
    });
    const arr = Array.from(filterSet);
    for (let i = 0; i < arr.length; i++) {
        const Input = document.createElement('input') as HTMLElement;
        const Label = document.createElement('label') as HTMLElement;
        Input.setAttribute('type', 'checkbox');
        Input.id = arr[i] as string;
        Label.setAttribute('for', Input.id);
        Input.classList.add('Input');
        Label.classList.add('Label');
        Label.innerHTML = arr[i] as string;
        const itemContainer = document.createElement('div');
        itemContainer.append(Input);
        itemContainer.append(Label);
        by?.append(itemContainer);
    }
}
function allChecked(type) {
    const checkbox = domFilter[type].querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
    let elemChecked = false;
    checkbox.forEach((el) => {
        if (el.checked) {
            elemChecked = true;
        }
    });
    if (elemChecked == false) {
        goodsContainer.innerHTML = '';
        cart(dataCase.products);
    }
}

filterRander(domFilter.category as Element, 'category');
filterRander(domFilter.brand as Element, 'brand');

let result: products[] = [];
let filteredCards: products[] = [];
let a: HTMLInputElement;
function filterSelect() {
    domFilter.category.onchange = (el: Event) => {
        a = el.target as HTMLInputElement;
        if (a.checked) {
            dataCase.products.filter((card) => {
                if (card.category == a.id) {
                    filteredCards.push(card);
                } else {
                    return false;
                }
            });
            checkOtherFilters(filteredCards);
            filteredCards = filteredCards.reduce((o: products[], i: products) => {
                if (!o.find((v: products) => v.title == i.title)) {
                    o.push(i);
                }
                return o;
            }, []);
            result = filteredCards;

            goodsContainer.innerHTML = '';
            cart(result);
        } else if (!a.checked) {
            result = result.filter((el) => {
                if (a.id == el.category) {
                    return false;
                } else return true;
            });
            goodsContainer.innerHTML = '';
            filteredCards = result;
            allChecked('category');
            cart(result);
        }
    };
}
filterSelect();
// отслеживание изменений фильтров и фильтация

const morefilteredCards: products[] = [];
function checkOtherFilters(filteredCards: products[]) {
    const updateFilteredCards = filteredCards;
    domFilter.brand.onchange = (el: Event) => {
        if (a.checked) {
            a = el.target as HTMLInputElement;
            const reg1 = new RegExp(a.id);
            updateFilteredCards.filter((card) => {
                if (reg1.test(card.brand)) {
                    morefilteredCards.push(card);
                } else {
                    return false;
                }
            });
            goodsContainer.innerHTML = '';
            cart(morefilteredCards);
        }
    };
}
let result1: products[] = [];
let filteredCards1: products[] = [];
function filterSelect1() {
    domFilter.brand.onchange = (el: Event) => {
        a = el.target as HTMLInputElement;
        if (a.checked) {
            dataCase.products.filter((card) => {
                if (card.brand == a.id) {
                    filteredCards1.push(card);
                } else {
                    return false;
                }
            });
            checkOtherFilters1(filteredCards1);
            filteredCards1 = filteredCards1.reduce((o: products[], i: products) => {
                if (!o.find((v: products) => v.title == i.title)) {
                    o.push(i);
                }
                return o;
            }, []);
            result1 = filteredCards1;

            goodsContainer.innerHTML = '';
            cart(result1);
            A;
        } else if (!a.checked) {
            result1 = result1.filter((el) => {
                if (a.id == el.brand) {
                    return false;
                } else return true;
            });
            goodsContainer.innerHTML = '';
            filteredCards1 = result1;
            allChecked('brand');
            cart(result1);
        }
    };
}
filterSelect1();

const morefilteredCards1: products[] = [];
function checkOtherFilters1(filteredCards: products[]) {
    const updateFilteredCards = filteredCards;
    domFilter.category.onchange = (el: Event) => {
        a = el.target as HTMLInputElement;
        const reg1 = new RegExp(a.id);
        updateFilteredCards.filter((card) => {
            if (reg1.test(card.category)) {
                morefilteredCards1.push(card);
            } else {
                return false;
            }
        });
        goodsContainer.innerHTML = '';
        cart(morefilteredCards1);
        filterSelect();
    };
}
