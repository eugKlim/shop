import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API_URL } from '../shared/config/baseUrl';

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
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query<IProductsResponse, void>({
      query: () => 'products',
      providesTags: ['Products'],
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
