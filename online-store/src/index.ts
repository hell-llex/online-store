import '../index.html';
import '../styles.scss';
import './components/basket/basket'
import Data from './products-v1.json'
// import Filter from './components/filter';
import Button from './components/button';
import CreateProductCard from './components/cards';
import { addLocalStorage, getLocalStorage } from './components/basket/localStorage'
// import * as noUiSlider from 'nouislider';
// import 'nouislider/dist/nouislider.css';
import Routing from './components/routing/routing';

const log = console.log;

// log('JSON:', Data[0].color);
log('index')
Routing()
export let itemInBasket:any
itemInBasket =  [Data[1], Data[5],Data[9],Data[11],Data[14],Data[15]] // global array of items in basket get value from localStarage

window.addEventListener('beforeunload', addLocalStorage)    //catch reload-page event

window.addEventListener('load', getLocalStorage)



const catalogProducts = document.querySelector('.catalog-products') as HTMLElement;
CreateProductCard(catalogProducts, 21);
// Filter();
Button()
