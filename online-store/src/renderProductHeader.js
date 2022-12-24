import { itemInBasket } from './index.ts'
const productHeader = document.querySelector('.products__header')

export function renderProductHeader () {
  productHeader.innerHTML = ''

  const productHeaderHTML = `
Products in Cart
<div class="products__items">Items: ${itemInBasket.length}</div>
<div class="products__page">Page:
  <button class="page__left" data-action="minusPage"> &#60; </button>
  <span class="page__count" data-counterPage>1</span>
  <button class="page__right" data-action="plusPage"> &#62; </button>
</div>`

  productHeader.insertAdjacentHTML('afterbegin', productHeaderHTML)
}
