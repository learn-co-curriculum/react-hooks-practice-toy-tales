import React, { useState } from "react";

function ToyForm({onFormSubmit}) {
  // Initial formData
  const initialForm = {
    name: "",
    image: "",
    likes: 0
  }

  // React state(s)
  const [formData, setFormData] = useState(initialForm);

  // Event Handler: Make form a controlled input
  function handleFormChange(e) {
    // console.log('handleFormChange');
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  // Event Handler: Create New Toy submit
  function handleFormSubmit(e) {
    e.preventDefault();

    onFormSubmit(formData);

    setFormData(initialForm);
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleFormSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange={handleFormChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleFormChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
          style={{cursor: "pointer"}}
        />
      </form>
    </div>
  );
}

export default ToyForm;
