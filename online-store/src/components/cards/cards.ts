import './cards.scss';
import { IProduct, IProductsData } from '../types';
import { loadFilter } from '../filter/filter';
import { searchProductCard } from '../search/search';
import { itemInBasket } from '../..';
import { localStorageUrl } from '../basket/localStorage';

export const productsData: IProductsData = {
  limit: 0,
  products: [],
  skip: 0,
  total: 0,
};

export let products: string[] = [];

export function CreateProductCard(setting: IProduct[] | string): void {
  const currentProducts: string[] = [];
  if (typeof setting === 'string' || setting.length === 0) {
    (document.querySelector('.catalog-products') as HTMLElement).style.display =
      'flex';
    (document.querySelector('.catalog-products') as HTMLElement).innerHTML =
      '<p class="not-found">No products found <br> (ಥ﹏ಥ)</p>';
    (document.querySelectorAll('.found') as NodeListOf<HTMLElement>).forEach(
      (elem) => (elem.dataset.found = '0'),
    );
    (
      document.querySelectorAll('.found .new') as NodeListOf<HTMLElement>
    ).forEach((elem) => (elem.innerHTML = '0'));
  } else {
    setting.forEach((elem) => {
      const images: string[] = [];

      elem.images.forEach((elem) => {
        const image = `<li><div class="image" style="background-image: url('${elem}');"></div></li>`;
        images.push(image);
      });

      function addDropCard(): string {
        for (const el of itemInBasket) {
          if (el.id === elem.id) return 'Remove';
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
    <p><b>Price: </b> <span>${Math.round(
      (elem.price / 100) * (100 + elem.discountPercentage),
    )}$</span>/<span>${elem.price}$</span></p>
    <p><b>Discount: </b> ${elem.discountPercentage}%</p>
    <p><b>Rating: </b> ${elem.rating}</p>
    <p><b>Stock: </b> ${elem.stock}</p>
      <div class="product-btn">
        <div class="btn__addBasket" data-action="${addDropCard()}">${addDropCard()}</div>
        <div class="btn__description">Details</div>
      </div>
    </div>`;
      currentProducts.push(card);
    });
    products = currentProducts.slice();
    (document.querySelector('.catalog-products') as HTMLElement).style.display =
      'grid';
    (document.querySelector('.catalog-products') as HTMLElement).innerHTML =
      currentProducts.join('');

    (document.querySelectorAll('.found') as NodeListOf<HTMLElement>).forEach(
      (elem) => (elem.dataset.found = `${currentProducts.length}`),
    );
    (
      document.querySelectorAll('.found .new') as NodeListOf<HTMLElement>
    ).forEach((elem) => (elem.innerHTML = `${currentProducts.length}`));
  }
}

export function loadProduct(quantity = 100): void {
  void fetch(`https://dummyjson.com/products?limit=${quantity}`)
    .then(async (data) => data.json())
    .then((data: IProductsData) => {
      data.products.forEach((elem) => (elem.count = 1));
      Object.assign(productsData, data);
      CreateProductCard(data.products);
      loadFilter(data.products);
      searchProductCard('notNow');
      window.location.href = localStorageUrl('get') as string;

      (
        document.querySelectorAll('.found .all') as NodeListOf<HTMLElement>
      ).forEach((elem) => (elem.innerHTML = `${quantity}`));
    });
}
