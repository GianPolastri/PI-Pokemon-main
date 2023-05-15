import { GET_ALL_POKEMON } from "../Actions/Actions";


let initialState = {
    allPokemons: [],
    allPokemonsBackUp: [],
    myPokemons: [],
       
};

function rootReducer(state=initialState, action){
    switch (action.type) {
        case GET_ALL_POKEMON:
            return {
                ...state,
                allPokemons: action.payload
            }
            
    
        default: return {...state}
            
    }
}

export default rootReducer;