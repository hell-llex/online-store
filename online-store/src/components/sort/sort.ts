import { productsDataI } from '../types';
import { productsData, CreateProductCard } from '../cards/cards'

const log = (e: any) => console.log(`${e} ==>`, e)

export function SortProductCard(): void {
  const sort = document.querySelector('.sort-input') as HTMLInputElement
  sort?.addEventListener('change', () => {
    let sortArrproducts: Array<productsDataI> = productsData.products.slice(); // копирование полченного массива данных
    if (sort.value === 'rating-highest') sortArrproducts.sort((a, b) => b.rating - a.rating) // проверка на значение сортировки
    if (sort.value === 'rating-lowest') sortArrproducts.sort((a, b) => a.rating - b.rating) // проверка на значение сортировки
    if (sort.value === 'price-highest') sortArrproducts.sort((a, b) => b.price - a.price) // проверка на значение сортировки
    if (sort.value === 'price-lowest') sortArrproducts.sort((a, b) => a.price - b.price) // проверка на значение сортировки
    CreateProductCard(sortArrproducts) // вызов функции создания карточек
  })
}
