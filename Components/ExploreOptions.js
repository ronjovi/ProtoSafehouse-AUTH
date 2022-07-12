{/* Imports React components */ }
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Button, Pressable } from 'react-native';
import { PetCard } from './PetCard';

{/* Now you are in 'ExploreOptions' */ }
export default function ExploreOptions({ route }) {
    console.log(route);
    {/* Displays two buttons... One is meant to adopt the animal as a pet, and the other one is meant to support the animal */ }
    return (

        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Text>This is supposed to be the Options page</Text>
                    <Pressable>
                        <Text style={styles.supportButton}>Support</Text>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>
        </View >

    );
}

{/* styles for the sceen when you press 'Details' */ }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
});
