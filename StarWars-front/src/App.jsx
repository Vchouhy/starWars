import { Home, People, Planets, Films, Vehicles } from "./Components";
import { Route, withRouter, Switch } from "react-router-dom";
import NavBar from "./Components/GenericComponents/NavBar/NavBar";
import NotFound from "./Components/GenericComponents/NotFound/NotFound";
import axios from 'axios';
axios.defaults.baseURL = 'https://starwars-production-088c.up.railway.app/';

function App({ location }) {
  // Lista de rutas donde se debe mostrar la NavBar
  const showNavBarRoutes = ["/people", "/planets", "/films", "/vehicles"];

  const shouldShowNavBar = showNavBarRoutes.includes(location.pathname);

return (
  <div className="App">

    <div>{shouldShowNavBar && <NavBar />}</div>

    <div>
    <Switch>
 
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route  path="/people" component={People} />
        <Route  path="/planets" component={Planets} />
        <Route  path="/films" component={Films} />
        <Route  path="/vehicles" component={Vehicles} />
        <Route path="*" component={NotFound} />
    </Switch>
    </div>

  </div>
);
}

export default withRouter(App);
