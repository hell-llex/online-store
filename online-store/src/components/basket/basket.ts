import './basket.scss';
import { itemInBasket, total } from '../../index';
import { renderTotalPrice } from './renderTotalPrice';
import { renderProductHeader } from './renderProductHeader';
import { renderCardsInBasket } from './renderCardsInBasket';
import { handleClickPlusMinusDel } from './handleClickPlusMinusDel';
import { basketButton } from '../types';

const productCardContainer = document.querySelector(
  '.products__card-container',
) as HTMLElement;

export function renderBasket(): void {
  renderProductHeader();
  renderCardsInBasket();
  renderTotalPrice();
  (
    document.querySelector('.counter') as HTMLElement
  ).innerHTML = `${itemInBasket.reduce((acc, item) => acc + item.count, 0)}`;

  (
    document.querySelector('.header-total') as HTMLElement
  ).innerHTML = `${total.totalPrice}$`;
}

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
    (e.target.dataset.action === basketButton.increment ||
      e.target.dataset.action === basketButton.decrement)
  ) {
    renderBasket();
  }
});
