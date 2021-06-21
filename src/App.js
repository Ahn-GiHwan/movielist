import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./pages/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
