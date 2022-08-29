import * as React from 'react';
import { Text, View,  Image, TouchableOpacity,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function CharacterCard({image, name}) {

    const navigation = useNavigation();
    const styles = StyleSheet.create({
        container: {
          backgroundColor: '#444444',
          justifyContent: 'flexstart',
          alignItems: 'center',
          flexDirection: "row",
          borderWidth: 1,
          padding: 10,
          margin: 5,
          marginLeft: 15,
          marginRight: 15,
          borderRadius: 5,
          borderColor: '#DA0037',
          shadowColor: "#000",
          shadowOffset: {
	            width: 0,
	            height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
        },
        text:{
            marginLeft: 10,
            color: '#EDEDED',
            fontWeight: 'bold',
        },
        
      });

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detalle')}>
    <View style={styles.container}>
	  <Image source={image} style={{ width: 30, height: 30, borderRadius: 5 }}/>
      <Text style={styles.text}>{name}</Text>
    </View>
    </TouchableOpacity>
  );
}