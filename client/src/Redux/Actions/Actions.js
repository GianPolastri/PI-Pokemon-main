import axios from 'axios';

export const GET_ALL_POKEMON = 'GET_ALL_POKEMON';
export const UPDATE_POKEMON_LIST = 'UPDATE_POKEMON_LIST';
export const FILTERS = 'FILTERS'
export const ORIGIN_FILTERS = 'ORIGIN-FILTERS'
export const ALFABETIC_ORDER = 'ALFABETIC_ORDER'



export function getAllPokemons(){
    return async function(dispatch){
        try {
            const response = await axios.get("http://localhost:3001/pokemon/");
            console.log('Fueron traidos todos los pokemons');
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
            console.log('Creado exitosamente')
            alert('Pokemon creado exitosamente')
        } catch (error) {
            console.log(error.message);
        }
    }
}

// export function updatePokemonList(){
//     return async function(dispatch){
//         try {
//             const response = await axios.get("http://localhost:3001/pokemon/")
//             return dispatch({
//                 type: UPDATE_POKEMON_LIST,
//                 payload: response.data,
//             })
//         } catch (error) {
            
//         }
//     }
// }

export function filters(filter){
    return function(dispatch){
        return dispatch({
            type: FILTERS,
            payload: filter
        })
    }
}

export function originFilters(originFilter){
    return function (dispatch){
        return dispatch({
            type: ORIGIN_FILTERS,
            payload: originFilter
        })
    }
}

export function alfabeticOrder(alfaOrder){
    return function(dispatch){
        return dispatch({
            type: ALFABETIC_ORDER,
            payload: alfaOrder,
        })
    }
}