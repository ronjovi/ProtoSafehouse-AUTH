import React, { useState, useEffect } from "react";
import { StyleSheet, Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity, } from "react-native";

function AdoptCard() {
    return (
        <View style={styles.container}>
            <View style={styles.whiteSide}>
                <View style={styles.adopteeData}>
                    <Text style={styles.defaultTextWhiteSide}>Adoptee's Name</Text>
                    <Text style={styles.defaultSmallTextWhiteSide}>Adoptee</Text>
                    <View style={{marginTop: 12,}}>
                        <Text style={styles.defaultTextWhiteSide}>12/8/22 - 07:26pm</Text>
                        <Text style={styles.defaultSmallTextWhiteSide}>Occassion of Adoption</Text>
                    </View>
                </View>
            </View>
            <View style={styles.greenSide}>
                <View style={styles.catData}>
                    <Text style={styles.defaultTextGreenSide}>Felis</Text>
                    <Text style={styles.defaultSmallTextGreenSide}>(Adopted)</Text>
                    <View style={{marginTop: 12,}}>
                        <Text style={styles.defaultTextGreenSide}>00:00:00:00</Text>
                        <Text style={styles.defaultSmallTextGreenSide}>(Adopted)</Text>
                    </View>
                </View>
                <View>
                    <Image source={require('../../assets/Coolcat.png')} style={styles.image}/>
                </View>
            </View>
        </View>
    )
}

export default AdoptCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 105,
    },
    whiteSide: {
        position: 'absolute',
        backgroundColor: 'white',
        width: '50%',
        height: '100%',
        borderRadius: 12,
        borderWidth: 4,
        borderLeftColor: 'gray',
        borderBottomColor: 'gray',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
    },
    adopteeData: {
        // backgroundColor: 'yellow',
        width: '85%',
        marginTop: '3%',
        marginLeft: '1%',
    },
    greenSide: {
        position: 'absolute',
        backgroundColor: '#62BA72',
        width: 600,
        height: '100%',
        marginLeft: '43%',
        borderRadius: 12,
    },
    catData: {
        position: 'absolute',
        // backgroundColor: 'red',
        marginTop: '2%',
        marginLeft: '2%',
    },
    image: {
        position: 'absolute',
        height: 90,
        width: 90,
        marginLeft: 140,
    },
    defaultTextWhiteSide: {
        fontFamily: 'K2D',
        fontSize: 17,
        color: '#545454'
    },
    defaultSmallTextWhiteSide: {
        fontFamily: 'K2D',
        fontSize: 12,
        color: '#545454',
    },
    defaultTextGreenSide: {
        fontFamily: 'K2D',
        fontSize: 17,
        color: 'white',
    },
    defaultSmallTextGreenSide: {
        fontFamily: 'K2D',
        fontSize: 12,
        color: 'white',
    },
})