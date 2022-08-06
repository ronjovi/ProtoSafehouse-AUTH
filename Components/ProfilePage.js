import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Button, Image, Pressable, TouchableOpacity } from 'react-native';


const ProfilePage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/Vector.png')} style={{ alignSelf: 'center', marginTop: 15 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.profileView}>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#62BA75',
    },
    backButton: {
        height: 50,
        width: 50,
        position: 'relative',
        left: 20
    },
    profileView: {
        backgroundColor: 'white',
        height: 600,
        marginTop: 280,
        borderRadius: 10,
        width: '100%',
    },
});

export default ProfilePage