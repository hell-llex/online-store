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
import { Routing, searchParams } from './components/routing/routing';
import { SortProductCard } from './components/sort/sort';
import { productsArrayI } from './components/types';
import { renderBasket } from './components/basket/basket';

loadProduct(100);

Routing();

Button();

SortProductCard('notNow');

window.addEventListener('beforeunload', addLocalStoragePage); // catch reload-page event
window.addEventListener('load', getLocalStoragePage);
window.addEventListener('beforeunload', addLocalStorageBasket);
window.addEventListener('load', renderBasket);
window.addEventListener('load', getLocalStorageBasket);

export const itemInBasket: productsArrayI[] = getLocalStorageBasket(); //TODO сюда надо закинуть getLocalStorageBasket()
alert(
  'Привет, немного не успели. Если есть возможность проверьте в конце кросс-чека. Если возникнуть вопросы просьба связаться в дискорд gril#2057 или hell-llex#1516. Саооценка для удобства расписана в PR'
);
