import React, { useState, useEffect } from "react";
import Card from "../GenericComponents/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import Modals from "../GenericComponents/Modal/Modals";
import { useModal } from "../../hooks/useModal";
import Pagination from "../GenericComponents/Pagination/Pagination";
import SearchBar from "../GenericComponents/SearchBar/SearchBar";
import "./Vehicles.scss";
import { getAllVehicles, searchItems, resetSearchResults } from "../../redux/actions";

const Vehicles = () => {
  const searchResults = useSelector((state) => state.searchResults.vehicles);
  const vehicles = useSelector((state) => state.vehicles);
  const [selectedVehicle, setselectedVehicle] = useState(null);
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [vehiclePerPage, setVehiclePerPage] = useState(10);
  const [hasSearchResults, setHasSearchResults] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const indexOfLastVehicle = currentPage * vehiclePerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclePerPage 
  const currentVehicle = vehicles.slice(indexOfFirstVehicle, indexOfLastVehicle)
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllVehicles());
    return()=>{
      dispatch(resetSearchResults())
    }
  }, [dispatch]);


 
  const handleOpenModal = (vehicle) => {
    setselectedVehicle({ ...vehicle, isVehicle: true });
    openModal();
  };

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);


  };
  const handleSearch = (searchQuery) => {
    dispatch(searchItems(searchQuery, "vehicles"));
    setCurrentPage(1);

  };

    useEffect(() => {
    setHasSearchResults(searchResults !== null && searchResults.length > 0);
  }, [searchResults]);


  
  let dataToRender;
  if (searchResults !== null && searchResults.length > 0) {
    dataToRender = searchResults.slice(indexOfFirstVehicle, indexOfLastVehicle);
  } else if (searchResults !== null && searchResults.length === 0) {
    dataToRender = currentVehicle;
  } else if (searchResults?.length === 0){
    dataToRender = [];
  }



  return (
    <div className="estrellas ">
    <div className={`${isOpenModal ? "blur-background" : ""}`}>
      <SearchBar onSearch={handleSearch}>{'vehicles'}</SearchBar>
      <div className="vehicles-main-container">
      {dataToRender?.length > 0 ? (
          // Si dataToRender tiene elementos, mostrar los resultados
          dataToRender.map((vehicle) => (
            <div key={vehicle._id} onClick={() => handleOpenModal(vehicle)}>
              <Card name={vehicle.name} type={"vehicle"}>
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
        {isOpenModal && selectedVehicle && (
          <Modals isOpen={isOpenModal} closeModal={closeModal}>
            {selectedVehicle}
          </Modals>
        )}
    <Pagination
          propPerPage={vehiclePerPage}
          length={
            searchResults !== null && searchResults.length > 0
            ? searchResults.length
            : searchResults !== null
            ? vehicles.length
            : 0
          }
          pagination={pagination}
          currentPage={currentPage}
    />
  </div>
  );
};

export default Vehicles;
