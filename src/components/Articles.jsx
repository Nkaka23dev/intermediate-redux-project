import {
  useGetAllArticlesQuery,
  useGetSearchedArticlesQuery,
} from "../services/actions/apiService";
import Article from "./Article";
import Publishers from "./Publishers";
import ErrorAndLoading from "./ErrorAndLoading";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Articles() {
  const { data, error, isLoading } = useGetAllArticlesQuery();
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
  return (
    <>
      <section className="max-w-7xl mx-auto lg:mt-20 mt-24 pb-10">
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
                <Publishers />
              </div>
            )
          : data && (
              <div>
                <Article
                  resetData={resetData}
                  title="All Articles"
                  articles={data?.articles}
                />
                <Publishers />
              </div>
            )}
      </section>
    </>
  );
}
