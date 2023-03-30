import React from "react";
import { GrArticle } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetPublishersQuery } from "../services/actions/apiService";
import { setPublisher } from "../services/actions/store";

export default function Publishers() {
  const { data, error, isLoading } = useGetPublishersQuery();
  const dispatch = useDispatch();
  if (data) {
    console.log(data.sources);
    dispatch(setPublisher(data.sources));
  }
  const publishers = useSelector((state) => state.articles.publishers);

  return (
    <div className="py-8 flex flex-col">
      <h1 className="text-2xl mb-3  font-bold tracking-wide capitalize text-red-500">
        News Publishers
      </h1>
      <div className="grid grid-cols-5 w-full">
        {publishers.map((publisher, idx) => {
          return (
            <Link key={idx}  to={`publisher/${publisher.id}`}>
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
    </div>
  );
}
