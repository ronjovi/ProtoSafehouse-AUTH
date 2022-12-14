import { BottomTabBarHeightCallbackContext } from "@react-navigation/bottom-tabs";
import React, { useState, useEffect } from "react";
import { StyleSheet, Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Pressable, } from "react-native";

function SupportCard() {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.SupportedContainer}>
                    <Text style={styles.SupportedName}>Sheffy the Cat</Text>
                </View>
                <View style={styles.whiteLine}></View>
                <View style={styles.TimeContainer}>
                    <Text style={styles.TimeLeftText}>XX:XX:XX</Text>
                    <Text style={styles.SmallTimeLeftText}>(+XX:XX:XX)</Text>
                </View>
                <TouchableOpacity>
                    <Image source={require('../../assets/InfoIcon.png')} style={styles.infoIcon}/>
                </TouchableOpacity>
                <View style={styles.Transaction}>
                    <View style={styles.lineContainer}></View>
                        <Text style={styles.TransactionMoneys}>$XX.XX</Text>
                    <View style={styles.lineContainer}></View>
                </View>
            </View>
        </View>
    )
}

export default SupportCard;

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
        backgroundColor: 'white',
        top: '50%',
        left: '5%',
        width: '50%',
        height: 2.5,
    },
    infoIcon: {
        position: 'absolute',
        alignSelf: 'center',
        top: 7,
    },
    SupportedContainer: {
        // backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'row',
    },
    SupportedName: {
        color: 'white',
        fontFamily: 'K2D',
        fontSize: 18,
        marginLeft: '5%',
    },
    TimeContainer: {
        // backgroundColor: 'red',
        marginTop: '1%',
        display: 'flex',
        flexDirection: 'row',
    },
    TimeLeftText: {
        color: 'white',
        fontFamily: 'K2D',
        fontSize: 18,
        marginLeft: '5%',
    },
    SmallTimeLeftText: {
        color: 'white',
        fontFamily: 'K2D',
        fontSize: 12,
        marginLeft: '1%',
        marginTop: '1.5%',
    },
    Transaction: {
        // backgroundColor: 'black',
        position: 'absolute',
        marginLeft: '53%',
        marginTop: '2%',
        width: 200,
    },
    lineContainer: {
        height: 2,
        width: '100%',
        backgroundColor: 'white',
    },
    TransactionMoneys: {
        color: 'white',
        fontFamily: 'K2D',
        marginLeft: '2%',
        fontSize: 24,
        alignSelf: 'center',
        marginBottom: '1.5%',
    }
})