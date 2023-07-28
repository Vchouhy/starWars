import Card from "../../GenericComponents/Card/Card";
import { useSelector } from 'react-redux';
// import './People.scss'
import Modals from "../../GenericComponents/Modal/Modals";
import { useModal } from "../../hooks/useModal";
import { useState } from "react";


const Films = ()=>{
    const films = useSelector((state) => state.films);

    const [selectedFilm, setSelectedFilm] = useState(null);
    const [isOpenModal, openModal, closeModal] = useModal(false);


    const handleOpenModal = (film) => {
      setSelectedFilm({...film, isFilm: true});
      openModal();
    };

    return (
      <div className="main-container">
        {films.map((film) => {
          return (
            <Card
              key={film._id}
              name={film.title}
             
            >
              <button onClick={() => handleOpenModal(film)}>OpenDetail</button>
            </Card>
          );
        })}
        {isOpenModal && selectedFilm && (
          <Modals isOpen={isOpenModal} closeModal={closeModal} >
            {selectedFilm}
            
          </Modals>
        )}
      </div>
    );
  };


export default Films;
