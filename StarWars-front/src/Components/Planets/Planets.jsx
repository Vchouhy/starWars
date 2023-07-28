import Card from "../../GenericComponents/Card/Card";
import { useSelector } from 'react-redux';
// import './People.scss'
import Modals from "../../GenericComponents/Modal/Modals";
import { useModal } from "../../hooks/useModal";
import { useState } from "react";
import Pagination from "../../GenericComponents/Pagination/Pagination";


const Planets = ()=>{
    const planets = useSelector((state) => state.planets);

    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const [isOpenModal, openModal, closeModal] = useModal(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [planetPerPage, setPlanetPerPage] = useState(8);
    const indexOfLastPlanet = currentPage * planetPerPage;
    const indexOfFirstPlanet = indexOfLastPlanet - planetPerPage;
    const currentPlanet = planets.slice(indexOfFirstPlanet, indexOfLastPlanet);


    const handleOpenModal = (planet) => {
      setSelectedPlanet({...planet, isPlanet: true});
      openModal();
    };

    const pagination = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    return (
      <>
      <div className="main-container">
        {currentPlanet.map((planet) => {
          return (
            <Card
              key={planet._id}
              name={planet.name}
             
            >
              <button onClick={() => handleOpenModal(planet)}>OpenDetail</button>
            </Card>
          );
        })}
        {isOpenModal && selectedPlanet && (
          <Modals isOpen={isOpenModal} closeModal={closeModal} >
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
      </>
    );
  };


export default Planets;
