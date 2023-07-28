import Card from "../../GenericComponents/Card/Card";
import { useSelector } from 'react-redux';
// import './People.scss'
import Modals from "../../GenericComponents/Modal/Modals";
import { useModal } from "../../hooks/useModal";
import { useState } from "react";
import Pagination from "../../GenericComponents/Pagination/Pagination";


const Vehicles = ()=>{
    const vehicles = useSelector((state) => state.vehicles);

    const [selectedVehicle, setselectedVehicle] = useState(null);
    const [isOpenModal, openModal, closeModal] = useModal(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [vehiclePerPage, setVehiclePerPage] = useState(8);
    const indexOfLastVehicle = currentPage * vehiclePerPage;
    const indexOfFirstVehicle = indexOfLastVehicle - vehiclePerPage;
    const currentVehicle = vehicles.slice(indexOfFirstVehicle, indexOfLastVehicle);

    const handleOpenModal = (vehicles) => {
      setselectedVehicle({...vehicles, isVehicle: true});
      openModal();
    };

    const pagination = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    return (
      <>
      <div className="main-container">
        {currentVehicle.map((vehicle) => {
          return (
            <Card
              key={vehicle._id}
              name={vehicle.name}
             
            >
              <button onClick={() => handleOpenModal(vehicle)}>OpenDetail</button>
            </Card>
          );
        })}
        {isOpenModal && selectedVehicle && (
          <Modals isOpen={isOpenModal} closeModal={closeModal} >
            {selectedVehicle}
            
          </Modals>
        )}
      </div>
      <Pagination
          propPerPage={vehiclePerPage}
          length={vehicles.length}
          pagination={pagination}
          currentPage={currentPage}
        />
      </>
    );
  };


export default Vehicles;
