import { productsArrayI } from '../types';
import { productsData, CreateProductCard } from '../cards/cards';
import { resultData } from '../filter/filter';
import { SortProductCard } from '../sort/sort';
import { searchParams } from '../routing/routing';

export let searchResult: Array<productsArrayI> = [];

export function searchProductCard(
  trigger: string,
  arraySearch?: productsArrayI[]
) {
  let searchArrProducts: productsArrayI[] = productsData.products.slice();

  function update() {

    const search = document.querySelector('.search') as HTMLInputElement;
    let changeInput = search.value;
    const categoryContainer = document.querySelector('.category-container') as HTMLElement; // блок слайдера stock
    const brandContainer = document.querySelector('.brand-container') as HTMLElement; // блок слайдера price
    const stockContainer = document.querySelector('.stock-container') as HTMLElement; // блок слайдера stock
    const priceContainer = document.querySelector('.price-container') as HTMLElement; // блок слайдера price

    if (categoryContainer.dataset.active === 'true' || brandContainer.dataset.active === 'true' ||
      stockContainer.dataset.active === 'true' || priceContainer.dataset.active === 'true') {
      searchArrProducts = resultData.slice();
    }
    // if (categoryContainer.dataset.active === 'false' && brandContainer.dataset.active === 'false' &&
    //   stockContainer.dataset.active === 'false' && priceContainer.dataset.active === 'false') {
    //   searchArrProducts = productsData.products.slice();
    // }

    if (trigger === 'now') {
      searchArrProducts = arraySearch!.slice();
    } else if (categoryContainer.dataset.active === 'false' && brandContainer.dataset.active === 'false' &&
    stockContainer.dataset.active === 'false' && priceContainer.dataset.active === 'false') {
      searchArrProducts = productsData.products.slice();
    } else if (
      resultData.length !== 0 &&
      (document.querySelector('.found') as HTMLElement).dataset.found !== '0'
    ) {
      searchArrProducts = resultData.slice();
    }

    // console.log(categoryContainer.dataset.active, brandContainer.dataset.active, stockContainer.dataset.active, priceContainer.dataset.active);
    // console.log('resultData :>> ', resultData);
    // console.log('productFilter:>> ', productFilter);
    // if (search.value < changeInput) { // меньше
    // }
    // if (search.value > changeInput) { // больше
    // }

    changeInput = search.value;

    const value = `${search.value.trim().toLowerCase()}`;

    searchArrProducts = searchArrProducts.filter(
      (item) => {
        return (
          ~`${item.id}`.trim().toLowerCase().indexOf(value) ||
          ~`${item.count}`.trim().toLowerCase().indexOf(value) ||
          ~item.title.trim().toLowerCase().indexOf(value) ||
          ~item.description.trim().toLowerCase().indexOf(value) ||
          ~`${item.price}`.trim().toLowerCase().indexOf(value) ||
          ~`${item.discountPercentage}`.trim().toLowerCase().indexOf(value) ||
          ~`${item.rating}`.trim().toLowerCase().indexOf(value) ||
          ~`${item.stock}`.trim().toLowerCase().indexOf(value) ||
          ~item.brand.trim().toLowerCase().indexOf(value) ||
          ~item.category.trim().toLowerCase().indexOf(value)
        );
      }
    );
    // console.log('searchArrProducts :>> ', searchArrProducts);

    if (value.length !== 0) {
      searchParams('set', 'search', value);
    } else {
      searchParams('del', 'search');
    }

    searchResult = searchArrProducts.slice();

    searchArrProducts = SortProductCard('now', searchArrProducts)!;

    if (trigger !== 'now') {
      searchArrProducts.length === 0 ? CreateProductCard('not-found') : CreateProductCard(searchArrProducts);
    }
    if (trigger === 'now') return searchArrProducts;
  }


  if (trigger !== 'now') (document.querySelector('.search') as HTMLInputElement).addEventListener('input', update);
  if (trigger === 'now') {
    return update();
    // return searchArrProducts;
  }
}
