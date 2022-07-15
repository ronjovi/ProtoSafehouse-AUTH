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
            <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
            <Text style={styles.nameText}>
                {name}
            </Text>
            <Text style={styles.timeText}>Countdown:<Countdown intialValue={time} /> </Text>
            <Pressable style={styles.buttonBox} onPress={goToDetails}>
                <Text style={styles.detailButton}> Details </Text>
            </Pressable>
        </View>
    )
}

{/* Stylizes PetCard info */ }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        marginTop: 10,
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
    buttonBox: {
        borderWidth: 10,
        borderStyle: 'solid',
        borderColor: 'red',
    },
    detailButton: {
        backgroundColor: 'gold',
    }
});
