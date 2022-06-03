import { StatusBar } from 'react-native';
import RootStack from './navigation/RootStack';
import { useFonts } from 'expo-font';
import { AuthProvider } from './context/AuthContext';
export default function App() {

  const [loaded] = useFonts({
    "Poppins-ExtraBold": require('./assets/fonts/Poppins-ExtraBold.ttf'),
    "Poppins-Black": require('./assets/fonts/Poppins-Black.ttf'),
    "Poppins-Bold": require('./assets/fonts/Poppins-Bold.ttf'),
    "Poppins-Regular": require('./assets/fonts/Poppins-Regular.ttf'),
  })

  if (!loaded) {
    return null;
  }
  return (
    <AuthProvider>
      <StatusBar translucent backgroundColor="transparent" barStyle='dark-content' />
      <RootStack />

    </AuthProvider>
  );
}
