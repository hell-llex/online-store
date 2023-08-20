import { itemInBasket } from '../../index';
const productHeader = document.querySelector(
  '.products__header',
) as HTMLElement;

// Function to render the product header with items count, limit, and page controls
// Функция для отображения заголовка продукта с количеством элементов, лимитом и элементами управления страницей
export function renderProductHeader(): void {
  // Clear the product header if the basket is empty
  // Очистка заголовка продукта, если корзина пуста
  if (itemInBasket.length === 0) {
    productHeader.innerHTML = '';
  }

  // Clear the product header to prevent duplicate content
  // Очистка заголовка продукта, чтобы избежать дублирования контента
  productHeader.innerHTML = '';

  // HTML markup for the product header with items count, limit, and page controls
  // HTML-разметка для заголовка продукта с количеством элементов, лимитом и элементами управления страницей
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

  // Insert the product header HTML at the beginning of the product header element
  // Вставка HTML заголовка продукта в начало элемента заголовка продукта
  productHeader.insertAdjacentHTML('afterbegin', productHeaderHTML);
}
