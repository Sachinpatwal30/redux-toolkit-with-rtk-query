import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import { productsApi } from "../features/product/productApi";
import productSlice from "../features/product/productSlice"



export const store = configureStore({

    reducer:{

        [productsApi.reducerPath]: productsApi.reducer,
        products: productSlice,
        carts:cartSlice,

    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),


})