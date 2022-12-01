{
  /* Imports React components */
}
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Button,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { PetCard } from "../Components/PetCard";
import Countdown from "../Components/Countdown";
import moment from "moment";
import { Ionicons } from "@expo/vector-icons";

{
  /* Tells the details of the animal through console log... provides ROUTE*/
}
export default function AnimalDetails({ route, navigation }) {
  console.log(route.params);

  {
    /* Creates the route to go to 'options' tab (via const goToOptions) */
  }
  const goToSupport = () => {
    navigation.navigate("SupportPage");
  };

  const goToDetails = () => {
    navigation.navigate("AnimalDetails");
  };

  const goToSchedule = () => {
    navigation.navigate("SchedulingPage");
  };

  const getIconMode = (countdown) => {
    console.log("time:", countdown);

    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD hh:mm:ss");
    //Getting the current date-time with required formate and UTC
    var expirydate = countdown; //You can set your own date-time
    //Let suppose we have to show the countdown for above date-time
    var diffr = moment.duration(moment(expirydate).diff(moment(date)));
    //difference of the expiry date-time given and current date-time
    var hours = parseInt(diffr.asHours());
    var minutes = parseInt(diffr.minutes());
    var seconds = parseInt(diffr.seconds());
    var d = hours * 60 * 60 + minutes * 60 + seconds;
    //converting in seconds
    // count down in seconds is stored within var d

    if (d > 604800) {
      return require("../assets/GreenIcon.png");
    } else if (d < 604800 && d > 259200) {
      return require("../assets/YellowIcon.png");
    } else if (d < 259200) {
      return require("../assets/RedIcon.png");
    }
  };
  {
    /* Gets info from ROUTE to display details of the animal you are viewing */
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.headerImage}
          source={{ uri: route.params.image }}
        />
        <View style={styles.iconContainer}>
          <View>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Ionicons
                name="arrow-back"
                size={35}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.icon}>
            <Image
              source={getIconMode(route.params.time)}
              style={styles.iconImage}
            />
          </View>
        </View>
        {/* <TouchableOpacity style={styles.shareButton}>
          <Image source={require("../assets/share.png")} />
        </TouchableOpacity> */}
        <FlatList
          style={styles.flatList}
          numColumns={2}
          columnWrapperStyle={styles.row}
          ListHeaderComponent={
            <>
              <View style={styles.headersContainer}>
                <View style={styles.nameBreedContainer}>
                  <Text style={styles.name}> {route.params.name} </Text>
                  <Text style={styles.breedText}> {route.params.breed} </Text>
                </View>
                {/* <Text style={styles.time}> {route.params.time} </Text> */}
                <View style={styles.countdownContainerStyle}>
                  <Countdown
                    listStyle={styles.countdownStyle}
                    intialValue={route.params.time}
                    changeColor={false}
                  />
                  <Text
                    style={{
                      position: "absolute",
                      marginTop: 35,
                      fontFamily: "K2D",
                      color: "#545454",
                    }}
                  >
                    Days Until Euthanization
                  </Text>
                </View>
              </View>
            </>
          }
          data={[
            { key: "Age", value: route.params.age },
            { key: "Weight", value: route.params.weight },
            { key: "Notes", value: "- No Allergies" },
            { key: "Sex", value: route.params.sex },
            { key: "Shelter", value: route.params.shelter },
            { key: "Phone Number", value: "(818) 497-419" },
            { key: "Address", value: "3655 South Grand Ave." },
            { key: "Email", value: "person@outlook.com" },
            // { key: 'Shelter', value: route.params.shelter },
          ]}
          renderItem={({ item }) => (
            // <Text style={styles.item}>{item.key}: {item.value}</Text>

            <View style={styles.dataContainer}>
              <Text
                style={{
                  fontFamily: "semiBoldK2D",
                  fontSize: 18,
                  fontWeight: "500",
                  color: "#545454",
                }}
              >
                {item.key}
              </Text>
              <Text style={styles.item}> {item.value} </Text>
            </View>
          )}
          ListFooterComponent={
            <>
              <View
                style={{
                  alignSelf: "center",
                  height: 2,
                  width: "90%",
                  backgroundColor: "#545454",
                  marginTop: 20,
                  marginBottom: 20,
                  bottom: 150,
                }}
              ></View>

              <View style={styles.twoButtonsRow}>
                <TouchableOpacity style={styles.twoButtons} onPress={goToSchedule}>
                  <Text style={styles.twoButtonsText}>Reserve</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.twoButtons}
                  onPress={goToSupport}
                >
                  <Text style={styles.twoButtonsText}>Support</Text>
                </TouchableOpacity>
              </View>
            </>
          }
        />
        <View style={styles.twoButtonsRow}></View>
      </SafeAreaView>
    </View>
  );
}

