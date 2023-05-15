import axios from 'axios';

export const GET_ALL_POKEMON = 'GET_ALL_POKEMON';



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