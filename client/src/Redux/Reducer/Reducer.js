import { GET_ALL_POKEMON, FILTERS, ORIGIN_FILTERS, ALFABETIC_ORDER} from "../Actions/Actions";


let initialState = {
    allPokemons: [],
    allPokemonsBackUp: [],
    filtredPokemons: [],
    filters: {
        typeFilter: null,
        originFilter: null,
    },
    myPokemons: [],
       
};

function rootReducer(state=initialState, action){
    switch(action.type){
        case GET_ALL_POKEMON:
            return {
                ...state,
                allPokemons: action.payload,
                allPokemonsBackUp: action.payload,
                filtredPokemons: action.payload,
            };

        case FILTERS:
            state = {
                ...state,
                filters: {
                    ...state.filters,
                    typeFilter: action.payload === '0' ? null : action.payload
                }
            }
            

        case ORIGIN_FILTERS:
            state = {
                ...state,
                filters: {
                    ...state.filters,
                    originFilter: action.payload === '0' ? null : action.payload
                }
            }
            

        default:
            let filtredPokemons = [...state.allPokemons];

            if(state.filters.typeFilter){
                filtredPokemons = filtredPokemons.filter(pokemon => 
                    pokemon.types.some(t => t.name === state.filters.typeFilter));
            }

            if(state.filters.originFilter === 'created'){
                filtredPokemons = filtredPokemons.filter(pokemon => pokemon.created);
            }else if(state.filters.originFilter === 'originals'){
                filtredPokemons = filtredPokemons.filter( pokemon => !pokemon.created);
            }

            return {
                ...state,
                filtredPokemons,
            }
    }
}








// function rootReducer(state=initialState, action){
//     switch (action.type) {
//         case GET_ALL_POKEMON:
//             return {
//                 ...state,
//                 allPokemons: action.payload,
//                 allPokemonsBackUp: action.payload,
//                 filtredPokemonsByType: action.payload,
//             }
            
//         case FILTERS:

//             if(action.payload === '0'){
//                 return {
//                     ...state,
//                     // filtredPokemonsByType: [],
//                     filters: false,
//                 }
//             }

