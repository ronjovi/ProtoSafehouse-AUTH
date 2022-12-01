import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Button,
  Pressable,
  Image,
  Platform,
} from "react-native";
import React from "react";

export default function GoToHome({ navigation }) {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Image
        source={require("../assets/Safehouse_paw.png")}
        style={styles.safehousePawLogo}
      />
      <Text style={styles.confirmStyle}>Reservation Confirmed!</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("BadgesRecieved")}
        style={styles.badgesButton}
      >
        <Text style={styles.badgesButtonText}>Receive Badges</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  safehousePawLogo: {
    alignSelf: "center",
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginTop: 325,
  },
  confirmStyle: {
    alignSelf: "center",
    fontSize: 34,
    color: "#62BA75",
    fontWeight: "500",
    marginTop: 2.5,
    fontFamily: "semiBoldK2D",
  },
  badgesButton: {
    alignSelf: "center",
    backgroundColor: "#62BA75",
    borderRadius: 5,
    width: 200,
    height: 50,
    marginTop: 15,
    justifyContent: "center",
  },
  badgesButtonText: {
    color: "white",
    alignSelf: "center",
    fontFamily: "semiBoldK2D",
    fontSize: 25,
  },
});
