import React from "react";
import Card from "../Card/Card";
import "./Cards.css";
const Cards = ({allPokemons}) => {


   return <div className="cards-container">
    {allPokemons.map(pok => <Card name={pok.name} types={pok.types} img={pok.img} />)}
   </div>;
};

export default Cards;
