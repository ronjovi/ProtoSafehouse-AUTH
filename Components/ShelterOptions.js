{/* Imports React components */ }
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Button, Pressable, Image, Platform } from 'react-native';
import React from 'react';
import { launchImageLibrary } from 'react-native-image-picker';

const SERVER_URL = 'http://localhost:3000';

const createFormData = (photo, body = {}) => {
  const data = new FormData();

  data.append('photo', {
    name: photo.fileName,
    type: photo.type,
    uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
  });

  Object.keys(body).forEach((key) => {
    data.append(key, body[key]);
  });

  return data;
};

const App = () => {
  const [photo, setPhoto] = React.useState(null);

  const handleChoosePhoto = () => {
    launchImageLibrary({ noData: true }, (response) => {
      // console.log(response);
      if (response) {
        setPhoto(response);
      }
    });
  };

  const handleUploadPhoto = () => {
    fetch(`${SERVER_URL}/api/upload`, {
      method: 'POST',
      body: createFormData(photo, { userId: '123' }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {photo && (
        <>
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
          <Button title="Upload Photo" onPress={handleUploadPhoto} />
        </>
      )}
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
    </View>
  );
};

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
                    <Text>This is supposed to be the Options page</Text>
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
    supportButton: {
        fontSize: 40,
        borderWidth: 2.5,
        borderStyle: 'solid',
        borderColor: 'orange',
        borderRadius: 5,
        backgroundColor: '#62BA75',
        marginBottom: 40,
    },
    adoptButton: {
        fontSize: 40,
        borderWidth: 2.5,
        borderStyle: 'solid',
        borderColor: 'brown',
        borderRadius: 5,
        backgroundColor: 'gold',
        marginBottom: 40,
    },
});
