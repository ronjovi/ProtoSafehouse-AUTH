import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Button, Image, Pressable, TouchableOpacity } from 'react-native';

const Market = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <SafeAreaView>
            <View>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/GreenVector.png')} style={{ alignSelf: 'center', marginTop: 15 }} />
                </TouchableOpacity>
                <Text style={styles.Market}>MARKET PLACEHOLDER TEXT</Text>
                <FlatList
                data={[
                    { image: 'https://manoonpetshop.com/upload-img/Picture_Product/Whiskas/Can/9310022807619.png', 
                      product: 'Cat Food',
                      brand: 'Whiskas',
                      price: '$XX.XX',
                      },
                ]}
                renderItem={({ item }) => (

                    <View style={styles.dataContainer}>
                        <Image source={{ uri: item.image }} style={{ height: 150, width: 100,}}/>
                        <View style={styles.catfoodContainer}>
                        <Text style={styles.product}> {item.product} </Text>
                        <Text style={styles.brand}> {item.brand} </Text>
                        <Text style={styles.price}> {item.price} </Text>
                        <Text> Redirect to site </Text>
                        </View>
                    </View>

                )}/>
            </View>
        </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    backButton: {
        height: 50,
        width: 50,
        position: 'relative',
        left: 20
    },
    Market: {
        alignSelf: 'center',
    },
    item: {
        marginTop: 2.5,
        color: 'black',
        fontSize: 20,
        alignSelf: 'flex-start',
        fontFamily: 'K2D',
    },
    dataContainer: {
        backgroundColor: 'yellow',
        flexDirection: 'row',
    },
    catfoodContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    product: {
        fontFamily: 'boldK2D',
    },
    brand: {
        fontFamily: 'semiBoldK2D',
    },
    price: {
        fontFamily: 'semiBoldK2D',
    },
});

export default Market