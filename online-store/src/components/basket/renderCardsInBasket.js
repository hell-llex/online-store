// TODO fix при удалении элемента на 2й сранице корзины рендорит первую страницу
import { itemInBasket } from '../../index'
const productCardContainer = document.querySelector('.products__card-container')
const productHeader = document.querySelector('.products__header')

export function renderCardsInBasket () {
  const postData = itemInBasket
  let currentPage = 1
  const rows = 4
  if (postData.length === 0) {
    productCardContainer.innerHTML = ''
  } else { displayList(postData, rows, currentPage) }

  productHeader.addEventListener('click', (e) => { displayPagination(e) })
  function displayPagination (event) {
    if (event.target.dataset.action === 'plusPage' || event.target.dataset.action === 'minusPage') {
      const PageCounter = document.querySelector('[data-counterPage]')
      if (event.target.dataset.action === 'plusPage' && (+PageCounter.innerText < Math.ceil(itemInBasket.length / rows))) {
        PageCounter.innerText = +PageCounter.innerText + 1
        currentPage = +PageCounter.innerText + 1
        displayList(postData, rows, +PageCounter.innerText)
      }
      if (event.target.dataset.action === 'minusPage' && +PageCounter.innerText > 1) {
        PageCounter.innerText = +PageCounter.innerText - 1
        currentPage = +PageCounter.innerText - 1
        displayList(postData, rows, +PageCounter.innerText)
      }
    }
  }
}

function displayList (arrData, rowPerPage, page) {
  productCardContainer.innerHTML = ''
  page--

  const start = rowPerPage * page
  const end = start + rowPerPage
  const paginatedData = arrData.slice(start, end)
  console.log('arrData :>> ', arrData)
  paginatedData.forEach((el, index) => {
    const productCardHTML = `
    <div class="products__item-card" data-identifier="${el.id}">
      <div class="products__position"> ${(page * rowPerPage) + index + 1} </div>
      <div class="item-card__info">
        <img alt="${el.title}" src="${el.thumbnail}">
        <div class="item-card__detail">
          <div class="item-card__title">
            <h3>${el.title}</h3>
          </div>
          <div class="item-card__description">${el.description}
          </div>
          <div class="item-card__other">
            <div>Rating: ${el.rating}</div>
            <div>Discount: ${el.discountPercentage}%</div>
          </div>
        </div>
      </div>
      <div class="number-control">
        <div class="stock-control"> Stock: ${el.stock}</div>
        <div class="incDec-control">
        <button data-action="minus">-</button>
        <span class="item__count" data-counterItem>${el.count}</span>
        <button data-action="plus">+</button></div>
        <div class="amount-control">${el.price} €</div>
        <button class="btn-del-test" data-action="del">del</button>
      </div>
    </div>`

    productCardContainer.insertAdjacentHTML('beforeend', productCardHTML)
  })
}
