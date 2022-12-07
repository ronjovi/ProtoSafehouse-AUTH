import React, { useState, useEffect } from "react";
import { StyleSheet, Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity, } from "react-native";

function AdoptCard() {
    return (
        <View style={styles.container}>
            <View>
                <Text>This is the Adopt Card</Text>
            </View>
        </View>
    )
}

export default AdoptCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
    },
})