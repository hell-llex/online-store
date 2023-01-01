import './filter.scss'
import { productsDataI } from '../types'
type sliderSelector = { min: number, max: number }
type CreateFilter = string[] | { min: number, max: number }

// interface CreateFilter {
//   setting?: string[] | { min: number, max: number } | undefined,
// }

const log = (e: any) => console.log(`${e} ==>`, e)

let filterCategory: string[] = [] // категории по всему списку товаров
let filterBrand: string[] = [] // брэнды по всему списку товаров
let filterStock: sliderSelector = { min: 0, max: 1 } // минимальное и максимальное кол-во товара по всему списку товаров
let filterPrice: sliderSelector = { min: 0, max: 1 } // минимальная и максимальная стоимость товара по всему списку товаров

export function loadFilter(arrProd: Array<productsDataI>) {
  console.log('arrProd :>> ', arrProd);
  let stock: number[] = []
  let price: number[] = []
  arrProd.forEach(el => {
    !filterCategory.includes(el.category) ? filterCategory.push(el.category) : null
    !filterBrand.includes(el.brand) ? filterBrand.push(el.brand) : null
    stock.push(el.stock)
    price.push(el.price)
  })
  filterStock.min = Math.min(...stock) //
  filterStock.max = Math.max(...stock) //
  filterPrice.min = Math.min(...price) //
  filterPrice.max = Math.max(...price) //

  CreateFilter(filterCategory, 'category')
  CreateFilter(filterBrand, 'brand')
  CreateFilter(filterStock, 'stock')
  CreateFilter(filterPrice, 'price')

}

function CreateFilter(setting: CreateFilter, location: string): void { // category, brand, stock, price
  let dataDom: any[] = []
  if (location === 'category' || location === 'brand') {

    (setting as string[]).forEach(elem => {
      dataDom.push(`<div class="container-item">
        <label class="item-label"><input type="checkbox" name="${elem}" class="checkbox">${elem}</label>
        <p class="quantity">5/5</p>
      </div>`)
    })
  } else if (location === 'stock' || location === 'price') {
    log(setting)
    let value = setting as { min: number, max: number }
    dataDom.push(`<div class="range_container">
      <div class="sliders_control">
        <input id="fromSlider" type="range" value="${value.min}" min="${value.min}" max="${value.max}" />
        <input id="toSlider" type="range" value="${value.max}" min="${value.min}" max="${value.max}" />
      </div>
      <div class="form_control">
        <div class="form_control_container">
          <div class="form_control_container__time"></div>
          <input class="form_control_container__time__input" type="number" id="fromInput" value="${value.min}"
            min="0" max="${value.max}" />
        </div>
        <div class="form_control_container">
          <div class="form_control_container__time"></div>
          <input class="form_control_container__time__input" type="number" id="toInput" value="${value.max}" min="0"
            max="${value.max}" />
        </div>
      </div>
    </div>`)
  }
  (document.querySelector(`.${location}-container`) as HTMLElement).innerHTML = dataDom.join('')
}
