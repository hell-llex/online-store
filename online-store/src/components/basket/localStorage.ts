/* eslint-disable @typescript-eslint/no-unsafe-return */
import { itemInBasket } from '../../index';
import { productsArrayI } from '../types';
import { currentPage } from './renderCardsInBasket';
export function addLocalStorageBasket(): void {
  localStorage.setItem('storage', JSON.stringify(itemInBasket)); // сериализуем и записываем в локалстораж
}

export function getLocalStorageBasket(): productsArrayI[] {
  const storage = localStorage.getItem('storage');
  return JSON.parse(storage ?? '[]') as productsArrayI[]; // достаем из локала и парсим обратно
}

export function addLocalStoragePage() {
  localStorage.setItem('page', JSON.stringify(currentPage)); // сериализуем и записываем в локалстораж
}

export function getLocalStoragePage() {
  const page = localStorage.getItem('page');
  return JSON.parse(page ?? '1'); // достаем из локала и парсим обратно
}
