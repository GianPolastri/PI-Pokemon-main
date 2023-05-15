import React, { useEffect, useState } from 'react'
import './Home.css'
import Cards from '../../Components/Cards/Cards'
import {useDispatch, useSelector} from 'react-redux'
import { getAllPokemons } from '../../Redux/Actions/Actions'
const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector(state=>state.allPokemons);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(()=>{
    dispatch(getAllPokemons())
  },[])

  const pokemonPartition = () => {

    return allPokemons.slice(currentPage,currentPage+12);
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 12)
  }

  const prevPage = () => {
    if(currentPage>0) setCurrentPage(currentPage - 12)
  }

  return (
    <div>
      <Cards pokemonPartition={pokemonPartition} nextPage={nextPage} prevPage={prevPage}/>  
    </div>
  )
}

export default Home