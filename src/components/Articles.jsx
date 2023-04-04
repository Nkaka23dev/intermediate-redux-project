import {
  useGetAllArticlesQuery,
  useGetSearchedArticlesQuery,
} from "../services/actions/apiService";
import Article from "./Article";
import Publishers from "./Publishers";
import ErrorAndLoading from "./ErrorAndLoading";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Articles() {
  const { data, error, isLoading } = useGetAllArticlesQuery();
  const [searchValue, setSearchValue] = useState("");
  const searched = useSelector((state) => state.articles.searched);
  const { data: searchedData, isLoading: Searchloading } =
    useGetSearchedArticlesQuery(searched);

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const handleResetSearch = () => {
    setSearchValue("");
  };
  return (
    <section className="max-w-6xl mx-auto mt-40 pb-10">
      <ErrorAndLoading
        error={error}
        isLoading={Searchloading ? Searchloading : isLoading}
      />
      {data && (
        <div>
          <Article
            title={"All Articles"}
            articles={searchedData ? searchedData.articles : data.articles}
          />
          <Publishers />
        </div>
      )}
    </section>
  );
}
