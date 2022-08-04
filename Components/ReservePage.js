{/* Imports React components */ }
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Button, Pressable, TouchableOpacity, TextInput, Image } from 'react-native';
import StripeComponent from './StripeComponent';

const UselessTextInput = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  const [numbaZero, onChangeNumber, numbaOne, numbaTwo, numbaThree, numbaFour, numbaFive, numbaSix, transText] = React.useState(null);
  // const stripePromise = loadStripe('###');


  return (
    <View style={styles.container}>
      <SafeAreaView>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Image source={require('../assets/GreenVector.png')} style={{ alignSelf: 'center', marginTop: 15 }} />
          </TouchableOpacity>
          <Image source={require('../assets/Reservation.png')} style={styles.safehouseLogo} />
          <View style={styles.timerFreezeHeaderContainer}>
            <Text style={styles.header}>Freeze this cat's time with a reservation</Text>
            <Text style={styles.safehouseText}>Failure to adopt this cat within 36 hours after your reservation will result in the timer being continued!</Text>
          </View>
          <View style={styles.reservationInput}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={numbaOne}
              placeholder="Reservation Price: $XX.XX"
              keyboardType="default"
            />
            <Text style={styles.xText}>$XX.XX will go to Safehouse</Text>
          </View>
          <Text style={styles.transactionText}>Transaction Method</Text>
          <View style={[styles.transRow, {marginBottom: 70}]}>
            <TextInput
              style={styles.transBoxStyle}
              onChangeText={onChangeText}
              value={transText}
            />
            <TextInput
              style={styles.transBoxStyle}
              onChangeText={onChangeText}
              value={transText}
            />
            <TextInput
              style={styles.transBoxStyle}
              onChangeText={onChangeText}
              value={transText}
            />
          </View>
          {/* <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
          </Elements> */}
          <StripeComponent />
          {/* <TextInput
            style={styles.inputCardInfo}
            onChangeText={onChangeNumber}
            value={numbaTwo}
            placeholder="Card Number"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.inputCardInfo}
            onChangeText={onChangeNumber}
            value={numbaThree}
            placeholder="Cardholder's Name"
            keyboardType="default"
          />
          <View style={styles.cvvExpiryInfo}>
            <TextInput
              style={styles.columnCard}
              onChangeText={onChangeNumber}
              value={numbaFour}
              placeholder="CVV/CVC"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.columnCard}
              onChangeText={onChangeNumber}
              value={numbaFive}
              placeholder="Expiration Date"
              keyboardType="default"
            />
          </View> */}
          {/* <TextInput
            style={styles.inputCardInfo}
            onChangeText={onChangeNumber}
            value={numbaSix}
            placeholder="Zip Code"
            keyboardType="numeric"
          /> */}
          <TouchableOpacity onPress={() => navigation.navigate("VisitConfirm")} style={styles.reserveButton}>
            <Text style={styles.reserveText}>Confirm Reservation</Text>
          </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  safehouseLogo: {
    alignSelf: 'center',
    marginBottom: 50,
    marginTop: 30,
    borderRadius: 100,
    marginLeft: 13
  },

  backButton: {
    height: 50,
    width: 50,
    position: 'relative',
  },

  timerFreezeHeaderContainer: {
    marginBottom: 25,
  },

  header: {
    alignSelf: 'center',
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'semiBoldK2D',
  },

  safehouseText: {
    marginTop: 0,
    fontSize: 13,
    fontWeight: '400',
    height: 40,
    width: 300,
    alignSelf: 'center',
    fontFamily: 'K2D',
  },

  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  reservationInput: {

  },

  input: {
    height: 40,
    width: 365,
    alignSelf: 'center',
    margin: 12,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    borderRightColor: 'white',
    borderTopColor: 'white',
    borderLeftColor: 'white',
    fontFamily: 'K2D',
  },

  xText: {
    marginBottom: 30,
    marginLeft: 13,
    fontFamily: 'K2D',
  },

  transBoxStyle: {
    backgroundColor: '#EBEBEB',
    height: 35,
    width: 65,
    borderRadius: 5,
  },

  inputCardInfo: {
    height: 40,
    width: 365,
    alignSelf: 'center',
    margin: 12,
    marginBottom: 3,
    borderWidth: 1,
    padding: 10,
    borderRightColor: 'white',
    borderTopColor: 'white',
    borderLeftColor: 'white',
    fontFamily: 'K2D',
  },
  cvvExpiryInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  transactionText: {
    marginBottom: 20,
    fontSize: 17,
    fontWeight: '200',
    fontFamily: 'lightK2D',
    marginLeft: 20,
  },
  transRow: {
    flex: 1,
    // If there's any errors it may have to do with flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  columnCard: {
    height: 40,
    flex: 1,
    alignSelf: 'center',
    margin: 12,
    marginBottom: 3,
    borderWidth: 1,
    padding: 10,
    borderRightColor: 'white',
    borderTopColor: 'white',
    borderLeftColor: 'white',
    fontFamily: 'K2D',
  },
  reserveButton: {
    backgroundColor: "#62BA75",
    width: 190,
    height: 40,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 55,
    marginBottom: 100,
  },
  reserveText: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 10,
    fontFamily: 'semiBoldK2D',
  },
});

export default UselessTextInput;