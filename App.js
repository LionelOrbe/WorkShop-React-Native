import React, {useEffect, useState} from 'react';
import { NavigationContainer, DefaultTheme,useNavigationContainerRef  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, View, Text,TouchableOpacity } from 'react-native';
import Home from './components/Home/Home'
import Detail from './components/Detail/Detail';
import logo from './assets/icon.png'
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import Likes from './components/Likes/Likes';
// import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();
const navTheme = DefaultTheme;
navTheme.colors.background = '#171717';

export default function App() {
  
  const navigationRef = useNavigationContainerRef();

    return (
    <NavigationContainer theme={navTheme} ref={navigationRef}>
      <Stack.Navigator >
        <Stack.Screen name="Inicio" component={Home} options={{ 
           headerTitle: () => (
            <View style={{flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'space-between', width: '100%',}}>
                <Text style={{color: '#EDEDED', fontWeight: 'bold', fontSize: 20, marginLeft:5}}>Welcome Avenger!</Text>
                <TouchableOpacity onPress={() => navigationRef.navigate('Likes')}>
                <MaterialCommunityIcons name="heart-outline" color='red' size={25}  />
                </TouchableOpacity>
                <Image style={{ width: 30, height: 30,  }} source={logo} />
            </View>
          ),
            title: 'Welcome Avenger!',
            headerStyle: {
              backgroundColor: '#171717',
            },
            headerTintColor: '#EDEDED',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}/>
        <Stack.Screen name="Detail" component={Detail} options={
          { 
            title: '',
              headerStyle: {
              backgroundColor: '#171717',
            },
            headerTintColor: '#EDEDED',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}/>
          <Stack.Screen name="Likes" component={Likes} options={
          { 
            title: 'Favorites',
              headerStyle: {
              backgroundColor: '#171717',
            },
            headerTintColor: '#EDEDED',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}