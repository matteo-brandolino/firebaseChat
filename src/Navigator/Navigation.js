import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import { Animated } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Signup from '../components/Auth/SignUp';
import Login from '../components/Auth/Login';
import Chatroom from '../components/Chatroom';

const AuthStack=createStackNavigator();

const StackScreens=()=>(
    <AuthStack.Navigator screenOptions={{headerShown:false}} initialRouteName="Login">
        <AuthStack.Screen 
            name="SignUp" 
            component={Signup} 
            options={{
                headershown:false,
            }}
        />
        <AuthStack.Screen 
            name="Login" 
            component={Login} 
            options={{
                headershown:false,
            }}
        /> 
        <AuthStack.Screen name="Chatroom" component={Chatroom} options={{headershown:false}}/>   
    </AuthStack.Navigator>
)

export default ()=>{

    return (
        <NavigationContainer>
        <   StackScreens/>
        </NavigationContainer>
    )
}