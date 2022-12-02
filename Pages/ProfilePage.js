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

const SUPPORT_DATA = [
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
]

const BADGE_DATA = [
  { image: require("../assets/Cat_stronaut.png") },
  { image: require("../assets/Clean_Rat.png") },
  { image: require("../assets/Coolcat.png") },
]

const ProfilePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <Image
            source={require("../assets/Clean_Rat.png")}
            style={[
              styles.NFTBadge,
              { marginTop: 40, alignSelf: "flex-start" },
            ]}
          />
          <Image
            source={require("../assets/Coolcat.png")}
            style={[styles.NFTBadge, { marginTop: 40, alignSelf: "flex-end" }]}
          />
          <Image
            source={require("../assets/Cat_stronaut.png")}
            style={[styles.NFTBadge, { alignSelf: "center", marginTop: 80 }]}
          />

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
                        height: 70,
                        width: 70,
                        borderRadius: 15,
                        borderWidth: 1,
                        marginHorizontal: 8,
                      }}
                    />
                  </View>
                )}
              />

              <TouchableOpacity style={styles.greenButton}>
              <Text style={styles.greenButtonText}>View all</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.supportContainer}>
            <Text style={styles.adoptedHeading}>Successful Support</Text>
            <View style={styles.catsAdoptedList}>
              <FlatList
                data={SUPPORT_DATA}
                horizontal={true}
                renderItem={({ item }) => (
                  <View>
                    <Image
                      source={{ uri: item.image }}
                      style={{
                        height: 70,
                        width: 70,
                        borderRadius: 15,
                        borderWidth: 1,
                        marginHorizontal: 8,
                      }}
                    />
                  </View>
                )}
              />

              <TouchableOpacity style={styles.greenButton}>
                <Text style={styles.greenButtonText}>View all</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.NFTContainer}>
            <Text style={styles.adoptedHeading}>NFT Badge Showcase</Text>
            <View style={styles.catsAdoptedList}>
              <FlatList
                data={BADGE_DATA}
                horizontal={true}
                renderItem={({ item }) => (
                  <View>
                    <Image
                      source={item.image}
                      style={{
                        height: 70,
                        width: 70,
                        borderRadius: 41,
                        borderWidth: 1,
                        marginHorizontal: 8,
                      }}
                    />
                  </View>
                )}
              />

              <TouchableOpacity style={styles.greenButton}>
                <Text style={styles.greenButtonText}>View all</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  NFTBadge: {
    position: "absolute",
    height: 150,
    width: 150,
    borderWidth: 2,
    borderRadius: 100,
  },
  username: {
    fontFamily: "semiBoldK2D",
    fontSize: 50,
    color: "#545454",
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
    // position: "absolute",
  },
  profileView: {
    // backgroundColor: "blue",
    backgroundColor: 'white',
    height: '100%',
    marginTop: '40%',
    // borderRadius: 25,
    width: "100%",
  },
  profileHeader: {
    padding: "2%",
    marginLeft: "3%",
  },
  adoptionContainer: {
    // backgroundColor: 'yellow',
  },
  supportContainer: {
    // backgroundColor: 'pink',
  },
  NFTContainer: {
    // backgroundColor: 'red',
  },
  adoptedHeading: {
    marginLeft: "5%",
    fontSize: 15,
  },
  catsAdoptedList: {
    flexDirection: "row",
    // backgroundColor: 'green',
    // opacity: 0.4,
    paddingVertical: '4%',
    paddingHorizontal: '4%'
  },
  greenButton: {
    backgroundColor: "#62BA75",
    marginHorizontal: 20,
    justifyContent: "center",
    borderRadius: 10,
    width: 60,
    flexShrink: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  greenButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    flex: 1,
    flexWrap: "wrap",
  },
});

export default ProfilePage;
