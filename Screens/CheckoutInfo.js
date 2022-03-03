import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import {Pressable, FlatList} from 'react-native';
import React from "react";

const CheckoutInfo = ({navigation, route}) => {
  return (
    <SafeAreaView>  
      <Pressable onPress={() => navigation.navigate('TabNav')}>
        <Text>Checkout Info!</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default CheckoutInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },

});