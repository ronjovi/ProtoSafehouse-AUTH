{/* Imports important stuff from React */ }
import React from 'react'
import { StyleSheet, Text, View, Image, Button, Pressable, TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';
import Countdown from './Countdown';
import moment from 'moment';

{/* This exports the variables (image, name, time) and the function: 'goToDetails' */ }
const getCountdownColor = (changeColor) => {
    if (changeColor == true) {
        if (totalDuration > 5256005.76) {
            return '#62BA75'
        } else if (totalDuration < 5256005.76 && totalDuration > 2630000) {
            return '#B8BA62'
        } else { return '#BA6262' }
    }
}

export const PetCard = ({ image, name, time, goToDetails }) => {
    {/* Displays what you see in the First Page... IMPORTANT: WITHIN THIS, YOU WILL FIND THE 'goToDetails' THAT SENDS YOU TO THE DETAILS PAGE via A STACK */ }

    const getBorderColor = (countdown) => {
        console.log('time:', countdown)

        var date = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss');
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

        if (d > 172800) {
            return 'lime'
        } else if (d < 172800 && d > 86400) {
            return 'yellow'
        } else if (d < 86400) { return 'red' }
    }

    getBorderColor(time)
    return (
        <View style={[styles.container, {
            borderWidth: 0,
            shadowOpacity: 0.8, shadowRadius: 5, shadowOffset: {
                height: 1, width: 1
            }, shadowColor: getBorderColor(time), borderWidth: 2, borderColor: getBorderColor(time),
        }]}>
            <View style={styles.countdownBorder}></View>
            <TouchableOpacity onPress={goToDetails}>
                <Image source={{ uri: image }} style={styles.petImage} />
                <Countdown intialValue={time} listStyle={styles.countdownStyle} style={{ position: 'absolute' }} changeColor={true} />
                <View style={styles.darkener}></View>
            </TouchableOpacity>

        </View>

    )
}

{/* Stylizes PetCard info */ }
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: 203,
        width: 203,
        // borderColor: 'red',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'transparent'
        // boxShadow :' rgba(255, 0, 0, 0.6)'

        // marginTop: 10,
        // marginLeft: 15,
        // margin: 10,
    },
    petImage: {
        // padding: 0,
        height: 200,
        width: 200,
        position: 'absolute',
        borderRadius: 10,
        // marginRight: 5,
    },
    darkener: {
        backgroundColor: 'black',
        height: 200,
        width: 200,
        borderRadius: 10,
        opacity: 0.2,
        bottom: 213,
    },
    countdownBorder: {
        height: 200,
        width: 200,
        position: 'absolute',
    },
    nameText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    timeText: {
        color: 'white',
        fontSize: 15,
        fontStyle: 'italic',
        marginLeft: 15,
    },
    countdownStyle: {
        marginTop: 160,
        marginRight: 45,
        justifyContent: 'flex-start',
        fontFamily: 'boldK2D',
        zIndex: 2,
    }
});
