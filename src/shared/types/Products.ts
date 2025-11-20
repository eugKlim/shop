export interface IFilter {
  q: string;
  minPrice: string;
  maxPrice: string;
  brand: string;
  deviceType: string;
  skip: number;
  limit: number;
}

export interface IProduct {
  _id: string;
  title: string;
  description: string;
  images: string[];
  brand: string;
  deviceType: string;
  stock: string;
  createdAt: string;
  price: number;
}

export interface IProductsResponse {
  items: IProduct[];
  total: number;
}

export interface IFilterItem {
  count: number;
  key: string;
}
