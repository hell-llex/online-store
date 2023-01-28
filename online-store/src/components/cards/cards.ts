import './cards.scss';
import { productsArrayI, productsDataI } from '../types';
import { loadFilter } from '../filter/filter';
import { searchProductCard } from '../search/search';
import { itemInBasket } from '../..';
import { localStorageUrl } from '../basket/localStorage';

export const productsData: productsDataI = {
  limit: 0,
  products: [],
  skip: 0,
  total: 0,
}; // get full object

export let products: string[] = []; // array with all elements like HTML code

export function CreateProductCard(setting: productsArrayI[] | string): void {
  // accepts an array of data
  const currentProducts: string[] = [];
  if (typeof setting === 'string' || setting.length === 0) {
    (document.querySelector('.catalog-products') as HTMLElement).style.display =
      'flex';
    (document.querySelector('.catalog-products') as HTMLElement).innerHTML =
      '<p class="not-found">No products found <br> (ಥ﹏ಥ)</p>';
    (document.querySelector('.found') as HTMLElement).innerHTML = 'Found:0';
    (document.querySelector('.found') as HTMLElement).dataset.found = '0';
  } else {
    setting.forEach((elem) => {
      const images: string[] = [];

      elem.images.forEach((elem) => {
        const image = `<li><div class="image" style="background-image: url('${elem}');"></div></li>`;
        images.push(image);
      });

      //we change the button and the date attribute Add/Drop on the product button
      function addDropCard(): string {
        for (const el of itemInBasket) {
          if (el.id === elem.id) return 'Drop item';
        }
        return 'Add';
      }

      const card = `<div class="product-item" data-identifier="${elem.id}">
    <div class="product-img"
      style="background-image: url('${elem.thumbnail}');"></div>
    <h3>${elem.title}</h3>
    <ul class="list-images">${images.join('')}</ul>
    <p><b>Description: </b> ${elem.description}</p>
    <p><b>Category: </b> ${elem.category}</p>
    <p><b>Brand: </b> ${elem.brand}</p>
    <p><b>Price: €</b>${elem.price}</p>
    <p><b>Discount: </b> ${elem.discountPercentage}%</p>
    <p><b>Rating: </b> ${elem.rating}</p>
    <p><b>Stock: </b> ${elem.stock}</p>
    <div class="product-btn">
      <div class="btn__addBasket" data-action="${addDropCard()}">${addDropCard()}</div>
      <div class="btn__description">Details</div>
    </div></div>`;
      currentProducts.push(card);
    });
    products = currentProducts.slice();
    (document.querySelector('.catalog-products') as HTMLElement).style.display =
      'grid';
    (document.querySelector('.catalog-products') as HTMLElement).innerHTML =
      currentProducts.join('');
    (
      document.querySelector('.found') as HTMLElement
    ).innerHTML = `Found:${currentProducts.length}`;
    (
      document.querySelector('.found') as HTMLElement
    ).dataset.found = `${currentProducts.length}`;
  }
}

export function loadProduct(quantity = 100): void {
  // the default value is 100 cards, redefined in the function call
  void fetch(`https://dummyjson.com/products?limit=${quantity}`)
    .then(async (data) => data.json())
    .then((data: productsDataI) => {
      data.products.forEach((elem) => (elem.count = 1));
      Object.assign(productsData, data); // clone object
      CreateProductCard(data.products); // passes an array to a function CreateProductCard
      loadFilter(data.products);
      searchProductCard('notNow');
      window.location.href = localStorageUrl('get') as string;
    });
}
