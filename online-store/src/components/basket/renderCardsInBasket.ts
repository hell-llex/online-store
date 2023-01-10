/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { itemInBasket } from '../../index';
import { productsArrayI } from '../types';

import { addLocalStoragePage, getLocalStoragePage } from './localStorage';
const productCardContainer = document.querySelector(
  '.products__card-container'
) as HTMLElement;
const productHeader = document.querySelector(
  '.products__header'
) as HTMLElement;

export let currentPage: any = 1;
addLocalStoragePage();

export function renderCardsInBasket(): void {
  const limitEl = document.querySelector(
    '.products__limit'
  ) as HTMLInputElement;
  const postData = itemInBasket;
  const rows = +limitEl.value;
  currentPage = getLocalStoragePage();
  if (postData.length === 0) {
    productCardContainer.innerHTML = `<div class="empty">Basket is empty</div>`;
  } else {
    displayList(postData, rows, currentPage);
  }
}

productHeader.addEventListener('click', (e: Event) => {
  displayPagination(e);
});

productHeader.addEventListener('change', (e: Event) => {
  if (e !== null && e.target instanceof HTMLElement && e.target.dataset.limit)
    console.log('change :>> ');
  renderCardsInBasket();
});

function displayPagination(event: Event) {
  const limitEl = document.querySelector(
    '.products__limit'
  ) as HTMLInputElement;
  const postData = itemInBasket;
  const rows = +limitEl.value;
  console.log('+limitEl.value :>> ', +limitEl.value);
  const PageCounter = document.querySelector(
    '[data-counterPage]'
  ) as HTMLElement;

  if (event !== null && event.target instanceof HTMLElement) {
    if (
      event.target.dataset.action === 'plusPage' &&
      currentPage < Math.ceil(itemInBasket.length / rows)
    ) {
      currentPage = currentPage + 1;
      PageCounter.innerText = currentPage.toString();
      addLocalStoragePage();
      displayList(postData, rows, currentPage);
    }
    if (event.target.dataset.action === 'minusPage' && currentPage > 1) {
      currentPage = currentPage - 1;
      PageCounter.innerText = currentPage.toString();
      addLocalStoragePage();
      displayList(postData, rows, currentPage);
    }
  }
}

function displayList(
  arrData: productsArrayI[],
  rowPerPage: number,
  page: number
): void {
  const PageCounter = document.querySelector(
    '[data-counterPage]'
  ) as HTMLElement;
  PageCounter.innerText = currentPage.toString();
  productCardContainer.innerHTML = '';
  page--;
  const start = rowPerPage * page;
  const end = start + rowPerPage;
  const paginatedData = arrData.slice(start, end);

  //уменьшает страницу пагинации на 1 если удалены все продукты на del или -
  if (paginatedData.length === 0) {
    currentPage = currentPage - 1;
    addLocalStoragePage();
    renderCardsInBasket();
  }
  paginatedData.forEach((el, index) => {
    const productCardHTML = `
    <div class="products__item-card" data-identifier="${el.id}">
      <div class="products__position"> ${page * rowPerPage + index + 1} </div>
      <div class="item-card__info">
        <img alt="${el.title}" src="${el.thumbnail}">
        <div class="item-card__detail">
          <div class="item-card__title">
            <h3>${el.title}</h3>
          </div>
          <div class="item-card__description">${el.description}
          </div>
          <div class="item-card__other">
            <div>Rating: ${el.rating}</div>
            <div>Discount: ${el.discountPercentage}%</div>
          </div>
        </div>
      </div>
      <div class="number-control">
        <div class="stock-control"> Stock: ${el.stock}</div>
        <div class="incDec-control">
        <button data-action="minus">-</button>
        <span class="item__count" data-counterItem>${el.count}</span>
        <button data-action="plus">+</button></div>
        <div class="amount-control">${el.price} €</div>
        <button class="btn-del" data-action="del">del</button>
      </div>
    </div>`;

    productCardContainer.insertAdjacentHTML('beforeend', productCardHTML);
  });
}
