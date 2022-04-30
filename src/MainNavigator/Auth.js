import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../Screens/Auth/onboarding';
import Login from '../Screens/Auth/Login';
import Register from '../Screens/Auth/Register';
import VerifyEmail from '../Screens/Auth/VerifyEmail';
import ForgotPassword from '../Screens/Auth/ForgotPassword';
import ChangePassword from '../Screens/Dashboard/ChangePasword';

const AuthStack = createNativeStackNavigator();

const Auth = () => {
    return (
        <>
            <AuthStack.Navigator
                initialRouteName='onboarding'
                screenOptions={{
                    headerShown: false
                }}>
                <AuthStack.Screen
                    name="onboarding"
                    component={Onboarding}
                />
                <AuthStack.Screen
                    name="Login"
                    component={Login}
                />
                <AuthStack.Screen
                    name="Register"
                    component={Register}
                />
                <AuthStack.Screen
                    name="VerifyEmail"
                    component={VerifyEmail}
                />
                <AuthStack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                />
                <AuthStack.Screen
                    name="ChangePassword"
                    component={ChangePassword}
                />
            </AuthStack.Navigator>
        </>
    )

}
export default Auth