//             if(action.payload === 'normal'){
//                 console.log(action.payload);
//                 let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
//                 console.log(allPokemonsByTypes);
//                 return {
//                     ...state,
//                     filtredPokemonsByType: allPokemonsByTypes,
//                     filters: true,
//                 }
//             }
//             if(action.payload === 'fighting'){
//                 console.log(action.payload);
//                 let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
//                 console.log(allPokemonsByTypes);
//                 return {
//                     ...state,
//                     filtredPokemonsByType: allPokemonsByTypes,
//                     filters: true,
//                 }
//             }
//             if(action.payload === 'flying'){
//                 console.log(action.payload);
//                 let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
//                 console.log(allPokemonsByTypes);
//                 return {
//                     ...state,
//                     filtredPokemonsByType: allPokemonsByTypes,
//                     filters: true,
//                 }
//             }
//             if(action.payload === 'poison'){
//                 console.log(action.payload);
//                 let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
//                 console.log(allPokemonsByTypes);
//                 return {
//                     ...state,
//                     filtredPokemonsByType: allPokemonsByTypes,
//                     filters: true,
//                 }
//             }
//             if(action.payload === 'ground'){
//                 console.log(action.payload);
//                 let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
//                 console.log(allPokemonsByTypes);
//                 return {
//                     ...state,
//                     filtredPokemonsByType: allPokemonsByTypes,
//                     filters: true,
//                 }
//             }
//             if(action.payload === 'rock'){
//                 console.log(action.payload);
//                 let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
//                 console.log(allPokemonsByTypes);
//                 return {
//                     ...state,
//                     filtredPokemonsByType: allPokemonsByTypes,
//                     filters: true,
//                 }
//             }
//             if(action.payload === 'bug'){
//                 console.log(action.payload);
//                 let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
//                 console.log(allPokemonsByTypes);
//                 return {
//                     ...state,
//                     filtredPokemonsByType: allPokemonsByTypes,
//                     filters: true,
//                 }
//             }
//             if(action.payload === 'ghost'){
//                 console.log(action.payload);
//                 let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
//                 console.log(allPokemonsByTypes);
//                 return {
//                     ...state,
//                     filtredPokemonsByType: allPokemonsByTypes,
//                     filters: true,
//                 }
//             }
//             if(action.payload === 'steel'){
//                 console.log(action.payload);
//                 let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
//                 console.log(allPokemonsByTypes);
//                 return {
//                     ...state,
//                     filtredPokemonsByType: allPokemonsByTypes,
//                     filters: true,
//                 }
//             }
//             if(action.payload === 'fire'){
//                 console.log(action.payload);
//                 let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
//                 console.log(allPokemonsByTypes);
//                 return {
//                     ...state,
//                     filtredPokemonsByType: allPokemonsByTypes,
//                     filters: true,
//                 }
//             }
//             if(action.payload === 'water'){
//                 console.log(action.payload);
//                 let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
//                 console.log(allPokemonsByTypes);
//                 return {
//                     ...state,
//                     filtredPokemonsByType: allPokemonsByTypes,
//                     filters: true,
//                 }
//             }
//             if(action.payload === 'grass'){
//                 console.log(action.payload);
//                 let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
//                 console.log(allPokemonsByTypes);
//                 return {
//                     ...state,
//                     filtredPokemonsByType: allPokemonsByTypes,
//                     filters: true,
//                 }
//             }
//             if(action.payload === 'electric'){
//                 console.log(action.payload);
//                 let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
//                 console.log(allPokemonsByTypes);
//                 return {
//                     ...state,
//                     filtredPokemonsByType: allPokemonsByTypes,
//                     filters: true,
//                 }
//             }
//             if(action.payload === 'psychic'){
//                 console.log(action.payload);
//                 let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
//                 console.log(allPokemonsByTypes);
//                 return {
//                     ...state,
//                     filtredPokemonsByType: allPokemonsByTypes,
//                     filters: true,
//                 }
//             }
//             if(action.payload === 'ice'){
//                 console.log(action.payload);
//                 let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
//                 console.log(allPokemonsByTypes);
//                 return {
//                     ...state,
//                     filtredPokemonsByType: allPokemonsByTypes,
//                     filters: true,
//                 }
//             }
//             if(action.payload === 'dragon'){
//                 console.log(action.payload);
//                 let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
//                 console.log(allPokemonsByTypes);
//                 return {
//                     ...state,
//                     filtredPokemonsByType: allPokemonsByTypes,
//                     filters: true,
//                 }
//             }
//             if(action.payload === 'dark'){
//                 console.log(action.payload);
//                 let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
//                 console.log(allPokemonsByTypes);
//                 return {
//                     ...state,
//                     filtredPokemonsByType: allPokemonsByTypes,
//                     filters: true,
//                 }
//             }
//             if(action.payload === 'fairy'){
//                 console.log(action.payload);
//                 let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
//                 console.log(allPokemonsByTypes);
//                 return {
//                     ...state,
//                     filtredPokemonsByType: allPokemonsByTypes,
//                     filters: true,
//                 }
//             }
//             if(action.payload === 'unknown'){
//                 console.log(action.payload);
//                 let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
//                 console.log(allPokemonsByTypes);
//                 return {
//                     ...state,
//                     filtredPokemonsByType: allPokemonsByTypes,
//                     filters: true,
//                 }
//             }
//             if(action.payload === 'shadow'){
//                 console.log(action.payload);
//                 let allPokemonsByTypes = state.allPokemons.filter(pokemon => pokemon.types.some(t => t.name === action.payload))
//                 console.log(allPokemonsByTypes);
//                 return {
//                     ...state,
//                     filtredPokemonsByType: allPokemonsByTypes,
//                     filters: true,
//                 }
//             }


//         case ORIGIN_FILTERS:

//             if(action.payload === '0'){
//                 return {
//                     ...state,
//                     filtredPokemonsByType: [...state.allPokemonsBackUp],
//                     filters: false,
//                 }
//             }
//             if(action.payload === 'created'){
//                 const creados = state.filtredPokemonsByType.filter( pok => pok.created);

//                 return{
//                     ...state,
//                     filtredPokemonsByType: creados,
//                     filters: true,
//                 }
//             }
//             if(action.payload === 'originals'){
//                 const noCreados = state.filtredPokemonsByType.filter(pok => !pok.created);

//                 return{
//                     ...state,
//                     filtredPokemonsByType: noCreados,
//                     filters: true,
//                 }
//             }

//         case ALFABETIC_ORDER:
//             if(action.payload === '0'){
//                 console.log(action.payload);
//                 return {
//                     ...state,
//                     filtredPokemonsByType: state.allPokemonsBackUp,
//                     filters: false,
//                 }
//             }

//             if(action.payload === 'asc'){
//                 const alfa_asc = state.filtredPokemonsByType.sort((a,b) => {
//                     if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
//                     if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
//                     return 0;
//                 })

//                 console.log(state.filters);

//                 return {
//                     ...state,
//                     filtredPokemonsByType: alfa_asc,
//                     filters:true
//                 } 
//             }

//             if(action.payload === 'desc'){

//                 console.log(state.filtredPokemonsByType);

//                 const alfa_desc = state.filtredPokemonsByType.sort((a,b) => {
//                     if(a.name.toLowerCase() > b.name.toLowerCase()) return -1;
//                     if(a.name.toLowerCase() < b.name.toLowerCase()) return 1;
//                     return 0;
//                 })

//                 console.log(state.filters);

//                 return {
//                     ...state,
//                     filtredPokemonsByType: alfa_desc,
//                     filters: true,
//                 }
//             }


//             return {
//                 ...state,
//                 // filtredPokemonsByType: state.allPokemonsBackUp,
//                 filters: false,
//             }
        
//         default: return {...state}
            
//     }
// }

export default rootReducer;