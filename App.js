import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { Provider } from 'react-redux';
import store from './src/redux/store';

import { WeatherScreen } from './src/screens/weather.screen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <WeatherScreen/>
        <ExpoStatusBar style='auto'/>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: StatusBar.currentHeight,
  },
});
