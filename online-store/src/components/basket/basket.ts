import './basket.scss';
import { itemInBasket, total } from '../../index';
import { renderTotalPrice } from './renderTotalPrice';
import { renderProductHeader } from './renderProductHeader';
import { renderCardsInBasket } from './renderCardsInBasket';
import { handleClickPlusMinusDel } from './handleClickPlusMinusDel';
import { basketButton } from '../types';

// This container holds the product cards
// Этот контейнер содержит карточки продуктов
const productCardContainer = document.querySelector(
  '.products__card-container',
) as HTMLElement;

// Function to render the basket
// Функция для отрисовки корзины
export function renderBasket(): void {
  // Render the product header
  // Отрисовка заголовка продукта
  renderProductHeader();

  // Render the cards in the basket
  // Отрисовка карточек в корзине
  renderCardsInBasket();

  // Render the total price
  // Отрисовка общей стоимости
  renderTotalPrice();

  // Update the item counter in the basket
  // Обновление счетчика товаров в корзине
  (
    document.querySelector('.counter') as HTMLElement
  ).innerHTML = `${itemInBasket.reduce((acc, item) => acc + item.count, 0)}`;

  // Update the total price in the header
  // Обновление общей стоимости в заголовке
  (
    document.querySelector('.header-total') as HTMLElement
  ).innerHTML = `${total.totalPrice}$`;
}

// Click event handler in the product card container
// Обработчик кликов в контейнере с карточками продуктов
productCardContainer.addEventListener('click', (e: Event) => {
  if (
    e !== null &&
    e.target instanceof HTMLElement &&
    (e.target.dataset.action === basketButton.plus ||
      e.target.dataset.action === basketButton.minus ||
      e.target.dataset.action === basketButton.del)
  ) {
    // Handle addition, subtraction, or deletion of items
    // Обработка добавления, уменьшения или удаления товара
    handleClickPlusMinusDel(e);

    // Update the basket display
    // Обновление отображения корзины
    renderBasket();
  }
});

// Another click event handler in the product card container
// Другой обработчик кликов в контейнере с карточками продуктов
productCardContainer.addEventListener('click', (e: Event) => {
  if (
    e !== null &&
    e.target instanceof HTMLElement &&
    (e.target.dataset.action === basketButton.increment ||
      e.target.dataset.action === basketButton.decrement)
  ) {
    // Update the basket display when changing item quantity
    // Обновление отображения корзины при изменении количества товара
    renderBasket();
  }
});
