{
  /* Imports React components */
}
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Button,
  Pressable,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import CustomDatePicker from "../Components/DatePicker";
import { useFonts } from "expo-font";

// import CustomTimePicker from './TimePicker';

const UselessTextInput = ({ navigation }) => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [
    numbaZero,
    onChangeNumber,
    numbaOne,
    numbaTwo,
    numbaThree,
    timeSetOne,
    timeSetTwo,
  ] = React.useState(null);
  const [am, onChangeAM] = React.useState(true);
  const [pm, onChangePM] = React.useState(false);
  const timeAM = () => {
    onChangeAM(true);
    onChangePM(false);
  };
  const timePM = () => {
    onChangeAM(false);
    onChangePM(true);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* <ScrollView> */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../assets/GreenVector.png")}
            style={{ alignSelf: "center", marginTop: 15 }}
          />
        </TouchableOpacity>
        <Image
          source={require("../assets/Scheduling.png")}
          style={styles.safehouseLogo}
        />
        <Text style={styles.safehouseText1}>Personal Details</Text>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            // value={numbaOne}
            value={"John"}
            placeholder="First Name"
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            // value={numbaTwo}
            value={"Doe"}
            placeholder="Last Name"
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            // value={numbaThree}
            value={"safehouse178@gmail.com"}
            placeholder="Email Address"
            keyboardType="default"
          />
        </View>
        <Text style={styles.safehouseText}>
          When do you plan on visiting the shelter?
        </Text>
        <View style={{ flexDirection: "row", marginBottom: 30, marginTop: 30 }}>
          <Text style={styles.dateTimeConfirmText}>Date:</Text>
          <CustomDatePicker
            textStyle={{
              color: "#545454",
              alignSelf: "flex-start",
              marginTop: 10,
              position: "relative",
              fontFamily: "K2D",
              marginLeft: 5,
            }}
            onChange={(value) => console.log(`New date set to: ${value}`)}
          />
        </View>
        <View style={styles.timeSetView}>
          <Text style={styles.dateTimeConfirmText}>Time:</Text>
          <TextInput
            style={styles.timeSetStyle}
            onChangeText={onChangeText}
            // value={timeSetOne}
            value={"08"}
            textAlign={"center"}
          />
          <Text style={{ marginLeft: "1%", marginRight: "1%", fontSize: 25 }}>
            :
          </Text>
          <TextInput
            style={styles.timeSetStyle}
            onChangeText={onChangeText}
            // value={timeSetTwo}
            value={"30"}
            textAlign={"center"}
          />
          <View style={styles.AM_PM_BUTTONS_VIEW}>
            <TouchableOpacity
              style={am ? styles.activeButton : styles.inactiveButton}
              onPress={timeAM}
            >
              <Text style={am ? styles.activeText : styles.inactiveText}>
                am
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={am ? styles.inactiveButton : styles.activeButton}
              onPress={timePM}
            >
              <Text style={pm ? styles.activeText : styles.inactiveText}>
                pm
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("ReservePage")} style={styles.visitButton}>
          <Text style={styles.visitText}>Proceed to Reservation</Text>
        </TouchableOpacity>
        {/* <View style={styles.reservationInput}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            // value={numbaOne}
            value={"$30.00"}
            placeholder="Reservation Price: $XX.XX"
            keyboardType="default"
          />
          <Text style={styles.xText}>$XX.XX will go to Safehouse</Text>
        </View> */}

        {/* <TouchableOpacity
          onPress={() => navigation.navigate("VisitConfirm")}
          style={styles.visitButton}
        >
          <Text style={styles.visitText}>Confirm Reservation</Text>
        </TouchableOpacity> */}

        {/* </ScrollView> */}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  safehouseLogo: {
    alignSelf: "center",
    marginBottom: 15,
    marginLeft: 13,
  },
  backButton: {
    height: 50,
    width: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  input: {
    height: 40,
    width: 325,
    alignSelf: "center",
    marginBottom: 15,
    borderWidth: 1,
    padding: 10,
    borderRightColor: "white",
    borderTopColor: "white",
    borderLeftColor: "white",
    borderBottomColor: "#545454",
    fontFamily: "K2D",
  },
  reservationInput: {
    // position: 'absolute',
    // top: 630,
    marginTop: 30,
    alignSelf: "center",
  },
  xText: {
    bottom: 15,
    marginLeft: 15,
    fontFamily: "K2D",
    color: "#545454",
  },
  safehouseText1: {
    marginTop: "5%",
    fontSize: 18,
    fontWeight: "400",
    fontFamily: "K2D",
    color: "#545454",
    justifyContent: "flex-start",
    marginLeft: "10%",
  },
  safehouseText: {
    marginTop: "8%",
    fontSize: 18,
    fontWeight: "400",
    fontFamily: "K2D",
    color: "#545454",
    justifyContent: "flex-start",
    marginLeft: "10%",
    marginRight: "5%",
  },
  visitButton: {
    backgroundColor: "#62BA75",
    width: 190,
    height: 40,
    alignSelf: "center",
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
    justifyContent: "center",
    marginTop: "7%",
  },
  visitText: {
    color: "white",
    alignSelf: "center",
    justifyContent: "center",
    fontFamily: "semiBoldK2D",
    fontSize: 14,
  },
  dateTimeConfirmText: {
    fontSize: 20,
    fontWeight: "200",

    marginLeft: 50,
    marginRight: 29,
    // margin: 25,
    fontFamily: "lightK2D",
    color: "#545454",
  },
  timeSetView: {
    flexDirection: "row",
  },
  timeSetStyle: {
    backgroundColor: "#EBEBEB",
    height: 46,
    width: 60,
    borderRadius: 5,
    marginLeft: 4,
    fontFamily: "K2D",
  },
  AM_PM_BUTTONS_VIEW: {
    marginLeft: 20,
  },
  TimeButtons: {
    backgroundColor: "#EBEBEB",
    borderRadius: 2,
    margin: 3,
    width: 60,
    height: 18,
  },
  TimeButtonsText: {
    alignSelf: "center",
    fontFamily: "K2D",
    bottom: 2,
    color: "#545454",
  },
  activeButton: {
    backgroundColor: "#62BA75",
    borderRadius: 2,
    margin: 3,
    width: 60,
    height: 18,
  },
  activeText: {
    alignSelf: "center",
    fontFamily: "K2D",
    bottom: 2,
    color: "white",
  },
  inactiveButton: {
    backgroundColor: "#EBEBEB",
    borderRadius: 2,
    margin: 3,
    width: 60,
    height: 18,
  },
  inactiveText: {
    alignSelf: "center",
    fontFamily: "K2D",
    bottom: 2,
    color: "#545454",
  },
});

export default UselessTextInput;
