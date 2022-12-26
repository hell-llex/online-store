import { itemInBasket } from './index.ts'
import Data from './products-v1.json'
import { renderTotalPrice } from './renderTotalPrice.js'
import { renderProductHeader } from './renderProductHeader.js'
import { renderCardsInBasket } from './renderCardsInBasket.js'
import { handleClickPlusMinusDel } from './handleClickPlusMinusDel.js'

const btnAddTest = document.querySelector('.btn-add-test')

function renderBasket () {
  renderProductHeader()
  renderCardsInBasket()
  renderTotalPrice()
  console.log(itemInBasket)
}

// handle clicking on + - Del
window.addEventListener('click', (e) => {
  handleClickPlusMinusDel(e)
  renderBasket()
})

btnAddTest.addEventListener('click', (e) => { // TODO прокидываешь мне товар по которому прожато 'добавить товар'
  addCardBasket(Data[10])
  renderBasket()
  console.log('add')
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
