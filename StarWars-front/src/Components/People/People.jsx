import React, { useState } from "react";
import Card from "../../GenericComponents/Card/Card";
import { useSelector } from "react-redux";
import "./People.scss";
import Modals from "../../GenericComponents/Modal/Modals";
import { useModal } from "../../hooks/useModal";
import Pagination from "../../GenericComponents/Pagination/Pagination";

const People = () => {
  const people = useSelector((state) => state.people);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [peoplePerPage, setPeoplePerPage] = useState(8);
  const indexOfLastPerson = currentPage * peoplePerPage;
  const indexOfFirstPerson = indexOfLastPerson - peoplePerPage;
  const currentPerson = people.slice(indexOfFirstPerson, indexOfLastPerson);

  const handleOpenModal = (person) => {
    setSelectedPerson({ ...person, isPerson: true });
    openModal();
  };

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>

    <div className="main-container">
      {currentPerson.map((person) => {
        return (
          <Card key={person._id} name={person.name}>
            <button onClick={() => handleOpenModal(person)}>OpenDetail</button>
          </Card>
        );
      })}
      {isOpenModal && selectedPerson && (
        <Modals isOpen={isOpenModal} closeModal={closeModal}>
          {selectedPerson}
        </Modals>
      )}
    </div>
 
      <Pagination
          propPerPage={peoplePerPage}
          length={people.length}
          pagination={pagination}
          currentPage={currentPage}
        />
    </div>
  );
};

export default People;
