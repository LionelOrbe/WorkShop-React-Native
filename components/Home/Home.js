import React, {useState, useEffect, useRef} from 'react';
import { Text, View, FlatList, ActivityIndicator, Dimensions, Alert } from 'react-native';
import CharacterCard from '../CharacterCard/CharacterCard';
import apiParams from '../../config.js';
import axios from 'axios';
import { Searchbar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';


export default function Home() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;
  const [search, setSearch] = useState('');
  const [isLoading2, setLoading2] = useState(true);
  const flatListRef = useRef()
 
 
    

  useEffect(() => {
    getData();
           
  }, []);

  function searchCharacter() {
    if(search) {
      setLoading(true);
      axios.get(`${baseURL}/v1/public/characters`, {
        params: {
          ts,
          apikey,
          hash,
          nameStartsWith: search
        }
      })
        .then(response => setData(response.data.data.results))
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
        
    }
    else {
        setLoading(true)
        axios.get(`${baseURL}/v1/public/characters`, {
        params: {
          ts,
          apikey,
          hash
        }
      })
        .then(response => setData(response.data.data.results))
        .catch(error => console.error(error))
        .finally(() => setLoading(false)); 
        
    }
  }

  function getData(){
    setLoading2(true)
    axios.get(`${baseURL}/v1/public/characters`, {
      params: {
        ts,
        apikey,
        hash,
        offset: data.length
      }
    })
      .then(response => setData([...data, ...response.data.data.results]))
      .catch(error => console.error(error))
      .finally(() => {setLoading(false); setLoading2(false)});
  }
 
   console.log('Data', data.length)
  return (
    <View style={{backgroundColor: '#171717'}}>
      {isLoading 
        ? <ActivityIndicator size="large" color="#DA0037" style={{marginTop: 100}}/>
        : 
                 
          <FlatList
            ref={flatListRef}
            data={data}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
                <CharacterCard 
                  id={item.id}
                  image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`} 
                  name={item.name} />
                  )}
            onEndReached={getData}
            onEndReachedThreshold={0.3}
            ListHeaderComponent={
                <Searchbar
                  style={{borderRadius: 10, margin: 10}}
                  placeholder="Search characters..."
                  onChangeText={value => setSearch(value)}
                  value={search}
                  onIconPress={searchCharacter}
                  onSubmitEditing={searchCharacter}
                                />}
            ListFooterComponent={isLoading2? <ActivityIndicator size="large" color="#DA0037"/> : null}  
                 />
      }
      {
       data.length>50? <MaterialCommunityIcons 
       style={{position: 'absolute', right: 20, bottom: 20}} 
       name="chevron-up-circle-outline" 
       color='#EDEDED' size={50} 
       onPress={() => {flatListRef.current.scrollToOffset({ animated: true, offset: 0 })}} /> :null

      }
      
    </View>
  );
}

