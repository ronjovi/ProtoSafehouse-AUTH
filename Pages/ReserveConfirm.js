import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, FlatList, Button, Pressable, Image, Platform } from 'react-native';
import React from 'react';

export default function GoToHome({ navigation }) {

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={styles.containerForAll}>
            <Image source={require('../assets/Safehouse_paw.png')} style={styles.safehousePawLogo} />
            <View style={styles.confirmFlexBox}>
              <Text style={styles.confirmStyle}>Reservation Confirmed!</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('BadgesRecieved')} style={styles.returnButton}>
                <Text style={styles.returnButtonText}>Receive Badges</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    safehousePawLogo: {
        alignSelf: 'center',
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    containerForAll: {
        marginTop: '50%'
    },
    confirmStyle: {
        alignSelf: 'center',
        fontSize: 34,
        color: '#62BA75',
        fontWeight: '500',
        marginTop: 5,
        fontFamily: 'semiBoldK2D',
    },
    returnButton: {
        alignSelf: 'center',
        backgroundColor: '#62BA75',
        borderRadius: 5,
        width: 150,
        height: 40,
        marginTop: 15,
    },
    returnButtonText: {
        color: 'white',
        alignSelf: 'center',
        marginTop: 10,
        fontFamily: 'semiBoldK2D',
    },
});