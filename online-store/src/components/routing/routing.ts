import { searchProductCard } from './../search/search';
import Router from 'vanilla-router';
import './404.scss';
import { renderDetails } from '../details/productCard';
import { itemInBasket } from '../..';
import { CreateProductCard, productsData } from '../cards/cards';
import { renderBasket } from '../basket/basket';
import { IProduct } from '../types';
import { changeFilter } from '../filter/filter';
import { localStorageUrl } from '../basket/localStorage';

export function recoveryValue(value: string) {
  const stockLowerSlider = document.querySelector(
    '.stock-lower',
  ) as HTMLInputElement;
  const stockUpperSlider = document.querySelector(
    '.stock-upper',
  ) as HTMLInputElement;

  const priceLowerSlider = document.querySelector(
    '.price-lower',
  ) as HTMLInputElement;
  const priceUpperSlider = document.querySelector(
    '.price-upper',
  ) as HTMLInputElement;

  const stockLowerValue = document.querySelector(
    '.stock-from',
  ) as HTMLInputElement;
  const stockUpperValue = document.querySelector(
    '.stock-to',
  ) as HTMLInputElement;

  const priceLowerValue = document.querySelector(
    '.price-from',
  ) as HTMLInputElement;
  const priceUpperValue = document.querySelector(
    '.price-to',
  ) as HTMLInputElement;

  const searchDom = document.querySelector('.search') as HTMLInputElement;
  const sortDom = document.querySelector('.sort-input') as HTMLInputElement;
  const filterCheck = document.querySelectorAll(
    '.filters .checkbox',
  ) as NodeListOf<HTMLInputElement>;

  const btnView = document.querySelector('.btn-switch-view') as HTMLElement;
  const catalogProducts = document.querySelector(
    '.catalog-products',
  ) as HTMLElement;

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
  const view = params.has('view') ? params.get('view') : 'inactive';

  filterCheck.forEach((elem) => {
    if (elem.dataset.category && category!.includes(elem.dataset.category)) {
      elem.checked = true;
    }
    if (elem.dataset.brand && brand!.includes(elem.dataset.brand)) {
      elem.checked = true;
    }
  });

  stockLowerValue.innerHTML =
    stockLowerValue.dataset.from =
    stockLowerSlider.value =
      stock![0];
  stockUpperValue.innerHTML =
    stockUpperValue.dataset.to =
    stockUpperSlider.value =
      stock![1];

  priceLowerValue.innerHTML =
    priceLowerValue.dataset.from =
    priceLowerSlider.value =
      price![0];
  priceUpperValue.innerHTML =
    priceUpperValue.dataset.to =
    priceUpperSlider.value =
      price![1];

  searchDom.value = search!;

  sortDom.value = sort!;

  if (view === 'active') {
    btnView.classList.add('active');
    catalogProducts.classList.add('active');
    searchParams('set', 'view', 'active');
  } else {
    btnView.classList.remove('active');
    catalogProducts.classList.remove('active');
    searchParams('del', 'view');
  }
  changeFilter('now');
  searchProductCard('now');
}

