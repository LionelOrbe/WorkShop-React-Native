import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home/Home'
import Detail from './components/Detail/Detail';

const Stack = createStackNavigator();
const navTheme = DefaultTheme;
navTheme.colors.background = '#171717';

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator >
        <Stack.Screen name="Inicio" component={Home} options={{ 
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}