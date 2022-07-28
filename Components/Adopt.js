{/* Imports React components */ }
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Button, Pressable, TextInput, Image } from 'react-native';
import CustomDatePicker from './DatePicker';
import DateTimePicker from '@react-native-community/datetimepicker'
import { useFonts } from 'expo-font';

// import CustomTimePicker from './TimePicker';

const UselessTextInput = ({ navigation }) => {
    const [text, onChangeText] = React.useState("Useless Text");
    const [numbaZero, onChangeNumber, numbaOne, numbaTwo, numbaThree, timeSetOne, timeSetTwo] = React.useState(null);
    const [am, onChangeAM] = React.useState(2);
    const [pm, onChangePM] = React.useState(1);
    const timeAM = () => {
        console.log('Hello')
        // if AM 1 -> change to 2; if AM is 2 -> 1
        // onChangeAM(2)
    }
    const timePM = () => {
        console.log('there')
        // onChangePM if its 1 -> 2; if 2 -> 1
    }
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView>
                    <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/Vector.png')} style={{ alignSelf: 'center', marginTop: 15 }} />
                    </Pressable>
                    <Image source={require('../assets/Safehouse_logo.png')} style={styles.safehouseLogo} />
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
                        keyboardType="email"
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

                    {/* <DateTimePicker
                        style={styles.DateTimePickerStyle}
                        timeZoneOffsetInMinutes={0}
                        value={new Date()}
                        mode="time"
                        minuteInterval={10}
                    /> */}
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
                    {/* <View style={styles.AM_PM_BUTTONS_VIEW}>
                        <Pressable style={styles.TimeButtons} onPress={timeAM}>
                            <Text style={styles.TimeButtonsText}>AM</Text>
                        </Pressable>
                        <Pressable style={styles.TimeButtons} onPress={timePM}>
                            <Text style={styles.TimeButtonsText}>PM</Text>
                        </Pressable>
                    </View> */}
                    <View style={styles.AM_PM_BUTTONS_VIEW}>
                        <Pressable style={(am == 1) ? styles.activeText : styles.inactiveText} onPress={() => onChangeAM(2)}>
                            <Text style={styles.TimeButtonsText}>AM</Text>
                        </Pressable>
                        <Pressable style={styles.TimeButtons} onPress={() => onChangePM(2)}>
                            <Text style={(pm == 2) ? styles.activeText : styles.inactiveText} >PM</Text>
                        </Pressable>
                    </View>
                    </View>
                    <Pressable onPress={() => navigation.navigate("ReservePage")} style={styles.visitButton}>
                        <Text style={styles.visitText}>Proceed to Reservation</Text>
                    </Pressable>
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
    },
    backButton: {
        backgroundColor: 'black',
        height: 50,
        width: 50,
        borderRadius: 100,
        position: 'relative',
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
    activeText: {
        backgroundColor: '#62BA75',
        color: 'white',
    },
    inactiveText: {
        backgroundColor: '#EBEBEB',
        color: 'black',
    },
});

export default UselessTextInput;