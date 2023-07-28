import { Home, Landing, Contact, People, Planets, Films, Vehicles } from './Components';
import { Route, withRouter } from 'react-router-dom';
import NavBar from './GenericComponents/NavBar/NavBar';


function App({ location }) {
  // Lista de rutas donde se debe mostrar la NavBar
  const showNavBarRoutes = ['/home', '/detail', '/contact', '/people', '/planets', '/films', '/vehicles'];

  const shouldShowNavBar = showNavBarRoutes.includes(location.pathname);

  return (
    <div className="App" >
      {shouldShowNavBar && <NavBar />}

      <Route exact path="/" component={Landing} />

      <Route exact path="/home" component={Home} />
      <Route exact path="/people" component={People} />
      <Route exact path="/planets" component={Planets} />
      <Route exact path="/films" component={Films} />
      <Route exact path="/vehicles" component={Vehicles} />



      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default withRouter(App);