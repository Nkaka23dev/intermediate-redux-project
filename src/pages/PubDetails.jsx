import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Article from "../components/Article";
import PageLoading from "../components/PageLoading";
import { useGetPublisherArticalsQuery } from "../services/actions/apiService";

export default function PubDetails() {
  const { id } = useParams();
  const [publisher, setPublisher] = useState(id);
  const [publisherArticles, setPublisherArticles] = useState([]);

  const { data, error, isLoading } = useGetPublisherArticalsQuery(publisher);

  useEffect(() => {
    setPublisher(id);
    if (data) {
      const articles = data.articles.slice(0, 10);
      setPublisherArticles(articles);
    }
  }, [id, data]);

  const title = (
    <p>
      All articles of <span className="text-red-500">{id}</span>
    </p>
  );

  return (
    <section className="max-w-6xl mx-auto mt-40 pb-10">
      {error && (
        <h1 className="text-2xl text-red-600">Error occured, Fetch failed</h1>
      )}
      {isLoading && <PageLoading />}
      {data && (
        <>
          <Article title={title} articles={publisherArticles} />
        </>
      )}
    </section>
  );
}
