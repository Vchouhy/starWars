import axios from "axios";

export const GET_PEOPLE = "GET_PEOPLE"
export const GET_PLANETS = "GET_PLANETS"
export const GET_VEHICLES = "GET_VEHICLES"
export const GET_FILMS = "GET_FILMS"
export const PEOPLE_ID = "PEOPLE_ID"
export const SEARCH_ITEMS = "SEARCH_ITEMS"
export const ORDER_ASC_DES = 'ORDER_ASC_DES'
export const GET_ALL_DATA = "GET_ALL_DATA"

//Section PEOPLE

export const getAllPeople = () => {
   return async function (dispatch) {
     try {
       const apiData = await axios.get(
         `http://localhost:5001/people`
       );
      const peopleData = apiData.data;
      dispatch({ type: GET_PEOPLE, payload: peopleData });
      
     } catch (error) {
       console.log('Error', error);
     }
   };
 };


//Section PLANETS
export const getAllPlanets = () => {
   return async function(dispatch){
    const apiData = await axios.get("http://localhost:5001/planets")
    
    const planets = apiData.data;

    dispatch({type: GET_PLANETS, payload: planets})
   }
};


//Section VEHICLES
export const getAllVehicles = () => {
   return async function(dispatch){
    const apiData = await axios.get("http://localhost:5001/vehicles")
    
    const user = apiData.data;

    dispatch({type: GET_VEHICLES, payload: user})
   }
};


//Section FILMS
export const getAllFilms = () => {
   return async function(dispatch){
    const apiData = await axios.get("http://localhost:5001/films")
    
    const user = apiData.data;

    dispatch({type: GET_FILMS, payload: user})
   }
};

//Section GRAL

export const searchItems = (searchQuery, prop) => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:5001/${prop}/search?search=${searchQuery}`);
    const result = apiData.data;
    dispatch({ type: SEARCH_ITEMS, payload: { prop, result } });
  };
};

export const getAllData = () => {
  return async function (dispatch) {
    try {
      const [peopleData, planetsData, vehiclesData, filmsData] = await Promise.all([
        axios.get("http://localhost:5001/people"),
        axios.get("http://localhost:5001/planets"),
        axios.get("http://localhost:5001/vehicles"),
        axios.get("http://localhost:5001/films"),
      ]);

      const allData = {
        people: peopleData.data,
        planets: planetsData.data,
        vehicles: vehiclesData.data,
        films: filmsData.data,
      };

      dispatch({ type: GET_ALL_DATA, payload: allData });
    } catch (error) {
      console.log("Error", error);
    }
  };
};