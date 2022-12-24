import { delCardBasket } from './basket'
import { itemInBasket } from './index.ts'

export function handleClickPlusMinus (event) {
  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
    const itemCard = event.target.closest('.products__item-card')
    const itemID = itemCard.getAttribute('data-identifier')
    itemInBasket.forEach((el) => {
      if (el.id === +itemID) { // compare itemInBasket.id and DOM element data-identifier
        if (event.target.dataset.action === 'plus') {
          if (el.count < el.stock) {
            el.count = ++el.count
          }
        }
        if (event.target.dataset.action === 'minus') {
          if (el.count === 1) {
            event.target.closest('.products__item-card').remove()
            delCardBasket(el)
          }
          if (el.count > 1) {
            el.count = --el.count
          }
        }
      }
    })
  }
}
