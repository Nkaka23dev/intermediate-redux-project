import { useDispatch, useSelector } from "react-redux";
import { setShowPopUp } from "../services/features/store";

export default function Details({ data }) {
  const dispatch = useDispatch();
  const popUp = useSelector((state) => state.articles.showPopUp);

  const handleClick = () => {
    dispatch(setShowPopUp({ showPopUp: false }));
  };
  return (
    <section className="">
      <div className="h-screen bg-white grid w-full mx-auto fixed z-50 inset-0 ">
        <div className="max-w-[100rem] w-full px-5 flex flex-col mx-auto">
          <button
            onClick={handleClick}
            className="text-2xl py-2 lg:py-1 lg:px-4 px-6 ml-auto bg-red-500 text-white cursor-pointer m-5"
          >
            X
          </button>
          {data ? (
            <div className="max-w-[85rem] py-4 mx-auto grid lg:gap-0 gap-10 lg:grid-cols-1 grid-cols-5">
              <div className="py-4 col-span-2 lg:order-2 space-y-3 ">
                <p className="text-3xl md:text-xl text-gray-900 capitalize font-semibold">
                  {data.title}
                </p>
                <div className="flex md:flex-col gap-5 md:items-start items-center">
                  <div>
                    <p className="font-semibold md:text-md text-xl">
                      <span className="text-sky-500">{data.source.name}</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-red-500 text-xl md:text-sm">
                      {new Date(data.publishedAt).toLocaleString("br-FR", {})}
                    </p>
                  </div>
                </div>
                <p className="text-lg  md:text-md text-gray-700">
                  {data.content}
                </p>
                <p className="text-lg md:text-md text-gray-700">
                  {data.description}
                </p>
                <div className="py-10">
                  <p className="text-xl  md:text-md ">
                    More Info visit the link{" "}
                    <a
                      className="cursor-pointer underline text-blue-500"
                      href={data.url}
                    >
                      {data.source.name}
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-span-3 lg:order-1">
                <img
                  className="aspect-video w-full object-cover object-center "
                  src={data.urlToImage}
                />
              </div>
            </div>
          ) : (
            <h1 className="text-3xl text-center">No details Found!</h1>
          )}
        </div>
      </div>
    </section>
  );
}
