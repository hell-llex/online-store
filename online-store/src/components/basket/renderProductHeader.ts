import { itemInBasket } from '../../index';
const productHeader = document.querySelector(
  '.products__header',
) as HTMLElement;

export function renderProductHeader(): void {
  if (itemInBasket.length === 0) {
    productHeader.innerHTML = '';
  }
  productHeader.innerHTML = '';

  const productHeaderHTML = `
  <p class="products__items"><b>Items:</b><span>${itemInBasket.length}</span></p>
  <div class="products__items-limit">
    <b>Limit:</b>
    <div class="number">
      <input type="number" class="limit__count" id="count-items" value="4" min="2" max="10" data-limit readonly >
      <div class="plus-minus-btn-container">
        <div class="limit-minus number-minus" data-action="decrement">-</div>
        <div class="limit-plus number-plus" data-action="increment">+</div>
      </div>
    </div>
  </div>

  <div class="products__page-count">
    <b>Page:</b>
    <div class="number">
      <input type="number" class="page__count" id="count-items" value="1" min="1" data-limit readonly >
      <div class="plus-minus-btn-container">
        <div class="page-minus number-minus" data-action="decrement">-</div>
        <div class="page-plus number-plus" data-action="increment">+</div>
      </div>
    </div>
  </div>`;

  productHeader.insertAdjacentHTML('afterbegin', productHeaderHTML);
}
