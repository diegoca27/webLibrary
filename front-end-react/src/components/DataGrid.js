import React, { useState } from "react";

function DataGrid({ books }) {
    const [currentPage, setCurrentPage] = useState(1);
    // Bonus Challenge 3 and 4
    const itemsPerPage = 10; // Number books per page

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentBooks = books.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container mt-4">
            {currentBooks.length > 0 ? (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentBooks.map((book) => (
                            <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center">No hay libros disponibles.</p>
            )}
            <div className="d-flex justify-content-center">
                {Array.from({ length: Math.ceil(books.length / itemsPerPage) }, (_, i) => (
                    <button key={i + 1} className="btn btn-primary mx-1" onClick={() => paginate(i + 1)}>
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default DataGrid;