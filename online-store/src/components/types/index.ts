// Interface for product data
// Интерфейс для данных о продукте
export interface IProduct {
  id: number;
  count: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

// Interface for products data structure
// Интерфейс для структуры данных о продуктах
export interface IProductsData {
  limit: number;
  products: IProduct[];
  skip: number;
  total: number;
}

// Interface for slider selectors
// Интерфейс для выбора значений слайдера
export interface ISliderSelector<T> {
  min: T;
  max: T;
}

// Interface for filter selectors
// Интерфейс для выбора фильтров
export interface IFilterSelector {
  arrFilter: string[];
  countFilter: number[];
}

// Enum for basket button actions
// Перечисление действий с кнопками корзины
export enum basketButton {
  plus = 'plus',
  minus = 'minus',
  del = 'del',
  increment = 'increment',
  decrement = 'decrement',
}
