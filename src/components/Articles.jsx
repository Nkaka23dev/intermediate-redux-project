import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllArticlesQuery } from "../services/actions/apiService";
import {
  setFilteredArticles,
  setOnPageArticles,
} from "../services/actions/store";
import Article from "./Article";
import PageLoading from "./PageLoading";
import Publishers from "./Publishers";

export default function Articles() {
  const { data, error, isLoading } = useGetAllArticlesQuery();

  const dispatch = useDispatch();
  const searched = useSelector((state) => state.articles.searched);
  const onPageArticles = useSelector((state) => state.articles.onPageArticles);
  const filteredArticles = useSelector(
    (state) => state.articles.filteredArticles
  );

  useEffect(() => {
    if (data) {
      if (searched) {
        const response = data.articles?.filter((article) =>
          article.title?.toLowerCase().includes(searched.toLowerCase())
        );
        dispatch(setFilteredArticles(response.slice(0, 10)));
      }
      const articles = data.articles.slice(0, 10);

      dispatch(setOnPageArticles(articles));

      const neres = data.articles.filter(
        (article) => article.source.name === "Frandroid"
      );
      // console.log(neres);
    }
  }, [data, dispatch, searched]);

  return (
    <section className="max-w-6xl mx-auto mt-40 pb-10">
      {error && (
        <h1 className="text-2xl text-red-600">Error occured, Fetch failed</h1>
      )}
      {isLoading && <PageLoading />}
      {data && (
        <>
          <Article
            title={"All Articles"}
            articles={searched ? filteredArticles : onPageArticles}
          />
          <Publishers />
        </>
      )}
    </section>
  );
}
