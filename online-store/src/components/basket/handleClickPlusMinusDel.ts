import { itemInBasket } from '../../index';
import { IProduct, basketButton } from '../types';

// Function to handle clicks on plus, minus, and delete buttons
// Функция для обработки кликов по кнопкам плюс, минус и удалить
export function handleClickPlusMinusDel(event: Event) {
  if (
    event !== null &&
    event.target instanceof HTMLElement &&
    (event.target.dataset.action === basketButton.plus ||
      event.target.dataset.action === basketButton.minus ||
      event.target.dataset.action === basketButton.del)
  ) {
    const itemCard = event.target.closest(
      '.products__item-card',
    ) as HTMLElement;
    const itemID = itemCard.getAttribute('data-identifier');

    // Iterate through the items in the basket
    // Перебор товаров в корзине
    itemInBasket.forEach((el: IProduct) => {
      if (itemID !== null && el.id === +itemID) {
        if (
          event !== null &&
          event.target instanceof HTMLElement &&
          event.target.dataset.action === basketButton.plus
        ) {
          // Increment item count if within stock limits
          // Увеличение количества товара, если в пределах запаса
          if (el.count < el.stock) {
            el.count = ++el.count;
          }
        }
        if (
          event !== null &&
          event.target instanceof HTMLElement &&
          event.target.dataset.action === basketButton.minus
        ) {
          // Decrease item count, delete if count becomes 0
          // Уменьшение количества товара, удаление, если количество становится 0
          if (el.count === 1) {
            delCardBasket(el);
          }
          if (el.count > 1) {
            el.count = --el.count;
          }
        }
        if (
          event !== null &&
          event.target instanceof HTMLElement &&
          event.target.dataset.action === basketButton.del
        ) {
          // Delete the item from the basket
          // Удаление товара из корзины
          delCardBasket(el);
        }
      }
    });
  }
}

// Function to delete a card from the basket
// Функция для удаления карточки из корзины
function delCardBasket(product: IProduct) {
  itemInBasket.forEach((el: IProduct, index: number) => {
    if (el.id === product.id) {
      itemInBasket.splice(index, 1);
    }
  });
}
