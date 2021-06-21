import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import ShowMovie from "../components/ShowMovie";
import { getMoviesThunk } from "../redux/modules/movies";

export default function NowPlayingContainer() {
  const datas = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const path = useHistory();

  const title = path.location.pathname.toUpperCase().substr(1);

  const imgAddress = "https://image.tmdb.org/t/p/w500";

  const param = useParams();

  console.log("", param);

  const getMovie = useCallback(() => {
    if (param.id === undefined) {
      dispatch(getMoviesThunk(path.location.pathname, 1));
    } else {
      dispatch(getMoviesThunk(param.id));
    }
  }, [dispatch, param, path.location.pathname]);

  const clickDetail = (id) => {};

  return (
    <ShowMovie
      title={title}
      datas={datas}
      imgAddress={imgAddress}
      getMovie={getMovie}
      clickDetail={clickDetail}
    />
  );
}
