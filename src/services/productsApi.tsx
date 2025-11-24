import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API_URL } from '../config/baseUrl';
import type { IProduct } from '../types/Products';

export interface IProductsQuery {
  q?: string;
  minPrice?: string;
  maxPrice?: string;
  brand?: string;
  deviceType?: string;
  skip?: number;
  limit?: number;
}

export interface IProductsResponse {
  items: IProduct[];
  total: number;
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  tagTypes: ['Products'],

  endpoints: (builder) => ({
    getProducts: builder.query<IProductsResponse, IProductsQuery | void>({
      query: (params = {}) => {
        if (!params) {
          return '/products';
        }
        const searchParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== '') {
            searchParams.append(key, String(value));
          }
        });
        const queryString = searchParams.toString();
        return queryString ? `/products?${queryString}` : '/products';
      },
      providesTags: ['Products'],
    }),

    getFacets: builder.query({
      query: (params = {}) => {
        if (!params) {
          return '/products/facets/all';
        }
        const searchParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== '') {
            searchParams.append(key, String(value));
          }
        });
        const queryString = searchParams.toString();
        return queryString
          ? `/products/facets/all?${queryString}`
          : '/products/facets/all';
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetFacetsQuery } = productsApi;
