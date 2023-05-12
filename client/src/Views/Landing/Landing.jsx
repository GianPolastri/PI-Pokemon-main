import React, {useState} from "react";
import "./Landing.css";


const Landing = () => {

  const [user, setUser] = useState({
    username: '',
    email: '',
    phone: '',
  })

  const [errors, setErrors] = useState({
    username: 'Este campo es obligatorio',
    email: 'Este campo es obligatorio',
    phone: 'Este campo es obligatorio,'
  }) 


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  }

  const validator = (input, name) => {
    if(name === 'username'){
      const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
      if(input.username !== '') setErrors({...errors, username: ""});
      else setErrors({...errors, username:'Este campo es obligatorio'});
      if(regex.test(input.username)) setErrors({...errors, username: ""});
      else setErrors({...errors, username:'El usuario que ingreso debe ser alfanumérico'});
    }
    if(name === 'email'){
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
      if(input.email !== '') setErrors({...errors, email: ""});
      else setErrors({...errors, email:'Este campo es obligatorio'});
      if(regex.test(input.email)) setErrors({...errors, email: ""});
      else setErrors({...errors, email:'El email tiene un formato invalido'});
    }
    if(name === 'phone'){
      const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if(regex.test(input.phone)) setErrors({...errors, phone: ""});
      else setErrors({...errors, phone:'El teléfono tiene un formato invalido'});
    }
  }

  const handleChange = (e) => {
    
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    })
    validator({
      ...user,
      [name]: value,
    }, name)
  }
 

   return (
      <div>
         <form>
          {console.log(user)}
          {console.log(errors)}
            <div>
               <label>Nombre*:</label>
               <input type="text" name="username" onChange={handleChange}/>
            </div>
            <div>
               <label>Email*:</label>
               <input type="text" name="email" onChange={handleChange}/>
            </div>
            <div>
              <label>Teléfono*:</label>
              <input type="text" name='phone' onChange={handleChange}/>
            </div>
            <div><h6>*Campos obligatoios.</h6></div>
            <div>
               <label for="team">Elije tu equipo:</label>
               <select name="team-names" id="team">
                  <option value="valor">Valor</option>
                  <option value="sabiduria">Sabiduría</option>
                  <option value="instinto">Instinto</option>
                  <option value="sin-facción" selected>Sin facción</option>
               </select>
            </div>

            <button type="submit" >Log In</button>
         </form>
      </div>
   );
};

export default Landing;
