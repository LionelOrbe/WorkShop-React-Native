import * as React from 'react';
import { Text, View,  Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import Information from '../Information/Information';
import Comics from '../Comics/Comics';

const Tab = createBottomTabNavigator();


export default function Detail() {
  return (
    <Tab.Navigator
    initialRouteName="Information"
    tabBarOptions={{
      activeTintColor: '#DA0037'
    }}
  >
    <Tab.Screen 
      name="Información" 
      component={Information} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="information-circle" color={color} size={size} />
        )
      }}
    />
    <Tab.Screen 
      name="Cómics" 
      component={Comics} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="book" color={color} size={size} />
        )
      }}
    />
  </Tab.Navigator>
  );
}