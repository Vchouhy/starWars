// import React from "react";
// import "./Modals.scss";

// const Modals = ({ children, isOpen, closeModal  }) => {
//   const handleContainerClick = (e) => e.stopPropagation();

//   // Check the type of data (film, person, planet, or vehicle)
//   const isPerson = children.isPerson;
//   const personUrl = 'characters/'
//   const isPlanet = children.isPlanet;
//   const planetUrl = 'planets/'
//   const isVehicle = children.isVehicle;
//   const vehicleUrl = 'vehicles/'
//   const isFilm = children.isFilm
//   const filmUrl = 'films/'

// function getResourceImageUrl(resourceType, url) {
//   const imgURL = `https://starwars-visualguide.com/assets/img/${resourceType}/`;
  
//   function getId(url) {
//     return url.split('/')[url.split('/').length - 2];
//   }

//   const resourceId = getId(url);
//   const imageUrl = `url(${imgURL}${resourceId}.jpg)`;

//   return imageUrl;
// }




//   return (
//     <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
//       <div className="modal-container" onClick={handleContainerClick}>
//         <button className="modal-close" onClick={closeModal}>
//           X
//         </button>
//         {isFilm && (
//           <div>
//             <h3>{children.title}</h3>
//             <p>Episode: {children.episode_id}</p>
//             <p>Director: {children.director}</p>
//             <p>Opening Crawl: {children.opening_crawl}</p>
//             <p>Release Date: {children.release_date}</p>
//             <p>Characters: {children.characters.join(", ")}</p>
//             <p>Release Date: {children.release_date}</p>
//             <p>Producer: {children.producer}</p>
//             <p>Species: {children.species?.join(", ")}</p>
//             <p>Planets: {children.planets.join(", ")}</p>
//             <p>Starships: {children.starships.join(", ")}</p>
//             <p>Vehicles: {children.vehicles.join(", ")}</p>
//             <p>Characters: {children.characters.join(", ")}</p>
//           </div>
//         )}
//         {isPerson && (
//           <div style={
//             { backgroundImage: children.photo }
//             }>
//             <h3>{children.name}</h3>
//             <p>Birth Year: {children.birth_year}</p>
//             <p>Eye Color: {children.eye_color}</p>
//             <p>Gender: {children.gender}</p>
//             <p>Hair Color: {children.hair_color}</p>
//             <p>Height: {children.height}</p>
//             <p>Mass: {children.mass}</p>
//             <p>Skin Color: {children.skin_color}</p>
//             <p>Homeworld: {children.homeworld}</p>
//             <p>Films: {children.films.join(", ")}</p>
//             <p>Species: {children.species}</p>
//             <p>Starships: {children.starships?.join(", ")}</p>
//             <p>Vehicles: {children.vehicles?.join(", ")}</p>
//           </div>
//         )}
//         {isPlanet && (
//           <div>
//             <h3>{children.name}</h3>
//             <p>Climate: {children.climate}</p>
//             <p>Diameter: {children.diameter}</p>
//             <p>Gravity: {children.gravity}</p>
//             <p>Orbital Period: {children.orbital_period}</p>
//             <p>Population: {children.population}</p>
//             <p>Rotation Period: {children.rotation_period}</p>
//             <p>Surface Water: {children.surface_water}</p>
//             <p>Terrain: {children.terrain}</p>
//             <p>Films: {children.films.join(", ")}</p>
//             <p>Residents: {children.residents.join(", ")}</p>
//           </div>

//         )}
//         {isVehicle && (
//           <div>
//             <h3>{children.name}</h3>
//             <p>Cargo Capacity: {children.cargo_capacity}</p>
//             <p>Consumables: {children.consumables}</p>
//             <p>Cost in Credits: {children.cost_in_credits}</p>
//             <p>Crew: {children.crew}</p>
//             <p>Length: {children.length}</p>
//             <p>Manufacturer: {children.manufacturer}</p>
//             <p>Model: {children.model}</p>
//             <p>Passengers: {children.passengers}</p>
//             <p>Pilots: {children.pilots.join(", ")}</p>
//             <p>Vehicle Class: {children.vehicle_class}</p>
//             <p>Max Atmospher Speed: {children.max_atmosphering_speed}</p>
//             <p>Films: {children.films.join(", ")}</p>

