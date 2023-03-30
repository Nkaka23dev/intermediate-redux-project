import React from "react";
import { useParams } from "react-router-dom";

export default function PublisherDetails() {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="mt-44 text-center">
      publisherDetails and ID is {id}

    </div>
  );
}
