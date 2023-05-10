import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

function ToyContainer() {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div id="toy-collection">
      { toys && toys.map((toy) => (
        <div key={toy.id} className="card">
          <h2>{toy.name}</h2>
          <img src={toy.image} alt={toy.name} className="toy-avatar" />
          <p>{toy.likes} Likes </p>
          <button className="like-btn">Like {"<3"}</button>
          <button className="del-btn">Donate to GoodWill</button>
        </div>
      ))}
    </div>
  );
}

export default ToyContainer;
