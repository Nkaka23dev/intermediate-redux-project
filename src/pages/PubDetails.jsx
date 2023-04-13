import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Article from "../components/Article";
import { useGetPublisherArticalsQuery } from "../services/features/apiService";
import ErrorAndLoading from "../components/ErrorAndLoading";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function PubDetails() {
  const { id } = useParams();
  const history = useHistory();
  const { data, error, isLoading } = useGetPublisherArticalsQuery(id);
  const searched = useSelector((state) => state.articles.searched);

  useEffect(() => {
    if (searched) {
      history.push("/");
    }
  }, [searched]);

  const title = (
    <p>
      All articles of <span className="text-red-500">{id}</span>
    </p>
  );
  return (
    <>
      <section className="max-w-6xl mx-auto mt-20 pb-10">
        <ErrorAndLoading error={error} isLoading={isLoading} />
        {data && (
          <>{data && <Article title={title} articles={data.articles} />}</>
        )}
      </section>
    </>
  );
}
