import React, { useState, useEffect } from "react";
import Card from "../../GenericComponents/Card/Card";
import { useSelector } from "react-redux";
import Modals from "../../GenericComponents/Modal/Modals";
import { useModal } from "../../hooks/useModal";
import Pagination from "../../GenericComponents/Pagination/Pagination";
import SearchBar from "../../GenericComponents/SearchBar/SerchBar";
import "./People.scss";


const People = () => {
  const searchResults = useSelector((state) => state.searchResults.people);
  const people = useSelector((state) => state.people);
  const peopleResults = searchResults && searchResults.length ? searchResults : null;

  const [selectedPerson, setselectedPerson] = useState(null);
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [personPerPage, setPersonPerPage] = useState(8);
  const [hasSearchResults, setHasSearchResults] = useState(false);
  const [currentPerson, setCurrentPerson] = useState([]);

  useEffect(() => {
    const indexOfLastPerson = currentPage * personPerPage;
    const indexOfFirstPerson = indexOfLastPerson - personPerPage;
    if (hasSearchResults && searchResults) {
      setCurrentPerson(searchResults.slice(indexOfFirstPerson, indexOfLastPerson));
    } else {
      setCurrentPerson(people.slice(indexOfFirstPerson, indexOfLastPerson));
    }
  }, [hasSearchResults, currentPage, personPerPage, people, searchResults]);

  useEffect(() => {
    setHasSearchResults(searchResults && searchResults.length > 0);
    setCurrentPage(1);
  }, [searchResults]);

  const handleOpenModal = (person) => {
    setselectedPerson({ ...person, isPerson: true });
    openModal();
  };

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
    <div>
        <SearchBar prop="people" />
      <div className="people-main-container">
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
    </div>
      <Pagination
        propPerPage={personPerPage}
        length={hasSearchResults ? searchResults.length : people.length}
        pagination={pagination}
        currentPage={currentPage}
      />
    </>
  );
        };

export default People;
