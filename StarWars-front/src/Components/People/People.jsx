import React, { useState, useEffect } from "react";
import Card from "../../GenericComponents/Card/Card";
import { useSelector } from "react-redux";
import Modals from "../../GenericComponents/Modal/Modals";
import { useModal } from "../../hooks/useModal";
import Pagination from "../../GenericComponents/Pagination/Pagination";
import SearchBar from "../../GenericComponents/SearchBar/SerchBar";
import "./People.scss";
import { useDispatch } from "react-redux";
import { getAllPeople } from "../../redux/actions";

const People = () => {
  const searchResults = useSelector((state) => state.searchResults.people);
  const people = useSelector((state) => state.people);
  let peopleResults = '';

  const [selectedPerson, setselectedPerson] = useState(null);
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [personPerPage, setPersonPerPage] = useState(14);
  const [hasSearchResults, setHasSearchResults] = useState(false);
  const [currentPerson, setCurrentPerson] = useState([]);
  const [totalPages, setTotalPages] = useState(1);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPeople());
  }, [dispatch]);

  useEffect(() => {
    setTotalPages(Math.ceil(searchResults.length / personPerPage));
  }, [searchResults, personPerPage]);
  

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
    setselectedPerson({ ...person, isPerson: true,  });
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
            <Card key={person._id} name={person.name} className="card-people">
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