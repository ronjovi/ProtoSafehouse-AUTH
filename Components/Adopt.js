{/* Imports React components */ }
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Button, Pressable, TextInput, Image, TouchableOpacity } from 'react-native';
import CustomDatePicker from './DatePicker';
import DateTimePicker from '@react-native-community/datetimepicker'
import { useFonts } from 'expo-font';

// import CustomTimePicker from './TimePicker';

const UselessTextInput = ({ navigation }) => {
    const [text, onChangeText] = React.useState("Useless Text");
    const [numbaZero, onChangeNumber, numbaOne, numbaTwo, numbaThree, timeSetOne, timeSetTwo] = React.useState(null);
    const [am, onChangeAM] = React.useState(true);
    const [pm, onChangePM] = React.useState(false);
    const timeAM = () => {
        onChangeAM(true)
        onChangePM(false)
    }
    const timePM = () => {
        onChangeAM(false)
        onChangePM(true)
    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/GreenVector.png')} style={{ alignSelf: 'center', marginTop: 15 }} />
                    </TouchableOpacity>
                    <Image source={require('../assets/Scheduling.png')} style={styles.safehouseLogo} />
                    <Text style={styles.safehouseText}>Personal Details</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={numbaOne}
                        placeholder="First Name"
                        keyboardType="default"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={numbaTwo}
                        placeholder="Last Name"
                        keyboardType="default"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={numbaThree}
                        placeholder="Email Address"
                        keyboardType="default"
                    />
                    <Text style={styles.safehouseText}>When do you plan on visiting the shelter?</Text>
                    <Text style={styles.dateTimeConfirmText}>Date:</Text>
                    <CustomDatePicker
                        textStyle={{
                            color: 'black',
                            alignSelf: 'flex-start',
                            marginTop: 10,
                            position: 'relative',
                            fontFamily: 'K2D',
                            marginLeft: 5,
                        }}
                        onChange={(value) => console.log(`New date set to: ${value}`)} />

                    <View style={styles.timeSetView}>
                    <Text style={styles.dateTimeConfirmText}>Time:</Text>
                    <TextInput
                        style={styles.timeSetStyle}
                        onChangeText={onChangeText}
                        value={timeSetOne}
                        textAlign={'center'}
                    />
                    <Text style={{marginLeft: 14, marginRight: 10, fontSize: 25,}}>:</Text>
                    <TextInput
                        style={styles.timeSetStyle}
                        onChangeText={onChangeText}
                        value={timeSetTwo}
                        textAlign={'center'}
                    />
                    <View style={styles.AM_PM_BUTTONS_VIEW}>
                        <TouchableOpacity style={am ? styles.activeButton : styles.inactiveButton} onPress={timeAM}>
                            <Text style={am ? styles.activeText : styles.inactiveText}>AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={am ? styles.inactiveButton : styles.activeButton} onPress={timePM}>
                            <Text style={pm ? styles.activeText : styles.inactiveText}>PM</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("ReservePage")} style={styles.visitButton}>
                        <Text style={styles.visitText}>Proceed to Reservation</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    safehouseLogo: {
        alignSelf: 'center',
        marginBottom: 45,
        marginTop: 30,
        marginLeft: 13
    },
    backButton: {
        height: 50,
        width: 50,
        position: 'relative',
        left: 20
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    input: {
        height: 40,
        width: 325,
        alignSelf: 'center',
        margin: 12,
        marginBottom: 20,
        borderWidth: 1,
        padding: 10,
        borderRightColor: 'white',
        borderTopColor: 'white',
        borderLeftColor: 'white',
        fontFamily: 'K2D',
    },

    safehouseText: {
        fontSize: 18,
        fontWeight: '400',
        marginLeft: 50,
        margin: 10,
        fontFamily: 'K2D',
    },
    visitButton: {
        backgroundColor: "#62BA75",
        width: 190,
        height: 40,
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 55,
        marginBottom: 100,
    },
    visitText: {
        color: 'white',
        alignSelf: 'center',
        marginTop: 10,
        fontFamily: 'semiBoldK2D',
    },
    dateTimeConfirmText: {
        fontSize: 20,
        fontWeight: '200',
        marginLeft: 50,
        margin: 25,
        fontFamily: 'lightK2D',
    },
    timeSetView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeSetStyle: {
        backgroundColor: '#EBEBEB',
        height: 46,
        width: 60,
        borderRadius: 5,
        marginLeft: 4,
        fontFamily: 'K2D',
    },
    AM_PM_BUTTONS_VIEW: {
        marginLeft: 20,
    },
    TimeButtons: {
        backgroundColor: '#EBEBEB',
        borderRadius: 2,
        margin: 3,
        width: 60,
        height: 18,
    },
    TimeButtonsText: {
        alignSelf: 'center',
        fontFamily: 'K2D',
        bottom: 2,
        color: 'black',
    },
    activeButton: {
        backgroundColor: '#62BA75',
        borderRadius: 2,
        margin: 3,
        width: 60,
        height: 18,
    },
    activeText: {
        alignSelf: 'center',
        fontFamily: 'K2D',
        bottom: 2,
        color: 'white',
    },
    inactiveButton: {
            backgroundColor: '#EBEBEB',
            borderRadius: 2,
            margin: 3,
            width: 60,
            height: 18,
    },
    inactiveText: {
        alignSelf: 'center',
        fontFamily: 'K2D',
        bottom: 2,
        color: 'black',
    },
});

export default UselessTextInput;