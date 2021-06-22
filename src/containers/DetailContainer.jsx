import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Detail from "../components/Detail";
import { getMoviesDetailThunk } from "../redux/modules/movies";

export default function DetailContainer() {
  const datas = useSelector((state) => state.movies.detail);

  const dispatch = useDispatch();

  const imgAddress = "https://image.tmdb.org/t/p/w300";

  const param = useParams();

  const history = useHistory();

  const onBack = () => {
    history.goBack();
  };

  const getMovie = useCallback(() => {
    dispatch(getMoviesDetailThunk(param.id));
  }, [dispatch, param.id]);

  return (
    <Detail
      datas={datas}
      param={param}
      imgAddress={imgAddress}
      getMovie={getMovie}
      onBack={onBack}
    />
  );
}
