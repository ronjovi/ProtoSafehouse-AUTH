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

export default function BadgesRecieved({ navigation }) {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Text style={styles.header}>Badges Received:</Text>
      <FlatList
        style={styles.FlatList}
        // horizontal={true}
        numColumns={3}
        // scrollEnabled={false}
        columnWrapperStyle={styles.row}
        ListHeaderComponent={<></>}
        data={[
          {
            image: require("../assets/Cat_stronaut.png"),
            name: "Cat-stronaut",
          },
          {
            image: require("../assets/Clean_Rat.png"),
            name: "Clean Rat",
          },
          {
            image: require("../assets/Coolcat.png"),
            name: "Coolcat",
          },
        ]}
        renderItem={({ item }) => (
          <View style={styles.NFTrecieve}>
            <Image source={item.image} style={styles.NFT} />
            <View style={styles.nameOfNFT}>
              <Text
                style={{
                  fontFamily: "K2D",
                  fontSize: 16,
                  alignSelf: "center",
                  color: "#545454",
                }}
              >
                {item.name}
              </Text>
            </View>
          </View>
        )}
        ListFooterComponent={<></>}
      />
      <View style={styles.proceedToProfile}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ProfilePage")}
          style={styles.badgesButton}
        >
          <Text style={styles.badgesButtonText}>Proceed To Profile</Text>
        </TouchableOpacity>
      </View>
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
  FlatList: {},
  row: {
    flex: 1,
    justifyContent: "space-around",
  },
  header: {
    marginTop: 330,
    alignSelf: "center",
    fontFamily: "semiBoldK2D",
    fontSize: 24,
    color: "#545454",
  },
  NFT: {
    alignSelf: "center",
    height: 100,
    width: 100,
    borderWidth: 3,
    borderRadius: 100,
    borderColor: "#545454",
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
    width: 170,
    height: 40,
    justifyContent: "center",
  },
  badgesButtonText: {
    color: "white",
    alignSelf: "center",
    fontFamily: "semiBoldK2D",
    fontSize: 18,
  },
  proceedToProfile: { marginBottom: "55%" },
});
