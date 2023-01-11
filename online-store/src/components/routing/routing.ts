import { searchProductCard } from './../search/search';
import Router from 'vanilla-router';
import './404.scss';
import { renderDetails } from '../details/productCard';
import { itemInBasket } from '../..';
import { productsData } from '../cards/cards';
import { renderBasket } from '../basket/basket';
import { productsArrayI } from '../types';
import { changeFilter } from '../filter/filter';
import { localStorageUrl } from '../basket/localStorage';

export function recoveryValue(value: string) {
  const stockLowerSlider = document.querySelector(
    '.stock-lower'
  ) as HTMLInputElement;
  const stockUpperSlider = document.querySelector(
    '.stock-upper'
  ) as HTMLInputElement;

  const priceLowerSlider = document.querySelector(
    '.price-lower'
  ) as HTMLInputElement;
  const priceUpperSlider = document.querySelector(
    '.price-upper'
  ) as HTMLInputElement;

  const searchDom = document.querySelector('.search') as HTMLInputElement;
  const sortDom = document.querySelector('.sort-input') as HTMLInputElement;

  value = value.slice(value.indexOf('#') + 2);
  const params = new URLSearchParams(value);
  const category = params.has('category')
    ? params.get('category')?.split('+')
    : [];
  const brand = params.has('brand') ? params.get('brand')?.split('+') : [];
  const sort = params.has('sort') ? params.get('sort') : 'select';
  const search = params.has('search') ? params.get('search') : '';
  const stock = params.has('stock')
    ? params.get('stock')?.split('+')
    : [stockLowerSlider.min, stockUpperSlider.max];
  const price = params.has('price')
    ? params.get('price')?.split('+')
    : [priceLowerSlider.min, priceUpperSlider.max];

  const filterCheck = document.querySelectorAll(
    '.filters .checkbox'
  ) as NodeListOf<HTMLInputElement>;
  filterCheck.forEach((elem) => {
    if (elem.dataset.category && category!.includes(elem.dataset.category)) {
      elem.checked = true;
    }
    if (elem.dataset.brand && brand!.includes(elem.dataset.brand)) {
      elem.checked = true;
    }
  });

  stockLowerSlider.value = stock![0];
  stockUpperSlider.value = stock![1];

  priceLowerSlider.value = price![0];
  priceUpperSlider.value = price![1];

  searchDom.value = search!;

  sortDom.value = sort!;

  changeFilter('now');
  searchProductCard('notNow');
  searchProductCard('now');
}

export function Routing(): void {
  // window.location.href = window.location.hash.length === 0 ? new URL(`#`, window.location.href).href : window.location.href

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
      (main[0] as HTMLElement).style.display = 'none';
      (main[1] as HTMLElement).style.display = 'none';
      (main[2] as HTMLElement).style.display = 'none';
      (main[3] as HTMLElement).style.display = 'flex';
    },
  });

  router.add('', function () {
    (main[0] as HTMLElement).style.display = 'flex';
    (main[1] as HTMLElement).style.display = 'none';
    (main[2] as HTMLElement).style.display = 'none';
    (main[3] as HTMLElement).style.display = 'none';
    if (window.location.hash.length !== 0) {
      recoveryValue(window.location.href.toString());
    }
  });

  router.add('basket', function () {
    (main[0] as HTMLElement).style.display = 'none';
    (main[1] as HTMLElement).style.display = 'flex';
    (main[2] as HTMLElement).style.display = 'none';
    (main[3] as HTMLElement).style.display = 'none';
  });

  router.add('products/(:any)', function (name) {
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

  router.navigateTo('');

  logo?.addEventListener('click', () => {
    window.location.href = new URL(
      '#',
      window.location.origin + window.location.pathname
    ).href;
  });

  basket?.addEventListener('click', () => {
    window.location.href = new URL(
      '#basket',
      window.location.origin + window.location.pathname
    ).href;
  });

  function cardSelection(e: Event) {
    const nCard = +(
      (e.target! as HTMLElement).closest('.product-item') as HTMLElement
    ).dataset.identifier!;

    const currentAddBtn = (e.target! as HTMLElement).closest(
      '.btn__addBasket'
    ) as HTMLElement;

    if (
      //добавил этот if отслеживаем клик по Add добавляем в карзину, меняем указатели на кнопках
      (e.target! as HTMLElement).closest('.btn__addBasket') &&
      e !== null &&
      e.target instanceof HTMLElement &&
      e.target.dataset.action === 'Add'
    ) {
      itemInBasket.push(productsData.products[nCard - 1]);
      e.target.dataset.action = 'Drop item';
      currentAddBtn.innerText = 'Drop item';
      renderBasket();
    } else if (
      //добавил этот if отслеживаем клик по Drop  удаляем из карзины меняем указатели на кнопках
      (e.target! as HTMLElement).closest('.btn__addBasket') &&
      e !== null &&
      e.target instanceof HTMLElement &&
      e.target.dataset.action === 'Drop item'
    ) {
      itemInBasket.forEach((el: productsArrayI, index: number) => {
        if (el.id === nCard) {
          itemInBasket.splice(index, 1);
        }
      });
      e.target.dataset.action = 'Add';
      currentAddBtn.innerText = 'Add';
      renderBasket();
    } else if (
      (e.target! as HTMLElement).closest('.product-item') ||
      (e.target! as HTMLElement).closest('.btn__description')
    ) {
      window.location.href = new URL(
        `#products/${nCard}`,
        window.location.origin + window.location.pathname
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

const params = new URLSearchParams();
export function searchParams(
  action: string,
  key: string,
  value?: string | string[]
): void {
  // add - добавление, set - замена, del - удаление
  if (!value) {
    params.delete(key);
  } else if (typeof value === 'string') {
    if (action === 'add') {
      params.append(key, value);
    } else if (action === 'set') {
      params.set(key, value);
    } else if (action === 'del') {
      params.delete(key);
    }
  } else {
    if (value!.length === 0) {
      params.delete(key);
    }
    if (action === 'add') {
      params.append(key, value!.join('+'));
    } else if (action === 'set') {
      params.set(key, value!.join('+'));
    } else if (action === 'del') {
      params.delete(key);
    }
  }

  window.location.hash = params.toString().length !== 0
    ? '?' + params.toString()
    : params.toString();

  localStorageUrl('set');
}
