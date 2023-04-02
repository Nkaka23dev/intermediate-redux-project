import React from "react";
import PageLoading from "./PageLoading";

export default function ErrorAndLoading({ error, isLoading }) {
  return (
    <section>
      {error && <h1 className="text-2xl text-red-600">{error.data.message}</h1>}
      {isLoading && <PageLoading />}
    </section>
  );
}
