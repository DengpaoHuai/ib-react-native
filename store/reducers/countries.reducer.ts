import { ADD, SET_ALL } from "../actions/countries.actions";

export type Country = {
  _id: string;
  name: string;
  region: string;
  population: number;
};

type State = {
  countries: Country[];
};

const initialState: State = {
  countries: [],
};

const countriesReducer = (
  state = initialState,
  action: {
    type: string;
    payload: any;
  }
) => {
  switch (action.type) {
    case SET_ALL:
      return {
        ...state,
        countries: action.payload,
      };
    case ADD:
      return {
        ...state,
        countries: [...state.countries, action.payload],
      };
    default:
      return state;
  }
};

export default countriesReducer;
