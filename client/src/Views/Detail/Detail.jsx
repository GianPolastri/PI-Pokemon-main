import React, { useEffect, useState } from 'react'
import './Detail.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Detail = () => {

  const {name} = useParams();

  const [pokemonToDetail, setPokemonToDetail] = useState([]);

  const getPokemonToDetail = async () => {
    const pokemon = (await axios.get(`http://localhost:3001/pokemon/name?name=${name}`).then(response => response.data));
    setPokemonToDetail(pokemon);
    // console.log(pokemonToDetail.pokemon);
  }

  useEffect(()=>{
    getPokemonToDetail();
  },[])

  {console.log(pokemonToDetail[0]);}


    // const {id, img, atk, def, hp, speed, height, weight} = 

  

  return (
    <div className='detail-container'>
      { pokemonToDetail.length !== 0 ? (<div className='detail-card'>
        <img src={pokemonToDetail[0].img} alt="" className='detail-img'/>
        <div className='info-container'>
          <div className='stats-container'>
            
            <div className='stat'>
              <label htmlFor="hp">
                HP: <meter id="hp" value={pokemonToDetail[0].hp}  min='0' max='100' low='20' high='60' optimum='80'></meter>
              </label>
            </div>

            <div className='stat'>
              <label htmlFor="atk">
                Attack: <meter id="atk" value={pokemonToDetail[0].atk}  min='0' max='100' low='20' high='60' optimum='80'></meter>
              </label>
            </div>

            <div className='stat'>
              <label htmlFor="def">
                Defense: <meter id="def" value={pokemonToDetail[0].def}  min='0' max='100' low='20' high='60' optimum='80'></meter>
              </label>
            </div>

            <div className='stat'>
              <label htmlFor="speed">
                Speed: <meter id="speed" value={pokemonToDetail[0].speed}  min='0' max='100' low='20' high='60' optimum='80'></meter>
              </label>
            </div>

          </div>

          <div className='extra-container'>
            
          </div>
        </div>
      </div>) : (
        // <h3>Loading...</h3>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/029b8bd9-cb5a-41e4-9c7e-ee516face9bb/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOWI4YmQ5LWNiNWEtNDFlNC05YzdlLWVlNTE2ZmFjZTliYlwvZGF5bzNvdy03YWM4NmMzMS04YjJiLTQ4MTAtODlmMi1lNjEzNGNhZjFmMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ooubhxjHp9PIMhVxvCFHziI6pxDAS8glXPWenUeomWs" alt="Loading..." className='loading-gif' />
      )
      }
    </div>
  )
}

export default Detail