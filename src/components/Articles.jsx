import {
  useGetAllArticlesQuery,
  useGetSearchedArticlesQuery,
} from "../services/features/apiService";
import Article from "./Article";
import Publishers from "./Publishers";
import ErrorAndLoading from "./ErrorAndLoading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setSearchResult } from "../services/features/store";

export default function Articles() {
  const { data, error, isLoading } = useGetAllArticlesQuery();
  const searched = useSelector((state) => state.articles.searched);
  const searchResult = useSelector((state) => state.articles.searchResult);

  const {
    data: searchData,
    error: searchError,
    isLoading: searchLoading,
  } = useGetSearchedArticlesQuery(searched);

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchData?.articles) {
      dispatch(setSearchResult(searchData.articles));
    }
  }, [searchData?.articles]);
  return (
    <section>
      <div className="max-w-7xl mx-auto lg:mt-20 mt-24 pb-10">
        <ErrorAndLoading error={error} isLoading={searchLoading || isLoading} />
        {searchResult
          ? searchResult && (
              <div>
                <Article title="Search Results" articles={searchResult} />
                <Publishers />
              </div>
            )
          : data && (
              <div>
                <Article title="All Articles" articles={data?.articles} />
                <Publishers />
              </div>
            )}
      </div>
    </section>
  );
}
