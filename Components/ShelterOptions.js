{/* Imports React components */ }
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Button, Pressable, Image, Platform, TouchableOpacityComponent, TouchableOpacity } from 'react-native';
import React, { startTransition } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';

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
        <ScrollView>
          <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.backButton}>
            <Image source={require('../assets/GreenVector.png')} style={{ alignSelf: 'center', marginTop: 15 }} />
          </TouchableOpacity>
          <Image source={require('../assets/ShelterPanel.png')} style={styles.ShelterPanel} />
          <View style={{ flexDirection: 'row', marginBottom: 3, }}>
            <View style={styles.shelterContainer}>
              <Text style={styles.shelterName}>Lost Anglo Animal Shelter</Text>
            </View>
            <View style={styles.editButtonContainer}>
              <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ height: 2, width: '90%', backgroundColor: 'black', alignSelf: 'center', }}></View>
          <FlatList
            numColumns={2}
            columnWrapperStyle={styles.row}
            ListHeaderComponent={
              <>
                <View style={styles.headersContainer}>
                  <View style={styles.nameBreedContainer}>
                    <Text style={styles.name}> {route.params.name} </Text>
                    <Text style={styles.breedText}> {route.params.breed} </Text>
                  </View>
                  {/* <Text style={styles.time}> {route.params.time} </Text> */}
                  <View style={styles.countdownStyle}>
                    <Text style={{ position: 'absolute', marginTop: 30, marginLeft: 4, fontFamily: 'K2D', }}>Days until Put Down</Text>
                  </View>
                </View>
              </>
            }
            data={[
              { key: 'Age', value: route.params.age },
              { key: 'Weight', value: route.params.weight },
              { key: 'Notes', value: '- No Allergies' },
              { key: 'Sex', value: route.params.sex },
              { key: 'Shelter', value: route.params.shelter },
              { key: 'Phone Number', value: '(818) 497-419' },
              { key: 'Address', value: '3655 South Grand Ave.' },
              { key: 'Email', value: 'firstname@outlook.com' },
              // { key: 'Shelter', value: route.params.shelter },
            ]}
            renderItem={({ item }) => (
              // <Text style={styles.item}>{item.key}: {item.value}</Text>

              <View style={styles.dataContainer}>
                <Text style={{ fontFamily: 'semiBoldK2D', fontSize: 18, fontWeight: '500' }}> {item.key} </Text>
                <Text style={styles.item}> {item.value} </Text>
              </View>

            )}
          />
        </ScrollView>
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
  },
  editButtonContainer: {
    marginLeft: 35,
    marginTop: 4,
  },
  editButton: {
    backgroundColor: '#62BA75',
    height: 20,
    width: 80,
    borderRadius: 5,
  },
  editButtonText: {
    fontFamily: 'K2D',
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
    bottom: 3,
  },
});