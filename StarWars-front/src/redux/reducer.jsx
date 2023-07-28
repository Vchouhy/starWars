import { GET_PEOPLE, GET_PLANETS, GET_VEHICLES, GET_FILMS,   } from "./actions";

const initialState = {
  people: [],
  films: [],
  planets: [],
  vehicles: [],
  peopleId: [],
  total: 0,
  loading: true,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE:
      return {
        ...state,
        people: action.payload
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
