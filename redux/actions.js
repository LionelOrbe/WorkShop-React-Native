import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';


export function getLikes() {
    return async function (dispatch) {
        const value = await AsyncStorage.getItem('likes')
        
        return dispatch({
            type:'GET_LIKES',
            payload: JSON.parse(value)
        })
    }
}
export function like(name, image, id){
    const {likes} = useSelector(state => state); 
    return async function(dispatch){
        let liked = false;
        for(let i=0; i<likes.length; i++ ){
            if(likes[i].id == id){
              liked=true;
            }
          }
        if(!liked){
        const likesobj = [...likes, {"name": `${name}`, "image": `${image}`, "id": `${id}`}]
        const jsonValue = JSON.stringify(likesobj)
        await AsyncStorage.setItem('likes', jsonValue)}
        return dispatch({
            type: 'LIKE',
            payload: {"id": id, "name": name, "image": image}
        })
    }
}
export function setLikes(likes){
    console.log('setLikes en ACTIONS')
    return async function(dispatch){
        const jsonValue = JSON.stringify(likes)
        await AsyncStorage.clear()
        await AsyncStorage.setItem('likes', jsonValue)
        console.log('Async en ACTIONS')
        return dispatch({
            type:'SET_LIKES',
            payload: likes
        })
    }
}
export function clearLikes(){
    return function(dispatch){
        return dispatch({
            type: "CLEAR_LIKES",
            payload: ''
        })
    }
}
