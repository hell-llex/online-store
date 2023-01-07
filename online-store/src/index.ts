import '../index.html';
import '../styles.scss';
import './components/loader/loader.scss';
import './components/basket/basket';
import Data from './products-v1.json';
// import { loadFilter, changeFilter } from './components/filter/filter';
import { Button } from './components/button';
import { loadProduct } from './components/cards/cards';
import {
  addLocalStorage,
  getLocalStorage,
} from './components/basket/localStorage';
import { Routing } from './components/routing/routing';
import { SortProductCard } from './components/sort/sort';

loadProduct(30);

Routing();

Button();

SortProductCard('notNow');

// changeFilter()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export let itemInBasket: any[];
// eslint-disable-next-line prefer-const
itemInBasket = [Data[1], Data[5], Data[9], Data[11], Data[14], Data[15]]; // global array of items in basket get value from localStarage

window.addEventListener('beforeunload', addLocalStorage); // catch reload-page event

window.addEventListener('load', getLocalStorage);
