import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  // React state(s)
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  // Fetch data ONCE!
  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      setToys(data);
    })
  }, [])

  // Event Handler: Add a Toy click
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  // Event Handler: (POST) On 'Create New Toy' Submit
  function onFormSubmit(toyData) {
    // console.log(toyData);
    setShowForm(!showForm);

    // Optimistic rendering
    // setToys([...toys, toyData]);

    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(toyData)
    })
    .then(res => res.json())
    // Pessimistic rendering
    .then(data => setToys([...toys, data]));
  }

  // Event Handler: (DELETE) Donate button click
  function onDonate(toyData) {
    fetch(`http://localhost:3001/toys/${toyData.id}`, {
      method: 'DELETE'
    })

    setToys(toys.filter(toy => toyData.id !== toy.id))
  }

  // Event Handle: (PATCH) Like button click
  function onLike(toyData) {
    // console.log(toyData);

    // Optimistic rendering
    // const toyUpdate = {...toyData, likes: ++toyData.likes}
    // setToys(toys.map(toy => toy.id === toyData.id ? toyUpdate : toy))

    fetch(`http://localhost:3001/toys/${toyData.id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({likes: ++toyData.likes})
    })
    .then(res => res.json())
    // Pessimistic rendering
    .then(data => setToys(toys.map(toy => toy.id === data.id ? data : toy)))
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onFormSubmit={onFormSubmit} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick} style={{cursor: "pointer"}}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDonate={onDonate} onLike={onLike} />
    </>
  );
}

export default App;

// COMPLETED IN 70 MINS!