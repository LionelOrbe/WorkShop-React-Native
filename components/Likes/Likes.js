import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View,  Image, TouchableOpacity,StyleSheet, FlatList, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux'
import { setLikes, getLikes, clearLikes } from '../../redux/actions';


export default function Likes(){

    const navigation = useNavigation();
    const dispatch= useDispatch()
    const {likes} = useSelector(state => state); 
   // const [local, setLocal] = useState(likes)
     
                      
      
    const styles = StyleSheet.create({
        container: {
          //  flex:1,
         margin: 10,
         alignItems: 'center',
         backgroundColor: '#444444',
         padding: 20,
         paddingBottom:5,
         borderRadius: 5,
         
        
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
        text:{
            padding:10,
            color: '#EDEDED',
            fontWeight: 'bold',
        },
        image:{
            marginTop: -130,
          width: 250, 
          height: 250, 
          borderRadius: 10,
          
          
        },
        close: {
            // marginTop: -2,
            // marginLeft: 9,
            fontWeight: 'bold',
            fontSize:20,
            color: '#EDEDED',
            
        },
        closecontainer: {
            justifyContent: 'center',
            backgroundColor: 'red',
            borderRadius: 50,
            height:30,
            width:30,
            position: 'absolute', 
            right: 17, 
            top: -315,
            zIndex: 2,
        },
        
        
      });

    function  onClose(id){
               
        const filtered = likes.filter((e)=> e.id != id)
         // console.log('Filtered',filtered)
                    
        
          //dispatch(clearLikes())
          dispatch(setLikes(filtered))
         // console.log('setLikes to Filtered')
         
        }

    return(
        <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
            <FlatList
            contentContainerStyle={{alignItems: 'center'}}
            horizontal
            ListEmptyComponent={<Text style={styles.text}>No Favourites</Text>}
            data={likes}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
                <View >
                    <TouchableOpacity onPress={() => navigation.navigate('Detail', {id:`${item.id}`})}>
                        <View style={[styles.container, styles.shadow]}>
                            <Image source={{uri: item.image}} style={styles.image} resizeMode='contain'/>
                            <Text style={styles.text}>{item.name}</Text>            
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> onClose(item.id)}>
                            <View style={styles.closecontainer}>
                                <Text style={styles.close}></Text>
                            </View>
                    </TouchableOpacity>
                </View>
                
                  )}
            
                 />
        </View>
    )
}