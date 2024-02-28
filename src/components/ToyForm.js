import React, { useState } from "react";

function ToyForm({setToys, toys}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let newToy = {
      name,
      image,
      likes: 1,
    };

    console.log(newToy);

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => setToys([...toys, data]));
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
        />
        <br />
        <input
          onChange={(e) => {
            setImage(e.target.value);
          }}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
