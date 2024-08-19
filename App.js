// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../memory-game/src/Components/HomeScreen';
import GameScreen from '../memory-game/src/Components/GameScreen';
import AppNavigator from './src/Components/AppNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AppNavigator/>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="Game" component={GameScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
