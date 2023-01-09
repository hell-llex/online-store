import './cards.scss';
import { productsArrayI, productsDataI } from '../types';
import { loadFilter } from '../filter/filter';
import { searchProductCard } from '../search/search';

const log = console.log;

export const productsData: productsDataI = {
  limit: 0,
  products: [],
  skip: 0,
  total: 0,
}; // полный получаемый объект

export let products: string[] = []; // массив со всеми элементами в виде HTML строки

export function CreateProductCard(setting: productsArrayI[] | string): void {
  // принимает массив данных
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
      <div class="btn__addBasket">Add</div>
      <div class="btn__description">
        <a href="#/products/${elem.id}">Details</a>
      </div>
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
  // дефолтное значение стоит на 100 карточек, переопределеятся в вызове функции
  void fetch(`https://dummyjson.com/products?limit=${quantity}`)
    .then(async (data) => data.json())
    .then((data: productsDataI) => {
      Object.assign(productsData, data); // копирует объект
      CreateProductCard(data.products); // передает массив в функцию CreateProductCard
      loadFilter(data.products);
      searchProductCard('notNow');
    });
}
