import { StyleSheet, Text, View } from "react-native";
import {Pressable} from 'react-native';
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import OptionsStack from './OptionsStack';
import { NavigationContainer } from '@react-navigation/native';
import Accomodations from "./Accommodations";
import COLORS from '../assets/colors';
import VideoStack from "./VideoStack";
import OptionsScreen from './OptionsScreen';
const Tab = createBottomTabNavigator();
const TabNav = () => {
  //props.route.params();
  const [addOnCart, setAddOnCart] = React.useState([]);
  const addAddOnItem = (item) => {
    setAddOnCart([...addOnCart, item]);
  };
  const deleteAddOnItem = (index) => {   
    let cartCopy = addOnCart;
      cartCopy.splice(index, 1);
      setAddOnCart([...cartCopy]);
    };


  const [accomodateCart, setAccommodateCart] = React.useState([]);
  const addAccommItem = (item) => {
    setAccommodateCart([...accomodateCart, item]);
  }
  const deleteAccomItem = (index) => {
    let cartCopy = accomodateCart;
    cartCopy.splice(index, 1);
    setAccommodateCart([...cartCopy]);
  }

  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            NavigationContainer
            if (route.name === 'Video') {
              iconName = 'camera'
            } else if (route.name === 'Add-ons') {
              iconName = 'star'
            } else if (route.name === 'Accomodate') {
              iconName = "person"
               return <Ionicons name={iconName} size={size} color={color} />;
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: COLORS.mainPink,
          tabBarInactiveTintColor: COLORS.purple,
          headerShown: false,
        })}
      >
        <Tab.Screen name= "Video" component={VideoStack} />
        <Tab.Screen name= "Add-ons" component={OptionsScreen} initialParams={{cart: addOnCart, deleteItem: deleteAddOnItem, addItem: addAddOnItem, accommodateCart: accomodateCart, deleteAccomItem: deleteAccomItem, addAccommItem: addAccommItem}}/>
        <Tab.Screen name= "Accomodate" component={Accomodations} initialParams={{cart: addOnCart, deleteItem: deleteAddOnItem, addItem: addAddOnItem, accommodateCart: accomodateCart, deleteAccomItem: deleteAccomItem, addAccommItem: addAccommItem}}/>
      </Tab.Navigator>
  );
};

export default TabNav;

const styles = StyleSheet.create({});

