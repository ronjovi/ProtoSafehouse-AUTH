{/* Imports React components */ }
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Button, Image, Pressable, TouchableOpacity } from 'react-native';
import { PetCard } from './PetCard';
import Countdown from './Countdown';

{/* Tells the details of the animal through console log... provides ROUTE*/ }
export default function AnimalDetails({ route, navigation }) {
    console.log(route.params.image);

    {/* Creates the route to go to 'options' tab (via const goToOptions) */ }
    const goToSupport = () => {
        navigation.navigate('Support');
    }

    const goToDetails = () => {
        navigation.navigate('AnimalDetails')
    }

    const goToAdopt = () => {
        navigation.navigate('Adopt');
    }

    {/* Gets info from ROUTE to display details of the animal you are viewing */ }
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <Image style={styles.headerImage} source={{ uri: route.params.image }} />
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/Vector.png')} style={{ alignSelf: 'center', marginTop: 15 }} />
                </TouchableOpacity>
                <FlatList style={styles.flatList}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    ListHeaderComponent={
                        <>
                            <View style={styles.headersContainer}>
                                <View style={styles.nameBreedContainer}>
                                    <Text style={styles.name}> {route.params.name} </Text>
                                    <Text style={styles.breedText}> {route.params.breed} </Text>
                                </View>
                                {/* <Text style={styles.time}> {route.params.time} </Text> */}
                                <View style={styles.countdownContainerStyle}>
                                    <Countdown listStyle={styles.countdownStyle} intialValue={route.params.time} changeColor={false} />
                                    <Text style={{ position: 'absolute', marginTop: 35, marginLeft: 4, fontFamily: 'K2D', color: '#545454' }}>Days until Put Down</Text>
                                </View>
                            </View>
                        </>
                    }
                    data={[
                        { key: 'Age', value: route.params.age },
                        { key: 'Weight', value: route.params.weight },
                        { key: 'Notes', value: '- No Allergies' },
                        { key: 'Sex', value: route.params.sex },
                        { key: 'Shelter', value: route.params.shelter },
                        { key: 'Phone Number', value: '(818) 497-419' },
                        { key: 'Address', value: '3655 South Grand Ave.' },
                        { key: 'Email', value: 'firstname@outlook.com' },
                        // { key: 'Shelter', value: route.params.shelter },
                    ]}
                    renderItem={({ item }) => (
                        // <Text style={styles.item}>{item.key}: {item.value}</Text>

                        <View style={styles.dataContainer}>
                            <Text style={{ fontFamily: 'semiBoldK2D', fontSize: 18, fontWeight: '500', color: '#545454' }}> {item.key} </Text>
                            <Text style={styles.item}> {item.value} </Text>
                        </View>

                    )}
                    ListFooterComponent={
                        <>
                            <View style={{ alignSelf: 'center', height: 2, width: '90%', backgroundColor: 'black', marginTop: 20, marginBottom: 20, bottom: 150 }}></View>

                            <View style={styles.twoButtonsRow}>
                                <TouchableOpacity style={styles.twoButtons} onPress={goToAdopt}>
                                    <Text style={styles.twoButtonsText}>Reserve</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.twoButtons} onPress={goToSupport}>
                                    <Text style={styles.twoButtonsText}>Support</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    }
                />
                <View style={styles.twoButtonsRow}>
                </View>
            </SafeAreaView>
        </View >
    );
}

{/* Styles for the sceen when you press 'Details' */ }
const styles = StyleSheet.create({
    backButton: {
        // backgroundColor: 'black',
        height: 50,
        width: 50,
    },
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: 'white',
    },
    headerImage: {
        width: "100%",
        height: 360,
        position: 'absolute',
        marginTop: 50,
    },
    flatList: {
        // flex: 1,
        // flexWrap: 'wrap',
        // flexDirection: 'row',
        marginTop: 280,
        backgroundColor: 'white',
        borderRadius: 10,
        height: 500,
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
        fontSize: 15,
        marginTop: 10,
        fontFamily: 'semiBoldK2D',
    },
    twoButtonsRow: {
        flex: 1,
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        marginBottom: -25,
    },
    item: {
        marginTop: 2.5,
        color: 'black',
        fontSize: 14,
        alignSelf: 'flex-start',
        fontFamily: 'K2D',
        color: '#545454',
    },
    headersContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    name: {
        fontFamily: 'semiBoldK2D',
        fontSize: 28,
        position: 'relative',
        right: 7,
        marginTop: 15,
        color: '#545454'
    },
    breed: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 18,
    },
    breedText: {
        fontFamily: 'K2D',
        color: '#545454',
    },
    nameBreedContainer: {
        // backgroundColor: 'white',
        marginLeft: 15,
        position: 'relative',
    },
    time: {
        fontWeight: '500',
        fontSize: 38,
        position: 'absolute',
        right: 0,
        marginTop: 15,
        marginRight: 10,
    },
    shelterContainer: {
        // backgroundColor: 'pink',
        marginLeft: 15,
    },
    phoneContainer: {
        marginLeft: 103,
    },
    phoneNumber: {
        right: 7,
        fontSize: 18,
        fontWeight: '500',
        fontFamily: 'semiBoldK2D',
    },
    phoneItem: {
        marginTop: 2.5,
        color: 'black',
        fontSize: 14,
        fontFamily: 'K2D',
    },
    shelterPhoneContainer: {
        // backgroundColor: 'yellow',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 70,
        width: 250,
    },
    addressContainer: {
        // backgroundColor: 'violet',
        width: 150,
        position: 'relative',
        marginLeft: 15,
    },
    emailContainer: {
        // backgroundColor: 'lightgray',
        width: 250,
        position: 'relative',
        marginLeft: 90,
    },
    adressEmailContainer: {
        // backgroundColor: 'violet',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 100,
        width: 425,
    },
    row: {
        flex: 1,
        justifyContent: "space-between",
        marginTop: 30,
        margin: 10,
    },
    dataContainer: {
        height: 35,
        width: 228,
        marginLeft: 7,
    },
    countdownContainerStyle: {
        width: 175,
        alignSelf: 'flex-end',
        position: 'absolute',
        height: 30,
        marginTop: 17,
    },
    countdownStyle: {
        marginRight: 20,
    },
});
