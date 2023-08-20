import { itemInBasket } from '../../index';
import { IProduct } from '../types';

import {
  addLocalStorageLimitItems,
  addLocalStoragePage,
  getLocalStorageLimitItems,
  getLocalStoragePage,
} from './localStorage';
import { renderTotalPrice } from './renderTotalPrice';

// Selecting necessary DOM elements
// Выбор необходимых элементов DOM
const productCardContainer = document.querySelector(
  '.products__card-container',
) as HTMLElement;
const productHeader = document.querySelector(
  '.products__header',
) as HTMLElement;

// Initializing global variables for current page and items per page limit
// Инициализация глобальных переменных для текущей страницы и лимита элементов на странице
export let currentPage = 1;
export let limitItemsBasket = 4;

// Function to render the product cards in the basket
// Функция для отображения карточек товаров в корзине
export function renderCardsInBasket(): void {
  const limitEl = document.querySelector('.limit__count') as HTMLInputElement;
  const summaryContainer = document.querySelector('.summary') as HTMLElement;
  const summary = document.querySelector('.summary-container') as HTMLElement;
  const postData = itemInBasket;
  limitItemsBasket = getLocalStorageLimitItems();
  currentPage = getLocalStoragePage();
  if (postData.length === 0) {
    productCardContainer.innerHTML = `<div class="empty">Basket is empty<br>(ಥ﹏ಥ)</div>`;
    if (summaryContainer) {
      summaryContainer.classList.add('inactive');
      (document.querySelector('.summary__products') as HTMLElement).innerHTML =
        '<b>Products:</b> 0';
      (document.querySelector('.summary__total') as HTMLElement).innerHTML =
        '<b>Total:</b> 0';
    }
  } else {
    if (summaryContainer) summaryContainer.classList.remove('inactive');
    limitEl.value = `${limitItemsBasket}`;

    displayList(postData, limitItemsBasket, currentPage);

    productCardContainer.insertAdjacentHTML(
      'beforeend',
      (document.querySelector('.summary-container') as HTMLElement).innerHTML,
    );
    renderTotalPrice();
  }
  inactiveBtn();

  let productList = document.querySelector(
    '.products__card-container',
  ) as HTMLElement;

  if (productList.children.length <= 3 && window.innerWidth <= 768) {
    summary.classList.add('active');
  } else {
    summary.classList.remove('active');
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) summary.classList.remove('active');
    if (productList.children.length <= 3) {
      summary.classList.add('active');
    } else {
      summary.classList.remove('active');
    }
  });

  let scrollOffset = 110;

  let scrollElement = productList.children[productList.children.length - 2];

  const elementInView = (el: Element | null, offset = 0) => {
    const elementTop = el!.getBoundingClientRect().top;

    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) - offset
    );
  };

  const handleScrollAnimation = () => {
    if (elementInView(scrollElement, scrollOffset)) {
      summary.classList.add('active');
    } else {
      summary.classList.remove('active');
    }
  };

  productList.addEventListener('scroll', () => {
    if (window.innerWidth <= 768) {
      productList = document.querySelector(
        '.products__card-container',
      ) as HTMLElement;
      scrollElement = productList.children[productList.children.length - 2];
      scrollOffset = scrollElement.clientHeight * 2;
      handleScrollAnimation();
    }
  });
}

// Event listener for clicks on the header
// Обработчик событий для кликов по заголовку
productHeader.addEventListener('click', (e: Event) => {
  managementHeader(e);
});

// Event listener for changes in the header (limit and page)
// Обработчик событий для изменений в заголовке (лимит и страница)
productHeader.addEventListener('change', (e: Event) => {
  if (
    e !== null &&
    e.target instanceof HTMLElement &&
    e.target.classList.contains('products__limit')
  )
    renderCardsInBasket();
});

