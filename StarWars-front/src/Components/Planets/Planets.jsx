import React, { useState, useEffect } from "react";
import Card from "../GenericComponents/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import Modals from "../GenericComponents/Modal/Modals";
import { useModal } from "../../hooks/useModal";
import Pagination from "../GenericComponents/Pagination/Pagination";
import SearchBar from "../GenericComponents/SearchBar/SearchBar";
import "./Planets.scss";
import { getAllPlanets, searchItems, resetSearchResults } from "../../redux/actions";

const Planets = () => {
  const searchResults = useSelector((state) => state.searchResults.planets);
  const planets = useSelector((state) => state.planets);

  const [selectedPlanet, setselectedPlanet] = useState(null);
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [planetPerPage, setPlanetPerPage] = useState(10);
  const [hasSearchResults, setHasSearchResults] = useState(false);

  const [totalPages, setTotalPages] = useState(1);
  const indexOfLastPlanet = currentPage * planetPerPage;
  const indexOfFirstPlanet = indexOfLastPlanet - planetPerPage 
  const currentPlanet = planets.slice(indexOfFirstPlanet, indexOfLastPlanet)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPlanets());
    return()=>{
      dispatch(resetSearchResults())
    }
  }, [dispatch]);


  const handleOpenModal = (planet) => {
    setselectedPlanet({ ...planet, isPlanet: true });
    openModal();
  };

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
    setPlanetPerPage(planetPerPage)

  };

  const handleSearch = (searchQuery) => {
    dispatch(searchItems(searchQuery, "planets"));
  };

    useEffect(() => {
    setHasSearchResults(searchResults !== null && searchResults.length > 0);
  }, [searchResults]);

  let dataToRender;
  if (searchResults !== null && searchResults.length > 0) {
    dataToRender = searchResults;
  } else if (searchResults !== null && searchResults.length === 0) {
    dataToRender = currentPlanet;
  } else if (searchResults?.length === 0){
    dataToRender = [];
  }


  return (
    <div className="estrellas ">
      <div className={`${isOpenModal ? "blur-background" : ""}`}>
        <SearchBar onSearch={handleSearch}>{'planets'}</SearchBar>
        <div className="planet-main-container">
        {dataToRender?.length > 0 ? (
            // Si dataToRender tiene elementos, mostrar los resultados
            dataToRender.map((planet) => (
              <div key={planet._id} onClick={() => handleOpenModal(planet)}>
                <Card name={planet.name} type={"planet"}>
                  <button>OpenDetail</button>
                </Card>
              </div>
            ))
          ) : (
            // Si dataToRender está vacío, mostrar el mensaje de "No films found."
            <p className="no-search-results">
              The Force is not strong with your search. <br/> No matching characters found
            </p>
          )}
        </div>
      </div>
          {isOpenModal && selectedPlanet && (
            <Modals isOpen={isOpenModal} closeModal={closeModal}>
              {selectedPlanet}
            </Modals>
          )}
      <Pagination
        propPerPage={planetPerPage}
        length={(searchResults !== null && searchResults.length > 0) ? searchResults.length: planets.length}
        pagination={pagination}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Planets;