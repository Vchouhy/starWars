// import { useSelector } from 'react-redux';
// import Card from "../../GenericComponents/Card/Card";
// // import './People.scss'
// import Modals from "../../GenericComponents/Modal/Modals";
// import { useModal } from "../../hooks/useModal";
// import { useState, useEffect } from "react";
// import SearchBar from "../../GenericComponents/SearchBar/SerchBar";
// import Pagination from "../../GenericComponents/Pagination/Pagination";

// const Films = ()=>{
//     const films = useSelector((state) => state.films);

//     const searchResults = useSelector((state) => state.searchResults.people);
//     const filmResults = searchResults && searchResults.length ? searchResults : films;
  
//     const [selectedFilm, setSelectedFilm] = useState(null);
//     const [isOpenModal, openModal, closeModal] = useModal(false);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [filmPerPage, setFilmPerPage] = useState(8);
//     const indexOfLastFilm = currentPage * filmPerPage;
//     const indexOfFirstFilm = indexOfLastFilm - filmPerPage;
//     const currentFilm = filmResults ? filmResults.slice(indexOfFirstFilm, indexOfLastFilm) : films.slice(indexOfFirstFilm, indexOfLastFilm);
//     // const [currentFilm, setCurrentFilm] = useState([]);

//     useEffect(() => {
//       setCurrentPage(1); // Reset currentPage when search results change
//     }, [filmResults]);

//     const pagination = (pageNumber) => {
//       setCurrentPage(pageNumber);
//     };

//     const handleOpenModal = (film) => {
//       setSelectedFilm({...film, isFilm: true});
//       openModal();
//     };

//     return (
//       <>
//       <div className="main-container">
//          <SearchBar prop="films"></SearchBar>
//         {currentFilm.map((film) => {
//           return (
//             <Card
//               key={film._id}
//               name={film.title}
             
//             >
//               <button onClick={() => handleOpenModal(film)}>OpenDetail</button>
//             </Card>
//           );
//         })}
//         {isOpenModal && selectedFilm && (
//           <Modals isOpen={isOpenModal} closeModal={closeModal} >
//             {selectedFilm}
            
//           </Modals>
//         )}
//       </div>
//          <Pagination
//         propPerPage={filmPerPage}
//         length={films.length}
//         pagination={pagination}
//         currentPage={currentPage}
//       />
//       </>
//     );
//   };


// export default Films;
import React, { useState } from "react";
import Card from "../../GenericComponents/Card/Card";
import { useSelector } from "react-redux";
import Modals from "../../GenericComponents/Modal/Modals";
import { useModal } from "../../hooks/useModal";
import Pagination from "../../GenericComponents/Pagination/Pagination";
import SearchBar from "../../GenericComponents/SearchBar/SerchBar";
import "./Films.scss";

const Films = () => {
  const searchResults = useSelector((state) => state.searchResults.people);
  const films = useSelector((state) => state.films);
  const filmResults = searchResults && searchResults.length ? searchResults : films;

  const [selectedFilm, setSelectedFilm] = useState(null);
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filmPerPage, setFilmPerPage] = useState(8);
  const indexOfLastFilm = currentPage * filmPerPage;
  const indexOfFirstFilm = indexOfLastFilm - filmPerPage;
  const currentFilm = filmResults ? filmResults.slice(indexOfFirstFilm, indexOfLastFilm) : films.slice(indexOfFirstFilm, indexOfLastFilm);

  const handleOpenModal = (film) => {
    setSelectedFilm({ ...film, isFilm: true });
    openModal();
  };

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="films-main-container">
        <SearchBar prop="films" />
        {currentFilm.map((film) => {
          return (
            <Card key={film._id} name={film.title}>
              <button onClick={() => handleOpenModal(film)}>OpenDetail</button>
            </Card>
          );
        })}
        {isOpenModal && selectedFilm && (
          <Modals isOpen={isOpenModal} closeModal={closeModal}>
            {selectedFilm}
          </Modals>
        )}
      </div>
      <Pagination propPerPage={filmPerPage} length={films.length} pagination={pagination} currentPage={currentPage} />
    </>
  );
};

export default Films;




