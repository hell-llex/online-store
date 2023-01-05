import './filter.scss'
import { productsDataI } from '../types'
import { productsData, CreateProductCard } from '../cards/cards'
import { SortProductCard } from '../sort/sort'
import { slider } from './slider/slider'

type sliderSelector = { min: number, max: number }
type filterSelector = { arrFilter: string[], countFilter: number[] }
// type CreateFilter = { arrFilter: string[], countFilter: number } | { min: number, max: number }

// interface CreateFilter {
//   setting?: string[] | { min: number, max: number } | undefined,
// }

const log = (e: any) => console.log(`${e} ==>`, e)

let filterCategory: filterSelector = { arrFilter: [], countFilter: [] } // категории по всему списку товаров
let filterBrand: filterSelector = { arrFilter: [], countFilter: [] } // брэнды по всему списку товаров
let filterStock: sliderSelector = { min: 0, max: 1 } // минимальное и максимальное кол-во товара по всему списку товаров
let filterPrice: sliderSelector = { min: 0, max: 1 } // минимальная и максимальная стоимость товара по всему списку товаров

export function loadFilter(arrProd: Array<productsDataI>) {
  let stock: number[] = []
  let price: number[] = []
  arrProd.forEach(el => {
    if (!filterCategory.arrFilter.includes(el.category)) {
      filterCategory.arrFilter.push(el.category)
      filterCategory.countFilter.push(1)
    } else {
      filterCategory.countFilter[filterCategory.arrFilter.indexOf(el.category)] += 1
    }

    if (!filterBrand.arrFilter.includes(el.brand)) {
      filterBrand.arrFilter.push(el.brand)
      filterBrand.countFilter.push(1)
    } else {
      filterBrand.countFilter[filterBrand.arrFilter.indexOf(el.brand)] += 1
    }

    stock.push(el.stock)
    price.push(el.price)
  })
  filterStock.min = Math.min(...stock) //
  filterStock.max = Math.max(...stock) //
  filterPrice.min = Math.min(...price) //
  filterPrice.max = Math.max(...price) //

  // console.log('filterCategory :>> ', filterCategory);
  // console.log('filterBrand :>> ', filterBrand);

  CreateFilter(filterCategory, 'category')
  CreateFilter(filterBrand, 'brand')
  CreateFilter(filterStock, 'stock')
  CreateFilter(filterPrice, 'price')
  slider()
  changeFilter()
}

function CreateFilter(setting: filterSelector | sliderSelector, location: string): void { // category, brand, stock, price
  let dataDom: string[] = []
  if (location === 'category' || location === 'brand') {
    (setting as filterSelector).arrFilter.forEach((elem, i) => {
      dataDom.push(`<div class="container-item">
        <label class="item-label"><input type="checkbox" name="${elem}" class="checkbox" data-${location}="${elem}" data-count="${(setting as filterSelector).countFilter[i]}">${elem}</label>
        <p class="quantity"><span>${(setting as filterSelector).countFilter[i]}</span>/${(setting as filterSelector).countFilter[i]}</p>
      </div>`)
    })
  } else if (location === 'stock' || location === 'price') {
    // log(setting)
    let value = setting as sliderSelector
    dataDom.push(`<div class="value-container">
      <p class="${location}-from _from" data-from="${value.min}">${value.min}</p>
      <p class="${location}-to _to" data-to="${value.max}">${value.max}</p>
    </div>
    <div class="multi-range">
      <input type="range" min="${value.min}" max="${value.max}" value="${value.min}" class="${location}-lower _lower">
      <input type="range" min="${value.min}" max="${value.max}" value="${value.max}" class="${location}-upper _upper">
    </div>`)
  }
  (document.querySelector(`.${location}-container`) as HTMLElement).innerHTML = dataDom.join('')
}

export let resultData: Array<productsDataI> = [];
let resultFilters: Array<productsDataI> = [];
let resultCheck: Array<productsDataI> = [];

