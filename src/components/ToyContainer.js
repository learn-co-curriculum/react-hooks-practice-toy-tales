import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleDelete, handleLike}) {
  const toyCards = toys.map((toy) => (
    <ToyCard
      key={toy.id}
      id={toy.id}
      name={toy.name}
      image={toy.image}
      likes={toy.likes}
      handleDelete={handleDelete}
      handleLike={handleLike}
    />
  ));

  return (
    <div id="toy-collection">
      {toyCards}
    </div>
  );
}

export default ToyContainer;
