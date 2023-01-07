import { productsArrayI } from '../types';
import { productsData, CreateProductCard } from '../cards/cards';
import { resultData } from '../filter/filter';

export function SortProductCard(trigger: string): void {
  // 'now' для выпослнения сразу после фильтрации

  const sort = document.querySelector('.sort-input') as HTMLInputElement;

  function update() {
    let sortArrproducts: Array<productsArrayI> = [];

    if (
      resultData.length === 0 &&
      (document.querySelector('.found') as HTMLElement).dataset.found === '0'
    )
      sortArrproducts = productsData.products.slice();
    else sortArrproducts = resultData.slice(); // копирование полченного массива данных

    if (sort.value === 'rating-highest')
      sortArrproducts.sort((a, b) => b.rating - a.rating); // проверка на значение сортировки
    if (sort.value === 'rating-lowest')
      sortArrproducts.sort((a, b) => a.rating - b.rating); // проверка на значение сортировки
    if (sort.value === 'price-highest')
      sortArrproducts.sort((a, b) => b.price - a.price); // проверка на значение сортировки
    if (sort.value === 'price-lowest')
      sortArrproducts.sort((a, b) => a.price - b.price); // проверка на значение сортировки
    if ((document.querySelector('.found') as HTMLElement).dataset.found !== '0')
      CreateProductCard(sortArrproducts); // вызов функции создания карточек
  }

  if (trigger === 'now') update();

  sort?.addEventListener('change', update);
}
