import { itemInBasket } from '../../index'
export function addLocalStorage () {
  localStorage.setItem('storage', JSON.stringify(itemInBasket)) // сериализуем и записываем в локалстораж
}

export function getLocalStorage () {
  console.log('json', JSON.parse(localStorage.getItem('storage')))
  return JSON.parse(localStorage.getItem('storage')) // достаем из локала и парсим обратно
}
