import '../index.html';
import '../styles.scss';
import Data from './products.json';
import Button from './components/button';
import CreateProductCard from './components/cards';
import Routing from './components/routing';

const log = console.log;

// log('JSON:', Data[0].color);
log('index')
Routing()

const catalogProducts = document.querySelector('.catalog-products') as HTMLElement;
CreateProductCard(catalogProducts, 21);
// Filter();
Button();

