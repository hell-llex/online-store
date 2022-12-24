import '../index.html';
import '../styles.scss';
import './basket'
import Data from './products-v1.json'
// import Filter from './components/filter';
import Button from './components/button';
import CreateProductCard from './components/cards';
// import * as noUiSlider from 'nouislider';
// import 'nouislider/dist/nouislider.css';
const log = console.log;
export let itemInBasket:any = [Data[1], Data[2], Data[3],Data[4], Data[5], Data[6]] // global array with item in basket






const catalogProducts = document.querySelector('.catalog-products') as HTMLElement;
CreateProductCard(catalogProducts, 21);
// Filter();
Button()
