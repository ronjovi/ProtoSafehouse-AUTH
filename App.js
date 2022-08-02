{/* IMPORTS COMPONENTS */ }
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import { PetCard } from './Components/PetCard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnimalList from './Components/AnimalList';
import AnimalDetails from './Components/AnimalDetails';
import ShelterOptions from './Components/ShelterOptions';
import Support from './Components/Support';
import Adopt from './Components/Adopt';
import VisitConfirm from './Components/VisitConfirm';
import SupportConfirm from './Components/SupportConfirm';
import ReservePage from './Components/ReservePage';
import Market from './Components/Market';
import { useFonts } from 'expo-font';


const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    K2D: require('./assets/fonts/K2D-Regular.ttf'),
    boldK2D: require('./assets/fonts/K2D-Bold.ttf'),
    semiBoldK2D: require('./assets/fonts/K2D-SemiBold.ttf'),
    lightK2D: require('./assets/fonts/K2D-Light.ttf'),
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AnimalList"
          component={AnimalList}
          options={{ title: 'Safehouse', headerShown: false }}
        />

        <Stack.Screen
          name="AnimalDetails"
          component={AnimalDetails}
          options={{
             title: 'Details', headerShown: false }}
        />

        <Stack.Screen
          name="ShelterOptions"
          component={ShelterOptions}
          options={{ title: 'Shelter Options', headerShown: false }}
        />

        <Stack.Screen
          name="Support"
          component={Support}
          options={{ title: 'Support', headerShown: false }}
        />

        <Stack.Screen
          name="Adopt"
          component={ Adopt }
          options={{ title: 'Adopt', headerShown: false }}
        />

        <Stack.Screen
          name="ReservePage"
          component={ ReservePage }
          options={{ title: 'Reservation', headerShown: false }}
        />

        <Stack.Screen
          name="VisitConfirm"
          component={ VisitConfirm }
          options={{ title: 'Visit Confirmed', headerShown: false }}
        />

        <Stack.Screen
          name="SupportConfirm"
          component={ SupportConfirm }
          options={{ title: 'Support Confirmed', headerShown: false }}
        />

        <Stack.Screen
          name="Market"
          component={ Market }
          options={{ title: 'Market Page', headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
