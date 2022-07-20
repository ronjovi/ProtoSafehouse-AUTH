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


        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <Image style={styles.headerImage} source={{ uri: route.params.image }} />
                <ScrollView>
                    {/* <FlatList style={styles.flatList}
                        data={[
                            { key: 'Name', value: route.params.name },
                            { key: 'Time', value: route.params.time },
                            { key: 'Breed', value: route.params.breed },
                            { key: 'Age', value: route.params.age },
                            { key: 'Sex', value: route.params.sex },
                            { key: 'Weight', value: route.params.weight },
                            { key: 'Shelter', value: route.params.shelter },
                            { key: 'Description', value: route.params.desc },
                            { key: 'Additional Notes', value: route.params.notes },
                        ]}
                        renderItem={({ item }) => <Text style={styles.item}>{'\u2022' + ' '}{item.key}: {item.value}</Text>}
                    /> */}
                    <View style={styles.flatList}>
                        <View style={styles.nameBreedContainer}>
                            <Text style={styles.name}> {route.params.name} </Text>
                            <Text style={styles.breed}> {route.params.breed} </Text>
                        </View>
                        <View style={styles.timeContainer}>
                            <Text style={styles.time}> 00:43:38 </Text>
                            <Text>Until Put Down</Text>
                        </View>
                        <View style={styles.ageContainer}>
                            <Text style={styles.ageText}>Age</Text>
                            <Text>{route.params.age} </Text>
                        </View>
                        <View style={styles.weightContainer}>
                            <Text style={styles.weightText}>Weight</Text>
                            <Text style={styles.weight}> {route.params.weight} </Text>
                        </View>
                        <View style={styles.notesContainer}>
                            <Text style={styles.notesText}>Notes</Text>
                            <Text style={styles.notes}> {route.params.notes} </Text>
                        </View>
                        <View style={styles.sexContainer}>
                            <Text style={styles.sexText}>Sex</Text>
                            <Text style={styles.sex}> {route.params.sex} </Text>
                        </View>
                        <View style={{ backgroundColor: 'black', height: 2, width: 418, marginTop: 20, marginBottom: 20, }}></View>
                        <View style={styles.shelterContainer}>
                            <Text style={styles.shelterText}>Shelter</Text>
                            <Text style={styles.shelter}> {route.params.shelter} </Text>
                        </View>
                        <Text style={styles.desc}> {route.params.desc} </Text>
                    </View>

                    {/* The onPress event to these Pressables to go to Explore Options */}
                    <View style={styles.twoButtonsRow}>
                        <Pressable style={styles.twoButtons} onPress={goToAdopt}>
                            <Text style={styles.twoButtonsText}>Reserve</Text>
                        </Pressable>
                        <Pressable style={styles.twoButtons} onPress={goToSupport}>
                            <Text style={styles.twoButtonsText}>Support</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View >

    );
}

{/* Styles for the sceen when you press 'Details' */ }
const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'white',
    },
    headerImage: {
        width: "100%",
        height: 350,
        position: 'absolute',
    },
    flatList: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 340,
        marginLeft: 5,
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
    name: {
        fontWeight: '500',
        fontSize: 28,
    },
    breed: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 18,
    },
    nameBreedContainer: {
        backgroundColor: 'yellow',
        marginTop: 10,
    },
    time: {
        fontWeight: '500',
        fontSize: 28,
    },
    timeContainer: {
        backgroundColor: 'lightgreen',
        marginLeft: 200,
        marginTop: 10,
    },
    ageText: {
        fontWeight: '500',
        fontSize: 15
    },
    ageContainer: {
        backgroundColor: 'pink',
    },
    weightText: {
        fontWeight: '500',
        fontSize: 15
    },
    weightContainer: {
        backgroundColor: 'lightblue',
        marginLeft: 233
    },
    notesText: {
        fontWeight: '500',
        fontSize: 15
    },
    notesContainer: {
        backgroundColor: 'violet',
    },
    sexText: {
        fontWeight: '500',
        fontSize: 15
    },
    sexContainer: {
        backgroundColor: 'lightgray',
        marginLeft: 338,
    },
    shelterText: {
        fontWeight: '500',
        fontSize: 15
    },
    shelterContainer: {
        backgroundColor: 'orange',
    },
});