// Function to manage the header for changing limit and page
// Функция для управления заголовком для изменения лимита и страницы
function managementHeader(event: Event) {
  const limitEl = document.querySelector('.limit__count') as HTMLInputElement;
  const PageCounter = document.querySelector(
    '.page__count',
  ) as HTMLInputElement;

  if ((event.target as HTMLElement).closest('.products__items-limit')) {
    if (
      (event.target as HTMLElement).closest('.limit-minus') &&
      limitItemsBasket > 2
    ) {
      limitItemsBasket--;
    } else if (
      (event.target as HTMLElement).closest('.limit-plus') &&
      limitItemsBasket < 10
    ) {
      limitItemsBasket++;
    }
    limitEl.value = `${limitItemsBasket}`;
    addLocalStorageLimitItems();
    renderCardsInBasket();
  }

  if ((event.target as HTMLElement).closest('.products__page-count')) {
    if (
      (event.target as HTMLElement).closest('.page-plus') &&
      currentPage < Math.ceil(itemInBasket.length / limitItemsBasket)
    ) {
      currentPage++;
    } else if (
      (event.target as HTMLElement).closest('.page-minus') &&
      currentPage > 1
    ) {
      currentPage--;
    }
    PageCounter.value = `${currentPage}`;
    addLocalStoragePage();
    renderCardsInBasket();
  }
  inactiveBtn();
}

// Function to manage the inactive state of buttons
// Функция для управления состоянием неактивных кнопок
function inactiveBtn() {
  if (limitItemsBasket === 2)
    (document.querySelector('.limit-minus') as HTMLElement).classList.add(
      'inactive',
    );
  else
    (document.querySelector('.limit-minus') as HTMLElement).classList.remove(
      'inactive',
    );

  if (limitItemsBasket === 10)
    (document.querySelector('.limit-plus') as HTMLElement).classList.add(
      'inactive',
    );
  else
    (document.querySelector('.limit-plus') as HTMLElement).classList.remove(
      'inactive',
    );

  if (currentPage === 1)
    (document.querySelector('.page-minus') as HTMLElement).classList.add(
      'inactive',
    );
  else
    (document.querySelector('.page-minus') as HTMLElement).classList.remove(
      'inactive',
    );

  if (currentPage === Math.ceil(itemInBasket.length / limitItemsBasket))
    (document.querySelector('.page-plus') as HTMLElement).classList.add(
      'inactive',
    );
  else
    (document.querySelector('.page-plus') as HTMLElement).classList.remove(
      'inactive',
    );
}

// Function to display a list of products with pagination
// Функция для отображения списка товаров с пагинацией
function displayList(
  arrData: IProduct[],
  rowPerPage: number,
  page: number,
): void {
  const PageCounter = document.querySelector(
    '.page__count',
  ) as HTMLInputElement;
  PageCounter.value = `${currentPage}`;
  productCardContainer.innerHTML = '';
  page--;
  const start = rowPerPage * page;
  const end = start + rowPerPage;
  const paginatedData = arrData.slice(start, end);

  if (paginatedData.length === 0) {
    currentPage = currentPage - 1;
    addLocalStoragePage();
    addLocalStorageLimitItems();
    renderCardsInBasket();
  }
  paginatedData.forEach((el, index) => {
    const productCardHTML = `
    <div class="products__item-card" data-identifier="${el.id}">
      <div class="products__position"> ${page * rowPerPage + index + 1} </div>
      <div class="item-card__info">
        <div class="product-img"
          style="background-image: url('${el.thumbnail}');"></div>
        <div class="item-card__detail">
          <div class="item-card__title">
            <h3>${el.title}</h3>
          </div>
          <div class="item-card__description">${el.description}
          </div>
          <div class="item-card__other">
            <p><b>Rating:</b> ${el.rating}</p>
            <p><b>Discount:</b> ${el.discountPercentage}%</p>
            <p class="stock-control"><b>Stock:</b> ${el.stock}</p>
          </div>
        </div>
      </div>
      <div class="number-control">
        <p class="amount-control"><b>Price:</b> ${el.price}$</p>
        <div class="incDec-control">
          <button class="minus" data-action="minus">-</button>
          <p class="item__count" data-counterItem>${el.count}</p>
          <button class="plus" data-action="plus">+</button>
        </div>
        <div class="product-btn">
          <div class="btn-del" data-action="del">Delete</div>
          <div class="btn-det" data-action="det">Details</div>
        </div>
      </div>
    </div>`;

    productCardContainer.insertAdjacentHTML('beforeend', productCardHTML);
  });
}
