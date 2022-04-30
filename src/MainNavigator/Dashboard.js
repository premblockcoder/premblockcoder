/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './Tabs.js';
import AddToken from '../Screens/Dashboard/AddToken.js';
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
import Scanner from '../Screens/Dashboard/Scanner.js';
import ChangePassword from '../Screens/Dashboard/ChangePasword.js';
import PinView from '../Screens/Dashboard/PinView.js';
import Notification from '../Screens/Dashboard/notification.js';
import ConfirmPin from '../Screens/Dashboard/Confirmpin.js';
import AsyncStorage from '@react-native-async-storage/async-storage'
import MyProfile from '../Screens/Dashboard/EditProfile/index.js';

const Stack = createNativeStackNavigator();

const Dashboard = ({ route }) => {

  const [defaultRoute, setDefaultRoute] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const { type } = route?.params || {}

  const processInitialAction = () => {
    console.log(type, "type")
    setDefaultRoute(type == 'login' ? 'BottomTabs' : type == 'register' ? 'PinView' : undefined ? 'BottomTabs' : null)
    setIsChecked(true)
  }

  useEffect(() => {
    processInitialAction()
  }, [])


  if (!isChecked) return null

  return (
    <Stack.Navigator
      initialRouteName={defaultRoute}
      screenOptions={{
        headerShown: false
      }} >
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
      />
      <Stack.Screen
        name="AddToken"
        component={AddToken}
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
        component={Notification}
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
      <Stack.Screen
        name="ConfirmPin"
        component={ConfirmPin}
        options={{ animation: "none" }}
      />
      <Stack.Screen
        name="MyProfile"
        component={MyProfile}
      />
    </Stack.Navigator>
  );
}

export default Dashboard;
