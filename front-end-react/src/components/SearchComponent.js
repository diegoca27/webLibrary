import React, { useState, useEffect } from "react";

function SearchComponent({ onSearch }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    // Bonus Challenge 1
    const debounceTimeout = setTimeout(() => {
        onSearch(input);
    }, 300); 

    return () => clearTimeout(debounceTimeout);
  }, [input, onSearch]);

  const onChange = (event) => {
      setInput(event.target.value);
  };

  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder="Search a book"
        value={input}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchComponent;
