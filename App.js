import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import TabNav from './Screens/TabNav';
import CheckoutScreen from './Screens/CheckoutScreen';
import CheckoutInfo from './Screens/CheckoutInfo';
import FAQScreen from './Screens/FAQScreen'
import ReviewOrder from './Screens/ReviewOrder';
import ConfirmedOrder from './Screens/ConfirmedOrder';
import NextSteps from './Screens/NextSteps';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions= {() => ({
        headerShown: false,
      })}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="TabNav" component={TabNav} />
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
      <Stack.Screen name="CheckoutInfo" component={CheckoutInfo} />
      <Stack.Screen name="FAQScreen" component={FAQScreen} />
      <Stack.Screen name="ReviewOrderScreen" component={ReviewOrder} />
      <Stack.Screen name="ConfirmedOrderScreen" component={ConfirmedOrder} />
      <Stack.Screen name="NextStepsScreen" component={NextSteps} />
      </Stack.Navigator>
    </NavigationContainer>
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
