import {
  useGetAllArticlesQuery,
  useGetSearchedArticlesQuery,
} from "../services/actions/apiService";
import Article from "./Article";
import Publishers from "./Publishers";
import ErrorAndLoading from "./ErrorAndLoading";
import { useSelector } from "react-redux";
import { useState } from "react";

useGetSearchedArticlesQuery;

export default function Articles() {
  const { data, error, isLoading } = useGetAllArticlesQuery();
  const [searchedData, SetSearchedData] = useState(null);
  const searched = useSelector((state) => state.articles.searched);
  const {
    data: searchData,
    error: searchError,
    isLoading: searchloading,
  } = useGetSearchedArticlesQuery(searched);
  if (searchData) {
    SetSearchedData(searchData.articles);
  }
  return (
    <>
      <section className="max-w-7xl mx-auto lg:mt-20 mt-24 pb-10">
        <ErrorAndLoading error={error} isLoading={isLoading} />
        {data && (
          <div>
            <Article
              title={searchedData ? "Results" : "All Articles"}
              articles={searchedData ? searchedData : data.articles}
            />
            <Publishers />
          </div>
        )}
      </section>
    </>
  );
}
