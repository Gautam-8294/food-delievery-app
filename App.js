/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type  from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Card from './components/Card';
import HomeScreen from './components/HomeScreen';
function HandleClick(){
  alert("Hii");
}

function App(){
  return(
    <View>
      <Text>
        Hello
      </Text>
      <HomeScreen>
      <Button title="Press Me" onPress={HandleClick}/>
      </HomeScreen>
      
    </View>
  )
}

export default App;
