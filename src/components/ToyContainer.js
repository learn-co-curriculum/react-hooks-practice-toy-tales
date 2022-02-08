import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys }) {
  return (
    <div id="toy-collection">
      {toys && toys.map((toy, index) => {
        return <ToyCard key={index} name={toy.name} image={toy.image} likes={toy.likes} id={toy.id}/>
      })}
    </div>
  );
}

export default ToyContainer;
