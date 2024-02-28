import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);

  const [search, setSearch] = useState("");

  //    getter|setter
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const filteredList = toys.filter((toy) =>
    toy.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      {showForm ? <ToyForm toys={toys} setToys={setToys} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>

      {/* passing toys state as a prop */}
      <ToyContainer toys={filteredList} setToys={setToys} />
    </>
  );
}

export default App;
