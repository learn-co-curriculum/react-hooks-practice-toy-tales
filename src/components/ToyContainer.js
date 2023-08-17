import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDonate, onLike}) {
  // Render each toy into ToyCard component
  const renderToys = toys.map(toy => {
    return <ToyCard key={toy.id} toy={toy} onDonate={onDonate} onLike={onLike} />
  })

  return (
    <div id="toy-collection">
      {renderToys}
    </div>
  );
}

export default ToyContainer;