//           </div>
//         )}
//       </div>
//     </article>
//   );
// };

// export default Modals;
import React from "react";
import "./Modals.scss";

const Modals = ({ children, isOpen, closeModal }) => {
  console.log(children)
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
          <div>
            <h3>{children.title}</h3>
            <p>Episode: {children.episode_id}</p>
            <p>Director: {children.director}</p>
            <p>Opening Crawl: {children.opening_crawl}</p>
            <p>Release Date: {children.release_date}</p>
            <p>Producer: {children.producer}</p>
            <p>Species: {children.species?.join(", ")}</p>
            <p>Planets: {children.planets.join(", ")}</p>
            <p>Starships: {children.starships.join(", ")}</p>
            <p>Vehicles: {children.vehicles.join(", ")}</p>
            <p>Characters: {children.characters.join(", ")}</p>
            <div
              style={{
                backgroundImage: getResourceImageUrl("films", children.url),
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                height: "200px", // Adjust the height as needed
                width: "200px", // Adjust the width as needed
                margin: "0 auto", // Center the image horizontally
              }}
            />
          </div>
        )}
        {isPerson && (
          <div>
            <h3>{children.name}</h3>
            <p>Birth Year: {children.birth_year}</p>
            <p>Eye Color: {children.eye_color}</p>
            <p>Gender: {children.gender}</p>
            <p>Hair Color: {children.hair_color}</p>
            <p>Height: {children.height}</p>
            <p>Mass: {children.mass}</p>
            <p>Skin Color: {children.skin_color}</p>
            <p>Homeworld: {children.homeworld}</p>
            <p>Films: {children.films.join(", ")}</p>
            <p>Species: {children.species}</p>
            <p>Starships: {children.starships?.join(", ")}</p>
            <p>Vehicles: {children.vehicles?.join(", ")}</p>
            <div
              style={{
                backgroundImage: getResourceImageUrl("characters", children.url),
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                height: "200px", // Adjust the height as needed
                width: "200px", // Adjust the width as needed
                margin: "0 auto", // Center the image horizontally
              }}
            />

          </div>
        )}
        {isPlanet && (
          <div>
            <h3>{children.name}</h3>
            <p>Climate: {children.climate}</p>
            <p>Diameter: {children.diameter}</p>
            <p>Gravity: {children.gravity}</p>
            <p>Orbital Period: {children.orbital_period}</p>
            <p>Population: {children.population}</p>
            <p>Rotation Period: {children.rotation_period}</p>
            <p>Surface Water: {children.surface_water}</p>
            <p>Terrain: {children.terrain}</p>
            <p>Films: {children.films.join(", ")}</p>
            <p>Residents: {children.residents.join(", ")}</p>
            <div
              style={{
                backgroundImage: getResourceImageUrl("planets", children.url),
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                height: "200px", // Adjust the height as needed
                width: "200px", // Adjust the width as needed
                margin: "0 auto", // Center the image horizontally
              }}
            />
          </div>
        )}
        {isVehicle && (
          <div>
            <h3>{children.name}</h3>
            <p>Cargo Capacity: {children.cargo_capacity}</p>
            <p>Consumables: {children.consumables}</p>
            <p>Cost in Credits: {children.cost_in_credits}</p>
            <p>Crew: {children.crew}</p>
            <p>Length: {children.length}</p>
            <p>Manufacturer: {children.manufacturer}</p>
            <p>Model: {children.model}</p>
            <p>Passengers: {children.passengers}</p>
            <p>Pilots: {children.pilots.join(", ")}</p>
            <p>Vehicle Class: {children.vehicle_class}</p>
            <p>Max Atmospher Speed: {children.max_atmosphering_speed}</p>
            <p>Films: {children.films.join(", ")}</p>
            <div
              style={{
                backgroundImage: getResourceImageUrl("vehicles", children.url),
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                height: "200px", // Adjust the height as needed
                width: "200px", // Adjust the width as needed
                margin: "0 auto", // Center the image horizontally
              }}
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default Modals;
