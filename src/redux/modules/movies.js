import { createActions, handleActions } from "redux-actions";
import axios from "axios";

const prefix = "movielist/movies";

export const { getMovies, getError, getMovieDetail } = createActions(
  {
    GET_MOVIES: (result) => ({ result }),
    GET_ERROR: () => {},
    GET_MOVIE_DETAIL: (result) => ({ result }),
  },
  { prefix }
);

const initialState = {
  dates: "",
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
  error: null,
  detail: {},
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
    GET_MOVIE_DETAIL: (state, { payload: { result } }) => {
      return {
        ...state,
        detail: result,
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
          `https://api.themoviedb.org/3/search/movie?api_key=a721dd910292becd0d78ed436463db21&language=en-US&query=${type}&page=${page}&include_adult=false`
        );
        dispatch(getMovies(res.data));
      } catch (e) {
        dispatch(getError(e));
      }
    };
  }
}
export function getMoviesDetailThunk(id) {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=a721dd910292becd0d78ed436463db21&language=en-US`
      );
      dispatch(getMovieDetail(res.data));
    } catch (e) {
      dispatch(getError(e));
    }
  };
}

export default reducer;
