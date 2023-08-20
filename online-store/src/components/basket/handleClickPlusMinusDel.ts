import { itemInBasket } from '../../index';
import { IProduct, basketButton } from '../types';

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
    itemInBasket.forEach((el: IProduct) => {
      if (itemID !== null && el.id === +itemID) {
        if (
          event !== null &&
          event.target instanceof HTMLElement &&
          event.target.dataset.action === basketButton.plus
        ) {
          if (el.count < el.stock) {
            el.count = ++el.count;
          }
        }
        if (
          event !== null &&
          event.target instanceof HTMLElement &&
          event.target.dataset.action === basketButton.minus
        ) {
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
          delCardBasket(el);
        }
      }
    });
  }
}

function delCardBasket(product: IProduct) {
  itemInBasket.forEach((el: IProduct, index: number) => {
    if (el.id === product.id) {
      itemInBasket.splice(index, 1);
    }
  });
}
