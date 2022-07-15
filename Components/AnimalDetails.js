{/* Imports React components */ }
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Button, Image, Pressable } from 'react-native';
import { PetCard } from './PetCard';
import Countdown from './Countdown';

{/* Tells the details of the animal through console log... provides ROUTE*/ }
export default function AnimalDetails({ route, navigation }) {
    console.log(route);

    {/* Creates the route to go to 'options' tab (via const goToOptions) */ }
    const goToOptions = () => {
        navigation.navigate('ExploreOptions');
    }

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
            <Image style={styles.headerImage} source={{ uri: 'https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg' }}/>
                <FlatList
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
                />
                {/* The onPress event to these Pressables to go to Explore Options */}
                <View style={styles.twoButtonsRow}>
                    <Pressable style={styles.twoButtons} onPress={goToAdopt}>
                        <Text style={styles.twoButtonsText}>Adopt</Text>
                    </Pressable>
                    <Pressable style={styles.twoButtons} onPress={goToSupport}>
                        <Text style={styles.twoButtonsText}>Donate</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </View >

    );
}

{/* Styles for the sceen when you press 'Details' */ }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerImage: {
        width: "100%",
        height: 300,
    },
    item: {
        color: 'black',
        fontSize: 20,
        marginBottom: 25,
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
});
