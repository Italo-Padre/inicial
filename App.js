import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import Botoes from './components/Botoes';
import Pag1 from './screens/Pag1';
import Pag2 from './screens/Pag2';
import Pag3 from './screens/Pag3';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <ScrollView style={{ margin: 10 }}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pagina1"
          component={Pag1}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    </ScrollView>
  );
}


