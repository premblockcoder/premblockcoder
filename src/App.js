/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useEffect } from 'react';
import {
  SafeAreaView,
  View, StatusBar
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Main from './MainNavigator/navigation.js';
import SplashScreen from 'react-native-splash-screen'

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);

  }, [])

  return (
    <>
      <SafeAreaProvider>
        <Main />
      </SafeAreaProvider>


    </>

  );
}

export default App;

