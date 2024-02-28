import React, { useState } from "react";

function ToyCard({ toy, handleDelete }) {
  const [likes, setLikes] = useState(toy.likes);

  function handleLikes() {
    fetch("http://localhost:3001/toys/" + toy.id, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ likes: likes + 1 }),
    })
      .then((res) => res.json())
      .then((data) => setLikes(data.likes));
  }

  // console.log(toy);
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button onClick={handleLikes} className="like-btn">
        Like {"<3"}
      </button>
      <button
        onClick={() => {
          handleDelete(toy);
        }}
        className="del-btn"
      >
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
