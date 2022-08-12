import {
  StyleSheet,
  LogBox,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Button,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
LogBox.ignoreLogs(["EventEmitter.removeListener"]);

const ADOPTED_DATA = [
  {
    image: "https://d.newsweek.com/en/full/1980820/curled-sleeping-cat.jpg",
  },
  {
    image:
      "https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1600-c85.webp",
  },
  {
    image:
      "https://www.incimages.com/uploaded_files/image/1920x1080/getty_513189787_110007.jpg",
  },
];

const ProfilePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.NFTView}>
          <Image
            source={require("../assets/Clean_Rat.png")}
            style={[
              styles.NFTBadge,
              { marginTop: 80, alignSelf: "flex-start" },
            ]}
          />
          <Image
            source={require("../assets/Coolcat.png")}
            style={[styles.NFTBadge, { marginTop: 80, alignSelf: "flex-end" }]}
          />
          <Image
            source={require("../assets/Cat_stronaut.png")}
            style={[styles.NFTBadge, { alignSelf: "center", marginTop: 150 }]}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate("AnimalList")}
          >
            <Image
              source={require("../assets/Vector.png")}
              style={{ alignSelf: "center", marginTop: 15 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.profileView}>
          {/* <ScrollView> */}
          <View style={styles.profileHeader}>
            <Text style={styles.username}>Renzo</Text>
            <Text
              style={{
                fontFamily: "K2D",
                fontSize: 16,
                color: "#62BA75",
              }}
            >
              $4,600 Contributed
            </Text>
          </View>
          <View style={styles.adoptionContainer}>
            <Text style={styles.adoptedHeading}>Cats Adopted</Text>
            <View style={styles.catsAdoptedList}>
              <FlatList
                data={ADOPTED_DATA}
                horizontal={true}
                renderItem={({ item }) => (
                  <View>
                    <Image
                      source={{ uri: item.image }}
                      style={{
                        height: 81,
                        width: 81,
                        borderRadius: 15,
                        borderWidth: 1,
                        marginHorizontal: 8,
                      }}
                    />
                  </View>
                )}
              />
              <View style={styles.greenButton}>
                <TouchableOpacity>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 12,
                    }}
                  >
                    View all
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* <View>
            <FlatList
              style={styles.CatsAdopted}
              scrollEnabled={false}
              columnWrapperStyle={styles.row}
              numColumns={3}
              ListHeaderComponent={
                <>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: "K2D",
                      marginLeft: 20,
                      marginBottom: 20,
                    }}
                  >
                    Cats Adopted
                  </Text>
                  <View
                    style={{
                      height: 2,
                      width: "90%",
                      backgroundColor: "#545454",
                      alignSelf: "center",
                      top: 100,
                    }}
                  ></View>
                </>
              }
              data={[
                {
                  image:
                    "https://d.newsweek.com/en/full/1980820/curled-sleeping-cat.jpg",
                },
                {
                  image:
                    "https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1600-c85.webp",
                },
                {
                  image:
                    "https://www.incimages.com/uploaded_files/image/1920x1080/getty_513189787_110007.jpg",
                },
              ]}
              renderItem={({ item }) => (
                <View>
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      height: 81,
                      width: 81,
                      borderRadius: 15,
                      borderWidth: 1,
                    }}
                  />
                  <Image
                    source={require("../assets/GreenIcon.png")}
                    style={{ height: 13, width: 13, bottom: 17, left: 63 }}
                  />
                </View>
              )}
              ListFooterComponent={
                <>
                  <TouchableOpacity
                    style={{
                      bottom: 93,
                      backgroundColor: "#62BA75",
                      display: "flex",
                      justifyContent: "center",
                      width: 35,
                      height: 81,
                      borderRadius: 10,
                      alignSelf: "flex-end",
                      marginRight: "2%",
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontFamily: "K2D",
                        fontSize: 12,
                        width: 34.5,
                      }}
                    >
                      View All
                    </Text>
                  </TouchableOpacity>
                </>
              }
            />
          </View>
          <View style={{ bottom: 109 }}>
            <FlatList
              style={styles.CatsAdopted}
              scrollEnabled={false}
              columnWrapperStyle={styles.row}
              numColumns={3}
              ListHeaderComponent={
                <>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: "K2D",
                      marginLeft: 20,
                      marginBottom: 5,
                    }}
                  >
                    Successful Support
                  </Text>
                  <View
                    style={{
                      height: 2,
                      width: "90%",
                      backgroundColor: "#545454",
                      alignSelf: "center",
                      top: 100,
                    }}
                  ></View>
                </>
              }
              data={[
                {
                  image:
                    "https://imgix.bustle.com/scary-mommy/2019/09/GettyImages-146582583-min-1.jpg",
                },
                {
                  image:
                    "https://www.scottishspca.org/sites/default/files/styles/full_content/public/2019-09/Buying%20a%20cat%201000x600.jpeg",
                },
                {
                  image:
                    "https://data.whicdn.com/images/347673612/original.jpg",
                },
              ]}
              renderItem={({ item }) => (
                <View>
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      height: 81,
                      width: 81,
                      borderRadius: 15,
                      borderWidth: 1,
                    }}
                  />
                  <Image
                    source={require("../assets/GreenIcon.png")}
                    style={{ height: 13, width: 13, bottom: 17, left: 63 }}
                  />
                </View>
              )}
              ListFooterComponent={
                <>
                  <TouchableOpacity
                    style={{
                      bottom: 93,
                      backgroundColor: "#62BA75",
                      display: "flex",
                      justifyContent: "center",
                      width: 35,
                      height: 81,
                      borderRadius: 10,
                      alignSelf: "flex-end",
                      marginRight: "2%",
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontFamily: "K2D",
                        fontSize: 12,
                        width: 34.5,
                      }}
                    >
                      View All
                    </Text>
                  </TouchableOpacity>
                </>
              }
            />
          </View>

          <View
            style={{
              bottom: 208,
            }}
          >
            <FlatList
              style={styles.CatsAdopted}
              scrollEnabled={false}
              columnWrapperStyle={styles.row}
              numColumns={3}
              ListHeaderComponent={
                <>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: "K2D",
                      marginLeft: 20,
                      marginBottom: 10,
                    }}
                  >
                    NFT Badge Showcase
                  </Text>
                </>
              }
              data={[
                { image: require("../assets/Cat_stronaut.png") },
                { image: require("../assets/Clean_Rat.png") },
                { image: require("../assets/Coolcat.png") },
              ]}
              // renderItem={({ item }) => (
              //     <View>
              //         <Image source={{ uri: item.image }} style={{height: 81, width: 81, borderRadius: 15, borderWidth: 1}}/>
              //     </View>
              // )}
              renderItem={({ item }) => (
                <View>
                  <Image
                    source={item.image}
                    style={{
                      height: 85,
                      width: 85,
                      borderRadius: 100,
                      borderWidth: 1,
                    }}
                  />
                </View>
              )}
              ListFooterComponent={
                <>
                  <TouchableOpacity
                    style={{
                      bottom: 90,
                      backgroundColor: "#62BA75",
                      justifyContent: "center",
                      width: 35,
                      height: 81,
                      borderRadius: 10,
                      alignSelf: "flex-end",
                      marginRight: "2%",
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontFamily: "K2D",
                        fontSize: 12,
                        width: 34.5,
                      }}
                    >
                      View All
                    </Text>
                  </TouchableOpacity>
                </>
              }
            /> */}
          {/* </View> */}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#62BA75",
  },
  row: {
    justifyContent: "space-between",
    width: 310,
    marginLeft: 20,
    backgroundColor: "red",
  },
  userAndConBox: {
    marginLeft: 20,
  },
  bioBox: {
    position: "absolute",
    marginLeft: 215,
  },
  NFTView: {
    marginBottom: 30,
  },
  CatsAdopted: {
    marginBottom: "10%",
    bottom: 5,
  },
  NFTBadge: {
    position: "absolute",
    height: 181,
    width: 181,
    borderWidth: 2,
    borderRadius: 100,
  },
  username: {
    fontFamily: "semiBoldK2D",
    fontSize: 50,
    color: "#545454",
    marginTop: 10,
  },
  biographyText: {
    fontFamily: "lightK2D",
    fontSize: 18,
    width: 180,
    color: "#545454",
  },
  backButton: {
    height: 50,
    width: 50,
    position: "absolute",
    left: 20,
  },
  profileView: {
    backgroundColor: "#fff",
    height: 600,
    marginTop: 330,
    borderRadius: 10,
    width: "100%",
  },
  profileHeader: {
    padding: "2%",
    marginLeft: 15,
  },
  adoptionContainer: {
    // alignItems: "flex-start",
  },
  adoptedHeading: {
    marginLeft: "5%",
    fontSize: 15,
  },
  catsAdoptedList: {
    flexDirection: "row",
    padding: "5%",
  },
  greenButton: {
    backgroundColor: "#62BA75",
    marginHorizontal: 5,
    justifyContent: "center",
  },
});

export default ProfilePage;
