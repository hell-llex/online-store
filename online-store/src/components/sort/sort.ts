import { IProduct } from '../types';
import { productsData, CreateProductCard } from '../cards/cards';
import { resultData } from '../filter/filter';
import { searchResult } from '../search/search';
import { searchParams } from '../routing/routing';

export function SortProductCard(trigger: string, arraySort?: IProduct[]) {
  // 'now' для выпослнения сразу после фильтрации

  const sort = document.querySelector('.sort-input') as HTMLInputElement;
  let sortArrproducts: Array<IProduct> = [];

  function update() {
    sortArrproducts = productsData.products.slice(); // копирование полченного массива данных
    if (trigger === 'now') {
      sortArrproducts = arraySort!.slice();
    } else if (
      resultData.length === 0 &&
      searchResult.length === 0 &&
      (document.querySelector('.found') as HTMLElement).dataset.found === '0'
    ) {
      sortArrproducts = productsData.products.slice();
    } else if (
      resultData.length !== 0 &&
      (document.querySelector('.found') as HTMLElement).dataset.found !== '0'
    ) {
      sortArrproducts = resultData.slice();
    } else if (
      searchResult.length !== 0 &&
      (document.querySelector('.found') as HTMLElement).dataset.found !== '0'
    ) {
      sortArrproducts = searchResult.slice();
    }

    if (sort.value === 'rating-highest') {
      searchParams('set', 'sort', 'rating-highest');
      sortArrproducts.sort((a, b) => b.rating - a.rating); // проверка на значение сортировки
    }
    if (sort.value === 'rating-lowest') {
      searchParams('set', 'sort', 'rating-lowest');
      sortArrproducts.sort((a, b) => a.rating - b.rating); // проверка на значение сортировки
    }
    if (sort.value === 'price-highest') {
      searchParams('set', 'sort', 'price-highest');
      sortArrproducts.sort((a, b) => b.price - a.price); // проверка на значение сортировки
    }
    if (sort.value === 'price-lowest') {
      searchParams('set', 'sort', 'price-lowest');
      sortArrproducts.sort((a, b) => a.price - b.price); // проверка на значение сортировки
    }

    if (
      (document.querySelector('.found') as HTMLElement).dataset.found !== '0'
    ) {
      CreateProductCard(sortArrproducts); // вызов функции создания карточек
    }
  }
  if (trigger !== 'now') sort?.addEventListener('change', update);
  if (trigger === 'now') {
    update();
    return sortArrproducts;
  }
}
