import { View } from 'react-native';
import Cesta from './src/Telas/Cesta';
import { SafeAreaView } from 'react-native-web';

import {
      useFonts,
      Montserrat_400Regular,
      Montserrat_700Bold
    } from '@expo-google-fonts/montserrat';

export default function App() {
const [fontCarregada] = useFonts({
  "MontserratRegular": Montserrat_400Regular,
  "MontserratBold": Montserrat_700Bold
});

if(!fontCarregada){
  return <h1>Não carregou</h1>
}

  return (
    <SafeAreaView>
      <Cesta />

    </SafeAreaView>
  );
}