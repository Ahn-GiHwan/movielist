import { createActions, handleActions } from "redux-actions";

const prefix = "movielist/movies";

export const { getMovies } = createActions("GET_MOVIES", { prefix });

const initialState = {
  movies: [],
};

const reducer = handleActions(
  {
    GET_MOVIES: (state, action) => {
      return {
        ...state,
      };
    },
  },
  initialState,
  { prefix }
);

export default reducer;
