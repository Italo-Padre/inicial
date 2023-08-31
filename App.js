import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import Botoes from './components/Botoes';
import Pag1 from './screens/Pag1';
import Pag2 from './screens/Pag2';
import Pag3 from './screens/Pag3';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Arrays from './screens/Arrays';
import Objeto from './screens/Objeto';
import Estado from './screens/Estado';


export default function App() {

  const Stack = createNativeStackNavigator();


  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="estado" component={Estado}  options={{title:'Estado'}}/>
          <Stack.Screen name="Objeto" component={Objeto}  options={{title:'Objeto'}}/>
          <Stack.Screen name="Arrays" component={Arrays}  options={{title:'Arrays'}}/>
          <Stack.Screen name="Pagina1" component={Pag1}  options={{title:'Pagina Principal'}}/>
          <Stack.Screen name="Pagina2" component={Pag2}  options={{title:'Card'}} />
          <Stack.Screen name="Pagina3" component={Pag3}  options={{title:'Lista'}} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}


