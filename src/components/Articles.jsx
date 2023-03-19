import React from "react";
import { BsArrowRight, BsArrowDown } from "react-icons/bs";
import { GrArticle } from "react-icons/gr";

export default function Articles() {
  return (
    <section className="max-w-6xl mx-auto mt-40">
      <div className=" grid grid-cols-4 md:grid-cols-1 gap-24 items-start">
        {/* All articles */}
        <div className="col-span-3">
          <h1 className="text-2xl flex items-center gap-3  font-bold tracking-wide uppercase  static top-3">
            All Articles
            <BsArrowDown className="text-lg" />
          </h1>

          <div className="grid grid-cols-3 gap-7 md:grid-cols-1 mt-10">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((article, indx) => {
              return (
                <div className="shadow-xl hover:shadow-2xl  cursor-pointer">
                  <img
                    className="aspect-video h-[13rem] w-[40rem] object-cover object-center mt-2"
                    src="https://cdn.pixabay.com/photo/2013/07/27/05/13/lighthouse-168132__340.jpg"
                    alt=""
                  />
                  <div className="flex justify-between items-center text-sm py-6 px-2">
                    <h4 className="capitalize font-semibold shadow-red-600">
                      Title will go here
                    </h4>
                    <div>
                      <button className="p-2 hover:bg-red-400 hover:text-white justify-between gap-2 border flex items-center font-semibold border-red-500 text-red-500">
                        More
                        <BsArrowRight className="text-lg  font-bold" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* news publishers */}
        <div className=" mt-24 flex flex-col md:mt-5 ">
          <h1 className="text-2xl mb-3  font-bold tracking-wide capitalize text-red-500">
            News Publishers
          </h1>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((pub, idx) => {
            return (
              <div className="flex cursor-pointer hover:shadow-xl py-2 justify-between items-center">
                <h1 className="capitalize text-md flex items-center gap-1">
                  <GrArticle />
                  publishers of article
                </h1>

              </div>
            );
          })}
          <div>{}</div>
        </div>
      </div>
    </section>
  );
}
