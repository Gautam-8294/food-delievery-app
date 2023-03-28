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
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Card from './components/Card';
import HomeScreen from './components/HomeScreen';
import {colors} from "./global/styles";
import SignInScreen from './screens/authScreens/SignInScreen';


function App(){
  return(
    <View style ={styles.container}>
    <StatusBar 
            barStyle = "light-content"
            backgroundColor = {colors.statusbar}
                />
      <SignInScreen />
      <HomeScreen />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

export default App;
