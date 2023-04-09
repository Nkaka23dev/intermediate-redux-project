import React from "react";
import PageLoading from "./PageLoading";

export default function ErrorAndLoading({ error, isLoading }) {
  return (
    <section className="px-5">
      {error && <h1 className="text-xl text-center py-20 md:text-md text-red-600">We apologize for the inconvenience, but we are currently experiencing a (500) Server Error. Our team is aware of the issue and is actively working to resolve it. Thank you for your patience.</h1>}
      {isLoading && <PageLoading />}
    </section>
  );
}
