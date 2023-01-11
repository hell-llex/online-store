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

export function addLocalStoragePage() {
  localStorage.setItem('page', JSON.stringify(currentPage)); // сериализуем и записываем в локалстораж
}

export function getLocalStoragePage() {
  const page = localStorage.getItem('page');
  return JSON.parse(page ?? '1'); // достаем из локала и парсим обратно
}
