import { itemInBasket } from '../../index';
const productHeader = document.querySelector(
  '.products__header',
) as HTMLElement;

export function renderProductHeader(): void {
  if (itemInBasket.length === 0) {
    productHeader.innerHTML = '';
  }
  productHeader.innerHTML = '';

  // <input class="products__limit" type="number" id="count-items" value="4" min="2" max="10" data-limit>

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

  // <p class="limit__count" id = "count-items" data - value="4" > 4 < /p>
// <p class="page__count" id="count-items" data-value="1">1</p>
  // <input type="number" class="page__count" id = "count-items" value = "1" min = "1" data - limit readonly >
  // <button class="" data-action="minusPage">-</button>
  //     <span  data-counterPage>1</span>
  //     <button class="" data-action="plusPage">+</button>
  productHeader.insertAdjacentHTML('afterbegin', productHeaderHTML);
}
