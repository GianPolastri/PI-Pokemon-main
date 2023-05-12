export const validator = (input, name, errors, setErrors) => {
   if (name === "username") {
      const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
      if (input.username !== "") setErrors({ ...errors, username: "" });
      else setErrors({ ...errors, username: "Este campo es obligatorio" });
      if (regex.test(input.username)) setErrors({ ...errors, username: "" });
      else
         setErrors({
            ...errors,
            username: "El usuario que ingreso debe ser alfanumérico",
         });
   }
   if (name === "email") {
      const regex =
         /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (input.email !== "") setErrors({ ...errors, email: "" });
      else setErrors({ ...errors, email: "Este campo es obligatorio" });
      if (regex.test(input.email)) setErrors({ ...errors, email: "" });
      else
         setErrors({ ...errors, email: "El email tiene un formato invalido" });
   }
   if (name === "phone") {
      const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if (regex.test(input.phone)) setErrors({ ...errors, phone: "" });
      else
         setErrors({
            ...errors,
            phone: "El teléfono tiene un formato invalido",
         });
   }
};

export const disable = (errors) => {
   let disabled = true;
   for (let error in errors) {
      if (errors[error] === "") disabled = false;
      else disabled = true;
   }
   return disabled;
};


