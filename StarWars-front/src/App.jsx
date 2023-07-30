import { Home, People, Planets, Films, Vehicles } from './Components';
import { Route, withRouter } from 'react-router-dom';
import NavBar from './Components/GenericComponents/NavBar/NavBar'

function App({ location }) {
  // Lista de rutas donde se debe mostrar la NavBar
  const showNavBarRoutes = ['/people', '/planets', '/films', '/vehicles'];

  const shouldShowNavBar = showNavBarRoutes.includes(location.pathname);

  return (
    <div className='App'>

    <div  >

      {shouldShowNavBar && <NavBar />}
    </div>
    {/* <div/> */}

<div>

      <Route exact path="/" component={Home} />

      <Route exact path="/home" component={Home} />
      <Route exact path="/people" component={People} />
      <Route exact path="/planets" component={Planets} />
      <Route exact path="/films" component={Films} />
      <Route exact path="/vehicles" component={Vehicles} />



</div>
    </div>

  );
}

export default withRouter(App);