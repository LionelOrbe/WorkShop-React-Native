import React, {useEffect, useState} from 'react';
import { Text, View,  Image,StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import { getLikes, like } from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux'


export default function Information({ image, name, description, id }) {

    const style = StyleSheet.create({
        image: {
            height:300,
            width:350,            
          borderRadius: 5,
          
        },
        container: { 
            backgroundColor: '#171717',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flex: 1,
            // padding: 10
        },
        name: {
            color: '#EDEDED',
            fontWeight: 'bold',
            fontSize: 20,
        
        },
        description: {
            color: '#EDEDED',
        },
        descriptioncontainer: {
            width: 350,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#EDEDED',
            padding: 10,
            backgroundColor: '#444444',
            
        },
        shadow: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 8,
            },
            shadowOpacity: 0.44,
            shadowRadius: 10.32,

            elevation: 16,
  
          },
        heart: {
          position: 'absolute',
          left: 130,
          top: -30,
         
          
        },
        liked: {
          backgroundColor: 'grey'
        },
        
      });
      
      const dispatch = useDispatch();
      const {likes} = useSelector(state => state);  
      const [liked, setLiked] = useState(false);
      
      useEffect(() => {
        dispatch(getLikes())
        for(let i=0; i<likes.length; i++ ){
          if(likes[i].id == `${id}`){
            setLiked(true)
          }
        }

            }, []);

    
    return (
      <View style={style.container}>
        <TouchableOpacity onPress={like(name, image, id)}>
          {
            liked? <MaterialCommunityIcons name="heart" color='red' size={40} style={style.heart} />:
            <MaterialCommunityIcons name="heart-outline" color='red' size={40} style={style.heart} />
          }
        </TouchableOpacity>
        <Image 
          style={[style.image, style.shadow]}
          source={{uri: image}}
        />
        <Text style={style.name} >{name}</Text>
        { description? <View style={[style.descriptioncontainer, style.shadow]} >
                             <Text style={style.description}>{description}</Text>
                            </View>
                            : <Text style={{color: '#444444'}}>(No description)</Text>
                         
        }
      </View>
    )
  }