import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Button, Image, Pressable, TouchableOpacity } from 'react-native';


const ProfilePage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.NFTView}>
                    <Image source={require('../assets/Clean_Rat.png')} style={[styles.NFTBadge, { marginTop: 110, alignSelf: 'flex-start' }]} />
                    <Image source={require('../assets/Coolcat.png')} style={[styles.NFTBadge, { marginTop: 110, alignSelf: 'flex-end' }]} />
                    <Image source={require('../assets/Cat_stronaut.png')} style={[styles.NFTBadge, { alignSelf: 'center', marginTop: 180, }]} />
                </View>
                <View>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('AnimalList')}>
                        <Image source={require('../assets/Vector.png')} style={{ alignSelf: 'center', marginTop: 15 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.profileView}>
                    {/* <ScrollView> */}
                    <FlatList
                        numColumns={2}
                        data={[
                            { username: 'Rena Råttor', contributed: '$4600', bio: "Who said rats and cats can't be friends?" }
                        ]}
                        renderItem={({ item }) => (
                            <View style={{ width: 430 }}>
                                <View style={styles.userAndConBox}>
                                    <Text style={styles.username}> {item.username} </Text>
                                    <Text style={{ fontFamily: 'K2D', fontSize: 16, color: '#62BA75' }}> {item.contributed} Contributed</Text>
                                </View>
                                <View style={styles.bioBox}>
                                    <Text style={{ position: 'relative', fontSize: 28, fontFamily: 'semiBoldK2D', color: '#545454', marginTop: 30, marginLeft: 0, }}>Bio</Text>
                                    <Text style={styles.biographyText}>{item.bio}</Text>
                                </View>
                            </View>

                        )}
                    />
                    <View>
                    <FlatList
                    style={styles.CatsAdopted}
                    scrollEnabled={false}
                    columnWrapperStyle={styles.row}
                    numColumns={3}
                    ListHeaderComponent={
                        <>
                        <Text style={{fontSize: 20, fontFamily: 'lightK2D', marginLeft: 20, marginBottom: 10,}}>Cats Adopted</Text>
                        <View style={{height: 2, width: '90%', backgroundColor: '#545454', alignSelf: 'center', top: 105}}></View>
                        </>
                    }
                    data={[
                        {image: 'https://d.newsweek.com/en/full/1980820/curled-sleeping-cat.jpg'},
                        {image: 'https://d.newsweek.com/en/full/1980820/curled-sleeping-cat.jpg'},
                        {image: 'https://d.newsweek.com/en/full/1980820/curled-sleeping-cat.jpg'},
                    ]}
                    renderItem={({ item }) => (
                        <View>
                            <Image source={{ uri: item.image }} style={{height: 90, width: 90, borderRadius: 15, borderWidth: 1}}/>
                        </View>
                    )}
                    ListFooterComponent={
                        <>
                        <TouchableOpacity style={{bottom: 90, left: 360, backgroundColor: '#62BA75', justifyContent: 'center', width: 50, height: 90, borderRadius: 10,}}>
                            <Text style={{color: 'white', alignSelf: 'center', fontFamily: 'K2D', fontSize: 16, width: 34.5}}>View All</Text>
                        </TouchableOpacity>
                        </>
                    }
                    />
                    </View>
                    <View style={{bottom: 60}}>
                    <FlatList
                    style={styles.CatsAdopted}
                    scrollEnabled={false}
                    columnWrapperStyle={styles.row}
                    numColumns={3}
                    ListHeaderComponent={
                        <>
                        <Text style={{fontSize: 20, fontFamily: 'lightK2D', marginLeft: 20, marginBottom: 10,}}>Successful Support</Text>
                        <View style={{height: 2, width: '90%', backgroundColor: '#545454', alignSelf: 'center', top: 105}}></View>
                        </>
                    }
                    data={[
                        {image: 'https://d.newsweek.com/en/full/1980820/curled-sleeping-cat.jpg'},
                        {image: 'https://d.newsweek.com/en/full/1980820/curled-sleeping-cat.jpg'},
                        {image: 'https://d.newsweek.com/en/full/1980820/curled-sleeping-cat.jpg'},
                    ]}
                    renderItem={({ item }) => (
                        <View>
                            <Image source={{ uri: item.image }} style={{height: 90, width: 90, borderRadius: 15, borderWidth: 1}}/>
                        </View>
                    )}
                    ListFooterComponent={
                        <>
                        <TouchableOpacity style={{bottom: 90, left: 360, backgroundColor: '#62BA75', justifyContent: 'center', width: 50, height: 90, borderRadius: 10,}}>
                            <Text style={{color: 'white', alignSelf: 'center', fontFamily: 'K2D', fontSize: 16, width: 34.5}}>View All</Text>
                        </TouchableOpacity>
                        </>
                    }
                    />
                    </View>
                    {/* <View style={{bottom: 120,}}>
                    <FlatList
                    style={styles.CatsAdopted}
                    scrollEnabled={false}
                    columnWrapperStyle={styles.row}
                    numColumns={3}
                    ListHeaderComponent={
                        <>
                        <Text style={{fontSize: 20, fontFamily: 'lightK2D', marginLeft: 20, marginBottom: 10,}}>Badge Showcase</Text>
                        <View style={{height: 2, width: '90%', backgroundColor: '#545454', alignSelf: 'center', top: 105}}></View>
                        </>
                    }
                    data={[
                        {image: 'https://d.newsweek.com/en/full/1980820/curled-sleeping-cat.jpg'},
                        {image: 'https://d.newsweek.com/en/full/1980820/curled-sleeping-cat.jpg'},
                        {image: 'https://d.newsweek.com/en/full/1980820/curled-sleeping-cat.jpg'},
                    ]}
                    renderItem={({ item }) => (
                        <View>
                            <Image source={{ uri: item.image }} style={{height: 90, width: 90, borderRadius: 15, borderWidth: 1}}/>
                        </View>
                    )}
                    ListFooterComponent={
                        <>
                        <TouchableOpacity style={{bottom: 90, left: 360, backgroundColor: '#62BA75', justifyContent: 'center', width: 50, height: 90, borderRadius: 10,}}>
                            <Text style={{color: 'white', alignSelf: 'center', fontFamily: 'K2D', fontSize: 16, width: 34.5}}>View All</Text>
                        </TouchableOpacity>
                        </>
                    }
                    />
                    </View> */}
                    {/* </ScrollView> */}
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
    row: {
        justifyContent: "space-between",
        width: 320,
        marginLeft: 20,
    },
    userAndConBox: {
        marginLeft: 20,
    },
    bioBox: {
        position: 'absolute',
        marginLeft: 215,
    },
    NFTView: {
        bottom: 55,
    },
    CatsAdopted: {
        backgroundColor: 'lightgray'
    },
    NFTBadge: {
        position: 'absolute',
        height: 200,
        width: 200,
        borderWidth: 2,
        borderRadius: 100,
    },
    username: {
        fontFamily: 'semiBoldK2D',
        fontSize: 28,
        color: '#545454',
        marginTop: 30,
    },
    biographyText: {
        fontFamily: 'lightK2D',
        fontSize: 18,
        width: 180,
        color: '#545454'
    },
    backButton: {
        height: 50,
        width: 50,
        position: 'absolute',
        left: 20
    },
    profileView: {
        position: 'absolute',
        backgroundColor: 'white',
        height: 600,
        marginTop: 390,
        borderRadius: 10,
        width: '100%',
    },
});

export default ProfilePage