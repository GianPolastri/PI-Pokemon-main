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

            if(action.payload === '1'){
                console.log(action.payload);
                let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === 'normal'))
                console.log(allPokemonsByTypes);
                return {
                    ...state,
                    filtredPokemonsByType: allPokemonsByTypes,
                    filters: true,
                }
            }
            if(action.payload === '2'){
                console.log(action.payload);
                let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === 'fighting'))
                console.log(allPokemonsByTypes);
                return {
                    ...state,
                    filtredPokemonsByType: allPokemonsByTypes,
                    filters: true,
                }
            }
            if(action.payload === '3'){
                console.log(action.payload);
                let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === 'flying'))
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