import React, { useEffect, useState } from 'react'
import './Home.css'
import Cards from '../../Components/Cards/Cards'
import OrdYFil from '../../Components/OrdYFil/OrdYFil'
import {useDispatch, useSelector} from 'react-redux'
import { getAllPokemons } from '../../Redux/Actions/Actions'
import axios from 'axios'


const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector(state=>state.allPokemons);
  const filtredPokemons = useSelector(state => state.filtredPokemons);
  const filters = useSelector(state => state.filters);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');
  const [pokemonFinder, setPokemonFinder] = useState([]);
  const [types, setTypes] = useState([]);

  const getTypes = async () => {
    const allTypes = (await axios("http://localhost:3001/type")).data;
    setTypes(allTypes);
  }
  
  useEffect(()=>{
    dispatch(getAllPokemons())
    // console.log('se ejecuto esto');
    getTypes();
    console.log(types);
  },[])

  

  const pokemonPartition = () => {
    if(filters){
      return filtredPokemons.slice(currentPage,currentPage+12);
    }else{
      if(pokemonFinder.length !== 0) return pokemonFinder.pokemonFound;
       return allPokemons.slice(currentPage,currentPage+12);
    }
  }

  useEffect(()=>{
    if(search.length === 0) setPokemonFinder([])
  }, [search])

  const nextPage = () => {
    // console.log(allPokemons.length);
    // console.log(currentPage);
    if(filters){
      if(currentPage < filtredPokemons.length -12){
        setCurrentPage(currentPage + 12)
      }
    }else{
      if(currentPage < allPokemons.length - 12){
  
        setCurrentPage(currentPage + 12)
      }
    }
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
    try {
      if(regex.test(search)){
        // console.log('entre aca');
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
      <div className='serach-container'>
        <input type='text' className='pokemonSearcher' placeholder='Buscar pokémon' onChange={searchHandler}/>
        <button className='pokemonSearcherButton' onClick={searchSubmit}>Buscar</button>
        <OrdYFil allTypes={types}/>
      </div>
      { allPokemons.length !== 0 ? ( filters ? <Cards pokemonPartition={pokemonPartition}  filters={filters} nextPage={nextPage} prevPage={prevPage} currentPage={currentPage} maxPage={filters ? filtredPokemons.length -12 : allPokemons.length -12}/> : <Cards pokemonPartition={pokemonPartition}  filters={filters}  nextPage={nextPage} prevPage={prevPage} currentPage={currentPage} maxPage={allPokemons.length -12}/>) : (
        // <h3>Loading...</h3>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/029b8bd9-cb5a-41e4-9c7e-ee516face9bb/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOWI4YmQ5LWNiNWEtNDFlNC05YzdlLWVlNTE2ZmFjZTliYlwvZGF5bzNvdy03YWM4NmMzMS04YjJiLTQ4MTAtODlmMi1lNjEzNGNhZjFmMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ooubhxjHp9PIMhVxvCFHziI6pxDAS8glXPWenUeomWs" alt="Loading..." className='loading-gif' />
      )
      }
        
    </div>
  )
}

export default Home