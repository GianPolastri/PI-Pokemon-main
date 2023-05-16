import React from "react";
import Card from "../Card/Card";
import "./Cards.css";
const Cards = ({ pokemonPartition, nextPage, prevPage }) => {
    return (
        <div>
            <div className="cards-container">
            {pokemonPartition().map((pok) => (
                <Card name={pok.name} types={pok.types} img={pok.img} id={pok.id}/>
            ))}
            </div>
            <span>
                <button onClick={prevPage}>Prev</button>
                &nbsp;
                <button onClick={nextPage}>Next</button>
            </span>
        </div>
    );
};

export default Cards;
