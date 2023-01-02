import './cards.scss';
import { productsDataI } from '../types';
import { loadFilter } from '../filter/filter';

const log = (e: any) => console.log(`${e} ==>`, e);

export let productsData = {
  limit: 0,
  products: [],
  skip: 0,
  total: 0
}; // полный получаемый объект
export let products: string[] = []; // массив со всеми элементами в виде HTML строки

export function CreateProductCard(setting: Array<productsDataI>): void { // принимает массив данных
  const currentProducts: string[] = [];
  setting.forEach(elem => {
    const card: string = `<div class="product-item">
    <div class="product-img"
      style="background-image: url('${elem.thumbnail}');"></div>
    <h3>${elem.title}</h3>
    <p><b>Category: </b> ${elem.category}</p>
    <p><b>Brand: </b> ${elem.brand}</p>
    <p><b>Price: €</b>${elem.price}</p>
    <p><b>Discount: </b> ${elem.discountPercentage}%</p>
    <p><b>Rating: </b> ${elem.rating}</p>
    <p><b>Stock: </b> ${elem.stock}</p>
    <div class="product-btn">
      <div class="btn__addBasket">Add</div>
      <div class="btn__description">Details</div>
    </div>
    </div>`;
    currentProducts.push(card);
  });
  products = currentProducts.slice();
  (document.querySelector('.catalog-products') as HTMLElement).innerHTML = currentProducts.join('');
}

export function loadProduct(quantity: number = 100) { // дефолтное значение стоит на 100 карточек, переопределеятся в вызове функции
  fetch(`https://dummyjson.com/products?limit=${quantity}`)
    .then(data => data.json())
    .then((data: {
      products: Array<productsDataI>,
      total: number,
      skip: number,
      limit: number
    }) => {
      Object.assign(productsData, data) // копирует объект
      CreateProductCard(data.products) // передает массив в функцию CreateProductCard
      // console.log('productsData :>> ', productsData);
      loadFilter(data.products)
    })
}
