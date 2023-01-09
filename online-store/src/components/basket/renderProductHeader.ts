import { itemInBasket } from '../../index';
const productHeader = document.querySelector(
  '.products__header'
) as HTMLElement;

export function renderProductHeader(): void {
  productHeader.innerHTML = '';

  const productHeaderHTML = `
Products in Cart
<div class="products__items">Items: ${itemInBasket.length}</div>
<div class="products__items-limit">Limit:
<input class="products__limit" type="number" id="count-items" value="4" min="2" max="10" data-limit>
</div>

<div class="products__page">Page:
  <button class="page__left" data-action="minusPage"> &#60; </button>
  <span class="page__count" data-counterPage>1</span>
  <button class="page__right" data-action="plusPage"> &#62; </button>
</div>`;

  productHeader.insertAdjacentHTML('afterbegin', productHeaderHTML);
}
