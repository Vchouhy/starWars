import { GET_PEOPLE, GET_PLANETS, GET_VEHICLES, GET_FILMS, SEARCH_ITEMS  } from "./actions";

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
    default:
      return { ...state };
  }
};


export default rootReducer;
