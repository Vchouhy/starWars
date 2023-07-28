import { useEffect } from "react";
import {useDispatch, useSelector } from 'react-redux';
import { getAllPeople, getAllPlanets, getAllVehicles, getAllFilms } from "../../redux/actions";
import HomeCardMenu from "../../GenericComponents/CardMenu/HomeCardMenu";
import './Home.scss'

const Home = ()=>{

  const people = useSelector((state) => state.people);
  const vehicles = useSelector((state) => state.vehicles);

//   console.log('home',people[0])
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllPeople(0))
        dispatch(getAllFilms())
        dispatch(getAllVehicles())
        dispatch(getAllPlanets())
    },[dispatch])

    return(
        <div>
{       ( people.length === 0 && vehicles.length === 0) ?
         <>
         <h1 >Loading...</h1>
        </> :
        <div className="sky">
            <HomeCardMenu/>
        </div> }
        </div>
    )
}

export default Home;