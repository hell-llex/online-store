export interface IProduct {
  // интерфейс для объекта с карточками
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

export interface IProductsData {
  limit: number;
  products: IProduct[];
  skip: number;
  total: number;
}

export interface ISliderSelector<T> {
  min: T;
  max: T;
}

export interface IFilterSelector {
  arrFilter: string[];
  countFilter: number[];
}

export enum basketButton {
  plus = 'plus',
  minus = 'minus',
  del = 'del',
  plusPage = 'plusPage',
  minusPage = 'minusPage',
}
