import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import VideoStart from './VideoStart';



const Stack = createStackNavigator();

export default function VideoStack(navigation, route) {
  return (
    <Stack.Navigator
      screenOptions= {() => ({
        headerShown: false,
        //add buttons inside of you header here
      })}>
      <Stack.Screen name="VideoStart" component={VideoStart} />
    </Stack.Navigator>
  );
}