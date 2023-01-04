import { itemInBasket } from '../../index'
import Data from '../../products-v1.json'
import { renderTotalPrice } from './renderTotalPrice.js'
import { renderProductHeader } from './renderProductHeader.js'
import { renderCardsInBasket } from './renderCardsInBasket.js'
import { handleClickPlusMinusDel } from './handleClickPlusMinusDel.js'

const productCardContainer = document.querySelector('.products__card-container')
const btnAddTest = document.querySelector('.btn-add-test')
const summaryForm = document.querySelector('.summary__form')

export function renderBasket () {
  renderProductHeader()
  renderCardsInBasket()
  renderTotalPrice()
  console.log('render this: ', itemInBasket)
}

// handle clicking on + - Del
productCardContainer.addEventListener('click', (e) => {
  if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus' || e.target.dataset.action === 'del') {
    handleClickPlusMinusDel(e)
    renderBasket()
  }
})
/* console.log('summaryForm :>> ', summaryForm)
summaryForm.addEventListener('change', (e) => { if (e !== null) { renderBasket() } }) */

btnAddTest.addEventListener('click', (e) => { // TODO прокидываешь мне товар по которому прожато 'добавить товар'
  addCardBasket(Data[10])
  renderBasket()
  console.log('add')
  document.addEventListener('*', (event) => {
    console.log('event caught:', event.type)
  })
})

function addCardBasket (product) {
  itemInBasket.push(product)
}
/*
Функция удаления для стыковки с магазином
контейнерПродуктовВМагазине.addEventListener('click', (event) => {
  const itemCard = event.target.closest('.products__item-card')
  const itemID = itemCard.getAttribute('data-identifier')
  if (event.target.dataset.action === 'del') {                         // TODO прокидываешь мне товар по которому прожато 'удалить товар'
    delCardBasket(Data[itemID - 1])
    console.log('del')
  }
}) */
