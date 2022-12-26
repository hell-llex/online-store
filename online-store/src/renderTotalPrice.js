import { itemInBasket } from './index.ts'
const summary = document.querySelector('.summary')

export function renderTotalPrice () {
  summary.innerHTML = ''
  let priceTotal = 0
  let totalCountEl = 0

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
    <div class="summary__promo">
      <input type="text">
    </div>
    <button class="btn">BUY NOW!</button>
    <button class="btn-add-test">add</button>`

  summary.insertAdjacentHTML('afterbegin', summaryHTML)
}

// синглтон у webdev все писать читать в localstorage
// писать через фетчь и json
