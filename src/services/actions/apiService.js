import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const articleApi = createApi({
    reducerPath: "articleApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://news-proxy.netlify.app/" }),
    endpoints: (builder) => ({
        getAllArticles: builder.query({
            query: () => "api/top-headlines?country=us&apiKey=3a20a74863744e82b8f78a52f3760908"
        })
    })
})

export const { useGetAllArticlesQuery } = articleApi;