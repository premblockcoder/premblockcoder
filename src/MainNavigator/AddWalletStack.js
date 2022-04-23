
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddWallet from '../Screens/Dashboard/AddWallet';
import Wallet from '../Screens/Dashboard/Wallet'
import React, { Component } from 'react';


const FirstTab = () => {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <Stack.Navigator
                initialRouteName='Wallet'
                screenOptions={{
                    headerShown: false,
                    animation:"none"
                }}  >
                <Stack.Screen
                    name="AddWallet"
                    component={AddWallet}
                />
                <Stack.Screen
                    name="Wallet"
                    component={Wallet}
                />
            </Stack.Navigator>
        </>

    )

}
export default FirstTab

