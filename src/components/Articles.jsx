import React from "react";
import { useGetAllArticlesQuery } from "../services/actions/apiService";
import Article from "./Article";

export default function Articles() {
  const { data, error, isLoading } = useGetAllArticlesQuery();
  let onPageArticles = [];
  data ? (onPageArticles = data.articles.slice(0, 10)) : [];
  return (
    <section className="max-w-6xl mx-auto mt-40 pb-10">
      {error && (
        <h1 className="text-2xl text-red-600">Error occured, Fetch failed</h1>
      )}
      {isLoading && <div className="loading-circle"></div>}
      {data && <Article articles={onPageArticles} />}
    </section>
  );
}
