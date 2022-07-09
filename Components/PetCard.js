import React from 'react'
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';

export const PetCard = ({ image, name, time, goToDetails }) => {
  return (
    <View style={styles.container}>
        <Image source={{uri: image}} style={{ width:100, height:100 }}/>
        <Text style={styles.nameText}>
        {name}
        </Text>
        <Text style={styles.timeText}>
        {time}
        </Text>
        <Pressable style={styles.button} onPress={goToDetails}>
            <Text style={styles.detailButton}> Details </Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      marginTop: 10,
    },
    nameText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    timeText: {
        color: 'white',
    },
    button: {
        borderWidth: 10,
        borderStyle: 'solid',
        borderColor: 'red',
    },
    detailButton: {
        backgroundColor: 'gold',
    }
  });