function changeFilter(): void {

  function filtering(e: any) {
    let productFilter: Array<productsDataI> = productsData.products.slice();
    let result: Array<productsDataI> = []
    let checkboxCategory: (string | undefined)[] = [];
    let checkboxBrand: (string | undefined)[] = [];
    // if (e.target.closest('.category-container')) {
    //   let checkboxCategory: (string | undefined)[] = [];
    //   (document.querySelectorAll('.category-container .checkbox:checked') as NodeListOf<HTMLInputElement>).forEach(elem => {
    //     checkboxCategory.push(elem.dataset.category);
    //   });

    //   (document.querySelectorAll('.category-container .checkbox') as NodeListOf<HTMLInputElement>).forEach((elem, i) => {
    //     if (!elem.checked) {
    //       document.querySelectorAll('.quantity span')[i].innerHTML = '0';
    //       document.querySelectorAll('.container-item')[i].classList.add('inactive');
    //     } else {
    //       document.querySelectorAll('.quantity span')[i].innerHTML = `${elem.dataset.count}`;
    //       document.querySelectorAll('.container-item')[i].classList.remove('inactive');
    //     }
    //   });

    //   let result = (productsData.products as Array<productsDataI>).filter(item => checkboxCategory.includes(item.category));

    //   if (result.length !== 0) {
    //     CreateProductCard(result)
    //   } else {
    //     CreateProductCard(productsData.products);
    //     document.querySelectorAll('.container-item').forEach((elem, i) => {
    //       elem.classList.remove('inactive')
    //       document.querySelectorAll('.quantity span')[i].innerHTML = `${(document.querySelectorAll('.category-container .checkbox')[i] as HTMLInputElement).dataset.count}`;
    //     });
    //   }

    // }

    if (e.target.closest('.category-container') || e.target.closest('.brand-container')) {

      (document.querySelectorAll('.category-container .checkbox:checked') as NodeListOf<HTMLInputElement>).forEach(elem => {
        checkboxCategory.push(elem.dataset.category);
      });

      (document.querySelectorAll('.brand-container .checkbox:checked') as NodeListOf<HTMLInputElement>).forEach(elem => {
        checkboxBrand.push(elem.dataset.brand);
      });

      // =========================================================================================================

      result = productFilter.filter(item => {
        return checkboxCategory.includes(item.category) || checkboxBrand.includes(item.brand)
      });

      // if (checkboxBrand.length !== 0 && checkboxCategory.length !== 0) {
      //   result = result.filter(item => {
      //     return checkboxCategory.includes(item.category) && checkboxBrand.includes(item.brand)
      //   });
      // }
      if (checkboxBrand.length !== 0 && checkboxCategory.length !== 0) {
        result = result.filter(item => {
          return checkboxCategory.includes(item.category) && checkboxBrand.includes(item.brand) && item.stock >= valuesFrom[0]
            && item.stock <= valuesTo[0] && item.price >= valuesFrom[1] && item.price <= valuesTo[1]
        });
      }
      // if (lowerSliderAll[0].min !== lowerSliderAll[0].value || upperSliderAll[0].max !== upperSliderAll[0].value
      //   || lowerSliderAll[1].min !== lowerSliderAll[1].value || upperSliderAll[1].max !== upperSliderAll[1].value) {
      //   log('---------------------')
      //   result = resultCheck.filter(item => {
      //     return checkboxCategory.includes(item.category)
      //   });
      // }
      // if (lowerSliderAll[0].min !== lowerSliderAll[0].value || upperSliderAll[0].max !== upperSliderAll[0].value
      //   || lowerSliderAll[1].min !== lowerSliderAll[1].value || upperSliderAll[1].max !== upperSliderAll[1].value) {
      //   result = resultCheck.filter(item => {
      //     return checkboxBrand.includes(item.brand)
      //   });
      // }


      // result = productFilter.filter(item => checkboxCategory.includes(item.category));

      // if (checkboxBrand.length !== 0 && checkboxCategory.length !== 0) {
      //   result = result.filter(item => checkboxBrand.includes(item.brand));
      // } else if (checkboxCategory.length === 0) {
      //   result = productFilter.filter(item => checkboxBrand.includes(item.brand));
      // } else if (document.querySelectorAll('.filters .checkbox:checked').length !== 0 && lowerSliderAll[0].min !== lowerSliderAll[0].value && upperSliderAll[0].max !== upperSliderAll[0].value
      //   && lowerSliderAll[1].min !== lowerSliderAll[1].value && upperSliderAll[1].max !== upperSliderAll[1].value) {
      //   resultFilters = resultData
      //   result = resultFilters.filter(item => checkboxBrand.includes(item.brand));
      // }

      // =========================================================================================================

      if (document.querySelectorAll('.filters .checkbox:checked').length === 0 ) {
        // result = productFilter.slice();
        result = productFilter.filter(item => {
          return (item.stock >= valuesFrom[0] && item.stock <= valuesTo[0]) && (item.price >= valuesFrom[1] && item.price <= valuesTo[1])
        });
      }
      // else if (document.querySelectorAll('.filters .checkbox:checked').length === 0 && lowerSliderAll[0].min !== lowerSliderAll[0].value || upperSliderAll[0].max !== upperSliderAll[0].value
      //   || lowerSliderAll[1].min !== lowerSliderAll[1].value || upperSliderAll[1].max !== upperSliderAll[1].value) {
      //   result = productFilter.filter(item => {
      //     return (item.stock >= valuesFrom[0] && item.stock <= valuesTo[0]) && (item.price >= valuesFrom[1] && item.price <= valuesTo[1])
      //   });
      // }

      resultData = result.slice()
      resultFilters = result.slice()

      result.length === 0 ? CreateProductCard('not-found') : (CreateProductCard(result), SortProductCard('now'));
    }
  }

  document.querySelector('.filters')?.addEventListener('click', (e) => {
    filtering(e);
  })

  const lowerSliderAll = document.querySelectorAll('._lower') as NodeListOf<HTMLInputElement>
  const upperSliderAll = document.querySelectorAll('._upper') as NodeListOf<HTMLInputElement>
  const valuesLowerSliderAll = document.querySelectorAll('._from') as NodeListOf<HTMLElement>
  const valuesUpperSliderAll = document.querySelectorAll('._to') as NodeListOf<HTMLElement>

  let valuesTo: number[] = [] // [stock, price]
  let valuesFrom: number[] = [] // [stock, price]

  valuesTo = [+valuesUpperSliderAll[0].dataset.to!, +valuesUpperSliderAll[1].dataset.to!]
  valuesFrom = [+valuesLowerSliderAll[0].dataset.from!, +valuesLowerSliderAll[1].dataset.from!]

  function sliderSelector(a: number, b: string) {
    let productFilter: Array<productsDataI> = productsData.products.slice();
    let resultRange: Array<productsDataI> = [];

    if (a === 0 && b === 'to') {
      valuesTo[0] = +valuesUpperSliderAll[0].dataset.to!
    } else if (a === 0 && b === 'from') {
      valuesFrom[0] = +valuesLowerSliderAll[0].dataset.from!
    } else if (a === 1 && b === 'to') {
      valuesTo[1] = +valuesUpperSliderAll[1].dataset.to!
    } else if (a === 1 && b === 'from') {
      valuesFrom[1] = +valuesLowerSliderAll[1].dataset.from!
    }

    resultRange = productFilter.filter(item => {
      return (item.stock >= valuesFrom[0] && item.stock <= valuesTo[0]) && (item.price >= valuesFrom[1] && item.price <= valuesTo[1])
    });

    if (document.querySelectorAll('.filters .checkbox:checked').length !== 0) {
      resultRange = resultFilters.filter(item => {
        return (item.stock >= valuesFrom[0] && item.stock <= valuesTo[0]) && (item.price >= valuesFrom[1] && item.price <= valuesTo[1])
      });
    }


    if (document.querySelectorAll('.filters .checkbox:checked').length === 0 && lowerSliderAll[0].min === lowerSliderAll[0].value && upperSliderAll[0].max === upperSliderAll[0].value
      && lowerSliderAll[1].min === lowerSliderAll[1].value && upperSliderAll[1].max === upperSliderAll[1].value) {
      resultRange = productFilter.slice();
    }

    // console.log('resultRange :>> ', resultRange);

    resultData = resultRange.slice()
    resultCheck = resultRange.slice()
    // console.log('resultData :>> ', resultData);
    resultRange.length === 0 ? CreateProductCard('not-found') : (CreateProductCard(resultRange), SortProductCard('now'));
    // result.length === 0 ? console.log('not-found') : console.log('result');
  }

  // ======================stock==========================

  upperSliderAll[0].addEventListener('input', () => { sliderSelector(0, 'to') })
  lowerSliderAll[0].addEventListener('input', () => { sliderSelector(0, 'from') })

  // ======================price==========================

  upperSliderAll[1].addEventListener('input', () => { sliderSelector(1, 'to') })
  lowerSliderAll[1].addEventListener('input', () => { sliderSelector(1, 'from') })

  // =====================================================

}
