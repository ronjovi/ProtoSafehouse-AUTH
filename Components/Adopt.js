{/* Imports React components */ }
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Button, Pressable, TextInput, Image } from 'react-native';
import CustomDatePicker from './DatePicker';

const UselessTextInput = ({ navigation }) => {
    const [text, onChangeText] = React.useState("Useless Text");
    const [numbaZero, onChangeNumber, numbaOne, numbaTwo, numbaThree] = React.useState(null);

    // const goToDetails = () => {
    //     navigation.navigate('AnimalDetails')
    // }

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
                        placeholder="Email Adress"
                        keyboardType="email"
                    />
                    <Text style={styles.safehouseText}>When do you plan on visiting?</Text>
                    <Text style={styles.dateTimeConfirmText}>Date:</Text>
                    <CustomDatePicker 
                        textStyle = {{
                            // borderWidth: 1,
                            // borderColor: '#EBEBEB',
                            // paddingVertical: 15,
                            // paddingHorizontal: 10,
                            color: 'black',
                            // marginRight: 15,
                            alignSelf: 'flex-start',
                            marginTop: 10,
                            position: 'relative',
                            // borderRadius: 100,
                        }}
                        onChange = {(value) => console.log(`New date set to: ${value}`)}/>
                    {/* <Image source={require('../assets/ant-design_calendar-filled.png')} /> */}
                    <Text style={styles.dateTimeConfirmText}>Time:</Text>
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
    },

    safehouseText: {
        fontSize: 20,
        fontWeight: '400',
        marginLeft: 50,
        margin: 10,
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
    },
    dateTimeConfirmText: {
        fontSize: 20,
        fontWeight: '200',
        marginLeft: 50,
        margin: 25,
    }
});

export default UselessTextInput;