import React, { useEffect } from 'react'
import './Home.css'
import Cards from '../../Components/Cards/Cards'
import {useDispatch, useSelector} from 'react-redux'
import { getAllPokemons } from '../../Redux/Actions/Actions'
const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector(state=>state.allPokemons);

  useEffect(()=>{
    dispatch(getAllPokemons())
  },[])

  return (
    <div>
      <Cards allPokemons={allPokemons}/>  
    </div>
  )
}

export default Home