import React, {useState} from "react";

function SearchComponent({ onSearch }){
    const [input, setInput] = useState("")

    const onChange = (event) => {
        setInput(event.target.value)
        onSearch(event.target.value)
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