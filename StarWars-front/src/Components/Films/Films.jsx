import React, { useState, useEffect } from "react";
import Card from "../GenericComponents/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import Modals from "../GenericComponents/Modal/Modals";
import { useModal } from "../../hooks/useModal";
import Pagination from "../GenericComponents/Pagination/Pagination";
import SearchBar from "../GenericComponents/SearchBar/SearchBar";
import "./Films.scss";
import { getAllFilms, searchItems, resetSearchResults } from "../../redux/actions";

const Films = () => {
  const films = useSelector((state) => state.films);
  const searchResults = useSelector((state) => state.searchResults.films);

  const [selectedFilm, setSelectedFilm] = useState(null);
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filmPerPage, setFilmPerPage] = useState(10);
  const [hasSearchResults, setHasSearchResults] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const indexOfLastFilm = currentPage * filmPerPage;
  const indexOfFirstFilm = indexOfLastFilm - filmPerPage;
  const currentFilm = films.slice(indexOfFirstFilm, indexOfLastFilm);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFilms());
    return () => {
      dispatch(resetSearchResults());
    };
  }, [dispatch]);


  const handleOpenModal = (film) => {
    setSelectedFilm({ ...film, isFilm: true });
    openModal();
  };


  const pagination = (pageNumber)=>{
    setCurrentPage(pageNumber)
    setFilmPerPage(filmPerPage)
  }
 
  const handleSearch = (searchQuery) => {
    dispatch(searchItems(searchQuery, "films"));
  };

  useEffect(() => {
    setHasSearchResults(searchResults !== null && searchResults.length > 0);
  }, [searchResults]);

  
  let dataToRender;
  if (searchResults !== null && searchResults.length > 0) {
    dataToRender = searchResults;
  } else if (searchResults !== null && searchResults.length === 0) {
    dataToRender = currentFilm;
  } else if (searchResults?.length === 0){
    dataToRender = [];
  }

  return (
    <div className="estrellas ">
      <div className={`${isOpenModal ? "blur-background" : ""}`}>
        <SearchBar onSearch={handleSearch}>{'films'}</SearchBar>
        <div className="films-main-container">
        {dataToRender?.length > 0 ? (
            // Si dataToRender tiene elementos, mostrar los resultados
            dataToRender.map((film) => (
              <div key={film._id} onClick={() => handleOpenModal(film)}>
                <Card name={film.title} type={"films"}>
                  <button>OpenDetail</button>
                </Card>
              </div>
            ))
          ) : (
            // Si dataToRender está vacío, mostrar el mensaje de "No films found."
            <p className="no-search-results">
              The Force is not strong with your search. <br/> No matching films found
            </p>
          )}
        </div>
      </div>
          {isOpenModal && selectedFilm && (
            <Modals isOpen={isOpenModal} closeModal={closeModal}>
              {selectedFilm}
            </Modals>
          )}
      <Pagination
        propPerPage={filmPerPage}
        length={(searchResults !== null && searchResults.length > 0) ? searchResults.length : films.length}
        pagination={pagination}
        currentPage={currentPage}
      />
    </div>
  );

};

export default Films;
