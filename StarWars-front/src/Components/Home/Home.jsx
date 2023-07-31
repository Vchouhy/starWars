import { useEffect } from "react";
import {useDispatch, useSelector } from 'react-redux';
import { getAllData } from "../../redux/actions";
import HomeCardMenu from "../GenericComponents/HomeCardMenu/HomeCardMenu";
import './Home.scss'
import Wing1 from '../GenericComponents/Assets/pngwing1.svg'
import Background from '../GenericComponents/Assets/4834a610294000311.svg'
import Frase from '../GenericComponents/Assets/frase1.png'

const Home = ()=>{

 

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllData())
       
    },[dispatch])

    return (
        <div className="home-container">
          <div className="image-background">
         
            <img src={Background} alt="Background" className="background-image" />
         
            <img src={Frase} alt="SuperposedImage" className="superposed-image" />
          </div>
          <div className="black-background">
          
              <div>
                <HomeCardMenu />
              </div>
            
          <div className="content-container" id="content-container">
      <p className="about">
        Welcome to the world of Star Wars, an epic science fiction saga set in a galaxy far, far away. Discover the captivating details of characters, planets, vehicles, and films in this legendary universe. On this website, you'll find comprehensive data on your favorite Star Wars characters like Luke Skywalker, Darth Vader, and Princess Leia, as well as fascinating information about planets like Tatooine and Hoth. Explore the iconic vehicles like the Millennium Falcon and X-Wing fighters, and delve into the thrilling films that have become cultural classics. May the Force be with you as you embark on this exciting Star Wars journey!
      </p>
      <img src={Wing1} alt="Background" className="down-image" />
    </div>
          </div>
        </div>
      );
}

export default Home;
