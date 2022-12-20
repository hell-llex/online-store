import { itemInBasket } from './index.ts'
const productCardContainer = document.querySelector('.products__card-container')
const productHeader = document.querySelector('.products__header')
const btnMinusPage = document.querySelector('[data-action="minusPage"]')
const btnPlusPage = document.querySelector('[data-action="plusPage"]')
const counterPage = document.querySelector('[data-counterPage]')

console.log(itemInBasket)

/* window.addEventListener('click', (event) => {
  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
    console.log(event.target)
    if (event.target.dataset.action === 'plus') {
      const itemCard = event.target.closest('.products__item-card')
      const counter = itemCard.querySelector('[data-counter]')
      counter.innerText = ++counter.innerText
    }
    if (event.target.dataset.action === 'minus') {
      const itemCard = event.target.closest('.products__item-card')
      const counter = itemCard.querySelector('[data-counter]')
      if (+counter.innerText > 1) {
        counter.innerText = --counter.innerText
      }
    }
  }
}) */

export function addCardBasket (product) {
  itemInBasket.push(product)
  paintCardInBasket(itemInBasket)
}

export function delCardBasket (product) {
  itemInBasket.forEach((el, index) => {
    if (el.id === product.id) {
      itemInBasket.splice(index, 1)
    }
    console.log(itemInBasket)
    paintCardInBasket(itemInBasket)
  })
}

function paintCardInBasket (arr) {
  productCardContainer.innerHTML = ''
  productHeader.innerHTML = ''
  console.log(arr)
  if (arr.length === 0) {
    productCardContainer.innerHTML = ''
  }

  arr.forEach((el, index) => {
    const productCardHTML = `
    <div class="products__item-card">
      <div class="products__position"> ${index + 1} </div>
      <div class="item-card__info">
        <img alt="" src="${el.thumbnail}">
        <div class="item-card__detail">
          <div class="item-card__title">
            <h3>${el.title}</h3>
          </div>
          <div class="item-card__description">${el.description}
          </div>
          <div class="item-card__other">
            <div>Rating: ${el.rating}</div>
            <div>Discount: ${el.discountPercentage}</div>
          </div>
        </div>
      </div>
      <div class="number-control">
        <div class="stock-control"> Stock: ${el.stock}</div>
        <div class="incDec-control"> <button data-action="minus">-</button> 1 <button data-action="plus">+</button></div>
        <div class="amount-control"> €${el.price}</div>
        <button class="btn-del-test" data-action="del">del</button>
      </div>
    </div>`

    productCardContainer.insertAdjacentHTML('beforeend', productCardHTML)
  })

  const productHeaderHTML = `
  Products in Cart
  <div class="products__items">Items: ${arr.length}</div>
  <div class="products__page">Page:
    <button class="page__left" data-action="minusPage"> &#60; </button>
    <span class="page__count" data-counterPage>1</span>
    <button class="page__right" data-action="plusPage"> &#62; </button>
  </div>`

  productHeader.insertAdjacentHTML('afterbegin', productHeaderHTML)
}
