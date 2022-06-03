//importing libs
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//importing context
import { AuthContext } from '../context/AuthContext';

//importing screens
import Login from '../screens/Login'
import OnBoarding from '../screens/OnBoarding'
import Tabs from './TabNavigation'

//creating stack navigator
const Stack = createStackNavigator()



//defining screen options
const ScreenOptions = {
    headerShown: false
}





const RootStack = () => {

    const { user } = React.useContext(AuthContext)



    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    user ? (
                        <Stack.Screen options={ScreenOptions} name='Tabs' component={Tabs} />
                    ) : (
                        <>
                            <Stack.Screen options={ScreenOptions} name='Onboarding' component={OnBoarding} />
                            <Stack.Screen options={ScreenOptions} name='Login' component={Login} />
                        </>
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default RootStack;
