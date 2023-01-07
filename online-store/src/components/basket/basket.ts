import { itemInBasket } from '../../index'
import Data from '../../products-v1.json'
import { renderTotalPrice } from './renderTotalPrice'
import { renderProductHeader } from './renderProductHeader'
import { renderCardsInBasket } from './renderCardsInBasket'
import { handleClickPlusMinusDel } from './handleClickPlusMinusDel'
import {renderDetails} from '../details/productCard'
/* import {  getLocalStoragePage } from './localStorage' */

const productCardContainer = document.querySelector('.products__card-container') as HTMLElement
const btnAddTest = document.querySelector('.btn-add-test') as HTMLElement
const pageBasket = document.querySelector('.page__basket') as HTMLElement
const pageDetails = document.querySelector('.page__product-description') as HTMLElement

export function renderBasket ():void {
  renderProductHeader()
  renderCardsInBasket()
  renderTotalPrice()
  console.log('renderBasket this: ', itemInBasket)
}

// handle clicking on + - Del
productCardContainer.addEventListener('click', (e:Event) => {
  if ((e !== null && e.target instanceof HTMLElement) && (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus' || e.target.dataset.action === 'del')) {
    handleClickPlusMinusDel(e)
    renderBasket()
  }
})

productCardContainer.addEventListener('click', (e:Event) => {
  if ((e !== null && e.target instanceof HTMLElement) && ( e.target.dataset.action === 'plusPage' || e.target.dataset.action === 'minusPage')) {
  /*    renderCardsInBasket() */
    renderBasket()
  }
})

//render details listener
productCardContainer.addEventListener('click', (e:Event) => {
  if ((e !== null && e.target instanceof HTMLElement) && ( e.target.closest('.item-card__info'))) {
const cardForRender = e.target.closest('.products__item-card') as HTMLElement
console.log('cardForRender.dataset.identifier :>> ', cardForRender.dataset.identifier);
   pageBasket.classList.add('hide')
    renderDetails(Number(cardForRender.dataset.identifier))
    pageDetails.classList.remove('hide')
  }
})



btnAddTest.addEventListener('click', () => { // TODO прокидываешь мне товар по которому прожато 'добавить товар'
  addCardBasket(Data[10])
  renderBasket()
})

function addCardBasket (product: any) { // TODO fix mistake when product:productsDataI?
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
