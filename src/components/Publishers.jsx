import React from "react";
import { GrArticle } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useGetPublishersQuery } from "../services/actions/apiService";
import ErrorAndLoading from "./ErrorAndLoading";

export default function Publishers() {
  const { data, error, isLoading } = useGetPublishersQuery();
  return (
    <div className="py-8 flex flex-col md:px-4">
      <h1 className="text-2xl mb-3  font-bold tracking-wide capitalize text-red-500">
        News Publishers
      </h1>
      <ErrorAndLoading error={error} isLoading={isLoading} />
      {data && (
        <div className="grid grid-cols-5 md:grid-cols-2 w-full">
          {data.sources.map((publisher, idx) => {
            return (
              <Link key={idx} to={`publisher/${publisher.id}`}>
                <div
                  key={idx}
                  className="flex hover:underline cursor-pointer  py-2 justify-between items-start"
                >
                  <h1 className="capitalize text-lg text-gray-600 flex items-start gap-1">
                    <GrArticle />
                    <h1>{publisher.name.substring(0, 20)}</h1>
                  </h1>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
