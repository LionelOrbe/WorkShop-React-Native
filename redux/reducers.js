const initialState = {
     
    likes: [],  
    
}

export default function Reducer (state = initialState, {type, payload}) {
    switch(type){
        case "GET_LIKES": return {
            ...state,
            likes: payload
        }
        case "LIKE": 
        let liked = false;
        const LIKES = state.likes
        for(let i=0; i<LIKES.length; i++ ){
            if(LIKES[i].id == payload.id){
              liked=true;
            }
          }
        if(!liked){
            return {
                ...state,
                likes: [...LIKES, payload]
            }
        }
        else return  state;
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