import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import SearchComponent from './components/SearchComponent';
import DataGrid from './components/DataGrid';

const baseURL = "http://localhost:8080/api/data";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async (searchValue) => {
    try {
      const response = await axios.get(baseURL);
      const filteredResponse = response.data.filter((book) =>
        book.name.toLowerCase().startsWith(searchValue.toLowerCase()));
    setBooks(filteredResponse)
      console.log("Datos recibidos:", response.data);
    } catch (error) {
      console.error("Error al traer los libros:", error);
    }
  };

  useEffect(() => {
    fetchBooks("");
  }, []);

  return (
    <div className="App">
        <h3 className='page-title'>Library App</h3>
        <SearchComponent onSearch={fetchBooks}/>
          <DataGrid books ={books}/>
    </div>
  );
}

export default App;
