import { StyleSheet, Text, View } from "react-native";
import {Pressable} from 'react-native';
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import OptionsStack from './OptionsStack';
import { NavigationContainer } from '@react-navigation/native';
import VideoScreen from './VideoScreen';
import Accomodations from "./Accommodations";
import COLORS from '../assets/colors';
const Tab = createBottomTabNavigator();
const TabNav = () => {
  //props.route.params();
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
        <Tab.Screen name= "Video" component={VideoScreen} />
        <Tab.Screen name= "Add-ons" component={OptionsStack} />
        <Tab.Screen name= "Accomodate" component={Accomodations} />
      </Tab.Navigator>
  );
};

export default TabNav;

const styles = StyleSheet.create({});

