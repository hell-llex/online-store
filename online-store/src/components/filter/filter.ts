import './filter.scss'
import { productsDataI } from '../types'
import { productsData, CreateProductCard } from '../cards/cards'
import { SortProductCard } from '../sort/sort'

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

export let resultData: Array<productsDataI> = [];

export function changeFilter(): void {

  function filtering(e: any) {
    let productFilter: Array<productsDataI> = productsData.products.slice();
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
      let checkboxCategory: (string | undefined)[] = [];
      let checkboxBrand: (string | undefined)[] = [];

      (document.querySelectorAll('.category-container .checkbox:checked') as NodeListOf<HTMLInputElement>).forEach(elem => {
        checkboxCategory.push(elem.dataset.category);
      });

      (document.querySelectorAll('.brand-container .checkbox:checked') as NodeListOf<HTMLInputElement>).forEach(elem => {
        checkboxBrand.push(elem.dataset.brand);
      });

      // (document.querySelectorAll('.filters .checkbox') as NodeListOf<HTMLInputElement>).forEach((elem, i) => {
      //   if (!elem.checked) {
      //     document.querySelectorAll('.quantity span')[i].innerHTML = '0';
      //     document.querySelectorAll('.container-item')[i].classList.add('inactive');
      //   } else {
      //     document.querySelectorAll('.quantity span')[i].innerHTML = `${elem.dataset.count}`;
      //     document.querySelectorAll('.container-item')[i].classList.remove('inactive');
      //   }
      // });

      // =========================================================================================================
      let result: Array<productsDataI> = []

      // if (e.target.closest('.category-container')) {
      //   result = productFilter.filter(item => checkboxCategory.includes(item.category));
      // }

      // if (result.length === 0) result = productFilter.slice();
      result = productFilter.filter(item => checkboxCategory.includes(item.category));

      if (checkboxBrand.length !== 0 && checkboxCategory.length !== 0) {
        result = result.filter(item => checkboxBrand.includes(item.brand));
      } else if (checkboxCategory.length === 0) {
        result = productFilter.filter(item => checkboxBrand.includes(item.brand));
      }

      // else if (checkboxBrand.length === 0) {
      //   result = productFilter.filter(item => checkboxCategory.includes(item.category));
      // }

      // if (e.target.closest('.brand-container')) {
      //   result = checkboxCategory.length === 0 ? productFilter.filter(item => checkboxBrand.includes(item.brand)) : result.filter(item => checkboxBrand.includes(item.brand));
      // }

      // =========================================================================================================

      // result = productFilter.filter(item => {
      //   // return checkboxCategory.includes(item.category) && checkboxCategory.includes(item.brand)
      //   return checkboxCategory.includes(item.category) || checkboxBrand.includes(item.brand)
      // });

      // if (result.length === 0) result = productFilter.slice();

      // let currentArr = result.filter(item => {
      //   // return checkboxCategory.includes(item.category) || checkboxCategory.includes(item.brand)
      //   return checkboxCategory.includes(item.category) && checkboxBrand.includes(item.brand)
      // });

      // if (currentArr.length !== 0) result = currentArr.slice();



      if (document.querySelectorAll('.filters .checkbox:checked').length === 0) {
        result = productFilter.slice();
        // document.querySelectorAll('.container-item').forEach((elem, i) => {
        //   elem.classList.remove('inactive')
        //   // document.querySelectorAll('.quantity span')[i].innerHTML = `${(document.querySelectorAll('.filters .checkbox')[i] as HTMLInputElement).dataset.count}`;
        // });
      }

      resultData = result.slice()

      // console.log('checkboxCategory :>> ', checkboxCategory);
      // console.log('checkboxBrand :>> ', checkboxBrand);
      // console.log('result :>> ', result);

      result.length === 0 ? CreateProductCard('not-found') : (CreateProductCard(result), SortProductCard('now'));





      // if (result.length !== 0) {
      //   CreateProductCard(result)


      // } else {
      //   document.querySelectorAll('.filters .checkbox:checked').length == 0 ? log('----') : CreateProductCard(productsData.products);
      //   document.querySelectorAll('.container-item').forEach((elem, i) => {
      //     elem.classList.remove('inactive')
      //     document.querySelectorAll('.quantity span')[i].innerHTML = `${(document.querySelectorAll('.filters .checkbox')[i] as HTMLInputElement).dataset.count}`;
      //   });
      // }

    }

    // if (e.target.closest('.brand-container')) {
    //   let checkboxCategory: (string | undefined)[] = [];
    //   (document.querySelectorAll('.brand-container .checkbox:checked') as NodeListOf<HTMLInputElement>).forEach(elem => {
    //     checkboxCategory.push(elem.dataset.brand);
    //   });

    //   let result = (productsData.products as Array<productsDataI>).filter(item => checkboxCategory.includes(item.brand));

    //   result.length !== 0 ? CreateProductCard(result) : CreateProductCard(productsData.products);
    // }
  }


  document.querySelector('.filters')?.addEventListener('click', (e) => {
    filtering(e);
  })
  // let checkboxBrand
  // checked
  // (checkboxCategory[0] as HTMLElement).dataset.category
}
