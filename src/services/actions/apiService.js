import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const articleApi = createApi({
    reducerPath: "articleApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://newsapi.org/"}),
    endpoints: (builder) => ({
        getAllArticles: builder.query({
            query: () => "v2/everything?q=tesla&from=2023-02-19&sortBy=publishedAt&apiKey=3a20a74863744e82b8f78a52f3760908"
        })
    })
})

export const { useGetAllArticlesQuery } = articleApi;