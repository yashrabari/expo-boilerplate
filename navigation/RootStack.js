//importing libs
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//importing screens
import Login from '../screens/Login'
import Tabs from './TabNavigation'

//creating stack navigator
const Stack = createStackNavigator()



//defining screen options
const ScreenOptions = {
    headerShown: false
}





const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={ScreenOptions} name='Tabs' component={Tabs} />
                <Stack.Screen options={ScreenOptions} name='Login' component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default RootStack;
