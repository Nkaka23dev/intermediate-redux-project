import { useParams } from "react-router-dom";
import { useGetAllArticlesQuery } from "../services/actions/apiService";
import ErrorAndLoading from "../components/ErrorAndLoading";

export default function ArticlesDetails() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetAllArticlesQuery();
  
  return (
    <section>
      <ErrorAndLoading error={error} isLoading={isLoading} />
      {data && (
        <section className="mt-32">
          <div className="max-w-[85rem] mx-auto grid gap-10 grid-cols-5">
            <div className="py-4 col-span-2 space-y-3 ">
              <p className="text-3xl text-gray-900 capitalize font-semibold">
                {data.articles[id]?.title}
              </p>
              <div className="flex gap-5 items-center">
                <div>
                  <p className="font-semibold text-xl">
                    <span className="text-sky-500">
                      {data.articles[id]?.source.name}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-red-500">
                    {new Date(data.articles[id]?.publishedAt).toLocaleString(
                      "br-FR",
                      {}
                    )}
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-700">
                {data.articles[id]?.content}
              </p>
              <p className="text-lg text-gray-700">
                {data.articles[id]?.description}
              </p>
            </div>
            <div className="col-span-3">
              <img
                className="aspect-video w-full object-cover object-center "
                src={data.articles[id].urlToImage}
              />
            </div>
          </div>
        </section>
      )}
    </section>
  );
}
