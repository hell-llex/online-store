import { itemInBasket } from '../../index';
import { renderTotalPrice } from './renderTotalPrice';
import { renderProductHeader } from './renderProductHeader';
import { renderCardsInBasket } from './renderCardsInBasket';
import { handleClickPlusMinusDel } from './handleClickPlusMinusDel';
import { basketButton } from '../types';

const productCardContainer = document.querySelector(
  '.products__card-container'
) as HTMLElement;
const summary = document.querySelector('.summary') as HTMLElement;
const productHeader = document.querySelector(
  '.products__header'
) as HTMLElement;

export function renderBasket(): void {
  (
    document.querySelector('.icon-basket p') as HTMLElement
  ).innerHTML = `${itemInBasket.length}`;
  (
    document.querySelector('.header-total') as HTMLElement
  ).innerHTML = `${renderTotalPrice()} €`;

  renderProductHeader();
  renderCardsInBasket();
  renderTotalPrice();

  if (itemInBasket.length === 0) {
    summary.classList.add('hidden');
    productHeader.classList.add('hidden');
  } else {
    summary.classList.remove('hidden');
    productHeader.classList.remove('hidden');
  }
}

// handle clicking on + - Del
productCardContainer.addEventListener('click', (e: Event) => {
  if (
    e !== null &&
    e.target instanceof HTMLElement &&
    (e.target.dataset.action === basketButton.plus ||
      e.target.dataset.action === basketButton.minus ||
      e.target.dataset.action === basketButton.del)
  ) {
    handleClickPlusMinusDel(e);
    renderBasket();
  }
});

productCardContainer.addEventListener('click', (e: Event) => {
  if (
    e !== null &&
    e.target instanceof HTMLElement &&
    (e.target.dataset.action === basketButton.plusPage ||
      e.target.dataset.action === basketButton.minusPage)
  ) {
    renderBasket();
  }
});
