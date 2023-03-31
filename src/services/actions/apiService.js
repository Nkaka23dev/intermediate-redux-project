import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const articleApi = createApi({
    reducerPath: "articleApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://news-proxy.netlify.app/api/" }),
    endpoints: (builder) => ({
        getAllArticles: builder.query({
            query: () => "top-headlines?country=us&apiKey=3a20a74863744e82b8f78a52f3760908"
        }),
        getPublishers: builder.query({
            query: () => "top-headlines/sources?apiKey=3a20a74863744e82b8f78a52f3760908"
        }),
        getPublisherArticals: builder.query({
            query: (publisher) => `everything?sources=${publisher}&apiKey=3a20a74863744e82b8f78a52f3760908`
        })
    })
})

export const {
    useGetAllArticlesQuery,
    useGetPublishersQuery,
    useGetPublisherArticalsQuery } = articleApi;