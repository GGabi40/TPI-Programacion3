import React from "react";
import { useState, useEffect } from "react";

const Search = ({ onSearch, placeholder }) => {
  const [input, setInput] = useState("");

  /* Cada vez que "input" cambie, se volverá a ejecutar el efecto y 
  se llamará a onSearch con el valor de input */
  useEffect(() => {
    onSearch(input);
  }, [input]);

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input
          type="text"
          id="search"
          placeholder={placeholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
