/* eslint-disable @typescript-eslint/no-unsafe-return */
import { itemInBasket } from '../../index';
import { productsArrayI } from '../types';
import { currentPage } from './renderCardsInBasket';
export function addLocalStorageBasket(): void {
  localStorage.setItem('storage', JSON.stringify(itemInBasket)); // сериализуем и записываем в локалстораж
}

export function getLocalStorageBasket(): productsArrayI[] | void {
  if (localStorage.storage) {
    return JSON.parse(localStorage.storage) as productsArrayI[];
  } else {
    console.error('Not found Array Basket');
  }
}

export function addLocalStoragePage(): void {
  localStorage.setItem('page', JSON.stringify(currentPage)); // сериализуем и записываем в локалстораж
}

export function getLocalStoragePage() {
  const page = localStorage.getItem('page');
  return JSON.parse(page ?? '1'); // достаем из локала и парсим обратно
}

export function localStorageUrl(trigger: string): void | string {
  if (trigger === 'set') {
    localStorage.setItem(
      'url',
      JSON.stringify(window.location.href.toString())
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
