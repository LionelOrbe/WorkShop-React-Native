import * as React from 'react';
import { Text, View,  Image, TouchableOpacity,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function CharacterCard({image, name, id}) {

    const navigation = useNavigation();
    const styles = StyleSheet.create({
        container: {
          backgroundColor: '#444444',
          justifyContent: 'flexstart',
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
            marginLeft: 10,
            color: '#EDEDED',
            fontWeight: 'bold',
        },
        
      });

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detail', {id})}>
    <View style={[styles.container, styles.shadow]}>
	  <Image source={image} style={{ width: 35, height: 35, borderRadius: 50, marginLeft: 10 }}/>
      <Text style={styles.text}>{name}</Text>
    </View>
    </TouchableOpacity>
  );
}