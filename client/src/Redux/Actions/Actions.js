import axios from 'axios';

export const GET_ALL_POKEMON = 'GET_ALL_POKEMON';
export const CREATE_NEW_POKEMON = 'CREATE_NEW_POKEMON';



export function getAllPokemons(){
    return async function(dispatch){
        try {
            const response = await axios.get("http://localhost:3001/pokemon/");
            return dispatch({
                type: GET_ALL_POKEMON,
                payload: response.data
            })

        } catch (error) {
            
        }
    }
}

export function createNewPokemon(info){
    return async function(dispatch){
        try {
            const response = axios.post('http://localhost:3001/pokemon/', info);
            alert('Pokemon creado exitosamente')
        } catch (error) {
            console.log(error.message);
        }
    }
}