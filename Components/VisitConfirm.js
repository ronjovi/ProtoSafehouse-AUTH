import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Button, Pressable, Image, Platform } from 'react-native';
import React from 'react';

export default function GoToHome({ navigation }) {

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <Image source={require('../assets/Safehouse_paw.png')} style={styles.safehousePawLogo} />
            <Text style={styles.confirmStyle}>Reservation Confirmed!</Text>
            <Pressable onPress={() => navigation.navigate('AnimalList')} style={styles.returnButton}>
                <Text style={styles.returnButtonText}>Return to home</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    safehousePawLogo: {
        alignSelf: 'center',
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginTop: 325,
    },
    confirmStyle: {
        alignSelf: 'center',
        fontSize: 34,
        color: '#62BA75',
        fontWeight: '500',
        marginTop: 2.5,
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
    },
});