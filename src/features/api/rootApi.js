import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const rootApi = createApi({

    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    tagTypes: [''],
    endpoints: (builder) => ({})

})
