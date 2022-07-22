{/* Imports React components */ }
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Button, Image, Pressable } from 'react-native';
import { PetCard } from './PetCard';
import Countdown from './Countdown';

{/* Tells the details of the animal through console log... provides ROUTE*/ }
export default function AnimalDetails({ route, navigation }) {
    console.log(route.params.image);

    {/* Creates the route to go to 'options' tab (via const goToOptions) */ }
    const goToSupport = () => {
        navigation.navigate('Support');
    }

    const goToAdopt = () => {
        navigation.navigate('Adopt');
    }

    {/* Gets info from ROUTE to display details of the animal you are viewing */ }
    return (


        // <View style={styles.container}>
        //     <SafeAreaView style={styles.container}>
        //         <Image style={styles.headerImage} source={{ uri: route.params.image }} />
        //         <ScrollView>
        //             <View style={styles.flatList}>
        //                 <View style={styles.nameBreedContainer}>
        //                     <Text style={styles.name}> {route.params.name} </Text>
        //                     <Text style={styles.breed}> {route.params.breed} </Text>
        //                 </View>
        //                 <View style={styles.timeContainer}>
        //                     <Text style={styles.time}> 00:43:38 </Text>
        //                     <Text>Until Put Down</Text>
        //                 </View>
        //                 <View style={styles.ageContainer}>
        //                     <Text style={styles.ageText}>Age</Text>
        //                     <Text>{route.params.age} </Text>
        //                 </View>
        //                 <View style={styles.weightContainer}>
        //                     <Text style={styles.weightText}>Weight</Text>
        //                     <Text style={styles.weight}> {route.params.weight} </Text>
        //                 </View>
        //                 <View style={styles.notesContainer}>
        //                     <Text style={styles.notesText}>Notes</Text>
        //                     <Text style={styles.notes}> {route.params.notes} </Text>
        //                 </View>
        //                 <View style={styles.sexContainer}>
        //                     <Text style={styles.sexText}>Sex</Text>
        //                     <Text style={styles.sex}> {route.params.sex} </Text>
        //                 </View>
        //                 <View style={{ backgroundColor: 'black', height: 2, width: 418, marginTop: 20, marginBottom: 20, }}></View>
        //                 <View style={styles.shelterContainer}>
        //                     <Text style={styles.shelterText}>Shelter</Text>
        //                     <Text style={styles.shelter}> {route.params.shelter} </Text>
        //                 </View>
        //                 <Text style={styles.desc}> {route.params.desc} </Text>
        //             </View>

        //             {/* The onPress event to these Pressables to go to Explore Options */}
        //             <View style={styles.twoButtonsRow}>
        //                 <Pressable style={styles.twoButtons} onPress={goToAdopt}>
        //                     <Text style={styles.twoButtonsText}>Reserve</Text>
        //                 </Pressable>
        //                 <Pressable style={styles.twoButtons} onPress={goToSupport}>
        //                     <Text style={styles.twoButtonsText}>Support</Text>
        //                 </Pressable>
        //             </View>
        //         </ScrollView>
        //     </SafeAreaView>
        // </View >
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <Image style={styles.headerImage} source={{ uri: route.params.image }} />
                <FlatList style={styles.flatList}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    ListHeaderComponent={
                        <>
                            <View style={styles.nameBreedContainer}>
                                <Text style={styles.name}> {route.params.name} </Text>
                                <Text> {route.params.breed} </Text>
                            </View>
                            <Text style={styles.time}> {route.params.time} </Text>
                        </>
                    }
                    data={[
                        { key: 'Age', value: route.params.age },
                        { key: 'Weight', value: route.params.weight },
                        { key: ' Notes', value: '- No Allergies' },
                        { key: 'Sex', value: route.params.sex },
                        // { key: 'Shelter', value: route.params.shelter },
                    ]}
                    renderItem={({ item }) => (
                        // <Text style={styles.item}>{item.key}: {item.value}</Text>

                        <View style={styles.dataContainer}>
                            <Text style={{backgroundColor: 'yellow', alignSelf: 'flex-start'}}> {item.key} </Text>
                            <Text style={styles.item}> {item.value} </Text>
                        </View>

                    )}
                    ListFooterComponent={
                        <>
                            <View style={{ alignSelf: 'center', height: 2, width: '90%', backgroundColor: 'black', marginTop: 20, marginBottom: 30 }}></View>
                            <View style={styles.shelterPhoneContainer}>
                            <View style={styles.shelterContainer}>
                                <Text> Shelter </Text>
                                <Text style={styles.item}> {route.params.shelter} </Text>
                            </View>

                            <View style={styles.phoneContainer}>
                                <Text style={styles.phoneNumber}> Phone Number </Text>
                                <Text style={styles.item}>1 (818)-149-1495 </Text>
                            </View>
                            </View>
                            <View style={styles.adressEmailContainer}>
                            <View style={styles.addressContainer}>
                                <Text style={{marginRight: 10}}> Address </Text>
                                <Text style={styles.item}> 600 Wilshire Blvd Suite 500 #13, Los Angeles, CA 90015
                                </Text>
                            </View>
                            
                            <View style={styles.emailContainer}>
                                <Text style={{right: 5}}> Email </Text>
                                <Text style={styles.item}> firstnamelastname@outlook.com </Text>
                            </View>
                            </View>
                            <View style={styles.twoButtonsRow}>
                                <Pressable style={styles.twoButtons} onPress={goToAdopt}>
                                    <Text style={styles.twoButtonsText}>Reserve</Text>
                                </Pressable>
                                <Pressable style={styles.twoButtons} onPress={goToSupport}>
                                    <Text style={styles.twoButtonsText}>Support</Text>
                                </Pressable>
                            </View>
                        </>
                    }
                />
            </SafeAreaView>
        </View >
    );
}

