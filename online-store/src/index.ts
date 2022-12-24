import '../index.html';
import '../styles.scss';
import './basket'
import Data from './products-v1.json'
// import Filter from './components/filter';
import Button from './components/button';
import CreateProductCard from './components/cards';
import { addLocalStorage, getLocalStorage } from './localStorage.js'
// import * as noUiSlider from 'nouislider';
// import 'nouislider/dist/nouislider.css';
const log = console.log;

export let itemInBasket:any
itemInBasket = getLocalStorage() // global array of items in basket get value from localStarage

window.addEventListener('beforeunload', addLocalStorage)    //catch reload-page event

window.addEventListener('load', getLocalStorage)



const catalogProducts = document.querySelector('.catalog-products') as HTMLElement;
CreateProductCard(catalogProducts, 21);
// Filter();
Button()
