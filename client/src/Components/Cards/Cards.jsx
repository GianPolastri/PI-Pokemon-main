import React from 'react'
import Card from '../Card/Card'
import './Cards.css'
const Cards = () => {
  return (
    <div className='cards-container'>
        <Card name={'bulbasaur'} type={'planta'} img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'} />
        <Card name={'charmander'} type={'fuego'} img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'}/>
        <Card name={'squirtle'} type={'agua'} img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png'} />
    </div>
  )
}

export default Cards