import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";



const Search = ({ onSearch }) => {
    const [input, setInput] = useState("");

    const handleSearch = () => {
        onSearch(input); 
    };

  return (
    <div className='searchbar'>
      <input type="text" id="search" placeholder="Buscar club..." value={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={handleSearch} className='searchbtn'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
      
    </div>
  )
}

export default Search
