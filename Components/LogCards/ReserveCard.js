import React, { useState, useEffect } from "react";
import { StyleSheet, Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity, } from "react-native";

function ReserveCard() {
    return (
        <View style={styles.container}>
            <View>
                <Text>This is the Reserve Card</Text>
            </View>
        </View>
    )
}

export default ReserveCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
    },
})