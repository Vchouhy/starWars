// import Card from "../../GenericComponents/Card/Card";
// import { useSelector } from 'react-redux';
// import Modals from "../../GenericComponents/Modal/Modals";
// import { useModal } from "../../hooks/useModal";
// import { useState } from "react";
// import Pagination from "../../GenericComponents/Pagination/Pagination";
// import SearchBar from "../../GenericComponents/SearchBar/SerchBar";

// const Vehicles = () => {
//   const searchResults = useSelector((state) => state.searchResults.vehicles);
//   const vehicles = useSelector((state) => state.vehicles);
//   const vehiclesResults = searchResults && searchResults.vehicles && searchResults.vehicles.length ? searchResults.vehicles : vehicles;


//   const [selectedVehicle, setselectedVehicle] = useState(null);
//   const [isOpenModal, openModal, closeModal] = useModal(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [vehiclePerPage, setVehiclePerPage] = useState(8);
//   const indexOfLastVehicle = currentPage * vehiclePerPage;
//   const indexOfFirstVehicle = indexOfLastVehicle - vehiclePerPage;
//   // const currentVehicle = vehiclesResults ? vehiclesResults.slice(indexOfFirstVehicle, indexOfLastVehicle) : vehicles.slice(indexOfFirstVehicle, indexOfLastVehicle);
//   const currentVehicle = vehiclesResults ? vehiclesResults.slice(indexOfFirstVehicle, indexOfLastVehicle) : [];

//   const handleOpenModal = (vehicle) => {
//     setselectedVehicle({ ...vehicle, isVehicle: true });
//     openModal();
//   };

//   const pagination = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <>
//       <SearchBar prop='vehicles' />
//       <div className="main-container">
//         {currentVehicle.map((vehicle) => {
//           return (
//             <Card key={vehicle._id} name={vehicle.name}>
//               <button onClick={() => handleOpenModal(vehicle)}>OpenDetail</button>
//             </Card>
//           );
//         })}
//         {isOpenModal && selectedVehicle && (
//           <Modals isOpen={isOpenModal} closeModal={closeModal}>
//             {selectedVehicle.name} {/* Here you can access other properties of the vehicle */}
//           </Modals>
//         )}
//       </div>
//       <Pagination propPerPage={vehiclePerPage} length={vehicles.length} pagination={pagination} currentPage={currentPage} />
//     </>
//   );
// };

// export default Vehicles;



import Card from "../../GenericComponents/Card/Card";
import { useSelector } from 'react-redux';
import Modals from "../../GenericComponents/Modal/Modals";
import { useModal } from "../../hooks/useModal";
import { useState } from "react";
import Pagination from "../../GenericComponents/Pagination/Pagination";
import SearchBar from "../../GenericComponents/SearchBar/SerchBar";

const Vehicles = () => {
  const searchResults = useSelector((state) => state.searchResults.vehicles);
  const vehicles = useSelector((state) => state.vehicles);
  const vehiclesResults = searchResults && searchResults.length ? searchResults : vehicles;

  const [selectedVehicle, setselectedVehicle] = useState(null);
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [vehiclePerPage, setVehiclePerPage] = useState(8);
  const indexOfLastVehicle = currentPage * vehiclePerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclePerPage;
  const currentVehicle = vehiclesResults ? vehiclesResults.slice(indexOfFirstVehicle, indexOfLastVehicle) : vehicles.slice(indexOfFirstVehicle, indexOfLastVehicle);

  const handleOpenModal = (vehicle) => {
    setselectedVehicle({ ...vehicle, isVehicle: true });
    openModal();
  };

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <SearchBar prop='vehicles' />
      <div className="vehicles-main-container">
        {currentVehicle.map((vehicle) => {
          return (
            <Card key={vehicle._id} name={vehicle.name}>
              <button onClick={() => handleOpenModal(vehicle)}>OpenDetail</button>
            </Card>
          );
        })}
        {isOpenModal && selectedVehicle && (
          <Modals isOpen={isOpenModal} closeModal={closeModal}>
            {selectedVehicle}
          </Modals>
        )}
      </div>
      <Pagination propPerPage={vehiclePerPage} length={vehicles.length} pagination={pagination} currentPage={currentPage} />
    </>
  );
};

export default Vehicles;
