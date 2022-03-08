import { createStackNavigator } from '@react-navigation/stack';
import {Button, Image, Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import OptionsScreen from './OptionsScreen';
import OptionInformation from './OptionInformation';
import { TransitionPresets } from '@react-navigation/stack';
import Images from '../assets/Images';
import HomeScreen from '../Screens/HomeScreen';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";



const Stack = createStackNavigator();

export default function OptionsStack({navigation, route}) {

  const addItem = (item) => {
    route.params.addItem();
  };
  const deleteItem = (item) => {
    route.params.deleteItem();
  }
  console.log("inside options stack");
  console.log(route);
  return (
    <Stack.Navigator
      screenOptions= {() => ({
        headerShown: false,
        //add buttons inside of you header here
      })}>
      <Stack.Screen name="Add-ons!" component={OptionsScreen} initialParams={{cart: route.params.cart, deleteItem: route.params.deleteItem, addItem: route.params.addItem, accommodateCart: route.params.accomodateCart, deleteAccomItem: route.params.deleteAccomItem, addAccommItem: route.params.addAccommItem}}
      />
      <Stack.Screen name="AcrobatsScreen" component={OptionInformation} 
        options={{
          title: 'Profile',
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
      <Stack.Screen name="BalloonsScreen" component={OptionInformation} />
      <Stack.Screen name="ConfettiScreen" component={OptionInformation} />
    </Stack.Navigator>
  );
}


// style for the modal alone! 

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});