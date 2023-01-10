import Router from 'vanilla-router';
import './404.scss';
import { renderDetails } from '../details/productCard';
import { itemInBasket } from '../..';
import { productsData } from '../cards/cards';
import { renderBasket } from '../basket/basket';

export function Routing() {
  window.location.href = new URL(`#`, window.location.href).href;
  const log = console.log;

  const basket = document.querySelector('.icon-basket');
  const logo = document.querySelector('.logo');
  const main = document.querySelector('.main')!.children as HTMLCollection;
  const catalog = document.querySelector('.catalog-products');
  const productCardContainer = document.querySelector(
    '.products__card-container'
  ) as HTMLElement;

  const router = new Router({
    mode: 'hash',
    page404: function (path) {
      log('"/' + path + '" Page not found');
      (main[0] as HTMLElement).style.display = 'none';
      (main[1] as HTMLElement).style.display = 'none';
      (main[2] as HTMLElement).style.display = 'none';
      (main[3] as HTMLElement).style.display = 'flex';
    },
  });

  router.add('', function () {
    log('Home page');
    (main[0] as HTMLElement).style.display = 'flex';
    (main[1] as HTMLElement).style.display = 'none';
    (main[2] as HTMLElement).style.display = 'none';
    (main[3] as HTMLElement).style.display = 'none';
  });

  router.add('basket', function () {
    log('Basket page');
    (main[0] as HTMLElement).style.display = 'none';
    (main[1] as HTMLElement).style.display = 'flex';
    (main[2] as HTMLElement).style.display = 'none';
    (main[3] as HTMLElement).style.display = 'none';
  });

  router.add('products/(:any)', function (name) {
    log('Products, ', name);
    if (typeof +name === 'number') {
      const nCard: number = +name;
      if (nCard <= 100 && nCard > 0) {
        renderDetails(nCard);
        (main[0] as HTMLElement).style.display = 'none';
        (main[1] as HTMLElement).style.display = 'none';
        (main[2] as HTMLElement).style.display = 'flex';
        (main[3] as HTMLElement).style.display = 'none';
      } else {
        (
          document.querySelector('.catalog-products') as HTMLElement
        ).style.display = 'flex';
        (document.querySelector('.catalog-products') as HTMLElement).innerHTML =
          '<p class="not-found">No products found <br> (ಥ﹏ಥ)</p>';
        (document.querySelector('.found') as HTMLElement).innerHTML = 'Found:0';
        (document.querySelector('.found') as HTMLElement).dataset.found = '0';
        (main[0] as HTMLElement).style.display = 'flex';
        (main[1] as HTMLElement).style.display = 'none';
        (main[2] as HTMLElement).style.display = 'none';
        (main[3] as HTMLElement).style.display = 'none';
      }
    } else alert('Please enter the product number');
  });

  router.addUriListener();

  router.navigateTo('#');

  logo?.addEventListener('click', () => {
    window.location.href = new URL('#', window.location.href).href;
  });

  basket?.addEventListener('click', () => {
    window.location.href = new URL('#basket', window.location.href).href;
  });

  function cardSelection(e: Event) {
    const nCard = +(
      (e.target! as HTMLElement).closest('.product-item') as HTMLElement
    ).dataset.identifier!;
    if ((e.target! as HTMLElement).closest('.btn__addBasket')) {
      itemInBasket.push(productsData.products[nCard - 1]);
      renderBasket();
    } else if (
      (e.target! as HTMLElement).closest('.product-item') ||
      (e.target! as HTMLElement).closest('.btn__description')
    ) {
      window.location.href = new URL(
        `#products/${nCard}`,
        window.location.href
      ).href;
      renderDetails(nCard);
    }
  }

  catalog?.addEventListener('click', (e) => {
    cardSelection(e);
  });

  productCardContainer?.addEventListener('click', (e: Event) => {
    if (
      e !== null &&
      e.target instanceof HTMLElement &&
      e.target.closest('.item-card__info')
    ) {
      const cardForRender = e.target.closest(
        '.products__item-card'
      ) as HTMLElement;
      window.location.href = new URL(
        `#products/${+cardForRender.dataset.identifier!}`,
        window.location.href
      ).href;
      renderDetails(+cardForRender.dataset.identifier!);
    }
  });
}
