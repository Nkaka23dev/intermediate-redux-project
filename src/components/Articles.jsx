import { useGetAllArticlesQuery } from "../services/actions/apiService";
import Article from "./Article";
import Publishers from "./Publishers";
import ErrorAndLoading from "./ErrorAndLoading";
import { useSelector } from "react-redux";



export default function Articles() {
  const { data, error, isLoading } = useGetAllArticlesQuery();
  const searched = useSelector((state) => state.articles.searched);
  return (
    <>
      <section className="max-w-7xl mx-auto lg:mt-20 mt-40 pb-10">
        <ErrorAndLoading error={error} isLoading={isLoading} />
        {data && (
          <div>
            <Article
              title={"All Articles"}
              articles={data.articles}
            />
            <Publishers />
          </div>
        )}
      </section>
      
    </>
  );
}
