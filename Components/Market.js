import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Button, Image, Pressable, TouchableOpacity } from 'react-native';

const Market = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/GreenVector.png')} style={{ alignSelf: 'center', marginTop: 15 }} />
                    </TouchableOpacity>
                    <Image source={require('../assets/MarketingPage.png')} style={{ alignSelf: 'center', marginBottom: 50, }} />
                    <FlatList
                        ListHeaderComponent={
                            <>
                            <View style={{ borderWidth: 1, borderColor: '#BCBCBC', width: 500, }}></View>
                            </>
                        }

                        data={[
                            {
                                image: 'https://image.chewy.com/is/image/catalog/46674_MAIN._AC_SL600_V1588864868_.jpg',
                                product: 'Arm and Hammer Kit Litter',
                                brand: 'Whiskas',
                                price: '$XX.XX',
                            },
                            {
                                image: 'https://image.chewy.com/is/image/catalog/46674_MAIN._AC_SL600_V1588864868_.jpg',
                                product: 'Arm and Hammer Kit Litter',
                                brand: 'Whiskas',
                                price: '$XX.XX',
                            },
                            {
                                image: 'https://image.chewy.com/is/image/catalog/46674_MAIN._AC_SL600_V1588864868_.jpg',
                                product: 'Arm and Hammer Kit Litter',
                                brand: 'Whiskas',
                                price: '$XX.XX',
                            },
                            {
                                image: 'https://image.chewy.com/is/image/catalog/46674_MAIN._AC_SL600_V1588864868_.jpg',
                                product: 'Arm and Hammer Kit Litter',
                                brand: 'Whiskas',
                                price: '$XX.XX',
                            },
                            {
                                image: 'https://image.chewy.com/is/image/catalog/46674_MAIN._AC_SL600_V1588864868_.jpg',
                                product: 'Arm and Hammer Kit Litter',
                                brand: 'Whiskas',
                                price: '$XX.XX',
                            },
                            {
                                image: 'https://image.chewy.com/is/image/catalog/46674_MAIN._AC_SL600_V1588864868_.jpg',
                                product: 'Arm and Hammer Kit Litter',
                                brand: 'Whiskas',
                                price: '$XX.XX',
                            },
                            {
                                image: 'https://image.chewy.com/is/image/catalog/46674_MAIN._AC_SL600_V1588864868_.jpg',
                                product: 'Arm and Hammer Kit Litter',
                                brand: 'Whiskas',
                                price: '$XX.XX',
                            },
                        ]}
                        renderItem={({ item }) => (
                            <View style={styles.dataContainer}>
                                <TouchableOpacity>
                                <Image source={{ uri: item.image }} style={{ height: 120, width: 90,}} />
                                <View style={styles.productContainer}>
                                    <Text style={styles.product}>{item.product} </Text>
                                    {/* <Text style={styles.productText}>Product</Text> */}
                                    {/* <Text style={styles.brand}> {item.brand} </Text>
                                    <Text style={styles.brandText}>Brand</Text> */}
                                    <Text style={styles.price}> {item.price} </Text>
                                    {/* <Text style={styles.priceText}>Price</Text> */}
                                    {/* <Text style={styles.buyButtonText}>Buy</Text> */}
                                    {/* <Text style={styles.redirectText}> Redirect to site </Text> */}
                                </View>
                                <View style={{ borderWidth: 1, borderColor: '#BCBCBC', width: 500, }}></View>
                                </TouchableOpacity>
                            </View>

                        )}
                        ListFooterComponent={
                            <>
                            </>
                        } />
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
    dataContainer: {
        // backgroundColor: 'yellow',
        flexDirection: 'row',
    },
    productContainer: {
        flexDirection: 'column',
        // flexWrap: 'wrap',
        justifyContent: 'space-between',
        position: 'absolute',
        width: 260,
        marginLeft: 115,
        marginTop: 30,
    },
    product: {
        fontFamily: 'K2D',
        color: '#545454',
        fontSize: 20,
        // backgroundColor: 'orange',
        height: 30,
        marginLeft: 3,
    },
    productText: {
        position: 'absolute',
        marginTop: 30,
        fontFamily: 'K2D',
        color: '#545454',
    },
    brand: {
        fontFamily: 'semiBoldK2D',
        color: '#545454',
        fontSize: 24,
        // backgroundColor: 'pink',
        height: 30,
        marginBottom: 50,
    },
    brandText: {
        position: 'absolute',
        marginTop: 30,
        marginLeft: 165,
        fontFamily: 'K2D',
        color: '#545454'
    },
    price: {
        fontFamily: 'boldK2D',
        color: '#545454',
        fontSize: 16,
        // backgroundColor: 'lime',
        height: 20,
        marginTop: 10,
    },
    priceText: {
        position: 'absolute',
        color: '#545454',
        fontFamily: 'K2D',
        marginTop: 102,
    },
    buyButton: {
        backgroundColor: '#62BA75',
        height: 20,
        width: 85,
        borderRadius: 3,
        left: 85,
    },
    buyButtonText: {
        fontSize: 14,
        fontFamily: 'boldK2D',
        color: 'white',
        alignSelf: 'center',
    },
    redirectText: {
        fontFamily: 'K2D',
        color: '#545454',
        fontSize: 12,
        // backgroundColor: 'lightblue',
        height: 20,
        right: 8,
        marginTop: 23,
    },
});

export default Market