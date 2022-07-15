{/* Imports React components */ }
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Button, Pressable } from 'react-native';
import { PetCard } from './PetCard';
import Countdown  from './Countdown';

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
                <FlatList
                    data={[
                        {value: route.params.image },
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
                <Pressable onPress={goToAdopt}>
                    <Text style={styles.adoptButton}>Adopt</Text>
                </Pressable>
                <Pressable onPress={goToSupport}>
                    <Text style={styles.supportButton}>Support</Text>
                </Pressable>
            </SafeAreaView>
        </View >

    );
}

{/* Styles for the sceen when you press 'Details' */ }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'cadetblue',
    },
    item: {
        color: 'black',
        fontSize: 20,
        marginBottom: 25,
    },
    supportButton: {
        fontSize: 40,
        borderWidth: 2.5,
        borderStyle: 'solid',
        borderColor: 'orange',
        borderRadius: 5,
        backgroundColor: '#62BA75',
        marginBottom: 40,
    },
    adoptButton: {
        fontSize: 40,
        borderWidth: 2.5,
        borderStyle: 'solid',
        borderColor: 'brown',
        borderRadius: 5,
        backgroundColor: 'gold',
        marginBottom: 40,
    },
});
