import { GET_PEOPLE, GET_PLANETS, GET_VEHICLES, GET_FILMS, SEARCH_ITEMS, ORDER_ASC_DES, GET_ALL_DATA,RESET_SEARCH_RESULTS  } from "./actions";

const initialState = {
  people: [],
  films: [],
  planets: [],
  vehicles: [],
  peopleId: [],
  total: 0,
  loading: true,
  searchResults: {
    planets: [],
    people: [],
    vehicles: [],
    films: []
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DATA:
      return {
        ...state,
        people: action.payload.people,
        planets: action.payload.planets,
        vehicles: action.payload.vehicles,
        films: action.payload.films,
      };
    case SEARCH_ITEMS:
      const { prop, hasResults } = action.payload;
      return {
        ...state,
        searchResults: {
          ...state.searchResults,
          [prop]: hasResults,
        },
      };
      case RESET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: initialState.searchResults,
      };
    case GET_PEOPLE:
      return {
        ...state,
        people: action.payload,
      };
    case GET_FILMS:
      return { ...state, films: action.payload };
    case GET_PLANETS:
      return { ...state, planets: action.payload };
    case GET_VEHICLES:
      return { ...state, vehicles: action.payload };
      case ORDER_ASC_DES:
        const { propToOrder, order } = action.payload;
        const currentResults = state.searchResults[propToOrder];
        if (!Array.isArray(currentResults)) return state; // Si no es un array, devolver el estado sin cambios
  
        // Ordena los resultados según el criterio de ordenamiento ascendente o descendente
        const sortedResults = [...currentResults].sort((a, b) => {
          return order === 'asc' ? a.localeCompare(b) : b.localeCompare(a);
        });
  
        // Actualiza los resultados ordenados en el estado
        return {
          ...state,
          searchResults: {
            ...state.searchResults,
            [propToOrder]: sortedResults,
          },
        };
  
    default:
      return { ...state };
      
  }
};


export default rootReducer;

