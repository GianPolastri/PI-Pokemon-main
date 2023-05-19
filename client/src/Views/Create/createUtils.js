export const validator = (input, name, errors, setErrors) => {
    if (name === "name") {
      if(input.name.length < 2){
        setErrors({
          ...errors,
          name: "El nombre debe tener al menos 2 caracteres"
        })
      }else{
        setErrors({
          ...errors,
          name: ""
        })
      }
    }
    if (name === "img") {
      let regex = /(http[s]?:\/\/.*\.(?:png|jpg|gif|svg|jpeg))/i;
      if(regex.test(input.img)){
        setErrors({
          ...errors,
          img: ""
        })
      }else{
        setErrors({
          ...errors,
          img: "Debe cargar la URL de la imagen"
        })
      }
    }
    if (name === "hp") {
        if (input.hp <= 0 || input.hp > 100) {
            setErrors({
                ...errors,
                hp: "El valor debe estar entre 0 y 100 inclusive",
            });
        }else{
          setErrors({
            ...errors,
            hp: ""
          })
        }
    }
    if (name === "atk") {
        if (input.atk <= 0 || input.atk > 100) {
            setErrors({
                ...errors,
                atk: "El valor debe estar entre 0 y 100 inclusive",
            });
        }else{
          setErrors({
            ...errors,
            atk: ""
          })
        }
    }
    if (name === "def") {
        if (input.def <= 0 || input.def > 100) {
            setErrors({
                ...errors,
                def: "El valor debe estar entre 0 y 100 inclusive",
            });
        }else{
          setErrors({
            ...errors,
            def: ""
          })
        }
    }
    if (name === "speed") {
        if (input.speed <= 0 || input.speed > 100) {
            setErrors({
                ...errors,
                speed: "El valor debe estar entre 0 y 100 inclusive",
            });
        }else{
          setErrors({
            ...errors,
            speed: ""
          })
        }
    }
    if (name === "height") {
        if (input.height <= 0) {
            setErrors({
                ...errors,
                height: "El valor debe ser mayor a 0",
            });
        }else{
          setErrors({
            ...errors,
            height: ""
          })
        }
    }
    if (name === "weight") {
        if (input.weight <= 0) {
            setErrors({
                ...errors,
                weight: "El valor debe ser mayor a 0",
            });
        }else{
          setErrors({
            ...errors,
            weight: ""
          })
        }
    }
};

export const disable = (errors) => {
    let disabled = true;
    for (let error in errors) {
       if (errors[error] !== "") return true;
    }
    return false;
 };