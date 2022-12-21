import { itemInBasket } from './index.ts'
import Data from './products-v1.json'
import { calcTotalPrice } from './calcTotalPrice.js'
const productCardContainer = document.querySelector('.products__card-container')
const productHeader = document.querySelector('.products__header')
const btnMinusPage = document.querySelector('[data-action="minusPage"]')
const btnPlusPage = document.querySelector('[data-action="plusPage"]')
const counterPage = document.querySelector('[data-counterPage]')

const btnAddTest = document.querySelector('.btn-add-test')
const btnDelTest = document.querySelector('.btn-del-test')

function addCardBasket (product) {
  itemInBasket.push(product)
  renderCardInBasket(itemInBasket)
  calcTotalPrice()
}

function delCardBasket (product) {
  itemInBasket.forEach((el, index) => {
    if (el.id === product.id) {
      itemInBasket.splice(index, 1)
    }
    renderCardInBasket(itemInBasket)
    calcTotalPrice()
  })
}

function renderCardInBasket (arr) {
  productCardContainer.innerHTML = ''
  productHeader.innerHTML = ''
  if (arr.length === 0) {
    productCardContainer.innerHTML = ''
  }
  // iterate array itemInBasket and render all cards in basket
  arr.forEach((el, index) => {
    const productCardHTML = `
    <div class="products__item-card" data-identifier="${el.id}">
      <div class="products__position"> ${index + 1} </div>
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
            <div>Discount: ${el.discountPercentage}</div>
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

  const productHeaderHTML = `
  Products in Cart
  <div class="products__items">Items: ${arr.length}</div>
  <div class="products__page">Page:
    <button class="page__left" data-action="minusPage"> &#60; </button>
    <span class="page__count" data-counterPage>1</span>
    <button class="page__right" data-action="plusPage"> &#62; </button>
  </div>`

  productHeader.insertAdjacentHTML('afterbegin', productHeaderHTML)
  calcTotalPrice()
}

// handle clicking on + -
window.addEventListener('click', handleClickPlusMinus)

function handleClickPlusMinus (event) {
  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
    const itemCard = event.target.closest('.products__item-card')
    let itemCounter = itemCard.querySelector('[data-counterItem]')
    const itemID = itemCard.getAttribute('data-identifier')
    const stockControl = Data[itemID - 1].stock
    if (event.target.dataset.action === 'plus') {
      if (+itemCounter.innerText < stockControl) {
        itemCounter = ++itemCounter
        itemInBasket.forEach((el) => {
          if (el.id === +itemID) {
            el.count = ++el.count
          }
        })
        renderCardInBasket(itemInBasket)
        calcTotalPrice()
      }
    }
    if (event.target.dataset.action === 'minus') {
      if (+itemCounter.innerText === 1) {
        event.target.closest('.products__item-card').remove()
        delCardBasket(Data[itemID - 1])
        calcTotalPrice()
      }

      if (+itemCounter.innerText > 1) {
        itemCounter = --itemCounter
        itemInBasket.forEach((el) => {
          if (el.id === +itemID) {
            el.count = --el.count
          }
        })
        renderCardInBasket(itemInBasket)
        calcTotalPrice()
      }
    }
  }
}

btnAddTest.addEventListener('click', (e) => { // TODO прокидываешь мне товар по которому прожато 'добавить товар'
  addCardBasket(Data[10])
  renderCardInBasket(itemInBasket)
  console.log('add')
})

productCardContainer.addEventListener('click', (event) => {
  const itemCard = event.target.closest('.products__item-card')
  const itemID = itemCard.getAttribute('data-identifier')
  if (event.target.dataset.action === 'del') { // TODO прокидываешь мне товар по которому прожато 'удалить товар'
    delCardBasket(Data[itemID - 1])
    console.log('del')
  }
})
