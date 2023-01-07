/* eslint-disable @typescript-eslint/no-unsafe-return */
import { itemInBasket } from '../../index';
import { currentPage } from './renderCardsInBasket';
export function addLocalStorageBasket() {
  localStorage.setItem('storage', JSON.stringify(itemInBasket)); // сериализуем и записываем в локалстораж
}

export function getLocalStorageBasket() {
  const storage = localStorage.getItem('storage');
  return JSON.parse(storage ?? ''); // достаем из локала и парсим обратно
}

export function addLocalStoragePage() {
  localStorage.setItem('page', JSON.stringify(currentPage)); // сериализуем и записываем в локалстораж
}

export function getLocalStoragePage() {
  const page = localStorage.getItem('page');
  return JSON.parse(page ?? '1'); // достаем из локала и парсим обратно
}
