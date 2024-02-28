import React from "react";

function Header({ search, setSearch }) {
  
  return (
    <div id="toy-header">
      <img
        src="https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png"
        alt="toy header"
      />

      <div className="search">
        <input
          type="text"
          placeholder="Search...."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Header;
