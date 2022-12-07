import React, { useState, useEffect } from "react";
import { StyleSheet, Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity, } from "react-native";


// This passes in navigation from AnimalList.js from the NavBar component
function NavBar({ navigation }) {


    const goToShelter = ( ) => {
        navigation.navigate('ShelterOptions');
    }
    const goToMarket = ( ) => {
        navigation.navigate('Market');
    }

    const goToProfile = ( ) => {
        navigation.navigate('ProfilePage');
    }
    return (
        <View style={styles.NavBarContainer}>
            <TouchableOpacity style={styles.marketButtonContainer} onPress={() => {goToMarket()}}>
                <Image source={require('../assets/market.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.shelterButtonContainer} onPress={() => {goToShelter()}}>
                <Image source={require('../assets/shelter.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileButtonContainer} onPress={() => {goToProfile()}}>
                <Image source={require('../assets/profile.png')} />
            </TouchableOpacity>           
        </View>
    )
};

export default NavBar;

const styles = StyleSheet.create({
    NavBarContainer: {
        flexDirection: 'row',
        backgroundColor: '#62BA72',
        alignSelf: 'center',
        width: '85%',
        height: 60,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '85%'
    },
    marketButtonContainer: {
        // backgroundColor: 'red',
        // position: 'absolute',
        right: '100%',
    },
    shelterButtonContainer: {
        // backgroundColor: 'blue',
        // position: 'absolute',
        right: '18%',
    },
    profileButtonContainer: {
        // backgroundColor: 'green',
        // position: 'absolute',
        left: '80%',
    },
  });