{/* IMPORTS COMPONENTS */}
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { PetCard } from './Components/PetCard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnimalList from './Components/AnimalList';
import AnimalDetails from './Components/AnimalDetails';
import ExploreOptions from './Components/ExploreOptions';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AnimalList"
          component={AnimalList}
          options={{ title: 'Welcome' }}
        />

        <Stack.Screen
          name="AnimalDetails"
          component={AnimalDetails}
          options={{ title: 'Details' }}
        />

<Stack.Screen
          name="ExploreOptions"
          component={ExploreOptions}
          options={{ title: 'ExploreOptions' }}
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
