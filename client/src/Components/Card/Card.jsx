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

         <div className="info-container">
            <div className="inner-container">
               <Link to={`/detail/${name}`} className="link-name">
                  <h3 className="name-container">{name}</h3>
               </Link>
               <div className="inner-container">
                  <span className="id-container"><h6 id="id-space">ID: {id}</h6></span>
                  
                  <span className="type-container">/{types.map(type=> <span>{type.name}/</span>)}</span>
               </div>
               </div>
            </div>
            
            
      </div>
   );
};

export default Card;
