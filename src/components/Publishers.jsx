import React from "react";
import { GrArticle } from "react-icons/gr";

export default function Publishers({articles}) {
  return (
    <div className=" mt-24 flex flex-col md:mt-5 ">
      <h1 className="text-2xl mb-3  font-bold tracking-wide capitalize text-red-500">
        News Publishers
      </h1>
      {articles.map((article, idx) => {
        return (
          <div key={idx} className="flex hover:underline cursor-pointer  py-2 justify-between items-center">
            <h1 className="capitalize text-lg text-gray-600 flex items-center gap-1">
              <GrArticle />
              {article.source.name}
            </h1>
          </div>
        );
      })}
      {/* <div>{}</div> */}
    </div>
  );
}
