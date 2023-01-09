import { itemInBasket } from '../../index';
import { productsArrayI } from '../types';

export function handleClickPlusMinusDel(event: Event) {
  if (
    event !== null &&
    event.target instanceof HTMLElement &&
    (event.target.dataset.action === 'plus' ||
      event.target.dataset.action === 'minus' ||
      event.target.dataset.action === 'del')
  ) {
    const itemCard = event.target.closest(
      '.products__item-card'
    ) as HTMLElement; // get closest .products__item-card from event.target
    const itemID = itemCard.getAttribute('data-identifier');
    itemInBasket.forEach((el: productsArrayI) => {
      if (itemID !== null && el.id === +itemID) {
        // compare itemInBasket.id and DOM element data-identifier
        if (
          event !== null &&
          event.target instanceof HTMLElement &&
          event.target.dataset.action === 'plus'
        ) {
          if (el.count < el.stock) {
            el.count = ++el.count;
          }
        }
        if (
          event !== null &&
          event.target instanceof HTMLElement &&
          event.target.dataset.action === 'minus'
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
          event.target.dataset.action === 'del'
        ) {
          delCardBasket(el);
        }
      }
    });
  }
}

function delCardBasket(product: productsArrayI) {
  // del product from itemInBasket array
  itemInBasket.forEach((el: productsArrayI, index: number) => {
    if (el.id === product.id) {
      itemInBasket.splice(index, 1);
    }
  });
}
