/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../Screens/Auth/onboarding.js';
import Login from '../Screens/Auth/Login.js';
import Register from '../Screens/Auth/Register.js';
import VerifyEmail from '../Screens/Auth/VerifyEmail.js';
import ForgotPassword from '../Screens/Auth/ForgotPassword.js';
import BottomTabs from './Tabs.js';
import AddToken from '../Screens/Dashboard/AddToken.js';
import AddWallet from '../Screens/Dashboard/AddWallet.js';
import GenerateWallet from '../Screens/Dashboard/GenerateWallet.js';
import ImportWallet from '../Screens/Dashboard/ImportWallet.js';
import RecoveryPharse from '../Screens/Dashboard/RecoveryPharse.js';
import CustomToken from '../Screens/Dashboard/CustomToken.js';
import VerifyMnemonic from '../Screens/Dashboard/VerifyMnemonic.js';
import PrivateKey from '../Screens/Dashboard/PrivateKey.js';
import BitcoinDetail from '../Screens/Dashboard/BitcoinDetail.js';
import SendBitcoin from '../Screens/Dashboard/SendBitcoin.js';
import ConfirmSend from '../Screens/Dashboard/ConfirmSend.js';
import CompleteTrans from '../Screens/Dashboard/CompleteTrans.js';
import notification from '../Screens/Dashboard/notification.js';
import Scanner from '../Screens/Dashboard/Scanner.js';
import ChangePassword from '../Screens/Dashboard/ChangePasword.js';
import PinView from '../Screens/Dashboard/PinView.js';

const Stack = createNativeStackNavigator();

const Main = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='onboarding'
         screenOptions={{
          headerShown: false
        }} >
        <Stack.Screen
          name="onboarding"
          component={Onboarding}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Register"
          component={Register}
        />
        <Stack.Screen
          name="VerifyEmail"
          component={VerifyEmail}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
        />
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
        />
        <Stack.Screen
          name="AddToken"
          component={AddToken}
        />
        <Stack.Screen
          name="AddWallet"
          component={AddWallet}
        />
        <Stack.Screen
          name="GenerateWallet"
          component={GenerateWallet}
        />
         <Stack.Screen
          name="ImportWallet"
          component={ImportWallet}
        />
         <Stack.Screen
          name="RecoveryPharse"
          component={RecoveryPharse}
        />
         <Stack.Screen
          name="CustomToken"
          component={CustomToken}
        />
         <Stack.Screen
          name="VerifyMnemonic"
          component={VerifyMnemonic}
        />
          <Stack.Screen
          name="PrivateKey"
          component={PrivateKey}
        />
          <Stack.Screen
          name="BitcoinDetail"
          component={BitcoinDetail}
        />
          <Stack.Screen
          name="SendBitcoin"
          component={SendBitcoin}
        />
           <Stack.Screen
          name="ConfirmSend"
          component={ConfirmSend}
        />
          <Stack.Screen
          name="CompleteTrans"
          component={CompleteTrans}
        />
          <Stack.Screen
          name="notification"
          component={notification}
        />
         <Stack.Screen
          name="Scanner"
          component={Scanner}
        />
     <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
        />
         <Stack.Screen
          name="PinView"
          component={PinView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