{
  /* Styles for the sceen when you press 'Details' */
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  iconContainer: {
    position: "absolute",
    // backgroundColor: "red",
    height: "100%",
  },
  backButton: {
    marginTop: "5%",
    marginLeft: "3%",
  },
  shareButton: {
    position: "absolute",
    marginTop: 58,
    marginLeft: 390,
  },
  iconImage: {
    // position: "absolute",
    height: 40,
    width: 40,
    marginLeft: "88%",
    marginTop: "47%",
  },
  headerImage: {
    width: "100%",
    height: 300,
    position: "absolute",
  },
  flatList: {
    marginTop: "70%",
    backgroundColor: "white",
    borderRadius: 10,
  },
  twoButtons: {
    backgroundColor: "#62BA75",
    width: 150,
    height: 40,
    alignSelf: "center",
    borderRadius: 5,
    margin: 25,
  },
  twoButtonsText: {
    color: "white",
    marginTop: 8,
    alignSelf: "center",
    fontSize: 15,
    fontFamily: "semiBoldK2D",
  },
  twoButtonsRow: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "center",
  },
  item: {
    marginTop: 2.5,
    color: "black",
    fontSize: 14,
    alignSelf: "flex-start",
    fontFamily: "K2D",
    color: "#545454",
  },
  headersContainer: {
    flex: 1,
    flexDirection: "column",
  },
  name: {
    fontFamily: "semiBoldK2D",
    fontSize: 28,
    position: "relative",
    right: 7,
    marginTop: 15,
    color: "#545454",
  },
  breed: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18,
  },
  breedText: {
    fontFamily: "K2D",
    color: "#545454",
  },
  nameBreedContainer: {
    // backgroundColor: 'white',
    marginLeft: 15,
    position: "relative",
  },
  time: {
    fontWeight: "500",
    fontSize: 38,
    position: "absolute",
    right: 0,
    marginTop: 15,
    marginRight: 10,
  },
  shelterContainer: {
    // backgroundColor: 'pink',
    // marginLeft: 15,
  },
  phoneContainer: {
    // marginLeft: 103,
  },
  phoneNumber: {
    right: 7,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "semiBoldK2D",
  },
  phoneItem: {
    marginTop: 2.5,
    color: "black",
    fontSize: 14,
    fontFamily: "K2D",
  },
  shelterPhoneContainer: {
    // backgroundColor: 'yellow',
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 70,
    width: 250,
  },
  addressContainer: {
    // backgroundColor: 'violet',
    width: 150,
    position: "relative",
    marginLeft: 15,
  },
  emailContainer: {
    // backgroundColor: 'lightgray',
    width: 250,
    position: "relative",
  },
  adressEmailContainer: {
    // backgroundColor: 'violet',
    flexDirection: "row",
    justifyContent: "space-between",
    height: 100,
    width: 425,
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 30,
    margin: 10,
  },
  dataContainer: {
    height: 35,
    width: 228,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  countdownContainerStyle: {
    width: 175,
    alignSelf: "flex-end",
    position: "absolute",
    height: 30,
    marginTop: 17,
  },
  countdownStyle: {
    marginRight: 20,
  },
});
