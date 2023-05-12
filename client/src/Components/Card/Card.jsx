import React from "react";
import "./Card.css";
import { Link } from 'react-router-dom'

const Card = (props) => {
   return (
      <div className="card-container">
         <div className="inner-container">
            <img className="pokemon-img" src={props.img} alt="" />
         </div>
         <div className="inner-container">
            <Link to={`/detail/${props.name}`}>
               <h2>{props.name}</h2>
            </Link>
         </div>
         
         <div className="inner-container">
            {props.type}
         </div>
      </div>
   );
};

export default Card;
