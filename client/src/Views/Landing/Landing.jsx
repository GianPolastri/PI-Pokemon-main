import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { validator, disable } from "./landngUtils";
import "./Landing.css";

const Landing = () => {
   const [user, setUser] = useState({
      username: "",
      email: "",
      phone: "",
   });

   const [errors, setErrors] = useState({
      username: "Este campo es obligatorio",
      email: "Este campo es obligatorio",
      phone: "Este campo es obligatorio,",
   });

   let navigate = useHistory();
   const login = (errors) => {
      if (
         errors.username === "" &&
         errors.email === "" &&
         errors.phone === ""
      ) {
         navigate.push("/home");
      } else {
         alert("Credenciales incorrectas");
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(user);
      login(errors);
   };

   const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      setUser({
         ...user,
         [name]: value,
      });
      validator(
         {
            ...user,
            [name]: value,
         },
         name,
         errors,
         setErrors
      );
   };

   return (
      <div>
         <form onSubmit={handleSubmit}>
            {console.log(user)}
            {console.log(errors)}
            <div>
               <label>Nombre*:</label>
               <input type="text" name="username" onChange={handleChange} />
            </div>
            <div>
               <label>Email*:</label>
               <input type="text" name="email" onChange={handleChange} />
            </div>
            <div>
               <label>Teléfono*:</label>
               <input type="text" name="phone" onChange={handleChange} />
            </div>
            <div>
               <h6>*Campos obligatoios.</h6>
            </div>
            <div>
               <label for="team">Elije tu equipo:</label>
               <select name="team-names" id="team">
                  <option value="valor">Valor</option>
                  <option value="sabiduria">Sabiduría</option>
                  <option value="instinto">Instinto</option>
                  <option value="sin-facción" selected>
                     Sin facción
                  </option>
               </select>
            </div>

            <button type="submit" disabled={disable(errors)}>
               Log In
            </button>
         </form>
      </div>
   );
};

export default Landing;
