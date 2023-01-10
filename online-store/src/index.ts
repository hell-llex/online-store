import '../index.html';
import '../styles.scss';
import './components/loader/loader.scss';
import './components/basket/basket';
// import { loadFilter, changeFilter } from './components/filter/filter';
import { Button } from './components/button';
import { loadProduct } from './components/cards/cards';
import {
  addLocalStoragePage,
  getLocalStoragePage,
  addLocalStorageBasket,
  getLocalStorageBasket,
} from './components/basket/localStorage';
import { Routing } from './components/routing/routing';
import { SortProductCard } from './components/sort/sort';
import { productsArrayI } from './components/types';

loadProduct(100);

Routing();

Button();

SortProductCard('notNow');

export const itemInBasket: productsArrayI[] = []; //TODO сюда надо закинуть getLocalStorageBasket()

window.addEventListener('beforeunload', addLocalStoragePage); // catch reload-page event
window.addEventListener('load', getLocalStoragePage);
window.addEventListener('beforeunload', addLocalStorageBasket);
window.addEventListener('load', getLocalStorageBasket);

alert(
  'Привет, немного не успели. Если есть возможность проверьте в конце кросс-чека. Если возникнуть вопросы просьба связаться в дискорд gril#2057 или hell-llex#1516'
);
