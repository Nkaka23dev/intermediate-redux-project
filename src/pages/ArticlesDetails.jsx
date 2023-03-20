import React from "react";
import { useParams } from "react-router-dom";

export default function ArticlesDetails() {
  const { id } = useParams();
  console.log(id)
  return (
    <div className="h-screen grid">
      <div className="m-auto">
        All details about the articles
        <span className="text-red-500">{id}</span>
      </div>
    </div>
  );
}
