import * as React from 'react';
import { Text, View,  Image,StyleSheet } from 'react-native';


export default function Information({ image, name, description }) {

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
            padding: 10
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

        
      });

    return (
      <View style={style.container}>
        <Image 
          style={[style.image, style.shadow]}
          source={{uri: image}}
        />
        <Text style={style.name} >{name}</Text>
        { description? <View style={[style.descriptioncontainer, style.shadow]} >
                             <Text style={style.description}>{description}</Text>
                            </View>
                            : <Text>No description</Text>
                         
        }
      </View>
    )
  }