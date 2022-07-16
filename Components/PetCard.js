{/* Imports important stuff from React */ }
import React from 'react'
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';
import Countdown from './Countdown';

{/* This exports the variables (image, name, time) and the function: 'goToDetails' */ }
export const PetCard = ({ image, name, time, goToDetails }) => {
    {/* Displays what you see in the First Page... IMPORTANT: WITHIN THIS, YOU WILL FIND THE 'goToDetails' THAT SENDS YOU TO THE DETAILS PAGE via A STACK */ }
    return (
        <View style={styles.container}>

            <Pressable onPress={goToDetails}>
                <Image source={{ uri: image }} style={styles.petImage} />
                <Countdown intialValue={time} style={{ position: 'absolute' }} />
            </Pressable>

        </View>

    )
}

{/* Stylizes PetCard info */ }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 175,
        width: 175,
        backgroundColor: 'blue',
        marginTop: 10,
    },
    petImage: {
        height: 175,
        width: '100%',
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
});
