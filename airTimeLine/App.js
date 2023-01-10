import Count from './scr/screen/Count';
import Login from './scr/screen/Login';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Security from './scr/screen/Security';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Security"
          component={Security}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Count"
          component={Count}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// Security
// Login
