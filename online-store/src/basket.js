import { itemInBasket } from './index.ts'
import Data from './products-v1.json'
import { renderTotalPrice } from './renderTotalPrice.js'
import { renderProductHeader } from './renderProductHeader.js'
import { renderCardsInBasket } from './renderCardsInBasket.js'
import { handleClickPlusMinus } from './handleClickPlusMinus.js'

/* const btnMinusPage = document.querySelector('[data-action="minusPage"]')
const btnPlusPage = document.querySelector('[data-action="plusPage"]')
const counterPage = document.querySelector('[data-counterPage]') */
/* const btnDelTest = document.querySelector('.btn-del-test') */

const productCardContainer = document.querySelector('.products__card-container')
const btnAddTest = document.querySelector('.btn-add-test')

function renderBasket () {
  renderProductHeader()
  renderCardsInBasket()
  renderTotalPrice()
  console.log(itemInBasket)
}

// handle clicking on + -
window.addEventListener('click', (e) => {
  handleClickPlusMinus(e)
  renderBasket()
})

btnAddTest.addEventListener('click', (e) => { // TODO прокидываешь мне товар по которому прожато 'добавить товар'
  addCardBasket(Data[10])
  renderBasket()
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

function addLocalStorage (name, arrData) {
  localStorage.setItem(name, JSON.stringify(arrData)) // сериализуем и записываем в локалстораж
}

/* function getLocalStorage (name) {
  console.log('json', JSON.parse(localStorage.getItem(name)))
  return JSON.parse(localStorage.getItem(name)) // достаем из локала и парсим обратно
} */

function addCardBasket (product) {
  itemInBasket.push(product)
  /*   addLocalStorage('itemInBasket', itemInBasket)
  const basket = getLocalStorage('itemInBasket')
  renderCardInBasket(basket) */
  renderBasket()
}

export function delCardBasket (product) {
  itemInBasket.forEach((el, index) => {
    if (el.id === product.id) {
      itemInBasket.splice(index, 1)
    }
    renderBasket()
    addLocalStorage('itemInBasket', itemInBasket)
  })
}
