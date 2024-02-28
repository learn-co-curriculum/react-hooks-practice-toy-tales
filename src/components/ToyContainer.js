import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys }) {
  console.log(toys, " Coming from the ToyContainer");

  function handleDelete(toy) {
    let newToyList = toys.filter((item) => item !== toy);

    fetch("http://localhost:3001/toys/" + toy.id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setToys(newToyList));
  }

  return (
    <div id="toy-collection">
      
      {toys.map((toy) => (
        <ToyCard key={toy.id} toy={toy} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default ToyContainer;
