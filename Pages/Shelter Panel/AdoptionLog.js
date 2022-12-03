import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Button, Pressable, Image, Platform, TouchableOpacityComponent, TouchableOpacity } from 'react-native';

function AdoptionLog({ navigation }) {

    return(
        <View style={styles.container}>
            <SafeAreaView>
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.backButton}>
                    <Image source={require('../../assets/GreenVector.png')} style={{ alignSelf: 'center', marginTop: 15 }} />
                </TouchableOpacity>
                <View>
                    <Image source={require('../../assets/AdoptionLog.png')} />
                </View>
            </SafeAreaView>
        </View>
    )
};

export default AdoptionLog

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    backButton: {
        height: 50,
        width: 50,
        // position: "absolute",
      },
  });
  