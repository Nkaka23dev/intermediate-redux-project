import React from "react";
import { useParams } from "react-router-dom";
import Article from "../components/Article";
import { useGetPublisherArticalsQuery } from "../services/actions/apiService";
import ErrorAndLoading from "../components/ErrorAndLoading";

export default function PubDetails() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetPublisherArticalsQuery(id);

  console.log(data)

  const title = (
    <p>
      All articles of <span className="text-red-500">{id}</span>
    </p>
  );
  return (
    <section className="max-w-6xl mx-auto mt-40 pb-10">
      <ErrorAndLoading error={error} isLoading={isLoading} />
      {data && (
        <>{data && <Article title={title} articles={data.articles} />}</>
      )}
    </section>
  );
}
