import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { WeatherScreen } from './src/screens/weather.screen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WeatherScreen/>
      <ExpoStatusBar style='auto'/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: StatusBar.currentHeight,
  },
});
