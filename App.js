import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreens';
import ProfileScren from './screens/ProfileScren';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import NewhomeScreen from './screens/NewhomeScreen';
import AppoinCnfScr from './screens/AthenticateScreen';
import ClientProfileScreen from './screens/ClientProfileScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
      
    <NavigationContainer>
      <Stack.Navigator>
    
        <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="profile" component={ProfileScren} options={{headerShown: false}} />

        <Stack.Screen name="rn" component={RegisterScreen} options={{headerShown: false}} />

        <Stack.Screen name="ln" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="newhome" component={NewhomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="auth" component={AppoinCnfScr} options={{headerShown: false}} />
        <Stack.Screen name='Client' component={ClientProfileScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


