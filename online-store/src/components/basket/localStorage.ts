import { itemInBasket } from '../../index';
import { IProduct } from '../types';
import { currentPage, limitItemsBasket } from './renderCardsInBasket';
export function addLocalStorageBasket(): void {
  localStorage.setItem('storage', JSON.stringify(itemInBasket));
}

export function getLocalStorageBasket(): IProduct[] | void {
  if (localStorage.storage) {
    return JSON.parse(localStorage.storage) as IProduct[];
  } else {
    console.error('Not found Array Basket');
  }
}

export function addLocalStoragePage(): void {
  localStorage.setItem('page', JSON.stringify(currentPage));
}

export function getLocalStoragePage(): number {
  const page = localStorage.getItem('page');
  const parsedPage = +JSON.parse(page ?? '1');
  if (!parsedPage) {
    throw new Error('Invalid page number');
  }
  return parsedPage;
}
export function addLocalStorageLimitItems(): void {
  localStorage.setItem('limit', JSON.stringify(limitItemsBasket));
}
export function getLocalStorageLimitItems(): number {
  const limit = localStorage.getItem('limit');
  const parsedLimit = +JSON.parse(limit ?? '4');
  if (!parsedLimit) {
    throw new Error('Invalid limit number');
  }
  return parsedLimit;
}

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
