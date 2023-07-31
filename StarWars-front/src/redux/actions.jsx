import axios from "axios";

export const GET_PEOPLE = "GET_PEOPLE"
export const GET_PLANETS = "GET_PLANETS"
export const GET_VEHICLES = "GET_VEHICLES"
export const GET_FILMS = "GET_FILMS"
export const PEOPLE_ID = "PEOPLE_ID"
export const SEARCH_ITEMS = "SEARCH_ITEMS"
export const ORDER_ASC_DES = 'ORDER_ASC_DES'
export const GET_ALL_DATA = "GET_ALL_DATA"
export const RESET_SEARCH_RESULTS = "RESET_SEARCH_RESULTS"

//Section PEOPLE

export const getAllPeople = () => {
   return async function (dispatch) {
     try {
       const apiData = await axios.get(
         `/people`
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
    const apiData = await axios.get("/planets")
    
    const planets = apiData.data;

    dispatch({type: GET_PLANETS, payload: planets})
   }
};


//Section VEHICLES
export const getAllVehicles = () => {
   return async function(dispatch){
    const apiData = await axios.get("/vehicles")
    
    const user = apiData.data;

    dispatch({type: GET_VEHICLES, payload: user})
   }
};


//Section FILMS
export const getAllFilms = () => {
   return async function(dispatch){
    const apiData = await axios.get("/films")
    
    const user = apiData.data;

    dispatch({type: GET_FILMS, payload: user})
   }
};

//Section GRAL
export const resetSearchResults = () => {
  return {
    type: RESET_SEARCH_RESULTS
  };
};

export const searchItems = (searchQuery, prop) => {
  return async function (dispatch) {
    if (!prop) {
      // Si prop es undefined, asigna los valores iniciales del estado a hasResults
      dispatch(resetSearchResults());
      return;
    }
    const apiData = await axios.get(`/${prop}/search?search=${searchQuery}`);
    const result = apiData.data;
    const hasResults = result.length > 0 ? result : null;
    dispatch({ type: SEARCH_ITEMS, payload: { prop, hasResults } });
  };
};

export const getAllData = () => {
  return async function (dispatch) {
    try {
      const [peopleData, planetsData, vehiclesData, filmsData] = await Promise.all([
        axios.get("/people"),
        axios.get("/planets"),
        axios.get("/vehicles"),
        axios.get("/films"),
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