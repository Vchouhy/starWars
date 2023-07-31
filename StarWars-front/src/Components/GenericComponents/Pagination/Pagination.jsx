import React from "react";
import './Pagination.scss';

const Pagination = ({ propPerPage, length, pagination, currentPage }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(length / propPerPage); i++) {
    pageNumber.push(i);
  }

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const totalPages = Math.ceil(length / propPerPage);
  
    // Show page numbers only
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={currentPage === i ? "active" : ""}>
          <button onClick={() => pagination(i)}>{i}</button>
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

