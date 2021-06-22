import { createActions, handleActions } from "redux-actions";
import axios from "axios";

const prefix = "movielist/movies";

export const { getMovies, getError } = createActions(
  { GET_MOVIES: (result) => ({ result }) },
  "GET_ERROR",
  { prefix }
);

const initialState = {
  dates: "",
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
  error: null,
};

const reducer = handleActions(
  {
    GET_MOVIES: (state, { payload: { result } }) => {
      return {
        ...state,
        dates: result.dates,
        page: result.page,
        results: result.results,
        total_pages: result.total_pages,
        total_results: result.total_results,
      };
    },
    GET_ERROR: (state, { payload: { error } }) => {
      return {
        ...state,
        error,
      };
    },
  },
  initialState,
  { prefix }
);

export function getMoviesThunk(type, page = 1) {
  const first = type.split("")[0];
  if (first === "/") {
    return async (dispatch) => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie${type}?api_key=a721dd910292becd0d78ed436463db21&language=en-US&page=${page}`
        );
        dispatch(getMovies(res.data));
      } catch (e) {
        dispatch(getError(e));
      }
    };
  } else {
    return async (dispatch) => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=a721dd910292becd0d78ed436463db21&language=en-US&query=${type}&page=1&include_adult=false`
        );
        console.log(res.data);
        dispatch(getMovies(res.data));
      } catch (e) {
        dispatch(getError(e));
      }
    };
  }
}

export default reducer;
