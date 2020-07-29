/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login'
import RootContainer from './RootContainer'
import Dashboard from './Dashboard'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={RootContainer} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {
    marginTop: 150,
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 60,
    alignSelf: 'flex-start'
  },
  userAvatar: {
    height: 50,
    width: 50,
    alignSelf: 'center',
    backgroundColor: '#000'
  },
  primaryText: {
    color: '#32CD32'
  },
  textInput: {
    width: '100%',
    borderColor: '#32CD32',
    borderWidth: 0.5,
    margin: 5,
    borderRadius: 5,
    fontSize: 12
  },
  button: {
    width: '50%',
    backgroundColor: '#32CD32',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 30
  },
  buttonText: {
    fontSize: 14,
    color: '#e8e8e8',
    alignSelf: 'center'
  },
  headingText: {
    fontSize: 18
  }
 
});

export default App;
