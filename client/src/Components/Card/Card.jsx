import React from "react";
import "./Card.css";
import { Link } from 'react-router-dom'

const Card = ({name, types, img, id}) => {
   //Tengo que embocar el id por algun lado
   return (
      <div className="card-container">
         <div className="inner-container">
            <img className="pokemon-img" src={img} alt="" />
         </div>
         
         <div className="inner-container">
            <Link to={`/detail/${name}`}>
               <h3>{name}</h3>
            </Link>
         </div>
         
         
         <div className="inner-container">
            <span>/{types.map(type=> <span>{type.name}/</span>)}</span>
         </div>
      </div>
   );
};

export default Card;
