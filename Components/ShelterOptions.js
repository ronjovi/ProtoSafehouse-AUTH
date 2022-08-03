{/* Imports React components */ }
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Button, Pressable, Image, Platform, TouchableOpacityComponent, TouchableOpacity } from 'react-native';
import React, { startTransition } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import CountDownTimer from './Countdown';

// const SERVER_URL = 'http://localhost:3000';

// const createFormData = (photo, body = {}) => {
//   const data = new FormData();

//   data.append('photo', {
//     name: photo.fileName,
//     type: photo.type,
//     uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
//   });

//   Object.keys(body).forEach((key) => {
//     data.append(key, body[key]);
//   });

//   return data;
// };

// const App = () => {
//   const [photo, setPhoto] = React.useState(null);

//   const handleChoosePhoto = () => {
//     launchImageLibrary({ noData: true }, (response) => {
//       // console.log(response);
//       if (response) {
//         setPhoto(response);
//       }
//     });
//   };

//   const handleUploadPhoto = () => {
//     fetch(`${SERVER_URL}/api/upload`, {
//       method: 'POST',
//       body: createFormData(photo, { userId: '123' }),
//     })
//       .then((response) => response.json())
//       .then((response) => {
//         console.log('response', response);
//       })
//       .catch((error) => {
//         console.log('error', error);
//       });
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       {photo && (
//         <>
//           <Image
//             source={{ uri: photo.uri }}
//             style={{ width: 300, height: 300 }}
//           />
//           <Button title="Upload Photo" onPress={handleUploadPhoto} />
//         </>
//       )}
//       <Button title="Choose Photo" onPress={handleChoosePhoto} />
//     </View>
//   );
// };

// export default App;

{/* Now you are in 'ShelterOptions' */ }
export default function ShelterOptions({ route, navigation }) {
  console.log(route);

  {/* Creates the route to go to 'Support' and 'Adopt' tab (via const goToSupport and goToAdopt functions) */ }
  //NOTHING HERE YET

  {/* Displays two buttons... One is meant to adopt the animal as a pet, and the other one is meant to support the animal */ }
  return (

    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        {/* <ScrollView> */}

        <FlatList
          scrollEnabled={false}
          numColumns={2}
          columnWrapperStyle={styles.row}
          ListHeaderComponent={
            <>
              <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.backButton}>
                <Image source={require('../assets/GreenVector.png')} style={{ alignSelf: 'center', marginTop: 15 }} />
              </TouchableOpacity>

              <Image source={require('../assets/ShelterPanel.png')} style={styles.ShelterPanel} />

              <View style={{ flexDirection: 'row', marginBottom: 3, marginTop: 74 }}>

                <View style={styles.shelterContainer}>
                  <Text style={styles.shelterName}>Lost Anglo Animal Shelter</Text>
                </View>

                <View style={styles.editButtonContainer}>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Edit</Text>
                  </TouchableOpacity>
                </View>

              </View>
              <View style={{ height: 2, width: '90%', backgroundColor: '#545454', alignSelf: 'center', }}></View>
            </>
          }
          data={[
            { key: 'Shelter', value: "Purr n' found" },
            { key: 'Phone Number', value: '1-202-406-5708' },
            { key: 'Address', value: '3655 South Grand Ave.' },
            { key: 'Email', value: 'pnf@outlook.com' },
          ]}
          renderItem={({ item }) => (
            <View style={styles.dataContainer}>

              <Text style={{ fontFamily: 'K2D', fontSize: 18, fontWeight: '500', color: '#545454' }}> {item.key} </Text>
              <Text style={styles.item}> {item.value} </Text>

            </View>

          )}
          ListFooterComponent={
            <>
              <View style={{ flexDirection: 'row', marginLeft: 30, marginTop: 20 }}>

                <Text style={{ fontFamily: 'lightK2D', fontSize: 18, }}>Records:</Text>

                <TouchableOpacity style={styles.longButton}>
                  <Text style={styles.buttonText}>Support</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.longButton}>
                  <Text style={styles.buttonText}>Adoptions</Text>
                </TouchableOpacity>

              </View>

              <View style={{ flexDirection: 'row', marginBottom: 3, marginTop: 27 }}>
                <View style={styles.shelterContainer}>
                  <Text style={styles.Management}>Management</Text>
                </View>
                <View style={styles.ReserveUploadButtonContainer}>
                  <TouchableOpacity style={styles.longerButton}>
                    <Text style={styles.buttonText}>Reservations</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.longerButton}>
                    <Text style={styles.buttonText}>Upload Entry</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ height: 2, width: '90%', backgroundColor: '#545454', alignSelf: 'center', }}></View>
              <Text style={{ fontFamily: 'lightK2D', fontSize: 14, marginTop: 5, marginLeft: 25, fontSize: 18, color: '#545454' }}>Active Entries</Text>

              <FlatList
                // scrollEnabled={true}
                style={styles.catList}
                numColumns={2}
                data={[
                  { name: 'Cat', time: '2022-08-25 04:00:29', image: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' },
                  { name: 'Cat', time: '2022-08-25 04:00:29', image: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' },
                  { name: 'Cat', time: '2022-08-25 04:00:29', image: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' },
                  { name: 'Cat', time: '2022-08-25 04:00:29', image: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' },
                  { name: 'Cat', time: '2022-08-25 04:00:29', image: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' },
                ]}
                renderItem={({ item }) => (
                  <View style = {{ flexDirection: 'row', borderWidth: 1, alignSelf: 'center', width: 190, }}>
                    <Image style = {{height: 60, width: 60, borderRadius: 10,}} source={{ uri: item.image }}/>
                    <View>
                      <Text style={{fontSize: 24, marginLeft: 10,}}>
                        {item.name}
                      </Text>

                    
                      <CountDownTimer listStyle ={{width: 38, marginLeft: 60,}} intialValue={item.time}  changeColor={false} />
                    </View>
                  </View>

                )}
              />
              <Text style={{textAlign: 'center', fontSize: 18, fontFamily: 'K2D'}}>-End of Listing-</Text>
            </>
          }
        />

      {/* <Text>-End of Listing-</Text> */}
      </SafeAreaView>
    </View>

  );
}

{/* styles for the sceen when you press 'Details' */ }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backButton: {
    height: 50,
    width: 50,
    position: 'relative',
    left: 20,
  },
  ShelterPanel: {
    alignSelf: 'center',
  },
  shelterContainer: {
    marginLeft: 25,
  },
  shelterName: {
    fontFamily: 'K2D',
    fontSize: 20,
    color: '#545454'
  },
  editButtonContainer: {
    marginLeft: 35,
    marginTop: 4,
  },
  button: {
    backgroundColor: '#62BA75',
    height: 20,
    width: 80,
    borderRadius: 5,
  },
  longButton: {
    backgroundColor: '#62BA75',
    height: 20,
    width: 110,
    borderRadius: 5,
    marginLeft: 12,
  },
  longerButton: {
    top: 4,
    backgroundColor: '#62BA75',
    height: 20,
    width: 120,
    borderRadius: 5,
    marginLeft: 12,
  },
  buttonText: {
    fontFamily: 'K2D',
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
    bottom: 3,
  },
  item: {
    marginTop: 2.5,
    color: 'black',
    fontSize: 14,
    alignSelf: 'flex-start',
    fontFamily: 'lightK2D',
    color: '#545454'
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 30,
    margin: 10,
  },
  Management: {
    fontFamily: 'K2D',
    fontSize: 20,
    color: '#545454'
  },
  ReserveUploadButtonContainer: {
    flexDirection: 'row',
  },
  dataContainer: {
    height: 35,
    width: 228,
    marginLeft: 15,
  },
});