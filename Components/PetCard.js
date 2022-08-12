{
  /* Imports important stuff from React */
}
import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import Countdown from "./Countdown";
import moment from "moment";

{
  /* This exports the variables (image, name, time) and the function: 'goToDetails' */
}
const getBorderColor = (changeColor) => {
  if (changeColor == true) {
    if (totalDuration > 5256005.76) {
      return "#62BA75";
    } else if (totalDuration < 5256005.76 && totalDuration > 2630000) {
      return "#B8BA62";
    } else {
      return "#BA6262";
    }
  }
};

export const PetCard = ({ image, name, time, goToDetails }) => {
  {
    /* Displays what you see in the First Page... IMPORTANT: WITHIN THIS, YOU WILL FIND THE 'goToDetails' THAT SENDS YOU TO THE DETAILS PAGE via A STACK */
  }

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

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ justifyContent: "center" }}
        onPress={goToDetails}
      >
        <Image source={{ uri: image }} style={styles.petImage} />
        <View style={styles.countdownBorder}>
          <Countdown
            intialValue={time}
            listStyle={styles.countdownStyle}
            changeColor={true}
          />
          <View style={styles.iconView}>
            <Image
              source={getIconMode(time)}
              style={{ height: 30, width: 30 }}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

{
  /* Stylizes PetCard info */
}
const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 176,
    justifyContent: "center",
    alignItems: "center",
  },
  petImage: {
    height: 180,
    width: 176,
    borderRadius: 10,
  },
  iconView: {
    alignSelf: "flex-end",
    marginBottom: 5,
    marginRight: 5,
    marginLeft: 5,
  },
  countdownBorder: {
    height: 180,
    width: 176,
    flexDirection: "row",
    backgroundColor: "#000",
    opacity: 0.6,
    borderRadius: 10,
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
  },
  countdownStyle: {
    marginHorizontal: -5,
    justifyContent: "center",
    alignSelf: "flex-start",
    marginTop: "90%",
  },
});