{/* Styles for the sceen when you press 'Details' */ }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: 'white',
    },
    headerImage: {
        width: "100%",
        height: 350,
        position: 'absolute',
    },
    flatList: {
        // flex: 1,
        // flexWrap: 'wrap',
        // flexDirection: 'row',
        marginTop: 340,
        backgroundColor: 'white',
        borderRadius: 10,
        height: '100%',
    },
    twoButtons: {
        backgroundColor: "#62BA75",
        width: 150,
        height: 40,
        alignSelf: 'center',
        borderRadius: 5,
        margin: 25,
    },
    twoButtonsText: {
        color: 'white',
        alignSelf: 'center',
        marginTop: 10,
    },
    twoButtonsRow: {
        flex: 1,
        flexDirection: 'row-reverse',
        justifyContent: 'center',
    },
    item: {
        marginTop: 2.5,
        color: 'black',
        fontSize: 10,
        alignSelf: 'flex-start',
        // marginBottom: 25,
    },
    name: {
        fontWeight: '500',
        fontSize: 28,
        position: 'relative',
        left: 0,
        marginTop: 15,
    },
    breed: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 18,
    },
    nameBreedContainer: {
        backgroundColor: 'white',
        marginLeft: 10,
        position: 'relative'
    },
    time: {
        fontWeight: '500',
        fontSize: 28,
        position: 'absolute',
        right: 0,
        marginTop: 15,
        marginRight: 10,
    },
    shelterContainer: {
        // backgroundColor: 'pink',
        width: 100,
        marginLeft: 15,
    },
    phoneContainer: {
        // backgroundColor: 'lightblue',
        width: 100,
        marginRight: 15,
    },
    shelterPhoneContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    addressContainer: {
        // backgroundColor: 'violet',
        width: 100,
        position: 'relative',
        marginLeft: 15,
    },
    emailContainer: {
        // backgroundColor: 'lightgray',
        width: 100,
        position: 'relative',
        marginRight: 15,
    },
    adressEmailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    row: {
        flex: 1,
        justifyContent: "space-between",
        marginTop: 30,
        margin: 10,
    },
    dataContainer: {
        // backgroundColor: 'white',
        backgroundColor: 'red'
    },
    phoneNumber: {
        // backgroundColor: 'yellow',
        width: 60,
        right: 10,
    },
});
