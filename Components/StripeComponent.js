import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { StripeProvider, useStripe, CardForm, } from "@stripe/stripe-react-native";


const CardHandler = () => {
  const Stripe = useStripe();
  const [card, setCard] = React.useState();
  const [token, setToken] = React.useState();

  const handlePayment = () => {
    Stripe.createToken({
      type: 'Card',
      name: 'Renzo',
      address: {
        line1: 'some address',
        line2: 'something else here',
        country: card.country,
        postalCode: card.postalCode,
        state: 'CA'
      },
      currency: 'usd'
    }).then(res => {
      console.log(res);
      setToken(res);
    }).catch(err => {
      if (err) throw err
    })
  }

  return (
    <>
      <CardForm
        onFormComplete={(cardInfo) => {
          console.log(cardInfo);
          setCard(cardInfo);
           
        }}
        style={{ height: 200 }}
      />

      <TouchableOpacity onPress = {handlePayment} style = {{backgroundColor: 'red', alignSelf: 'center'}}>
        <Text> Submit Payment </Text>
      </TouchableOpacity>
    </>
  )
}

export default function StripeComponent() {
  return (
    <View>

      <StripeProvider
        publishableKey={'pk_test_51LSv1QDXmq8u4SCDitvMXjx5QgLzb9Kw6hMmhqGOP6MvjyANA0PyXXAdf5trb5IBOhYLPwLaVPEXS4hO2jhPGONO00jm05WxEf'}
        merchantIdentifier="merchant.identifier"
      >
        <CardHandler/>
      </StripeProvider>

    </View>
  )
}