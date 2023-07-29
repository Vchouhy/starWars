import { GET_PEOPLE, GET_PLANETS, GET_VEHICLES, GET_FILMS, SEARCH_ITEMS, ORDER_ASC_DES  } from "./actions";

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
    case SEARCH_ITEMS:
      const { prop, result } = action.payload;
      return {
        ...state,
        searchResults: {
          ...state.searchResults,
          [prop]: result,
        },
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
// import { ORDER_ASC_DES, SEARCH_ITEMS, GET_PEOPLE, GET_PLANETS, GET_VEHICLES, GET_FILMS } from './actions';

// const initialState = {
//   people: [],
//   films: [],
//   planets: [],
//   vehicles: [],
//   peopleId: [],
//   total: 0,
//   loading: true,
//   searchResults: {
//     planets: { data: [], order: 'asc' },
//     people: { data: [], order: 'asc' },
//     vehicles: { data: [], order: 'asc' },
//     films: { data: [], order: 'asc' },
//   },
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SEARCH_ITEMS:
//       const { prop, result } = action.payload;
//       return {
//         ...state,
//         searchResults: {
//           ...state.searchResults,
//           [prop]: { data: result, order: state.searchResults[prop].order },
//         },
//       };
//     case GET_PEOPLE:
//       return {
//         ...state,
//         people: action.payload,
//       };
//     case GET_FILMS:
//       return { ...state, films: action.payload };
//     case GET_PLANETS:
//       return { ...state, planets: action.payload };
//     case GET_VEHICLES:
//       return { ...state, vehicles: action.payload };
     
//     default:
//       return state;
//   }
// };

// export default rootReducer;
