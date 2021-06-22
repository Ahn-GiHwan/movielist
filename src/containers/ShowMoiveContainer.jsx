import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import ShowMovie from "../components/ShowMovie";
import { getMoviesThunk } from "../redux/modules/movies";

export default function NowPlayingContainer() {
  const datas = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const history = useHistory();

  const path = useHistory();

  const title = path.location.pathname.toUpperCase().substr(1);

  const imgAddress = "https://image.tmdb.org/t/p/w500";

  const totalPage = Number(datas.total_pages + "0");

  const param = useParams();

  const getMovie = useCallback(
    (id) => {
      if (param.id === undefined) {
        dispatch(getMoviesThunk(path.location.pathname, id));
      } else {
        dispatch(getMoviesThunk(param.id, id));
      }
    },
    [dispatch, param, path.location.pathname]
  );

  const clickDetail = (id) => {
    history.push(`/detail/${id}`);
  };

  const onPage = (id) => {
    getMovie(id);
  };

  return (
    <ShowMovie
      title={title}
      datas={datas}
      totalPage={totalPage}
      imgAddress={imgAddress}
      getMovie={getMovie}
      clickDetail={clickDetail}
      onPage={onPage}
    />
  );
}
