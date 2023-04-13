import React from "react";
import { GrArticle } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useGetPublishersQuery } from "../services/features/apiService";
import ErrorAndLoading from "./ErrorAndLoading";
import { useDispatch } from "react-redux";
import { setSearchResult, setSearched } from "../services/features/store";

export default function Publishers() {
  const { data, error, isLoading } = useGetPublishersQuery();
  const dispatch = useDispatch();
  
  const resetData = () => {
    dispatch(setSearchResult(null));
    dispatch(setSearched(null));
  };
  return (
    <section className="px-5">
      <div className="py-8 flex flex-col md:px-4">
        <h1 className="text-2xl mb-6 text-center font-bold tracking-wide underline capitalize text-red-500">
          All News Publishers
        </h1>
        <ErrorAndLoading error={error} isLoading={isLoading} />
        {data && (
          <div className="grid grid-cols-5 sm:grid-cols-1 lg:grid-cols-2 sm:col-start-2  w-full">
            {data.sources.map((publisher, idx) => {
              return (
                <Link
                  onClick={resetData}
                  key={idx}
                  to={`publisher/${publisher.id}`}
                >
                  <div
                    key={idx}
                    className="flex duration-300 delay-300 hover:underline cursor-pointer  py-2 justify-between items-start"
                  >
                    <h1 className="capitalize lg:hidden text-md  text-sky-600 font-semibold italic flex items-start gap-1">
                      <GrArticle />
                      <h1>{publisher.name.substring(0, 20)}</h1>
                    </h1>
                    <h1 className="capitalize hidden   text-md  text-sky-600 font-semibold italic lg:flex items-start gap-1">
                      <GrArticle />
                      <h1>{publisher.name}</h1>
                    </h1>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
