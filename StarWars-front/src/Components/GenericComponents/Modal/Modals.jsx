import React, {useEffect} from "react";
import "./Modals.scss";

const Modals = ({ children, isOpen, closeModal }) => {
  const handleContainerClick = (e) => e.stopPropagation();

  function getResourceImageUrl(resourceType, url) {
    const imgURL = `https://starwars-visualguide.com/assets/img/${resourceType}/`;
    const resourceId = getId(url);
    if (!resourceId) return null; // Handle invalid resource ID
    const imageUrl = `url(${imgURL}${resourceId}.jpg)`;

    return imageUrl;
  }

  function getId(url) {
    if (!url) return null;

    const match = url.match(/\/(\d+)\/$/);
    return match ? match[1] : null;
  }


  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  // Check the type of data (film, person, planet, or vehicle)
  const isPerson = children.isPerson;
  const isPlanet = children.isPlanet;
  const isVehicle = children.isVehicle;
  const isFilm = children.isFilm;

  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {isFilm && (
  <div className="modal-inside-container">
    <div className="modal-image">
      <div   className="modal-image"
        style={{
          backgroundImage: getResourceImageUrl("films", children.url),
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: "200px",
          width: "200px",
          margin: "0 auto",
          marginRight: "1rem",
        }}
      />
    </div>
    <div className="modal-text">
      <div className="modal-name">
        {children.title && <p>{children.title}</p>}
      </div>
      <div className="modal-description">
        {children.episode_id && <p><strong>Episode:</strong> {children.episode_id}</p>}
        {children.director && <p><strong>Director:</strong> {children.director}</p>}
        {children.opening_crawl && <p><strong>Opening Crawl:</strong> {children.opening_crawl}</p>}
        {children.release_date && <p><strong>Release Date:</strong> {children.release_date}</p>}
        {children.producer && <p><strong>Producer:</strong> {children.producer}</p>}
        {children.species && children.species.length > 0 && (
          <p><strong>Species:</strong> {children.species.join(", ")}</p>
        )}
        {children.planets && children.planets.length > 0 && (
          <p><strong>Planets:</strong> {children.planets.join(", ")}</p>
        )}
        {children.starships && children.starships.length > 0 && (
          <p><strong>Starships:</strong> {children.starships.join(", ")}</p>
        )}
        {children.vehicles && children.vehicles.length > 0 && (
          <p><strong>Vehicles:</strong> {children.vehicles.join(", ")}</p>
        )}
        {children.characters && children.characters.length > 0 && (
          <p><strong>Characters:</strong> {children.characters.join(", ")}</p>
        )}
      </div>
    </div>
  </div>
)}


{isPerson && (
  <div className="modal-inside-container">
    <div className="modal-image">
      <div   className="modal-image"
        style={{
          backgroundImage: getResourceImageUrl("characters", children.url),
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: "200px",
          width: "200px",
          margin: "0 auto",
          marginRight: "1rem"
        }}
      />
    </div>
    <div className="modal-text">
      <div className="modal-name">
        {children.name && <p>{children.name}</p>}
      </div>
      <div className="modal-description">
        {children.birth_year && <p><strong>Birth Year:</strong> {children.birth_year}</p>}
        {children.eye_color && <p><strong>Eye Color:</strong> {children.eye_color}</p>}
        {children.gender && <p><strong>Gender:</strong> {children.gender}</p>}
        {children.hair_color && <p><strong>Hair Color:</strong> {children.hair_color}</p>}
        {children.height && <p><strong>Height:</strong> {children.height}</p>}
        {children.mass && <p><strong>Mass:</strong> {children.mass}</p>}
        {children.skin_color && <p><strong>Skin Color:</strong> {children.skin_color}</p>}
        {children.homeworld && <p><strong>Homeworld:</strong> {children.homeworld}</p>}
        {children.films && children.films.length > 0 && (
          <p><strong>Films:</strong> {children.films.join(", ")}</p>
        )}
        {children.species && <p><strong>Species:</strong> {children.species}</p>}
        {children.starships && children.starships.length > 0 && (
          <p><strong>Starships:</strong> {children.starships.join(", ")}</p>
        )}
        {children.vehicles && children.vehicles.length > 0 && (
          <p><strong>Vehicles:</strong> {children.vehicles.join(", ")}</p>
        )}
      </div>
    </div>
  </div>
)}
{isPlanet && (
  <div className="modal-inside-container">
    <div className="modal-image">
      <div   className="modal-image"
        style={{
          backgroundImage: getResourceImageUrl("planets", children.url),
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: "200px",
          width: "200px",
          margin: "0 auto",
          marginRight: "1rem"
          
        }}
      />
    </div>
    <div className="modal-text">
      <div className="modal-name">
        {children.name && <p>{children.name}</p>}
      </div>
      <div className="modal-description">
        {children.climate && <p><strong>Climate:</strong> {children.climate}</p>}
        {children.diameter && <p><strong>Diameter:</strong> {children.diameter}</p>}
        {children.gravity && <p><strong>Gravity:</strong> {children.gravity}</p>}
        {children.orbital_period && <p><strong>Orbital Period:</strong> {children.orbital_period}</p>}
        {children.population && <p><strong>Population:</strong> {children.population}</p>}
        {children.rotation_period && <p><strong>Rotation Period:</strong> {children.rotation_period}</p>}
        {children.surface_water && <p><strong>Surface Water:</strong> {children.surface_water}</p>}
        {children.terrain && <p><strong>Terrain:</strong> {children.terrain}</p>}
        {children.films && children.films.length > 0 && (
          <p><strong>Films:</strong> {children.films.join(", ")}</p>
        )}
        {children.residents && children.residents.length > 0 && (
          <p><strong>Residents:</strong> {children.residents.join(", ")}</p>
        )}
      </div>
    </div>
  </div>
)}


{isVehicle && (
  <div className="modal-inside-container">
    <div className="modal-image">
      <div   className="modal-image"
        style={{
          backgroundImage: getResourceImageUrl("vehicles", children.url),
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: "200px",
          width: "200px",
          margin: "0 auto",
          marginRight: "1rem"

        }}
      />
    </div>
    <div className="modal-text">
      <div className="modal-name">
        {children.name && <p>{children.name}</p>}
      </div>
      <div className="modal-description">
        {children.cargo_capacity && <p><strong>Cargo Capacity:</strong> {children.cargo_capacity}</p>}
        {children.consumables && <p><strong>Consumables:</strong> {children.consumables}</p>}
        {children.cost_in_credits && <p><strong>Cost in Credits:</strong> {children.cost_in_credits}</p>}
        {children.crew && <p><strong>Crew:</strong> {children.crew}</p>}
        {children.length && <p><strong>Length:</strong> {children.length}</p>}
        {children.manufacturer && <p><strong>Manufacturer:</strong> {children.manufacturer}</p>}
        {children.model && <p><strong>Model:</strong> {children.model}</p>}
        {children.passengers && <p><strong>Passengers:</strong> {children.passengers}</p>}
        {children.pilots && children.pilots.length > 0 && (
          <p><strong>Pilots:</strong> {children.pilots.join(", ")}</p>
        )}
        {children.vehicle_class && <p><strong>Vehicle Class:</strong> {children.vehicle_class}</p>}
        {children.max_atmosphering_speed && (
          <p><strong>Max Atmospher Speed:</strong> {children.max_atmosphering_speed}</p>
        )}
        {children.films && children.films.length > 0 && (
          <p><strong>Films:</strong> {children.films.join(", ")}</p>
        )}
      </div>
    </div>
  </div>
)}

      </div>
    </article>
  );
};

export default Modals;
