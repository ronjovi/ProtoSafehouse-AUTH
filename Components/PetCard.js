import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export const PetCard = ({ image, name, time }) => {
  return (
    <View>
        <Image source={{uri: image}} style={{ width:100, height:100 }}/>
        <Text>
        {name}
        </Text>
        <Text>
        {time}
        </Text>
        <Button title="Details"/>
    </View>
  )
}
