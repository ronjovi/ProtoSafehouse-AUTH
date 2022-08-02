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
                            </>
                        }

                        data={[
                            {
                                image: 'https://manoonpetshop.com/upload-img/Picture_Product/Whiskas/Can/9310022807619.png',
                                product: 'Cat Food',
                                brand: 'Whiskas',
                                price: '$XX.XX',
                            },
                            {
                                image: 'https://manoonpetshop.com/upload-img/Picture_Product/Whiskas/Can/9310022807619.png',
                                product: 'Cat Food',
                                brand: 'Whiskas',
                                price: '$XX.XX',
                            },
                            {
                                image: 'https://manoonpetshop.com/upload-img/Picture_Product/Whiskas/Can/9310022807619.png',
                                product: 'Cat Food',
                                brand: 'Whiskas',
                                price: '$XX.XX',
                            },
                            {
                                image: 'https://manoonpetshop.com/upload-img/Picture_Product/Whiskas/Can/9310022807619.png',
                                product: 'Cat Food',
                                brand: 'Whiskas',
                                price: '$XX.XX',
                            },
                            {
                                image: 'https://manoonpetshop.com/upload-img/Picture_Product/Whiskas/Can/9310022807619.png',
                                product: 'Cat Food',
                                brand: 'Whiskas',
                                price: '$XX.XX',
                            },
                        ]}
                        renderItem={({ item }) => (

                            <View style={styles.dataContainer}>
                                <Image source={{ uri: item.image }} style={{ height: 150, width: 100, }} />
                                <View style={styles.catfoodContainer}>
                                    <Text style={styles.product}>{item.product} </Text>
                                    <Text style={styles.productText}>Product</Text>
                                    <Text style={styles.brand}> {item.brand} </Text>
                                    <Text style={styles.brandText}>Brand</Text>
                                    <Text style={styles.price}> {item.price} </Text>
                                    <Text style={styles.priceText}>Price</Text>
                                    <TouchableOpacity style={styles.buyButton}>
                                        <Text style={styles.buyButtonText}>Buy</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.redirectText}> Redirect to site </Text>
                                </View>
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
        borderWidth: 2,
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        borderTopColor: 'transparent',
    },
    catfoodContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        // backgroundColor: 'blue',
        marginTop: 15,
        height: 100,
        width: 260,
        marginLeft: 25,
    },
    product: {
        fontFamily: 'boldK2D',
        color: '#545454',
        fontSize: 24,
        // backgroundColor: 'orange',
        height: 30,
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
        fontFamily: 'semiBoldK2D',
        color: '#545454',
        fontSize: 18,
        // backgroundColor: 'lime',
        height: 20,
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