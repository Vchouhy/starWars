import Card from "../GenericComponents/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import Modals from "../GenericComponents/Modal/Modals";
import { useModal } from "../../hooks/useModal";
import React, { useState, useEffect } from "react";
import Pagination from "../GenericComponents/Pagination/Pagination";
import SearchBar from "../GenericComponents/SearchBar/SerchBar";
import './Planets.scss'
import { getAllPlanets } from "../../redux/actions";

const Planets = () => {
  const searchResults = useSelector((state) => state.searchResults.planets);
  const planets = useSelector((state) => state.planets);
  const planetsResults = searchResults && searchResults.length ? searchResults : planets;

  const [selectedPlanet, setselectedPlanet] = useState(null);
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [planetPerPage, setPlanetPerPage] = useState(8);
  const indexOfLastPlanet = currentPage * planetPerPage;
  const indexOfFirstPlanet = indexOfLastPlanet - planetPerPage;
  const currentPlanet = planetsResults ? planetsResults.slice(indexOfFirstPlanet, indexOfLastPlanet) : planets.slice(indexOfFirstPlanet, indexOfLastPlanet);
  const [totalPages, setTotalPages] = useState(1);

  const dispatch = useDispatch();

 useEffect(()=>{

    dispatch(getAllPlanets())

},[dispatch])

useEffect(() => {
  setTotalPages(Math.ceil(searchResults.length / planetPerPage));
}, [searchResults, planetPerPage]);

  const handleOpenModal = (planet) => {
    setselectedPlanet({ ...planet, isPlanet: true }); // Cambiar "isVehicle" a "isPlanet"
    openModal();
  };

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="estrellas">
        <SearchBar prop="planets"></SearchBar>
      <div className="planet-main-container">
        {currentPlanet.map((planet) => {
          return (
            <Card key={planet._id} name={planet.name} type={'planet'}>
              <button onClick={() => handleOpenModal(planet)}>
                OpenDetail
              </button>
            </Card>
          );
        })}
        {isOpenModal && selectedPlanet && (
          <Modals isOpen={isOpenModal} closeModal={closeModal}>
            {selectedPlanet}
          </Modals>
        )}
      </div>
      <Pagination
        propPerPage={planetPerPage}
        length={planets.length}
        pagination={pagination}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Planets;
