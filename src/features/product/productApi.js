import { rootApi } from "../api/rootApi";

export const productsApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({


        fetchAllProducts: builder.query({
            query: () => "/products",
            providesTags:['Product']
        }),

        addProduct: builder.mutation({
            query: (product) => ({
                method: "POST",
                url: "/products/add",
                body: product,

            }),

            invalidatesTags:['Products']
        }),

        getProductById: builder.query({

            query:(id)=>`/products/${id}`,
            providesTags:['Product']


        })





    }),


});

export const { useFetchAllProductsQuery, useAddProductMutation, useGetProductByIdQuery } = productsApi;
