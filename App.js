import { StatusBar } from 'expo-status-bar';
import RootStack from './navigation/RootStack';
import { useFonts } from 'expo-font';
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
    <>
      <StatusBar backgroundColor='#fff' />
      <RootStack />

    </>
  );
}
