/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text
} from 'react-native';
import Main from './MainNavigator/Main'
import { LogBox } from 'react-native';
import Ether from './Utils';

LogBox.ignoreAllLogs();



const App = ({ navigation }) => {
  return (
    <>
      <Main />
    </>
  );
}

export default App;

