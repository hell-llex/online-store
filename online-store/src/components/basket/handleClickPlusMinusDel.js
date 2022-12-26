import { itemInBasket } from '../../index'

export function handleClickPlusMinusDel (event) {
  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus' || event.target.dataset.action === 'del') {
    const itemCard = event.target.closest('.products__item-card') // get closest .products__item-card from event.target
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
            delCardBasket(el)
          }
          if (el.count > 1) {
            el.count = --el.count
          }
        }
        if (event.target.dataset.action === 'del') {
          delCardBasket(el)
        }
      }
    })
  }
}

function delCardBasket (product) { // del product from itemInBasket array
  itemInBasket.forEach((el, index) => {
    if (el.id === product.id) {
      itemInBasket.splice(index, 1)
    }
  })
}
