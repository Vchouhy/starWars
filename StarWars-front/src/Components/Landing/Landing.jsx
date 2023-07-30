import { Link } from 'react-router-dom';
import './Landing.scss'

const Landing = ()=>{
    return(
        <div className='landing-main-container'>
          <div className='somebody'>
           Hola
            <button>

            <Link to='/home' className='link-landing'> 
                Go to HOME
            </Link>
            </button>
        </div>
        </div>
    )
}

export default Landing;