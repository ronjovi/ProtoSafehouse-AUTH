import React, { useState, useEffect } from "react";
import { StyleSheet, Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity, } from "react-native";

function SupportCard() {
    return (
        <View style={styles.container}>
            <View>
                <Text>This is the Support Card</Text>
            </View>
        </View>
    )
}

export default SupportCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
    },
})