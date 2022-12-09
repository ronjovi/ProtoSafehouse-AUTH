import React, { useState, useEffect } from "react";
import { StyleSheet, Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity, } from "react-native";

function ReserveCard() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{position: 'absolute'}}>This is the Reserve Card</Text>
                <Image source={require('../../assets/InfoIcon.png')} style={styles.infoIcon}/>
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
    infoIcon: {
        position: 'absolute',
        left: '80%',
        top: 7,
    },
})