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
      <div className="login-container">
         <form className="login-form" onSubmit={handleSubmit}>
            {/* {console.log(user)}
            {console.log(errors)} */}
            <br/>
            <div>
               <label>Username*:</label>
               <input type="text" name="username" onChange={handleChange} /><br/>
               {errors.username}
            </div>
            <br/>
            <div>
               <label>Email*:</label>
               <input type="text" name="email" onChange={handleChange} /><br/>
               {errors.email}
            </div>
            <br/>
            <div>
               <label>Teléfono*:</label>
               <input type="text" name="phone" onChange={handleChange} /><br/>
               {errors.phone}
            </div>
            <br/>
            <div>
               <label for="team">Elije tu equipo:</label>
               <select name="team-names" id="team">
                  <option value="valor">Valor</option>
                  <option value="sabiduria">Sabiduría</option>
                  <option value="instinto">Instinto</option>
                  <option value="sin-facción" selected>
                     Sin equipo
                  </option>
               </select>
            </div>
            <br/>
            <button className="login-button" type="submit" disabled={disable(errors)}>
               Log In
            </button>
         </form>
      </div>
   );
};

export default Landing;
