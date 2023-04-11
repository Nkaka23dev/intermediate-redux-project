import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Article from "../components/Article";
import { useGetPublisherArticalsQuery, useGetSearchedArticlesQuery } from "../services/actions/apiService";
import ErrorAndLoading from "../components/ErrorAndLoading";
import { useSelector } from "react-redux";
export default function PubDetails() {
  const { id } = useParams();
  console.log(id);
  const { data, error, isLoading } = useGetPublisherArticalsQuery(id);
  const [searchResult, setSearchResult] = useState(null);
  const searched = useSelector((state) => state.articles.searched);

  let {
    data: searchData,
    error: searchError,
    isLoading: searchLoading,
  } = useGetSearchedArticlesQuery(searched);
  useEffect(() => {
    if (searchData) {
      setSearchResult(searchData);
    }
  }, [searchData]);

  const resetData = () => {
    setSearchResult(null);
  };

  const title = (
    <p>
      All articles of <span className="text-red-500">{id}</span>
    </p>
  );
  return (
    <>
      <section className="max-w-6xl mx-auto mt-20 pb-10">
        <ErrorAndLoading
          error={error}
          isLoading={searchLoading ? searchLoading : isLoading}
        />
        {searchResult
          ? searchResult && (
              <div>
                <Article
                  resetData={resetData}
                  title="Search Results"
                  articles={searchResult?.articles}
                />
              </div>
            )
          : data && (
              <>{data && <Article title={title} articles={data.articles} />}</>
            )}
      </section>
    </>
  );
}
