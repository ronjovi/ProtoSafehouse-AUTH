import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';


export default function CountDownTimer(props) {
  const [totalDuration, setTotalDuration] = useState(893929);

  const getCountdownColor = () => {
    if (totalDuration > 5256005.76) {
      return 'lime'
    } else if (totalDuration < 5256005.76 && totalDuration > 2630000) {
      return 'yellow'
    } else {return 'red'}
  }

  useEffect(() => {
    //We are showing the coundown timer for a given expiry date-time
    //If you are making a quize type app then you need to make a simple timer
    //which can be done by using the simple like given below
    //that.setState({ totalDuration: 30 }); //which is 30 sec
    var date = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss');
    //Getting the current date-time with required formate and UTC
    var expirydate = props.intialValue; //You can set your own date-time
    //Let suppose we have to show the countdown for above date-time
    var diffr = moment.duration(moment(expirydate).diff(moment(date)));
    //difference of the expiry date-time given and current date-time
    var hours = parseInt(diffr.asHours());
    var minutes = parseInt(diffr.minutes());
    var seconds = parseInt(diffr.seconds());
    var d = hours * 60 * 60 + minutes * 60 + seconds;
    //converting in seconds
    setTotalDuration(d);
    //Settign up the duration of countdown in seconds to re-render
  }, [totalDuration]);

  //If it's not showing the time, delete the ending parentheses and type something random like: wrwr and then delete it and replace it with a parentheses
  console.log(setTotalDuration);

  return (
    // style={styles.countdownStyle}
    <CountDown 
      until={parseInt(totalDuration)}
      style = {props.listStyle}
      //duration of countdown in seconds
      timetoShow={('H', 'M', 'S')}
      //formate to show
      // onFinish={() => alert('finished')}
      //on Finish call
      //The size below controls the ssize of the countdown timer
      size={15}
      timeLabelStyle = {{color: 'transparent'}}
      digitStyle = {{color: 'transparent'}}
      // timeLabelStyle={{ color: 'transparent', fontWeight: 'bold', marginBottom: 20, fontSize: 8, width: 30 }}
      // digitStyle={{ color: 'black' }}
      digitTxtStyle={{ color: getCountdownColor(), fontWeight: 'bold', fontSize: 18 }}
      // showSeparator
      // separatorStyle={{ color: 'white', marginBottom: 25, fontSize: 15,}}
      separatorStyle = {{color: getCountdownColor(), bottom: 8}}
      showSeparator
    />
  )
}

//This below contains the border that contains the timer
const styles = StyleSheet.create({
  countdownStyle: {
    marginTop: 160,
    marginRight: 30,
    justifyContent: 'flex-start',
  },
});