export function Routing(): void {
  window.location.href =
    window.location.hash.length === 0
      ? new URL(`#`, window.location.href).href
      : window.location.href;
  const basket = document.querySelector('.btn-basket');
  const logo = document.querySelector('.logo');
  const homeLinkBtn = document.querySelector('.not-found-home-link');
  const header = document.querySelector('.header');
  const main = document.querySelector('.main')!.children as HTMLCollection;
  const catalog = document.querySelector('.catalog-products');
  const productCardContainer = document.querySelector(
    '.products__card-container',
  ) as HTMLElement;

  const router = new Router({
    mode: 'hash',
    page404: function () {
      router.navigateTo('page404');
    },
  });

  router.add('', function () {
    (main[0] as HTMLElement).style.display = 'flex';
    (main[1] as HTMLElement).style.display = 'none';
    (main[2] as HTMLElement).style.display = 'none';
    (main[3] as HTMLElement).style.display = 'none';
    (header as HTMLElement).classList.add('active');
    (basket as HTMLElement).classList.remove('active');
    CreateProductCard(productsData.products);
    if (!!window.location.hash.toString()) {
      recoveryValue(window.location.href.toString());
    }
  });

  router.add('basket', function () {
    (main[0] as HTMLElement).style.display = 'none';
    (main[1] as HTMLElement).style.display = 'flex';
    (main[2] as HTMLElement).style.display = 'none';
    (main[3] as HTMLElement).style.display = 'none';
    (header as HTMLElement).classList.remove('active');
    (basket as HTMLElement).classList.add('active');
  });

  router.add('page404', function () {
    (main[0] as HTMLElement).style.display = 'none';
    (main[1] as HTMLElement).style.display = 'none';
    (main[2] as HTMLElement).style.display = 'none';
    (main[3] as HTMLElement).style.display = 'flex';
    (header as HTMLElement).classList.remove('active');
    (basket as HTMLElement).classList.remove('active');
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
        (header as HTMLElement).classList.remove('active');
        (basket as HTMLElement).classList.remove('active');
      } else {
        (
          document.querySelector('.catalog-products') as HTMLElement
        ).style.display = 'flex';
        (document.querySelector('.catalog-products') as HTMLElement).innerHTML =
          '<p class="not-found">No products found <br> (ಥ﹏ಥ)</p>';
        (document.querySelector('.found .new') as HTMLElement).innerHTML = '0';
        (document.querySelector('.found') as HTMLElement).dataset.found = '0';
        (main[0] as HTMLElement).style.display = 'flex';
        (main[1] as HTMLElement).style.display = 'none';
        (main[2] as HTMLElement).style.display = 'none';
        (main[3] as HTMLElement).style.display = 'none';
        (header as HTMLElement).classList.add('active');
        (basket as HTMLElement).classList.remove('active');
      }
    } else alert('Please enter the product number');
  });
  router.addUriListener();
  router.navigateTo('#');
  logo?.addEventListener('click', () => {
    if (!!window.location.hash.toString()) {
      router.navigateTo('#');
      const recoveryUrl =
        localStorageUrl('get') ?? window.location.href.toString();
      recoveryValue(recoveryUrl);
    }
  });
  const searchBtn = document.querySelector('.search-icon') as HTMLInputElement;
  const searchContainer = document.querySelector(
    '.search-container-wrapper',
  ) as HTMLInputElement;
  const catalogFiltersBtn = document.querySelector(
    '.catalog__filters-btn',
  ) as HTMLInputElement;
  const filtersBtn = document.querySelector('.filters-btn') as HTMLInputElement;
  const filtersContainer = document.querySelector(
    '.filters',
  ) as HTMLInputElement;
  const filtersWrapper = document.querySelector(
    '.filters-wrapper',
  ) as HTMLInputElement;

  catalogFiltersBtn.addEventListener('click', () => {
    filtersContainer.classList.add('active');
    filtersBtn.classList.add('active');
    filtersWrapper.classList.add('active');
  });

  filtersBtn.addEventListener('click', () => {
    filtersContainer.classList.remove('active');
    filtersBtn.classList.remove('active');
    filtersWrapper.classList.remove('active');
  });

  filtersWrapper.addEventListener('click', () => {
    filtersContainer.classList.remove('active');
    filtersBtn.classList.remove('active');
    filtersWrapper.classList.remove('active');
  });

  searchBtn.addEventListener('click', () => {
    searchContainer.classList.add('active');
    searchContainer.addEventListener('click', (e: Event) => {
      if (
        (e.target! as HTMLElement).classList.contains(
          'search-container-wrapper active',
        )
      ) {
        searchContainer.classList.remove('active');
      }
    });
  });

  searchContainer.addEventListener('click', (e: Event) => {
    if (
      (e.target! as HTMLElement).classList.contains('search-container-wrapper')
    ) {
      searchContainer.classList.remove('active');
    }
  });

  homeLinkBtn?.addEventListener('click', () => {
    if (!!window.location.hash.toString()) {
      router.navigateTo('#');
      const recoveryUrl =
        localStorageUrl('get') ?? window.location.href.toString();
      recoveryValue(recoveryUrl);
    }
  });

  basket?.addEventListener('click', () => {
    if (basket.classList.contains('active')) {
      (basket as HTMLElement).classList.remove('active');
      (basket as HTMLElement).classList.add('start');
      if (!!window.location.hash.toString()) {
        router.navigateTo('#');
        const recoveryUrl =
          localStorageUrl('get') ?? window.location.href.toString();
        recoveryValue(recoveryUrl);
      }
      (basket as HTMLElement).classList.remove('start');
    } else {
      (basket as HTMLElement).classList.add('active');
      (basket as HTMLElement).classList.add('start');
      window.location.href = new URL(
        '#basket',
        window.location.origin + window.location.pathname,
      ).href;
      (basket as HTMLElement).classList.remove('start');
    }
  });

  function cardSelection(e: Event) {
    const nCard = +(
      (e.target! as HTMLElement).closest('.product-item') as HTMLElement
    ).dataset.identifier!;

    const currentAddBtn = (e.target! as HTMLElement).closest(
      '.btn__addBasket',
    ) as HTMLElement;

    if (
      (e.target! as HTMLElement).closest('.btn__addBasket') &&
      e !== null &&
      e.target instanceof HTMLElement &&
      e.target.dataset.action === 'Add'
    ) {
      itemInBasket.push(productsData.products[nCard - 1]);
      e.target.dataset.action = 'Remove';
      currentAddBtn.innerText = 'Remove';
      renderBasket();
    } else if (
      (e.target! as HTMLElement).closest('.btn__addBasket') &&
      e !== null &&
      e.target instanceof HTMLElement &&
      e.target.dataset.action === 'Remove'
    ) {
      itemInBasket.forEach((el: IProduct, index: number) => {
        if (el.id === nCard) {
          itemInBasket.splice(index, 1);
        }
      });
      e.target.dataset.action = 'Add';
      currentAddBtn.innerText = 'Add';
      renderBasket();
    } else if ((e.target! as HTMLElement).closest('.btn__description')) {
      window.location.href = new URL(
        `#products/${nCard}`,
        window.location.origin + window.location.pathname,
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
      e.target.closest('.products__item-card')
    ) {
      const cardForRender = e.target.closest(
        '.products__item-card',
      ) as HTMLElement;

      if (e.target.closest('.btn-det')) {
        window.location.href = new URL(
          `#products/${+cardForRender.dataset.identifier!}`,
          window.location.href,
        ).href;
        renderDetails(+cardForRender.dataset.identifier!);
      }
    }
  });
}

const params = new URLSearchParams();
export function searchParams(
  action: string,
  key: string,
  value?: string | string[],
): void {
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

  window.location.hash =
    params.toString().length !== 0
      ? '?' + params.toString()
      : params.toString();
  localStorageUrl('set');
}
