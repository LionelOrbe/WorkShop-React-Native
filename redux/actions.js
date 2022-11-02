import AsyncStorage from '@react-native-async-storage/async-storage';


export function getLikes() {
   // console.log('GET LIKES')
    return async function (dispatch) {
        const value = await AsyncStorage.getItem('likes')
        
        return dispatch({
            type:'GET_LIKES',
            payload: JSON.parse(value)
        })
    }
}
export function like(name, image, id, liked, likes){
    return async function(dispatch){
        
           let likesobj =[]
           let Likes = []
         //  console.log('Likes', likes)
           likes? Likes=likes: Likes=[]
        if(!liked){likesobj = [...Likes, {"name": `${name}`, "image": `${image}`, "id": `${id}`}]
        const jsonValue = JSON.stringify(likesobj)
        await AsyncStorage.setItem('likes', jsonValue)
        return dispatch({
            type:'LIKE',
            payload: likesobj
            })
        } 
        
            
    }
}
export function setLikes(likes){
  //  console.log('setLikes en ACTIONS')
    return async function(dispatch){
        const jsonValue = JSON.stringify(likes)
       await AsyncStorage. removeItem('likes')
        await AsyncStorage.setItem('likes', jsonValue)
     //   console.log('Async en ACTIONS')
        return dispatch({
            type:'SET_LIKES',
            payload: likes
        })
    }
}
export function clearLikes(){
    return function(dispatch){
      //  console.log('Clear LIKES')
        return dispatch({
            type: "CLEAR_LIKES",
            payload: ''
        })
    }
}
