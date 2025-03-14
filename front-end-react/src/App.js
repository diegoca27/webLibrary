import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import SearchComponent from "./components/SearchComponent";
import DataGrid from "./components/DataGrid";

const baseURL = "http://localhost:8080/api/data";

function App() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const fetchBooks = async (searchValue) => {
    try {
      const response = await axios.get(baseURL);
      const filteredResponse = response.data.filter((book) =>
        book.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setBooks(filteredResponse);
      console.log("Datos recibidos:", response.data);
      setError(null);
    } catch (error) {
      console.error("Error al traer los libros:", error);
      // Bonus Challenge 2.
      setError(
        "Error al cargar los libros. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };

  useEffect(() => {
    fetchBooks("");
  }, []);

  return (
    <div className="App">
      <h3 className="page-title">Library App</h3>
      <SearchComponent onSearch={fetchBooks} />
      {error && <p className="error-message">{error}</p>}
      <DataGrid books={books} />
    </div>
  );
}

export default App;
