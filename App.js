import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PetCard } from './Components/PetCard';

export default function App() {
  return (
    <View style={styles.container}>
      <PetCard name="Hydra" time="3:3:3:3" image="https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg"/>
      <PetCard name="Fenrir" time="4:4:4:4" image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F10%2F01%2Fblack-dog-489205728-2000.jpg"/>
      <PetCard name="Lucifer" time="5:5:5:5" image="https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
      <PetCard name="Chronos" time="6:6:6:6" image="https://image.petmd.com/files/2022-06/pug-dog-breed.jpg"/>
      <PetCard name="Bob" time="7:7:7:7" image="https://www.mercurynews.com/wp-content/uploads/2022/04/EBT-L-CATSHOW-0403-11.jpg"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
