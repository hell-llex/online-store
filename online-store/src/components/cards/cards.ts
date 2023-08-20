import './cards.scss';
import { IProduct, IProductsData } from '../types';
import { loadFilter } from '../filter/filter';
import { searchProductCard } from '../search/search';
import { itemInBasket } from '../..';
import { localStorageUrl } from '../basket/localStorage';

// Data structure to hold information about products
// Структура данных для хранения информации о продуктах
export const productsData: IProductsData = {
  limit: 0,
  products: [],
  skip: 0,
  total: 0,
};

// Array to hold the HTML markup for product cards
// Массив для хранения HTML-разметки карточек товаров
export let products: string[] = [];

// Function to create and render product cards
// Функция для создания и отображения карточек товаров
export function CreateProductCard(setting: IProduct[] | string): void {
  const currentProducts: string[] = [];
  // Check if there are no products or the input is a string
  // Проверка, если нет продуктов или входные данные - строка
  if (typeof setting === 'string' || setting.length === 0) {
    // Display a message for no products found
    // Отображение сообщения о том, что продукты не найдены
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
    // Iterate through the array of products and create card HTML
    // Перебор массива продуктов и создание HTML-карточек
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
      // Push the generated card HTML to the currentProducts array
      // Добавление сгенерированной HTML-разметки карточки в массив currentProducts
      currentProducts.push(card);
    });
    // Update the products array and render the cards
    // Обновление массива продуктов и отображение карточек
    products = currentProducts.slice();
    (document.querySelector('.catalog-products') as HTMLElement).style.display =
      'grid';
    (document.querySelector('.catalog-products') as HTMLElement).innerHTML =
      currentProducts.join('');

    // Update the "found" indicators based on the number of products
    // Обновление индикаторов "found" на основе количества продуктов
    (document.querySelectorAll('.found') as NodeListOf<HTMLElement>).forEach(
      (elem) => (elem.dataset.found = `${currentProducts.length}`),
    );
    (
      document.querySelectorAll('.found .new') as NodeListOf<HTMLElement>
    ).forEach((elem) => (elem.innerHTML = `${currentProducts.length}`));
  }
}

// Function to fetch and load product data
// Функция для получения и загрузки данных о продуктах
export function loadProduct(quantity = 100): void {
  void fetch(`https://dummyjson.com/products?limit=${quantity}`)
    .then(async (data) => data.json())
    .then((data: IProductsData) => {
      data.products.forEach((elem) => (elem.count = 1));
      Object.assign(productsData, data);
      CreateProductCard(data.products);
      loadFilter(data.products);
      searchProductCard('notNow');
      // Redirect to the saved URL from local storage
      // Перенаправление на сохраненный URL из локального хранилища
      window.location.href = localStorageUrl('get') as string;
      // Update the total count indicator
      // Обновление индикатора общего количества продуктов
      (
        document.querySelectorAll('.found .all') as NodeListOf<HTMLElement>
      ).forEach((elem) => (elem.innerHTML = `${quantity}`));
    });
}
