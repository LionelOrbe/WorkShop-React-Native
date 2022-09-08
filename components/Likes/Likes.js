import React, {useState, useEffect} from 'react';
import { Text, View,  Image, TouchableOpacity,StyleSheet, FlatList } from 'react-native';

export default function Likes(){

    const [likes, setLikes] = useState('');

    useEffect(() => {
      async () => {
        try {
            const value = await AsyncStorage.getItem('likes')
            if(value !== null) {
                console.log('VALOR',value)
                setLikes(value)
              // value previously stored
            }
          } catch(e) {
            console.log(e)
        }
        console.log(value)
      }
             
    }, [likes]);

    console.log('Likes', likes)

    return(
        <View>
            <Text>Likes {likes}</Text>
            {/* <FlatList
            // ref={flatListRef}
            data={likes}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
                <CharacterCard 
                  id={item.id}
                  image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`} 
                  name={item.name} />
                  )}
                        
            
                 /> */}
        </View>
    )
}