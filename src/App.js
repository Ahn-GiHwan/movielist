import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import ShowMovie from "./pages/ShowMovie";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/top_rated" component={ShowMovie} />
        <Route path="/popular" component={ShowMovie} />
        <Route path="/now_playing" component={ShowMovie} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/:id" component={ShowMovie} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
