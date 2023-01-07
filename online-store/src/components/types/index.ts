export interface productsArrayI {
  // интерфейс для объекта с карточками
  id: number;
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

export interface productsDataI {
  limit: number;
  products: productsArrayI[];
  skip: number;
  total: number;
}

export interface sliderSelector {
  min: number;
  max: number;
}

export interface filterSelector {
  arrFilter: string[];
  countFilter: number[];
}
