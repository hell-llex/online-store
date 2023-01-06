import '../index.html';
import '../styles.scss';
import './components/basket/basket'
import Data from './products-v1.json'
// import Filter from './components/filter';
import Button from './components/button';
import CreateProductCard from './components/cards';
import { addLocalStorageBasket, getLocalStorageBasket } from './components/basket/localStorage'
// import * as noUiSlider from 'nouislider';
// import 'nouislider/dist/nouislider.css';
const log = console.log;

export let itemInBasket:any
itemInBasket =  [Data[1], Data[5],Data[9],Data[11],Data[14],Data[15], Data[16],Data[17],Data[18], Data[19],Data[20],Data[21], Data[22]] // global array of items in basket get value from localStarage

window.addEventListener('beforeunload', addLocalStorageBasket)    //catch reload-page event

window.addEventListener('load', getLocalStorageBasket)



const catalogProducts = document.querySelector('.catalog-products') as HTMLElement;
CreateProductCard(catalogProducts, 21);
// Filter();
Button()

export interface productsDataI {
  id: number,
  count: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[]
}
