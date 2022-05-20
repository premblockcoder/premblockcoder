
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddWallet from '../Screens/Dashboard/AddWallet';
import Wallet from '../Screens/Dashboard/Wallet'
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const FirstTab = () => {
    const Stack = createNativeStackNavigator();
    const [defaultroute, setDefaultRoute] = useState('')
    const [isChecked, setIsChecked] = useState(false)

    const processInitialAction = async () => {
        const Address = await AsyncStorage.getItem('wallet_address')
        setDefaultRoute(Address ? 'Wallet' : 'AddWallet')
        setIsChecked(true)
    }

    useEffect(() => {
        processInitialAction()
    }, [])

    if (!isChecked) return null
    return (
        <>
            <Stack.Navigator
                initialRouteName={defaultroute}
                screenOptions={{
                    headerShown: false,
                    animation: "none"
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

