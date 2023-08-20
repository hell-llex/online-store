import '../index.html';
import '../styles.scss';
import './components/loader/loader.scss';
import { Button } from './components/button';
import { loadProduct } from './components/cards/cards';
import {
  addLocalStoragePage,
  getLocalStoragePage,
  addLocalStorageBasket,
  getLocalStorageBasket,
} from './components/basket/localStorage';
import { Routing, recoveryValue } from './components/routing/routing';
import { SortProductCard } from './components/sort/sort';
import { IProduct } from './components/types';
import { renderBasket } from './components/basket/basket';

// Load a specific product
// Загрузка конкретного продукта
loadProduct(66);

// Initialize routing and button functionality
// Инициализация маршрутизации и функциональности кнопок
Routing();
const buttons = new Button();
buttons.listeners();

// Perform initial sorting
// Исходная сортировка
SortProductCard('notNow');

// Check for the presence of required elements before recovering values
// Проверка наличия необходимых элементов перед восстановлением значений
const intervalId = setInterval(function () {
  if (
    (document.querySelector('.stock-lower') as HTMLInputElement) &&
    (document.querySelector('.stock-upper') as HTMLInputElement) &&
    (document.querySelector('.price-lower') as HTMLInputElement) &&
    (document.querySelector('.price-upper') as HTMLInputElement) &&
    (document.querySelector('.search') as HTMLInputElement) &&
    (document.querySelector('.sort-input') as HTMLInputElement) &&
    (document.querySelectorAll(
      '.filters .checkbox',
    ) as NodeListOf<HTMLInputElement>) &&
    (document.querySelector('.btn-container') as HTMLElement) &&
    (document.querySelector('.catalog-products') as HTMLElement)
  ) {
    clearInterval(intervalId);
    // Recover values from the URL
    // Восстановление значений из URL
    recoveryValue(window.location.href.toString());
  }
  if (
    (document.querySelector('.catalog-products') as HTMLElement).children
      .length !== 0
  ) {
    (document.querySelector('.preloader') as HTMLElement).style.display =
      'none';
  }
}, 300);

// Add event listeners to handle local storage on page unload and load
// Добавление слушателей событий для работы с локальным хранилищем при выгрузке и загрузке страницы
window.addEventListener('beforeunload', addLocalStoragePage);
window.addEventListener('load', getLocalStoragePage);
window.addEventListener('beforeunload', addLocalStorageBasket);
window.addEventListener('load', getLocalStorageBasket);

// Load and render the contents of the shopping basket
// Загрузка и отображение содержимого корзины
window.addEventListener('load', renderBasket);

// Initialize an array to store items in the basket and a total object
// Инициализация массива для хранения товаров в корзине и объекта для хранения общей информации
export const itemInBasket: IProduct[] = getLocalStorageBasket() ?? [];
export const total = {
  totalPrice: 0,
  totalElements: 0,
};
