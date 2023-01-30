import '../index.html';
import '../styles.scss';
import './components/loader/loader.scss';
import './components/basket/basket';
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

loadProduct(50);

Routing();
const buttons = new Button();
buttons.listeners();

SortProductCard('notNow');

const intervalId = setInterval(function () {
  if (
    (document.querySelector('.stock-lower') as HTMLInputElement) &&
    (document.querySelector('.stock-upper') as HTMLInputElement) &&
    (document.querySelector('.price-lower') as HTMLInputElement) &&
    (document.querySelector('.price-upper') as HTMLInputElement) &&
    (document.querySelector('.search') as HTMLInputElement) &&
    (document.querySelector('.sort-input') as HTMLInputElement) &&
    (document.querySelectorAll(
      '.filters .checkbox'
    ) as NodeListOf<HTMLInputElement>) &&
    (document.querySelector('.btn-container') as HTMLElement) &&
    (document.querySelector('.catalog-products') as HTMLElement)
  ) {
    clearInterval(intervalId);
    recoveryValue(window.location.href.toString());
  }
}, 1000);

window.addEventListener('beforeunload', addLocalStoragePage); // catch reload-page event
window.addEventListener('load', getLocalStoragePage);
window.addEventListener('beforeunload', addLocalStorageBasket);
window.addEventListener('load', getLocalStorageBasket);
window.addEventListener('load', renderBasket);

export const itemInBasket: IProduct[] = getLocalStorageBasket() ?? [];
