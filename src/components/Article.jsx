import React, { useState } from "react";
import { BsArrowRight, BsArrowDown } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setShowPopUp } from "../services/actions/store";
import Details from "./Details";

export default function Article({ articles, title, resetData}) {
  const dispatch = useDispatch();
  const [detailsData, setDetailsData] = useState(null);

  const popUp = useSelector((state) => state.articles.showPopUp);

  const handleClick = () => {
    dispatch(setShowPopUp({ showPopUp: true }));
  };

  const addData = (data) => {
    setDetailsData(data);
  };

  return (
    <section className="px-5">
      <div className=" grid grid-cols-4  md:grid-cols-1 gap-24 items-start ">
        {/* All articles */}
        <div className="col-span-full">
          <h1 className="text-2xl lg:text-2xl pt-10 flex items-center gap-3 tracking-wide uppercase top-3 ">
            {title}
            <BsArrowDown className="text-lg" />
            {title === "Search Results" && (
              <button
                onClick={resetData}
                className="text-white bg-sky-500 px-10 py-2 rounded-sm hover:bg-sky-600"
              >
                Reset
              </button>
            )}
          </h1>

          {articles.length ? (
            <div className="grid grid-cols-3 gap-7 lg:grid-cols-2  sm:grid-cols-1 mt-10">
              {articles.map((article) => {
                return (
                  <div
                    onClick={(event) => {
                      handleClick(), addData(article);
                    }}
                    key={article.url}
                    className="shadow-xl duration-200 hover:shadow-2xl items-start content-start flex justify-between flex-col h-full cursor-pointer"
                  >
                    <img
                      className="aspect-video h-[12rem] w-[40rem] object-cover object-center mt-2"
                      src={`${
                        article.urlToImage
                          ? article.urlToImage
                          : "https://i2-vnexpress.vnecdn.net/2023/03/18/VolkswagenID2all1-1679120658-2113-1679145822.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=eTA7NMataNexVF8EFSowuA"
                      }`}
                      alt=""
                    />
                    <div className=" text-sm mt-auto py-6 px-2 space-y-3 w-full flex flex-col">
                      <h4 className="capitalize text-gray-600 text-[1rem] leading-6  shadow-red-600">
                        {article.title}
                      </h4>
                      <div className=" pb-3">
                        <button className="p-2 w-full duration-300 rounded-full hover:bg-red-400 hover:text-white justify-center gap-2 border flex items-center font-semibold border-red-500 text-red-500">
                          View More
                          <BsArrowRight className="text-lg  font-bold" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <h1 className="text-center text-3xl mt-32 text-sky-500">
              No Articles Found!!
            </h1>
          )}
        </div>
      </div>
      {popUp && <Details data={detailsData} />}
    </section>
  );
}
