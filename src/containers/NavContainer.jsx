import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Nav from "../components/Nav";
import { getMoviesThunk } from "../redux/modules/movies";

export default function NavContainer() {
  const inputRef = useRef();
  const history = useHistory();

  const dispatch = useDispatch();

  const onSearch = () => {
    history.push(`/${inputRef.current.value}`);
    dispatch(getMoviesThunk(inputRef.current.value));
  };

  return <Nav inputRef={inputRef} onSearch={onSearch} />;
}
