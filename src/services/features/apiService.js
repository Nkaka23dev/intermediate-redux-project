import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const { VITE_API_KEY, VITE_API_URL } = import.meta.env;

export const articleApi = createApi({
    reducerPath: "articleApi",
    baseQuery: fetchBaseQuery({
        baseUrl: VITE_API_URL,
    }),
    endpoints: (builder) => ({
        getAllArticles: builder.query({
            query: () => `top-headlines?country=us&pageSize=10&apiKey=${VITE_API_KEY}`
        }),
        getPublishers: builder.query({
            query: () => `top-headlines/sources?apiKey=${VITE_API_KEY}`
        }),
        getPublisherArticals: builder.query({
            query: (publisher) => {
                if (publisher) {
                    return `everything?sources=${publisher}&pageSize=10&apiKey=${VITE_API_KEY}`;
                }
            },
        }),
        getSearchedArticles: builder.query({
            query: (searched) => {
                if (searched) {
                    return `everything?q=${searched}&pageSize=10&apiKey=${VITE_API_KEY}`;
                }
            },
        })
    })
})

export const {
    useGetAllArticlesQuery,
    useGetPublishersQuery,
    useGetPublisherArticalsQuery,
    useGetSearchedArticlesQuery
} = articleApi;