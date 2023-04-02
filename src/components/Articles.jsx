import {
  useGetAllArticlesQuery,
  useGetSearchedArticlesQuery,
} from "../services/actions/apiService";
import Article from "./Article";
import Publishers from "./Publishers";
import ErrorAndLoading from "./ErrorAndLoading";
import { useSelector } from "react-redux";

export default function Articles() {
  const { data, error, isLoading } = useGetAllArticlesQuery();
  const searched = useSelector((state) => state.articles.searched);
  const {
    data: searchedData,
    error: searchError,
    isLoading: Searchloading,
  } = useGetSearchedArticlesQuery(searched);
  return (
    <section className="max-w-6xl mx-auto mt-40 pb-10">
      <ErrorAndLoading
        error={searchError ? searchError : error}
        isLoading={Searchloading ? Searchloading : isLoading}
      />
      {data && (
        <div>
          {data && (
            <Article
              title={"All Articles"}
              articles={searchedData ? searchedData.articles : data.articles}
            />
          )}
          <Publishers />
        </div>
      )}
    </section>
  );
}
