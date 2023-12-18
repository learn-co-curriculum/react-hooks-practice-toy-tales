import React ,{useState} from "react";

function ToyForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  
  function handleSubmit(e){
    e.preventDefault();
    const newToy = { name: name, image: image, likes: 0 };
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newToy),
    })
      

    
  }
  return (
    <div className="container">
      <form onSubmit ={handleSubmit} className = "add-toy-form">
        <h3>Create a toy!</h3>
        <input type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(e)=> setName(e.target.value)} 
          value={name}
          />
  
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={(e)=> setImage(e.target.value)} 
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
