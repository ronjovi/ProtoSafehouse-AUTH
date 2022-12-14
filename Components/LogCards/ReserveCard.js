import { BottomTabBarHeightCallbackContext } from "@react-navigation/bottom-tabs";
import React, { useState, useEffect } from "react";
import { StyleSheet, Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Pressable, } from "react-native";

function ReserveCard() {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.ReserveeContainer}>
                    <Text style={styles.ReserveeName}>Firedeberg, Wilhelmina...</Text>
                    <Text style={styles.Reservee}>(reservee)</Text>
                </View>
                <View style={styles.whiteLine}></View>
                <View style={styles.ArrivalContainer}>
                    <Text style={styles.DateAndTime}>MM/DD/YY - XX:XXpm</Text>
                    <Text style={styles.ArrivalTime}>(arrival)</Text>
                </View>
                <TouchableOpacity>
                    <Image source={require('../../assets/InfoIcon.png')} style={styles.infoIcon}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ReserveCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#62BA72',
        height: 52,
        width: '97%',
        alignSelf: 'center',
        borderRadius: 12,
    },
    whiteLine: {
        position: 'absolute',
        width: '90%',
        alignSelf: 'center',
        backgroundColor: 'white',
        marginTop: '7%',
        height: 0.1,
    },
    infoIcon: {
        position: 'absolute',
        left: '80%',
        top: 7,
    },
    ReserveeContainer: {
        // backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'row',
    },
    ReserveeName: {
        color: 'white',
        fontFamily: 'K2D',
        fontSize: 18,
        marginLeft: '5%',
    },
    Reservee: {
        color: 'white',
        fontFamily: 'K2D',
        fontSize: 12,
        marginTop: '1.5%',
    },
    ArrivalContainer: {
        // backgroundColor: 'red',
        marginTop: '1%',
        display: 'flex',
        flexDirection: 'row',
    },
    DateAndTime: {
        color: 'white',
        fontFamily: 'K2D',
        fontSize: 18,
        marginLeft: '5%',
    },
    ArrivalTime: {
        color: 'white',
        fontFamily: 'K2D',
        fontSize: 12,
        marginLeft: '1%',
        marginTop: '1.5%',
    },
})