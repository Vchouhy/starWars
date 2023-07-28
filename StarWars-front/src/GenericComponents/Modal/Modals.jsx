import React from "react";
import './Modals.scss'

const Modals = ({children, isOpen, closeModal}) => {



    const handleContainerClick = (e)=>e.stopPropagation();
    const isPerson = children.isPerson;
    const isPlanet = children.isPlanet;
    const isVehicle = children.isVehicle;
    const isFilm = children.isFilm

    return(
        <article className={`modal ${isOpen && "is-open"}`}  onClick={closeModal}>

            <div className="modal-container" onClick={handleContainerClick}>
                <button className="modal-close" onClick={closeModal}>X</button>
                {isPerson && (
                    <div>
                <h3>{children.name}</h3>
                <p>Films:{children.films.join(", ")}</p>
                

                    <p>Vehicles: {children.vehicles.join(", ")}</p>
                </div>
                )}
                {isPlanet && (
                    <div>
                        <h3>{children.name}</h3>
                <p>Films:{children.films.join(", ")}</p>
                <p>Population: {children.population}</p>
                <p>Residents: {children.residents.join(", ")}</p>
                    </div>
                )}

{isVehicle && (
                    <div>
                        <h3>{children.name}</h3>
                <p>Films:{children.films.join(", ")}</p>
                <p>Pilots: {children.pilots.join(', ')}</p>
                <p>Crew: {children.crew}</p>
                    </div>
                )}  
{isFilm && (
                    <div>
                        <h3>{children.title}</h3>
                <p>director:{children.director}</p>
                <p>vehicles: {children.vehicles.join(', ')}</p>
                <p>planets: {children.planets.join(', ')}</p>
                <p>characters: {children.characters.join(', ')}</p>

                    </div>
                )}  
            </div>
        </article>
    )
}

export default Modals;