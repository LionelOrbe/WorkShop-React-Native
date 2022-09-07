import React, {useState, useEffect} from 'react';
import { Text, View,  Image, TouchableOpacity,StyleSheet, FlatList } from 'react-native';

export default function Likes(){

    const [likes, setLikes] = useState('');

    useEffect(() => {
      async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('likes')
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
          console.log(e)
        }
        setLikes(jsonValue)
      }
             
    }, []);

    console.log('Likes', likes)

    return(
        <View>
            <Text>Likes</Text>
            <FlatList
            // ref={flatListRef}
            data={likes}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
                <CharacterCard 
                  id={item.id}
                  image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`} 
                  name={item.name} />
                  )}
                        
            
                 />
        </View>
    )
}