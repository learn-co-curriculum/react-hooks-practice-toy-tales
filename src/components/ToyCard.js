import React from "react";

function ToyCard({toy, onDonate, onLike}) {
  // Destructured toy
  const {name, image, likes} = toy;

  // Event Handler: handleDonate click
  function handleDonate() {
    onDonate(toy);
  }

  // Event Handler: Like click
  function handleLike() {
    onLike(toy);
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike} style={{cursor: "pointer"}}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonate} style={{cursor: "pointer"}}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
