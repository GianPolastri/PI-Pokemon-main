import { GET_ALL_POKEMON, FILTERS} from "../Actions/Actions";


let initialState = {
    allPokemons: [],
    allPokemonsBackUp: [],
    filtredPokemonsByType: [],
    filters: false,
    myPokemons: [],
       
};

function rootReducer(state=initialState, action){
    switch (action.type) {
        case GET_ALL_POKEMON:
            return {
                ...state,
                allPokemons: action.payload,
                allPokemonsBackUp: action.payload
            }
            
        case FILTERS:

            if(action.payload === '0'){
                return {
                    ...state,
                    filtredPokemonsByType: [...state.allPokemonsBackUp],
                    filters: false,
                }
            }

            if(action.payload === 'normal'){
                console.log(action.payload);
                let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
                console.log(allPokemonsByTypes);
                return {
                    ...state,
                    filtredPokemonsByType: allPokemonsByTypes,
                    filters: true,
                }
            }
            if(action.payload === 'fighting'){
                console.log(action.payload);
                let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
                console.log(allPokemonsByTypes);
                return {
                    ...state,
                    filtredPokemonsByType: allPokemonsByTypes,
                    filters: true,
                }
            }
            if(action.payload === 'flying'){
                console.log(action.payload);
                let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
                console.log(allPokemonsByTypes);
                return {
                    ...state,
                    filtredPokemonsByType: allPokemonsByTypes,
                    filters: true,
                }
            }
            if(action.payload === 'poison'){
                console.log(action.payload);
                let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
                console.log(allPokemonsByTypes);
                return {
                    ...state,
                    filtredPokemonsByType: allPokemonsByTypes,
                    filters: true,
                }
            }
            if(action.payload === 'ground'){
                console.log(action.payload);
                let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
                console.log(allPokemonsByTypes);
                return {
                    ...state,
                    filtredPokemonsByType: allPokemonsByTypes,
                    filters: true,
                }
            }
            if(action.payload === 'rock'){
                console.log(action.payload);
                let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
                console.log(allPokemonsByTypes);
                return {
                    ...state,
                    filtredPokemonsByType: allPokemonsByTypes,
                    filters: true,
                }
            }
            if(action.payload === 'bug'){
                console.log(action.payload);
                let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
                console.log(allPokemonsByTypes);
                return {
                    ...state,
                    filtredPokemonsByType: allPokemonsByTypes,
                    filters: true,
                }
            }
            if(action.payload === 'ghost'){
                console.log(action.payload);
                let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
                console.log(allPokemonsByTypes);
                return {
                    ...state,
                    filtredPokemonsByType: allPokemonsByTypes,
                    filters: true,
                }
            }
            if(action.payload === 'steel'){
                console.log(action.payload);
                let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
                console.log(allPokemonsByTypes);
                return {
                    ...state,
                    filtredPokemonsByType: allPokemonsByTypes,
                    filters: true,
                }
            }
            if(action.payload === 'fire'){
                console.log(action.payload);
                let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
                console.log(allPokemonsByTypes);
                return {
                    ...state,
                    filtredPokemonsByType: allPokemonsByTypes,
                    filters: true,
                }
            }
            if(action.payload === 'water'){
                console.log(action.payload);
                let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
                console.log(allPokemonsByTypes);
                return {
                    ...state,
                    filtredPokemonsByType: allPokemonsByTypes,
                    filters: true,
                }
            }
            if(action.payload === 'grass'){
                console.log(action.payload);
                let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
                console.log(allPokemonsByTypes);
                return {
                    ...state,
                    filtredPokemonsByType: allPokemonsByTypes,
                    filters: true,
                }
            }
            if(action.payload === 'electric'){
                console.log(action.payload);
                let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
                console.log(allPokemonsByTypes);
                return {
                    ...state,
                    filtredPokemonsByType: allPokemonsByTypes,
                    filters: true,
                }
            }
            if(action.payload === 'psychic'){
                console.log(action.payload);
                let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
                console.log(allPokemonsByTypes);
                return {
                    ...state,
                    filtredPokemonsByType: allPokemonsByTypes,
                    filters: true,
                }
            }
            if(action.payload === 'ice'){
                console.log(action.payload);
                let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
                console.log(allPokemonsByTypes);
                return {
                    ...state,
                    filtredPokemonsByType: allPokemonsByTypes,
                    filters: true,
                }
            }
            if(action.payload === 'dragon'){
                console.log(action.payload);
                let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
                console.log(allPokemonsByTypes);
                return {
                    ...state,
                    filtredPokemonsByType: allPokemonsByTypes,
                    filters: true,
                }
            }
            if(action.payload === 'dark'){
                console.log(action.payload);
                let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
                console.log(allPokemonsByTypes);
                return {
                    ...state,
                    filtredPokemonsByType: allPokemonsByTypes,
                    filters: true,
                }
            }
            if(action.payload === 'fairy'){
                console.log(action.payload);
                let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
                console.log(allPokemonsByTypes);
                return {
                    ...state,
                    filtredPokemonsByType: allPokemonsByTypes,
                    filters: true,
                }
            }
            if(action.payload === 'unknown'){
                console.log(action.payload);
                let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
                console.log(allPokemonsByTypes);
                return {
                    ...state,
                    filtredPokemonsByType: allPokemonsByTypes,
                    filters: true,
                }
            }
            if(action.payload === 'shadow'){
                console.log(action.payload);
                let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
                console.log(allPokemonsByTypes);
                return {
                    ...state,
                    filtredPokemonsByType: allPokemonsByTypes,
                    filters: true,
                }
            }
        default: return {...state}
            
    }
}

export default rootReducer;