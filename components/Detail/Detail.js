import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import Information from '../Information/Information.js';
import Comics from '../Comics/Comics.js';
import apiParams from '../../config.js';
import axios from 'axios';

const Tab = createBottomTabNavigator();

export default function Detail({ route }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;

  useEffect(() => {
   // console.log("Route:" ,route)
    axios.get(`${baseURL}/v1/public/characters/${route.params.id}`, {
      params: {
        ts,
        apikey,
        hash
      }
    })
      .then(response => setData(response.data.data.results[0]))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{header: ()=> null, 
        "tabBarActiveTintColor": "#EDEDED",
        "tabBarInactiveTintColor": "#444444",
        "tabBarActiveBackgroundColor": "#171717",
        "tabBarInactiveBackgroundColor": "#171717",
        "tabBarStyle": [
          {
            "display": "flex"
          },
          null
        ]
      }}
      initialRouteName="Information"
      // tabBarOptions={{
      //   activeTintColor: '#EDEDED',
      //   inactiveTintColor: '#444444',
      //   activeBackgroundColor: '#171717',
      //   inactiveBackgroundColor: '#171717',

        
      // }}
    >
      <Tab.Screen 
        name="Information" 
        options={{
          title:' Information',
          headerStyle: {
            backgroundColor: '#171717',
          },
          headerTintColor: '#EDEDED',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information-circle" color={color} size={size} />
          )
        }}
      >
        {() => 
          (isLoading
            ? <ActivityIndicator size="large" color="#DA0037" style={{marginTop: 100}}/> 
            : <Information 
                image={`${data?.thumbnail?.path}.${data.thumbnail.extension}`}
                name={data.name}
                description={data.description} 
                id={data.id}
              />
          )
        }
      </Tab.Screen>
      <Tab.Screen 
        name="Comics" 
        options={{
          title: 'Comics',
          headerStyle: {
            backgroundColor: '#171717',
          },
          headerTintColor: '#EDEDED',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          )
        }}
      >
        {() => 
          (isLoading
            ? <ActivityIndicator size="large" color="#DA0037" style={{marginTop: 100}} /> 
            : <Comics
                listComics={data?.comics?.items} 
              />
          )
        }
      </Tab.Screen>
      
    </Tab.Navigator>
  );
}