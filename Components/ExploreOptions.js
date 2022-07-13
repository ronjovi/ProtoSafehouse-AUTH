{/* Imports React components */ }
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Button, Pressable } from 'react-native';

{/* Now you are in 'ExploreOptions' */ }
export default function ExploreOptions({ route, navigation }) {
    console.log(route);

    {/* Creates the route to go to 'Support' and 'Adopt' tab (via const goToSupport and goToAdopt functions) */ }
    const goToSupport = () => {
        navigation.navigate('Support');
    }

    const goToAdopt = () => {
        navigation.navigate('Adopt');
    }

    {/* Displays two buttons... One is meant to adopt the animal as a pet, and the other one is meant to support the animal */ }
    return (

        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Text>This is supposed to be the Options page</Text>
                    <Pressable onPress={goToSupport}>
                        <Text style={styles.supportButton}>Support</Text>
                    </Pressable>
                    <Pressable onPress={goToAdopt}>
                        <Text style={styles.adoptButton}>Adopt</Text>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>
        </View>

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
