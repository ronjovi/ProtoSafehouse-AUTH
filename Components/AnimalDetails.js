{/* Imports React components */ }
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Button, Pressable } from 'react-native';
import { PetCard } from './PetCard';

{/* Tells the details of the animal */ }
export default function AnimalDetails() {
    return (

        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={[
                        { key: 'Name:' },
                        { key: 'Breed:' },
                        { key: 'Age:' },
                        { key: 'Sex:' },
                        { key: 'Weight:' },
                        { key: 'Shelter:' },
                        { key: 'Description:' },
                        { key: 'Additional Notes:' },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{'\u2022' + ' '}{item.key}</Text>}
                />
                {/* Add an onPress event to these Pressables */}
                <Pressable>
                    <Text style={styles.adoptButton}>Adopt me</Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.supportButton}>Support</Text>
                </Pressable>
            </SafeAreaView>
        </View>

    );
}

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
    adoptButton: {
        fontSize: 25,
        borderWidth: 2.5,
        borderStyle: 'solid',
        borderColor: 'orange',
        borderRadius: 5,
        backgroundColor: '#62BA75',
        marginBottom: 25,
    },
    supportButton: {
        fontSize: 25,
        borderWidth: 2.5,
        borderStyle: 'solid',
        borderColor: 'red',
        borderRadius: 5,
        backgroundColor: 'cornflowerblue',
        marginBottom: 50,
    },
});
