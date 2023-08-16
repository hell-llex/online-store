import { IProduct } from '../types';
import { productsData, CreateProductCard } from '../cards/cards';
import { countView, resultData } from '../filter/filter';
import { SortProductCard } from '../sort/sort';
import { searchParams } from '../routing/routing';

// Массив для хранения результатов поиска
export let searchResult: Array<IProduct> = [];

// Функция для выполнения поиска продуктов
export function searchProductCard(trigger: string, arraySearch?: IProduct[]) {
  // Создание копии массива продуктов для поиска
  let searchArrProducts: IProduct[] = productsData.products.slice();

  // Функция для обновления результатов поиска
  function updateSearch() {
    // Получение элементов DOM для различных контейнеров
    const search = document.querySelector('.search') as HTMLInputElement;
    const categoryContainer = document.querySelector(
      '.category-container',
    ) as HTMLElement;
    const brandContainer = document.querySelector(
      '.brand-container',
    ) as HTMLElement;
    const stockContainer = document.querySelector(
      '.stock-container',
    ) as HTMLElement;
    const priceContainer = document.querySelector(
      '.price-container',
    ) as HTMLElement;

    // Обновление массива продуктов, если активны какие-либо фильтры
    if (
      JSON.parse(categoryContainer.dataset.active!) ||
      JSON.parse(brandContainer.dataset.active!) ||
      JSON.parse(stockContainer.dataset.active!) ||
      JSON.parse(priceContainer.dataset.active!)
    ) {
      searchArrProducts = resultData.slice();
    }

    // Обновление массива продуктов при срабатывании триггера 'now'
    if (trigger === 'now' && arraySearch) {
      searchArrProducts = arraySearch!.slice();
    } else if (
      JSON.parse(categoryContainer.dataset.active!) &&
      JSON.parse(brandContainer.dataset.active!) &&
      JSON.parse(stockContainer.dataset.active!) &&
      JSON.parse(priceContainer.dataset.active!)
    ) {
      searchArrProducts = productsData.products.slice();
    } else if (
      resultData.length !== 0 &&
      (document.querySelector('.found') as HTMLElement).dataset.found !== '0'
    ) {
      searchArrProducts = resultData.slice();
    }

    // Получение значения поискового запроса
    const value = `${search.value.trim().toLowerCase()}`;

    // Свойства продукта, по которым будет выполняться поиск
    const searchProperties = [
      'id',
      'count',
      'title',
      'description',
      'price',
      'discountPercentage',
      'rating',
      'stock',
      'brand',
      'category',
    ];

    // Фильтрация массива продуктов по заданному поисковому запросу
    searchArrProducts = searchArrProducts.filter((item) => {
      return searchProperties.some((prop) => {
        const propValue = String(item[prop as keyof IProduct])
          .trim()
          .toLowerCase();
        return propValue.includes(value);
      });
    });

    // Обновление параметров поиска в URL
    if (value.length !== 0) {
      searchParams('set', 'search', value);
    } else {
      searchParams('del', 'search');
    }

    // Обновление результата поиска
    searchResult = searchArrProducts.slice();

    // Сортировка результатов поиска
    searchArrProducts = SortProductCard('now', searchArrProducts)!;

    // Создание карточек продуктов или информации о неудачном поиске
    if (trigger !== 'now') {
      searchArrProducts.length === 0
        ? CreateProductCard('not-found')
        : CreateProductCard(searchArrProducts);
      countView(searchArrProducts);
    }
    if (trigger === 'now') return searchArrProducts;
  }

  // Добавление слушателя события ввода для поисковой строки
  if (trigger !== 'now')
    (document.querySelector('.search') as HTMLInputElement).addEventListener(
      'input',
      updateSearch,
    );

  // Вызов функции обновления при триггере 'now'
  if (trigger === 'now') {
    return updateSearch();
  }
}
