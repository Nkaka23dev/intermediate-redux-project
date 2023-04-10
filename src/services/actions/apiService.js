import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const { VITE_API_KEY, VITE_API_URL } = import.meta.env;

export const articleApi = createApi({
    reducerPath: "articleApi",
    baseQuery: fetchBaseQuery({
        baseUrl: VITE_API_URL,
        headers: {
            "X-Api-Key": VITE_API_KEY,
        },
    }),
    endpoints: (builder) => ({
        getAllArticles: builder.query({
            query: () => `top-headlines?country=us&pageSize=10`
        }),
        getPublishers: builder.query({
            query: () => `top-headlines/sources`
        }),
        getPublisherArticals: builder.query({
            query: (publisher) => {
                `everything?sources=${publisher}&pageSize=10`;
            },
        }),
        getSearchedArticles: builder.query({
            query: (searched) => {
                if (searched) {
                    return `everything?q=${searched}&pageSize=10`;
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