import { IProduct } from '../types';
import { productsData, CreateProductCard } from '../cards/cards';
import { resultData } from '../filter/filter';
import { searchResult } from '../search/search';
import { searchParams } from '../routing/routing';

// Function to sort product cards based on selected sorting option
// Функция для сортировки карточек продуктов на основе выбранного способа сортировки
export function SortProductCard(trigger: string, arraySort?: IProduct[]) {
  // 'now' for immediate execution after filtering
  // 'now' для выполнения сразу после фильтрации
  const sortArray = document.querySelectorAll(
    '.sort-input',
  ) as NodeListOf<HTMLSelectElement>;
  let sortArrproducts: Array<IProduct> = [];

  // Function to update sorting and product array
  // Функция для обновления сортировки и массива продуктов
  function update() {
    const sortNone =
      getComputedStyle(sortArray[0]).display === 'none'
        ? sortArray[0]
        : sortArray[1];
    const sort =
      getComputedStyle(sortArray[0]).display === 'none'
        ? sortArray[1]
        : sortArray[0];
    sortNone.value = sort.value;
    // Copying the retrieved data array
    // копирование полченного массива данных
    sortArrproducts = productsData.products.slice();

    // Get the value of the selected sorting
    // Получение значения выбранной сортировки
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

    // Applying sorting based on the selected option
    // Применение сортировки на основе выбранной опции
    if (sort.value === 'rating-highest') {
      searchParams('set', 'sort', 'rating-highest');
      sortArrproducts.sort((a, b) => b.rating - a.rating);
    }
    if (sort.value === 'rating-lowest') {
      searchParams('set', 'sort', 'rating-lowest');
      sortArrproducts.sort((a, b) => a.rating - b.rating);
    }
    if (sort.value === 'price-highest') {
      searchParams('set', 'sort', 'price-highest');
      sortArrproducts.sort((a, b) => b.price - a.price);
    }
    if (sort.value === 'price-lowest') {
      searchParams('set', 'sort', 'price-lowest');
      sortArrproducts.sort((a, b) => a.price - b.price);
    }

    // Display sorted product cards
    // Отображение отсортированных карточек продуктов
    if (
      (document.querySelector('.found') as HTMLElement).dataset.found !== '0'
    ) {
      CreateProductCard(sortArrproducts); // вызов функции создания карточек
    }
  }

  // Attach event listeners for sorting changes (if trigger is not 'now')
  // Прикрепление слушателей событий для изменения сортировки (если триггер не 'now')
  if (trigger !== 'now')
    sortArray.forEach((elem) => elem?.addEventListener('change', update));

  // Execute the update function if trigger is 'now'
  // Выполнение функции обновления, если триггер равен 'now'
  if (trigger === 'now') {
    update();
    return sortArrproducts;
  }
}
