import { itemInBasket } from '../../index'
import { renderBuyForm } from './buyForm'
const summary = document.querySelector('.summary')

export function renderTotalPrice () {
  summary.innerHTML = ''
  let priceTotal = 0
  let totalCountEl = 0
  const discount = 0.9

  // iterate array and get count and price for the total price
  itemInBasket.forEach((el) => {
    priceTotal += el.count * el.price
    totalCountEl += el.count
  })

  const summaryHTML = `
    <h2 class="summary__title">Summary</h2>
    <div class="summary__products">Products: ${totalCountEl}
    </div>
    <div class="summary__total">Total: ${priceTotal} €
    </div>
    <div class="summary__discount hide">Total: ${Math.floor(priceTotal * discount)} €</div>
    <div class="summary__discount-text hide">Скидка -10%</div>
    <div class="summary__promo">
    <form class="summary__form">
    <input type="text" placeholder="Enter promo code" class="summary__input" tabindex="1" value="" required>
    </form>
    <div class="summary__input-text">Промокод '123'</div>
    </div>
    <button class="summary__buy-btn">BUY NOW!</button>
    <button class="btn-add-test">add</button>`

  summary.insertAdjacentHTML('afterbegin', summaryHTML)
  const summaryInput = document.querySelector('input[type="text"]')
  const summaryForm = document.querySelector('.summary__form')
  const summaryTotal = document.querySelector('.summary__total')
  const summaryDiscount = document.querySelector('.summary__discount')
  const summaryDiscountText = document.querySelector('.summary__discount-text')

  summaryForm.addEventListener('input', (e) => { addDiscount(e) }) // как обработать оба события тк submit срабатывает после change и дублирует надпись

  summaryForm.addEventListener('submit', (e) => { e.preventDefault() })

  function addDiscount (e) {
    if (summaryInput.value.match(/^123$/) || summaryInput.value.match(/^123\s/)) {
      summaryTotal.style.textDecoration = 'line-through solid red'
      summaryDiscount.classList.remove('hide')
      summaryDiscountText.classList.remove('hide')
      summaryInput.classList.add('correct')
      summaryInput.classList.remove('incorrect')
    } else {
      summaryInput.classList.remove('correct')
      summaryInput.classList.remove('incorrect')
      summaryDiscount.classList.add('hide')
      summaryDiscountText.classList.add('hide')
      summaryTotal.style.textDecoration = 'none'
    }
  }

  const buyButton = document.querySelector('.summary__buy-btn')
  buyButton.addEventListener('click', renderBuyForm)
}
