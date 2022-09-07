import * as React from 'react';
import { Text, View,  Image, TouchableOpacity,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CharacterCard({image, name, id}) {
  
    const navigation = useNavigation();
    const styles = StyleSheet.create({
        container: {
          backgroundColor: '#444444',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: "row",
        //   borderWidth: 1,
          padding: 5,
          margin: 5,
          marginLeft: 15,
          marginRight: 15,
          borderRadius: 5,
        //   borderColor: '#DA0037',
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
            
            color: '#EDEDED',
            fontWeight: 'bold',
        },
        image:{
          width: 40, 
          height: 40, 
          marginLeft: 15,
          borderRadius: 50
        },
        small:{
          fontSize: 10
        }
        
      });

      async function like (){
        try {
          await AsyncStorage.setItem('likes', 'hola')
        } catch (e) {
          console.log(e)
        }
      }

  return (
    <View style={[styles.container, styles.shadow]}>
      <TouchableOpacity onPress={() => navigation.navigate('Detail', {id})}>
        <View style={{flexDirection: 'row', alignItems: 'center', width: '90%'}}>
        <Image source={{uri: image}} style={styles.image} resizeMode='contain'/>
        <Text style={[styles.text, name.length>32? styles.small: null]}>{name}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>like()}>
      <MaterialCommunityIcons name="heart-outline" color='red' size={22} style={{marginRight: 5}} />
      </TouchableOpacity>
    </View>
    
  );
}