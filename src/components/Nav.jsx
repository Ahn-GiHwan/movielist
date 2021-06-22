import { NavLink } from "react-router-dom";

const styles = {
  color: "#000",
  fontWeight: "700",
};

export default function Nav({ inputRef, onSearch }) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light "
      style={{ backgroundColor: "#e3f2fd", position: "sticky" }}
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          MovieList
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/now_playing"
                activeStyle={styles}
                exact
              >
                Now Playing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/popular" activeStyle={styles}>
                Popular
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/top_rated"
                activeStyle={styles}
              >
                Top Rated
              </NavLink>
            </li>
          </ul>
          <form
            className="d-flex"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              ref={inputRef}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={onSearch}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
