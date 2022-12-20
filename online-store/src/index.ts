import '../index.html';
import '../styles.scss';
import Data from './products-v1.json'
// import Filter from './components/filter';
import Button from './components/button';
import CreateProductCard from './components/cards';
// import * as noUiSlider from 'nouislider';
// import 'nouislider/dist/nouislider.css';
import { delCardBasket, addCardBasket } from './basket';

export const itemInBasket = [Data[1], Data[2], Data[3], Data[4], Data[5]] // завели глобальный массив в котором хранятся товары в корзине
const log = console.log;



const catalogProducts = document.querySelector('.catalog-products') as HTMLElement;
CreateProductCard(catalogProducts, 21);
// Filter();
Button();

const btnAddTest = document.querySelector('.btn-add-test') as HTMLElement;
const btnDelTest = document.querySelector('.btn-del-test') as HTMLElement;
const productContainer = document.querySelector('.products__card-container') as HTMLElement;


btnAddTest.addEventListener('click', (e) => { // TODO прокидываешь мне товар по которому прожато 'добавить товар'
  addCardBasket(Data[10])
  console.log('add')
})

productContainer.addEventListener('click', (e) => {
  const event = e.target as HTMLElement

  if (event.dataset.action === 'del') { // TODO прокидываешь мне товар по которому прожато 'удалить товар'
    delCardBasket(Data[10])
    console.log('del')
  }
})
