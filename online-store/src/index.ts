import '../index.html';
import '../styles.scss';
import Data from './products.json';
// import Filter from './components/filter';
import Button from './components/button';
import CreateProductCard from './components/cards';
// import * as noUiSlider from 'nouislider';
// import 'nouislider/dist/nouislider.css';

const log = console.log;

log('JSON:', Data[0].color);

const catalogProducts = document.querySelector('.catalog-products') as HTMLElement;
CreateProductCard(catalogProducts, 21);
// Filter();
Button();
