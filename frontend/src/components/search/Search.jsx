import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = ({ onSearch, placeholder }) => {
  const [input, setInput] = useState("");

  /* Cada vez que "input" cambie, se volverá a ejecutar el efecto y 
  se llamará a onSearch con el valor de input */
  useEffect(() => {
    onSearch(input);
  }, [input]);

  const handleSearch = (e) => {
    // falta la funcionalidad
    // filtrado o get - filtro
    setInput(e.target.value);
  };

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
