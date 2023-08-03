import React, { useState, useEffect } from "react";
import Card from "../GenericComponents/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import Modals from "../GenericComponents/Modal/Modals";
import { useModal } from "../../hooks/useModal";
import Pagination from "../GenericComponents/Pagination/Pagination";
import SearchBar from "../GenericComponents/SearchBar/SearchBar";
import "./People.scss";
import { getAllPeople, searchItems, resetSearchResults, getPeopleById } from "../../redux/actions";

const People = () => {
  const searchResults = useSelector((state) => state.searchResults.people);
  const people = useSelector((state) => state.people);

  const [selectedPerson, setselectedPerson] = useState(null);
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [personPerPage, setPersonPerPage] = useState(10);
  const [hasSearchResults, setHasSearchResults] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const indexOfLastPerson = currentPage * personPerPage;
  const indexOfFirstPerson = indexOfLastPerson - personPerPage 
  const currentPerson = people.slice(indexOfFirstPerson, indexOfLastPerson)
  const [searchQuery, setSearchQuery] = useState("");


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPeople());
    return () => {
      dispatch(resetSearchResults());
    };
  }, [dispatch]);

  const handleOpenModal = (person) => {
    setselectedPerson({ ...person, isPerson: true });
    openModal();
  };

  const pagination = (pageNumber)=>{
    setCurrentPage(pageNumber)
  }

  const handleSearch = (searchQuery) => {
    dispatch(searchItems(searchQuery, "planets"));
    setCurrentPage(1);

  };

  useEffect(() => {
    setHasSearchResults(searchResults !== null && searchResults.length > 0);
  }, [searchResults]);


  let dataToRender;
  if (searchResults !== null && searchResults.length > 0) {
    dataToRender = searchResults.slice(indexOfFirstPerson, indexOfLastPerson);

  } else if (searchResults !== null && searchResults.length === 0) {
    dataToRender = currentPerson;
  } else if (searchResults?.length === 0){
    dataToRender = [];
  }



    return (
    <div className="estrellas ">
      <div className={`${isOpenModal ? "blur-background" : ""}`}>
        <SearchBar onSearch={handleSearch}>{'people'}</SearchBar>
        <div className="people-main-container">
        {dataToRender?.length > 0 ? (
            // Si dataToRender tiene elementos, mostrar los resultados
            dataToRender.map((person) => (
              <div key={person._id} onClick={() => handleOpenModal(person)}>
                <Card name={person.name} type={"person"}>
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
      {isOpenModal && selectedPerson && (
        <Modals isOpen={isOpenModal} closeModal={closeModal}>
          {selectedPerson}
        </Modals>
      )}
      <Pagination
        propPerPage={personPerPage}
        length={ searchResults !== null && searchResults.length > 0
          ? searchResults.length
          : searchResults !== null
          ? people.length
          : 0}
        pagination={pagination}
        currentPage={currentPage}
      />
    </div>
  );
};

export default People;
