import React from "react";
import Card from "../Card/Card";
import "./Cards.css";
const Cards = ({ pokemonPartition, filters, nextPage, prevPage, currentPage, maxPage }) => {
    return (
        <div>
            <div className="cards-container">
                { filters ? pokemonPartition().map((pok) => (
                    <Card
                        name={pok.name}
                        types={pok.types}
                        img={pok.img}
                        id={pok.id}
                    />
                )) : pokemonPartition().map((pok) => (
                    <Card
                        name={pok.name}
                        types={pok.types}
                        img={pok.img}
                        id={pok.id}
                    />
                ))
                }
            </div>
            <span className="pag-display">
                <button onClick={prevPage}>Prev</button>
                &nbsp;
    
                    <span> {currentPage/12 !== 0 ? <h6>{currentPage/12}</h6> : <h6></h6>} </span>
                    <span> <h4>{(currentPage/12)+1}</h4> </span>
                    <span> {currentPage <= maxPage ? <h6>{(currentPage/12)+2}</h6> : <h6></h6>} </span>
                
                &nbsp;
                <button onClick={nextPage}>Next</button>
            </span>
        </div>
    );
};

export default Cards;
