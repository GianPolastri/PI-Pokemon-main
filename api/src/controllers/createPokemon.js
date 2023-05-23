const { Pokemon } = require("../db");

const createPokemon = async (
   name,
   img,
   hp,
   atk,
   def,
   speed,
   height,
   weight,
   types
) => {
   //tengo que agregar la validación de que haya imagen
   if (!name || !img || !hp || !atk || !def)
      throw new Error("Faltan datos obligatorios");
   if (
      hp < 0 ||
      hp > 100 ||
      atk < 0 ||
      atk > 100 ||
      def < 0 ||
      def > 100 ||
      speed < 0 ||
      speed > 100 ||
      height < 0 ||
      weight < 0
   )
      throw new Error("Los valores numéricos estan fuera del rango");

   if (types.length === 0) types[0] = 10001;

   const newPokemon = await Pokemon.create({
      name: name.toLowerCase(),
      img,
      hp,
      atk,
      def,
      speed,
      height,
      weight,
   });
   await newPokemon.addTypes(types);
   return newPokemon;
};

module.exports = createPokemon;
