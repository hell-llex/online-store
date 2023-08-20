import { itemInBasket } from '../../index';
import { IProduct } from '../types';
import { currentPage, limitItemsBasket } from './renderCardsInBasket';

// Function to add the current basket state to local storage
// Функция для сохранения текущего состояния корзины в локальное хранилище
export function addLocalStorageBasket(): void {
  localStorage.setItem('storage', JSON.stringify(itemInBasket));
}

// Function to retrieve the basket state from local storage
// Функция для получения состояния корзины из локального хранилища
export function getLocalStorageBasket(): IProduct[] | void {
  if (localStorage.storage) {
    return JSON.parse(localStorage.storage) as IProduct[];
  } else {
    console.error('Not found Array Basket');
  }
}

// Function to add the current page number to local storage
// Функция для сохранения текущего номера страницы в локальное хранилище
export function addLocalStoragePage(): void {
  localStorage.setItem('page', JSON.stringify(currentPage));
}

// Function to retrieve the current page number from local storage
// Функция для получения текущего номера страницы из локального хранилища
export function getLocalStoragePage(): number {
  const page = localStorage.getItem('page');
  const parsedPage = +JSON.parse(page ?? '1');
  if (!parsedPage) {
    throw new Error('Invalid page number');
  }
  return parsedPage;
}

// Function to add the current limit of items per page to local storage
// Функция для сохранения текущего лимита элементов на странице в локальное хранилище
export function addLocalStorageLimitItems(): void {
  localStorage.setItem('limit', JSON.stringify(limitItemsBasket));
}

// Function to retrieve the current limit of items per page from local storage
// Функция для получения текущего лимита элементов на странице из локального хранилища
export function getLocalStorageLimitItems(): number {
  const limit = localStorage.getItem('limit');
  const parsedLimit = +JSON.parse(limit ?? '4');
  if (!parsedLimit) {
    throw new Error('Invalid limit number');
  }
  return parsedLimit;
}

// Function to manage the URL in local storage
// Функция для управления URL в локальном хранилище
export function localStorageUrl(trigger: string): void | string {
  if (trigger === 'set') {
    localStorage.setItem(
      'url',
      JSON.stringify(window.location.href.toString()),
    );
  }
  if (trigger === 'get') {
    let url = '' as string;
    if (localStorage.url) {
      url = JSON.parse(localStorage.url) as string;
    } else {
      url = window.location.href.toString();
    }
    return url;
  }
}
