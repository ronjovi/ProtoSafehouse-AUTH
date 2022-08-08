import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Button, Image, Pressable, TouchableOpacity } from 'react-native';


const ProfilePage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.NFTView}>
                    <Image source={require('../assets/Clean_Rat.png')} style={[styles.NFTBadge, { marginTop: 80, alignSelf: 'flex-start' }]} />
                    <Image source={require('../assets/Coolcat.png')} style={[styles.NFTBadge, { marginTop: 80, alignSelf: 'flex-end' }]} />
                    <Image source={require('../assets/Cat_stronaut.png')} style={[styles.NFTBadge, { alignSelf: 'center', marginTop: 150, }]} />
                </View>
                <View>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('AnimalList')}>
                        <Image source={require('../assets/Vector.png')} style={{ alignSelf: 'center', marginTop: 15 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.profileView}>
                    {/* <ScrollView> */}
                    <FlatList
                        scrollEnabled={false}
                        // style = {{backgroundColor : 'red'}}
                        // style = {{marginBottom: 50}}
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
                                    <Text style={{ fontSize: 18, fontFamily: 'K2D', marginLeft: 20, marginBottom: 5, }}>Cats Adopted</Text>
                                    <View style={{ height: 2, width: '90%', backgroundColor: '#545454', alignSelf: 'center', top: 100 }}></View>
                                </>
                            }
                            data={[
                                { image: 'https://d.newsweek.com/en/full/1980820/curled-sleeping-cat.jpg' },
                                { image: 'https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1600-c85.webp' },
                                { image: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_513189787_110007.jpg' },
                            ]}
                            renderItem={({ item }) => (
                                <View>
                                    <Image source={{ uri: item.image }} style={{ height: 81, width: 81, borderRadius: 15, borderWidth: 1 }} />
                                    <Image source={require('../assets/GreenIcon.png')} style={{ height: 13, width: 13, bottom: 17, left: 63, }} />
                                </View>
                            )}
                            ListFooterComponent={
                                <>
                                    <TouchableOpacity style={{ bottom: 93, left: 360, backgroundColor: '#62BA75', display: 'flex', justifyContent: 'center', width: 35, height: 81, borderRadius: 10, }}>
                                        <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'K2D', fontSize: 12, width: 34.5 }}>View All</Text>
                                    </TouchableOpacity>
                                </>
                            }
                        />
                    </View>
                    <View style={{ bottom: 60 }}>
                        <FlatList
                            style={styles.CatsAdopted}
                            scrollEnabled={false}
                            columnWrapperStyle={styles.row}
                            numColumns={3}
                            ListHeaderComponent={
                                <>
                                    <Text style={{ fontSize: 18, fontFamily: 'K2D', marginLeft: 20, marginBottom: 5, }}>Successful Support</Text>
                                    <View style={{ height: 2, width: '90%', backgroundColor: '#545454', alignSelf: 'center', top: 100 }}></View>
                                </>
                            }
                            data={[
                                { image: 'https://imgix.bustle.com/scary-mommy/2019/09/GettyImages-146582583-min-1.jpg' },
                                { image: 'https://www.scottishspca.org/sites/default/files/styles/full_content/public/2019-09/Buying%20a%20cat%201000x600.jpeg' },
                                { image: 'https://data.whicdn.com/images/347673612/original.jpg' },
                            ]}
                            renderItem={({ item }) => (
                                <View>
                                    <Image source={{ uri: item.image }} style={{ height: 81, width: 81, borderRadius: 15, borderWidth: 1 }} />
                                    <Image source={require('../assets/GreenIcon.png')} style={{ height: 13, width: 13, bottom: 17, left: 63, }} />
                                </View>
                            )}
                            ListFooterComponent={
                                <>
                                    <TouchableOpacity style={{ bottom: 93, left: 360, backgroundColor: '#62BA75', display: 'flex', justifyContent: 'center', width: 35, height: 81, borderRadius: 10, }}>
                                        <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'K2D', fontSize: 12, width: 34.5 }}>View All</Text>
                                    </TouchableOpacity>
                                </>
                            }
                        />
                    </View>

                    <View style = {{position: 'absolute', top: 475}}>
                        <FlatList
                            style={styles.CatsAdopted}
                            scrollEnabled={false}
                            columnWrapperStyle={styles.row}
                            numColumns={3}

                            ListHeaderComponent={
                                <>
                                    <Text style={{ fontSize: 18, fontFamily: 'K2D', marginLeft: 20, marginBottom: 10, }}>Badge Showcase</Text>
                                </>
                            }

                            data={[
                                { image: require('../assets/Cat_stronaut.png'), },
                                { image: require('../assets/Clean_Rat.png'), },
                                { image: require('../assets/Coolcat.png'), },
                            ]}

                            // renderItem={({ item }) => (
                            //     <View>
                            //         <Image source={{ uri: item.image }} style={{height: 81, width: 81, borderRadius: 15, borderWidth: 1}}/>
                            //     </View>
                            // )}
                            renderItem={({ item }) => (
                                <View>
                                    <Image source={item.image} style={{ height: 85, width: 85, borderRadius: 100, borderWidth: 1 }} />
                                </View>
                            )}
                            ListFooterComponent={
                                <>
                                <TouchableOpacity style={{ bottom: 85, marginLeft: 360, backgroundColor: '#62BA75', justifyContent: 'center', width: 35, height: 81, borderRadius: 10,}}>
                                    <Text style={{color: 'white', textAlign: 'center', fontFamily: 'K2D', fontSize: 12, width: 34.5}}>View All</Text>
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
                        <Text style={{fontSize: 18, fontFamily: 'K2D', marginLeft: 20, marginBottom: 10,}}>Badge Showcase</Text>
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
        width: 310,
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
        // backgroundColor: 'lightgray'
        // marginBottom: 10
        bottom: 70
    },
    NFTBadge: {
        position: 'absolute',
        height: 181,
        width: 181,
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
        marginTop: 330,
        borderRadius: 10,
        width: '100%',
    },
});

export default ProfilePage