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

export interface ISliderSelector {
  min: number;
  max: number;
}

export interface IFilterSelector {
  arrFilter: string[];
  countFilter: number[];
}
