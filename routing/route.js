{
  /* IMPORTS COMPONENTS */
}
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AnimalList from "../Pages/AnimalList";
import AnimalDetails from "../Pages/AnimalDetails";
import ShelterOptions from "../Pages/ShelterOptions";
import SupportPage from "../Pages/SupportPage";
import SchedulingPage from "../Pages/SchedulingPage";
import ReserveConfirm from "../Pages/ReserveConfirm";
import SupportConfirm from "../Pages/SupportConfirm";
import ReservePage from "../Pages/ReservePage";
import Market from "../Pages/Market";
import ProfilePage from "../Pages/ProfilePage";
import BadgesRecieved from "../Pages/BadgesRecieved";
import AdoptionLog from "../Pages/Shelter Panel/AdoptionLog";
import ReservationLog from "../Pages/Shelter Panel/ReservationLog";
import SupportLog from "../Pages/Shelter Panel/SupportLog";
import SignIn from "../Pages/logged-out/SignIn";
import { useState } from "react";
import { useAppSelector } from "../store/hook";
import { getIsLoggedIn } from "../store/userSession";
import SignUp from "../features/auth/routes/SignUp";

const Stack = createNativeStackNavigator();

export default function Route() {
    const isLoggedin = useAppSelector(getIsLoggedIn)
    
    console.log('the user is logged in: ', isLoggedin);


  if (isLoggedin) {
    // return the logged in screens
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="AnimalList"
            component={AnimalList}
            options={{ title: "Safehouse", headerShown: false }}
          />

          <Stack.Screen
            name="AnimalDetails"
            component={AnimalDetails}
            options={{
              title: "Details",
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="ShelterOptions"
            component={ShelterOptions}
            options={{ title: "Shelter Options", headerShown: false }}
          />

          <Stack.Screen
            name="SupportPage"
            component={SupportPage}
            options={{ title: "Support Page", headerShown: false }}
          />

          <Stack.Screen
            name="SchedulingPage"
            component={SchedulingPage}
            options={{ title: "Scheduling Page", headerShown: false }}
          />

          <Stack.Screen
            name="ReservePage"
            component={ReservePage}
            options={{ title: "Reservation", headerShown: false }}
          />

          <Stack.Screen
            name="ReserveConfirm"
            component={ReserveConfirm}
            options={{ title: "Reserve Confirmed", headerShown: false }}
          />

          <Stack.Screen
            name="BadgesRecieved"
            component={BadgesRecieved}
            options={{ title: "Badges Recieved", headerShown: false }}
          />

          <Stack.Screen
            name="SupportConfirm"
            component={SupportConfirm}
            options={{ title: "Support Confirmed", headerShown: false }}
          />

          <Stack.Screen
            name="Market"
            component={Market}
            options={{ title: "Market Page", headerShown: false }}
          />

          <Stack.Screen
            name="ProfilePage"
            component={ProfilePage}
            options={{ title: "Profile Page", headerShown: false }}
          />

          <Stack.Screen
            name="AdoptionLog"
            component={AdoptionLog}
            options={{ title: "Adoption Log", headerShown: false }}
          />

          <Stack.Screen
            name="ReservationLog"
            component={ReservationLog}
            options={{ title: "Reservation Log", headerShown: false }}
          />

          <Stack.Screen
            name="SupportLog"
            component={SupportLog}
            options={{ title: "Support Log", headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  // return the logged out screens
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Signup"
          component={SignUp}
          options={{ title: "", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
