import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import {Pressable, FlatList} from 'react-native';
import React from "react";

const FAQScreen = ({navigation, route}) => {
  return (
    <SafeAreaView>  
      <Pressable onPress={() => navigation.navigate('TabNav')}>
        <Text>FAQ!</Text>
      </Pressable>
    </SafeAreaView>
  );
};
export default FAQScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },

});