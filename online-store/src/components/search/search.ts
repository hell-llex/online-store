import { productsArrayI } from '../types';
import { productsData, CreateProductCard } from '../cards/cards';
import { resultData } from '../filter/filter';
import { SortProductCard } from '../sort/sort';

const log = console.log;

export let searchResult: Array<productsArrayI> = [];

export function searchProductCard(trigger: string): void {
  const search = document.querySelector('.search') as HTMLInputElement;
  let productFilter: productsArrayI[] = [];

  let changeInput = search.value;

  function update() {
    if (resultData.length === 0) productFilter = productsData.products.slice();
    else productFilter = resultData.slice(); // копирование полченного массива данных

    if (
      document.querySelectorAll('.category-container .checkbox:checked')
        .length === 0 &&
      document.querySelectorAll('.brand-container .checkbox:checked').length ===
        0
    ) {
      productFilter = productsData.products.slice();
    }

    if (search.value < changeInput) {
      log('меньше');
      // changeFilter('now')
      // productFilter = resultData.slice();
    }
    if (search.value > changeInput) {
      log('больше');
    }

    changeInput = search.value;

    const value = `${search.value.trim().toLowerCase()}`;

    let searchArrProducts: Array<productsArrayI> = productFilter.filter(
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

    searchResult = searchArrProducts.slice();

    searchArrProducts = SortProductCard('now', searchArrProducts)!;

    searchArrProducts.length === 0
      ? CreateProductCard('not-found')
      : CreateProductCard(searchArrProducts);
  }

  if (trigger === 'now') update();

  search?.addEventListener('input', update);
}
