import '../index.html';
import '../styles.scss';
import './components/basket/basket'
import Data from './products-v1.json'
import { Button } from './components/button';
import { loadProduct } from './components/cards/cards';
import { addLocalStorage, getLocalStorage } from './components/basket/localStorage'
import { Routing } from './components/routing/routing';
import { Loader } from './components/loader/loader';
import { SortProductCard } from './components/sort/sort';

const log = console.log;

Loader()

loadProduct(30)

Routing()

Button()

SortProductCard('notNow')

export let itemInBasket: any
itemInBasket = [Data[1], Data[5], Data[9], Data[11], Data[14], Data[15]] // global array of items in basket get value from localStarage

window.addEventListener('beforeunload', addLocalStorage)    //catch reload-page event

window.addEventListener('load', getLocalStorage)
