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
          <View style={styles.shelterContainer}>
            <Text style={styles.shelterName}>Lost Anglo Animal Shelter</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text>aoifhwoj</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 2, width: '90%', backgroundColor: 'black', alignSelf: 'center' }}></View>
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
    marginLeft: 20,
  },
  shelterName: {
    fontFamily: 'K2D',
    fontSize: 18,
  },
});
