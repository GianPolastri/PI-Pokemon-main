import React, { useEffect, useState } from 'react'
import './Home.css'
import Cards from '../../Components/Cards/Cards'
import {useDispatch, useSelector} from 'react-redux'
import { getAllPokemons } from '../../Redux/Actions/Actions'
import axios from 'axios'

const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector(state=>state.allPokemons);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('')
  const [pokemonFinder, setPokemonFinder] = useState([])

  useEffect(()=>{
    dispatch(getAllPokemons())
  },[])

  const pokemonPartition = () => {
   if(pokemonFinder.length !== 0) return pokemonFinder.pokemonFound;
    return allPokemons.slice(currentPage,currentPage+12);
  }

  useEffect(()=>{
    if(search.length === 0) setPokemonFinder([])
  }, [search])

  const nextPage = () => {
    setCurrentPage(currentPage + 12)
  }

  const prevPage = () => {
    if(currentPage>0) setCurrentPage(currentPage - 12)
  }

  const searchHandler = ({target}) => {
    setCurrentPage(0);
    setSearch(target.value)
  }

  const searchSubmit = async () => {
    const regex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    console.log(typeof(search));
    try {
      if(regex.test(search)){
        console.log('entre aca');
        const pokemonByUUID = await (axios.get(`http://localhost:3001/pokemon/${search}`)).then(response => response.data);
        console.log(pokemonByUUID);
        setPokemonFinder({pokemonFound: pokemonByUUID});
      }else if(!isNaN(search)){
        const pokemonByID = (await axios.get(`http://localhost:3001/pokemon/${search}`)).data
        setPokemonFinder({pokemonFound: [pokemonByID]})

      }else{
        const pokemonByName = ((await axios.get(`http://localhost:3001/pokemon/name?name=${search}`)).data);
        // console.log(pokemonByName);
        setPokemonFinder({pokemonFound: pokemonByName});
        // console.log(pokemonFinder);
      }
    } catch (error) {
      alert(error.message)
    }
  }

  // useEffect(() => {
  //   console.log(pokemonFinder);
  // }, [pokemonFinder]);

  return (
    <div className='home-container'>
      <div>
        <input type='text' className='pokemonSearcher' placeholder='Buscar pokémon' onChange={searchHandler}/>
        <button className='pokemonSearcherButton' onClick={searchSubmit}>Buscar</button>
      </div>
      <Cards pokemonPartition={pokemonPartition} nextPage={nextPage} prevPage={prevPage}/>  
    </div>
  )
}

export default Home