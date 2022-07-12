import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

export default function CountDownTimer(props) {
    const [time, setTime] = React.useState(props.intialValue || 10);
    const timerRef = React.useRef(time);
  
    React.useEffect(() => {
      const timerId = setInterval(() => {
        timerRef.current -= 1;
        if (timerRef.current < 0) {
          clearInterval(timerId);
        } else {
          setTime(timerRef.current);
        }
      }, 1000);
      return () => {
        clearInterval(timerId);
      };
    }, []);
  
    return ( 

        <Text> {time} </Text>

    )
  }