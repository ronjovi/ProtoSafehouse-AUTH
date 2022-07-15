{/* Imports React components */ }
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Button, Pressable, TextInput, Image } from 'react-native';

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("");
  const [numbaZero, onChangeNumber, numbaOne, numbaTwo, numbaThree, numbaFour, numbaFive, numbaSix, transText] = React.useState(null);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <Image source={require('../assets/Safehouse_logo.png')} style={styles.safehouseLogo} />
          <Text style={styles.header}>Extend this animal's life with a donation</Text>
          <Text style={styles.safehouseText}>Make a Donation</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={numbaOne}
            placeholder="$ Amount"
            keyboardType="default"
          />
          <Text style={styles.transactionText}>Transaction Method</Text>
          <View style={styles.transRow}>
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
          <TextInput
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
          </View>
          <TextInput
            style={styles.inputCardInfo}
            onChangeText={onChangeNumber}
            value={numbaSix}
            placeholder="Zip Code"
            keyboardType="numeric"
          />
          <Pressable style={styles.donateButton}>
            <Text style={styles.donateText}>Donate</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  safehouseLogo: {
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  header: {
    alignSelf: 'center',
    marginBottom: 20,
    fontSize: 20,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    width: 325,
    alignSelf: 'center',
    margin: 12,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderRightColor: 'white',
    borderTopColor: 'white',
    borderLeftColor: 'white',
  },

  transBoxStyle: {
    backgroundColor: '#D9D9D9',
    height: 30,
    width: 75,
    borderRadius: 5,
  },

  inputCardInfo: {
    height: 40,
    width: 325,
    alignSelf: 'center',
    margin: 12,
    marginBottom: 3,
    borderWidth: 1,
    padding: 10,
    borderRightColor: 'white',
    borderTopColor: 'white',
    borderLeftColor: 'white',
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
  },
  transRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  },
  safehouseText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '400',
    margin: 0,
  },
  donateButton: {
    backgroundColor: "#62BA75",
    width: 190,
    height: 40,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 55,
    marginBottom: 100,
  },
  donateText: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default UselessTextInput;