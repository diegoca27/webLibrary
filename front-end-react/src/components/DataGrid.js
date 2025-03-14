import React from "react";

function DataGrid({books}) {
    return (
        <div>
        {books.length > 0 ? (
            <table className="table">
            <thead>
                <tr className="headers">
                <th>ID</th>
                <th>Nombre</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book) => (
                <tr key={book.id}className="rows">
                    <td>{book.id}</td>
                    <td>{book.name}</td>
                </tr>
                ))}
            </tbody>
            </table>
        ) : (
            <p className="text">No hay libros disponibles.</p>
        )}
    </div>
    )
}

export default DataGrid;