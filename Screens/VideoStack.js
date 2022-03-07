import { createStackNavigator } from '@react-navigation/stack';
import {Button, Image, Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import OptionsScreen from './OptionsScreen';
import OptionInformation from './OptionInformation';
import { TransitionPresets } from '@react-navigation/stack';
import Images from '../assets/Images';
import HomeScreen from '../Screens/HomeScreen';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";
import VideoStart from './VideoStart';
import VideoUpload from './VideoStart';
import VideoFilm from './VideoStart';



const Stack = createStackNavigator();

export default function VideoStack() {
  return (
    <Stack.Navigator
      screenOptions= {() => ({
        headerShown: false,
        //add buttons inside of you header here
      })}>
      <Stack.Screen name="VideoStart" component={VideoStart} />
      <Stack.Screen name="VideoUpload" component={VideoUpload} />
      <Stack.Screen name="VideoFilm" component={VideoFilm} />
    </Stack.Navigator>
  );
}