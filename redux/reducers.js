const initialState = {
     
    likes: [],  
    
}

export default function Reducer (state = initialState, {type, payload, liked}) {
    switch(type){
        case "GET_LIKES": return {
            ...state,
            likes: payload
        }
        case "LIKE": return{
            ...state,
            likes: payload
        }
         
         
        case "SET_LIKES": return{
            ...state,
            likes: payload
        }
        case "CLEAR_LIKES": return{
            ...state,
            likes: []
        }
        
        default: return state
    }
}