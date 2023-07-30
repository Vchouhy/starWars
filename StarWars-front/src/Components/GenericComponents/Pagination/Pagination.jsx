import React from "react";
import './Pagination.scss';

const Pagination = ({ propPerPage, length, pagination, currentPage }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(length / propPerPage); i++) {
    pageNumber.push(i);
  }

  const visiblePages = 3;

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

    for (let i = 1; i <= pageNumber.length; i++) {
      pageNumbers.push(
        <li key={i} className={currentPage === i ? "active" : ""}>
          <button onClick={() => pagination(i)}>{i}</button>
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
    <div>
      <ul className="paginator">{renderPageNumbers()}</ul>
    </div>
  );
};

export default Pagination;
