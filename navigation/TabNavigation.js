import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//importing screens
import Home from '../screens/Home';
import Team from '../screens/Team';
import Shop from '../screens/Shop';
import Account from '../screens/Account';



//importing
import { Image } from 'react-native';
import { COLORS, icons, SIZES } from '../constants';


//creating tab navigation
const Tab = createBottomTabNavigator();


//defining screen options
const ScreenOptions = ({ route }) => {
    return {
        tabBarStyle: {
            backgroundColor: COLORS.white,
            borderTopWidth: 0,
            height: SIZES.height * 0.08,
            paddingBottom: SIZES.base * 2,
            paddingTop: SIZES.base * 2,
            paddingHorizontal: SIZES.base * 2,

        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
                iconName = icons.home;
            } else if (route.name === 'Team') {
                iconName = icons.staff;
            } else if (route.name === 'Shop') {
                iconName = icons.cake;
            } else if (route.name === 'Profile') {
                iconName = icons.account;
            }

            return focused ? <Image source={iconName} resizeMode="contain" style={{ tintColor: COLORS.lightBrown, width: SIZES.padding * 1.2 }} /> : <Image source={iconName} resizeMode="contain" style={{ tintColor: COLORS.gray, width: SIZES.padding }} />
        }
    }


}

export default function Tabs() {
    return (
        <Tab.Navigator screenOptions={ScreenOptions}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Team" component={Team} />
            <Tab.Screen name="Shop" component={Shop} />
            <Tab.Screen name="Profile" component={Account} />
        </Tab.Navigator>
    );
}