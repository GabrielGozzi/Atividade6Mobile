import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import TelaPrincipal from './src/TelaPrincipal';
import Tela1 from './src/Tela1';
import Tela2 from './src/Tela2';
import Tela3 from './src/Tela3';
import Tela4 from './src/Tela4';
import Tela5 from './src/Tela5';
import Tela6 from './src/Tela6';
import Tela7 from './src/Tela7';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#ffffff" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="TelaPrincipal"
        >
          <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
          <Stack.Screen name="Tela1" component={Tela1} />
          <Stack.Screen name="Tela2" component={Tela2} />
          <Stack.Screen name="Tela3" component={Tela3} />
          <Stack.Screen name="Tela4" component={Tela4} />
          <Stack.Screen name="Tela5" component={Tela5} />
          <Stack.Screen name="Tela6" component={Tela6} />
          <Stack.Screen name="Tela7" component={Tela7} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    // alignItems: "center",
    // justifyContent: "center",
  },
});