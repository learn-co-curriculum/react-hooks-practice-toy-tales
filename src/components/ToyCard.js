import React from "react";

function ToyCard({id, name, image, likes, handleDelete, handleLike}) {

  function handleDeleteClick(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        handleDelete(id);
      });
  }

  function handleLikeClick(e){
    e.preventDefault()
    const updateLikes = {
      likes:likes+1,
    };
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateLikes),
    })
      .then((r) => r.json())
      .then(handleLike);
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
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
