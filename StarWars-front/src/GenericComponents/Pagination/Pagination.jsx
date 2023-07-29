import React from "react";
import './Pagination.scss'

const Pagination = ({ propPerPage, length, pagination, currentPage }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(length / propPerPage); i++) {
    pageNumber.push(i);
  }

  const visiblePages = 5;

  const renderPageNumbers = () => {
    const pageNumbers = [];

    // Mostrar botón "Previous Page" si no estamos en la primera página
    if (currentPage > 1) {
      pageNumbers.push(
        <li key="prev">
          <button onClick={() => pagination(currentPage - 1)}>Prev</button>
        </li>
      );
    }

    // Mostrar botón "First Page" si estamos más lejos de la primera página
    if (currentPage > Math.ceil(visiblePages / 2) + 1) {
      pageNumbers.push(
        <li key="first">
          <button onClick={() => pagination(1)}>1</button>
        </li>
      );

      // Mostrar puntos suspensivos si no estamos cerca de la primera página
      if (currentPage > Math.ceil(visiblePages / 2) + 2) {
        pageNumbers.push(
          <li key="dots1">
            <span className="dots">...</span>
          </li>
        );
      }
    }

    // Calcular el rango de páginas que queremos mostrar
    let startPage = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
    let endPage = Math.min(startPage + visiblePages - 1, pageNumber.length);

    // Asegurarnos de que el rango de páginas no exceda el número total de páginas
    if (endPage - startPage + 1 < visiblePages) {
      startPage = Math.max(endPage - visiblePages + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <li key={i} className={currentPage === i ? "active" : ""}>
            <button onClick={() => pagination(i)}>{i}</button>
          </li>
        );
      
    }

    // Mostrar puntos suspensivos antes de las páginas ocultas entre la página actual y la última página
    if (currentPage < pageNumber.length - Math.ceil(visiblePages / 2)) {
      if (currentPage < pageNumber.length - Math.ceil(visiblePages / 2) - 1) {
        pageNumbers.push(
          <li key="dots2">
            <span className="dots">...</span>
          </li>
        );
      }
    }

    // Mostrar botón "Last Page" si estamos más lejos de la última página
    if (currentPage < pageNumber.length - Math.ceil(visiblePages / 2) + 1) {
      pageNumbers.push(
        <li key="last">
          <button onClick={() => pagination(pageNumber.length)}>
            {pageNumber.length}
          </button>
        </li>
      );
    }

    // Mostrar botón "Next Page" si no estamos en la última página
    if (currentPage < pageNumber.length) {
      pageNumbers.push(
        <li key="next">
          <button onClick={() => pagination(currentPage + 1)}>Next</button>
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <div >
      <ul className="paginator">{renderPageNumbers()}</ul>
    </div>
  );
};

export default Pagination;


