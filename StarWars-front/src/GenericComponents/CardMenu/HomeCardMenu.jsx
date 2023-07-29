import { Link } from 'react-router-dom';
import './HomeCardMenu.scss'

const HomeCardMenu = () =>{

    return (
      <div className='main-container'>
        <Link to="/people" className='card'>People</Link>
        <Link to="/planets" className='card'>Planets</Link>
        <Link to="/vehicles" className='card'>Vehicles</Link>
        <Link to="/films" className='card'>Films</Link>
      </div>
    );
}

export default HomeCardMenu;
