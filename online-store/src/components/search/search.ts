import { IProduct } from '../types';
import { productsData, CreateProductCard } from '../cards/cards';
import { countView, resultData } from '../filter/filter';
import { SortProductCard } from '../sort/sort';
import { searchParams } from '../routing/routing';

// Array to store search results
// Массив для хранения результатов поиска
export let searchResult: Array<IProduct> = [];

// Function to perform product search
// Функция для выполнения поиска продуктов
export function searchProductCard(trigger: string, arraySearch?: IProduct[]) {
  // Create a copy of the products array for searching
  // Создание копии массива продуктов для поиска
  let searchArrProducts: IProduct[] = productsData.products.slice();

  // Function to update search results
  // Функция для обновления результатов поиска
  function updateSearch() {
    // Get DOM elements for various containers
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

    // Update the products array if any filters are active
    // Обновление массива продуктов, если активны какие-либо фильтры
    if (
      JSON.parse(categoryContainer.dataset.active!) ||
      JSON.parse(brandContainer.dataset.active!) ||
      JSON.parse(stockContainer.dataset.active!) ||
      JSON.parse(priceContainer.dataset.active!)
    ) {
      searchArrProducts = resultData.slice();
    }

    // Update the products array when the trigger is 'now'
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

    // Get the search query value
    // Получение значения поискового запроса
    const value = `${search.value.trim().toLowerCase()}`;

    // Properties of a product to search within
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

    // Filter the products array based on the search query
    // Фильтрация массива продуктов по заданному поисковому запросу
    searchArrProducts = searchArrProducts.filter((item) => {
      return searchProperties.some((prop) => {
        const propValue = String(item[prop as keyof IProduct])
          .trim()
          .toLowerCase();
        return propValue.includes(value);
      });
    });

    // Update search parameters in the URL
    // Обновление параметров поиска в URL
    if (value.length !== 0) {
      searchParams('set', 'search', value);
    } else {
      searchParams('del', 'search');
    }

    // Update the search result
    // Обновление результата поиска
    searchResult = searchArrProducts.slice();

    // Sort the search results
    // Сортировка результатов поиска
    searchArrProducts = SortProductCard('now', searchArrProducts)!;

    // Create product cards or display "not found" message
    // Создание карточек продуктов или вывод сообщения "не найдено"
    if (trigger !== 'now') {
      searchArrProducts.length === 0
        ? CreateProductCard('not-found')
        : CreateProductCard(searchArrProducts);
      // Update the product count view
      // Обновление отображения количества продуктов
      countView(searchArrProducts);
    }
    if (trigger === 'now') return searchArrProducts;
  }

  // Add input event listener to the search input field
  // Добавление слушателя события ввода для поисковой строки
  if (trigger !== 'now')
    (document.querySelector('.search') as HTMLInputElement).addEventListener(
      'input',
      updateSearch,
    );

  // Call the update function when the trigger is 'now'
  // Вызов функции обновления при триггере 'now'
  if (trigger === 'now') {
    return updateSearch();
  }
}
