import React, {useState, useEffect} from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import CharacterCard from '../CharacterCard/CharacterCard';
import apiParams from '../../config.js';
import axios from 'axios';
import { Searchbar } from 'react-native-paper';


export default function Home() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;
  const [search, setSearch] = useState('');
  const [chars, setChars] = useState(0);
    

  useEffect(() => {

    async function fetchfunction(){

      console.log('Mount')
      await axios.get(`${baseURL}/v1/public/characters`, {
        params: {
          ts,
          apikey,
          hash,
          offset: chars
        }
      })
      .then(response => setData([...data, ...response.data.data.results]))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
      console.log('Data', data, 'Chars', chars)
      // setChars(chars+20)
    }
    fetchfunction();
  }, [chars]);

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

  // function getmoreChar () {

  //   console.log('Obteniendo mas datos')
  //   console.log('Data', data, 'Chars', chars)
      
  //     axios.get(`${baseURL}/v1/public/characters`, {
  //       params: {
  //         ts,
  //         apikey,
  //         hash,
  //         offset: chars
  //       }
  //     })
  //     .then(response => setData([...data, ...response.data.data.results]))
  //     .catch(error => console.error(error))
  //     .finally(() => setLoading(false));
  //     setChars(chars+20) 
  //         }

  // console.log('Data', data, 'Chars', chars)
  return (
    <View style={{backgroundColor: '#171717'}}>
      {isLoading 
        ? <ActivityIndicator size="large" color="#DA0037" style={{marginTop: 100}}/>
        : 
        <View>

          <Searchbar
                style={{borderRadius: 10, margin: 10}}
                placeholder="Search characters..."
                onChangeText={value => setSearch(value)}
                value={search}
                onIconPress={searchCharacter}
                onSubmitEditing={searchCharacter}
                />
          <FlatList
            data={data}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
                <CharacterCard 
                id={item.id}
                image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`} 
                name={item.name} />
                )}
            onEndReached={()=>setChars(chars+20)}
            onEndReachedThreshold={0.5}
                                     
                />
        </View>
        
      }
    </View>
  );
}

