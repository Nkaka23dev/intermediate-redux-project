import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ArticlesDetails() {
  const { id } = useParams();
  const onPageArticles = useSelector((state) => state.articles.onPageArticles);
  return (
    <section className="mt-32">
      <div className="max-w-6xl mx-auto">
        <img
          className="aspect-video w-[80%] object-cover object-center "
          src={
            onPageArticles[id] && onPageArticles[id].urlToImage
              ? onPageArticles[id].urlToImage
              : "https://i2-vnexpress.vnecdn.net/2023/03/18/VolkswagenID2all1-1679120658-2113-1679145822.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=eTA7NMataNexVF8EFSowuA"
          }
          alt=""
        />
        <div className="max-w-4xl py-4">
          <p>{onPageArticles[id]?.description}</p>
        </div>
      </div>
    </section>
  );
}
