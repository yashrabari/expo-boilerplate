import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//importing screens
import Home from '../screens/Home';



//creating tab navigation
const Tab = createBottomTabNavigator();


//defining screen options
const ScreenOptions = {
    headerShown: false
}


export default function Tabs() {
    return (
        <Tab.Navigator >
            <Tab.Screen options={ScreenOptions} name="Home" component={Home} />
        </Tab.Navigator>
    );
}