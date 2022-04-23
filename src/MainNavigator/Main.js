import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef, isReadyRef } from './RootNavigation'
import Auth from './Auth';
import Dashboard from './Dashboard';
import SplashScreen from 'react-native-splash-screen'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createNativeStackNavigator();

const Main = () => {
    const [defaultRoute, setDefaultRoute] = useState('')
    const [isChecked, setIsChecked] = useState(false)

    const processInitialAction = async () => {
        const token = await AsyncStorage.getItem('access_token')
        console.log(token)
        setDefaultRoute(token ? 'Dashboard' : 'Auth')

        setIsChecked(true)

        setTimeout(() => {
            SplashScreen.hide()
        }, 200)
    }

    useEffect(() => {
        processInitialAction()
    }, [])

    useEffect(() => {
        return () => {
            isReadyRef.current = false
        }
    }, [])

    if (!isChecked) return null

    return (
        <>
            <NavigationContainer
                ref={navigationRef}
                onReady={() => {
                    isReadyRef.current = true
                }}>
                <Stack.Navigator
                    initialRouteName={'Auth'}
                    screenOptions={{
                        headerShown: false
                    }}>
                    <Stack.Screen
                        name='Auth'
                        component={Auth}
                    />
                    <Stack.Screen
                        name='Dashboard'
                        component={Dashboard}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}
export default Main