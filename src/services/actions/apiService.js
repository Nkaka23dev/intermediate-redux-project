import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const apiKey = import.meta.env.VITE_API_KEY;

export const articleApi = createApi({
    reducerPath: "articleApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://news-proxy.netlify.app/api/" }),
    endpoints: (builder) => ({
        getAllArticles: builder.query({
            query: () => `top-headlines?country=us&apiKey=${apiKey}`
        }),
        getPublishers: builder.query({
            query: () => `top-headlines/sources?apiKey=${apiKey}`
        }),
        getPublisherArticals: builder.query({
            query: (publisher) => `everything?sources=${publisher}&apiKey=${apiKey}`
        })
    })
})

export const {
    useGetAllArticlesQuery,
    useGetPublishersQuery,
    useGetPublisherArticalsQuery } = articleApi;