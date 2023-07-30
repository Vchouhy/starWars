import { useSelector, useDispatch } from "react-redux";
import Card from "../GenericComponents/Card/Card";
import Modals from "../GenericComponents/Modal/Modals";
import { useModal } from "../../hooks/useModal";
import { useState, useEffect } from "react";
import SearchBar from "../GenericComponents/SearchBar/SerchBar";
import Pagination from "../GenericComponents/Pagination/Pagination";
import { getAllFilms } from "../../redux/actions";
import './Films.scss'

const Films = () => {
  const searchResults = useSelector((state) => state.searchResults.films);
  const films = useSelector((state) => state.films);

  // const filmResults = searchResults && searchResults.length ? searchResults : [];

  const [selectedFilm, setSelectedFilm] = useState(null);
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filmPerPage, setFilmPerPage] = useState(8);
  const [hasSearchResults, setHasSearchResults] = useState(false);
  const [currentFilm, setcurrentFilm] = useState([]);
  const [totalPages, setTotalPages] = useState(1);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFilms());
  }, [dispatch]);

  useEffect(() => {
    setTotalPages(Math.ceil(searchResults.length / filmPerPage));
  }, [searchResults, filmPerPage]);
  
  useEffect(() => {
    const indexOfLastFilm = currentPage * filmPerPage;
    const indexOfFirstFilm = indexOfLastFilm - filmPerPage;
    if (hasSearchResults && searchResults) {
      setcurrentFilm(searchResults.slice(indexOfFirstFilm, indexOfLastFilm));
    } else {
      setcurrentFilm(films.slice(indexOfFirstFilm, indexOfLastFilm));
    }
  }, [hasSearchResults, currentPage, filmPerPage, films, searchResults]);

  useEffect(() => {
    setHasSearchResults(searchResults && searchResults.length > 0);
    setCurrentPage(1);
  }, [searchResults]);
  const handleOpenModal = (film) => {
    setSelectedFilm({ ...film, isFilm: true });
    openModal();
  };

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="estrellas">
        <SearchBar prop="films"></SearchBar>
      <div className="films-main-container">
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
      <Pagination
        propPerPage={filmPerPage}
        length={films.length}
        pagination={pagination}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Films;
