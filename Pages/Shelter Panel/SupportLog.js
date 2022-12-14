import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Button, Pressable, Image, Platform, TouchableOpacityComponent, TouchableOpacity } from 'react-native';
import AdoptCard from '../../Components/LogCards/AdoptCard';
import ReserveCard from '../../Components/LogCards/ReserveCard';
import SupportCard from '../../Components/LogCards/SupportCard';

function SupportLog({ navigation }) {

    return(
        <View style={styles.container}>
            <SafeAreaView>
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.backButton}>
                    <Image source={require('../../assets/GreenVector.png')} style={{ alignSelf: 'center', marginTop: 15 }} />
                </TouchableOpacity>
                <View>
                    <Image source={require('../../assets/AdoptionLog.png')} style={styles.logo}/>
                </View>
                <SupportCard />
                <SupportCard />
                <SupportCard />
                <SupportCard />
            </SafeAreaView>
        </View>
    )
};

export default SupportLog

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
    logo: {
        alignSelf: 'center',
        marginTop: '10%',
        marginBottom: '10%',
    },
  });
  