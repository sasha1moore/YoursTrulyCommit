import { StyleSheet, ScrollView, Text, SafeAreaView, View, Image, Alert, ImageBackground } from "react-native";
import {Pressable, FlatList} from 'react-native';
import React from "react";
import Images from '../assets/Images';
import COLORS from "../assets/colors";

const VideoStart = ({navigation, route}) => {
    function Header(){
        return(
          <View style={headerStyles.headerContainer} >
    <Pressable onPress={() => threeButtonAlert(navigation)}>
        <Image source={Images.HomeButton} style={headerStyles.topbutton} />
    </Pressable>
          <Image
            style={{ width: 250, height: 28}}
            source={Images.YTLogo}
          />
          <View style={headerStyles.doublebutton}>
        <Pressable onPress={() => navigation.navigate('FAQScreen')}>
              <Image source={Images.FAQButton} style={headerStyles.topbutton} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('CheckoutScreen', {cart: cart})}>
        <Image source={Images.AddToCart} style={styles.addbutton}  />
          <Image source={Images.CartTopNav} style={headerStyles.topbuttonCart} />
        </Pressable>
    </View>
          
          
            </View>
        )
      }

      const threeButtonAlert = (navigation) => {
        Alert.alert(
          "Would you like to save this celebration?",
          "",
          [
            {
              text: "Yes, save my celebration",
              onPress: () => navigation.navigate('HomeScreen')
            },
            { text: "No, don't save", onPress: () =>  navigation.navigate('HomeScreen') },
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            }
            
          ]
        );
      }

  return (
    <SafeAreaView style={{backgroundColor: COLORS.white}}>  
      <ImageBackground source={Images.ConfettiBackground} resizeMode="cover" style={styles.back}>
        <Header />
        <Text>video!</Text>
      </ImageBackground>
      
      
    </SafeAreaView>
  );
};

export default VideoStart;

const headerStyles = StyleSheet.create({
    headerContainer: {
      flexDirection: 'row', 
      justifyContent:"space-around", 
      alignItems: 'center',
      backgroundColor: COLORS.white
    },
    doublebutton: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    } ,
    topbutton: {
      height: 50,
      aspectRatio: 1,
    },
    toptitle: {
      width: 200,
      height: 30, 
      alignSelf: 'center'
    }, 
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },  
    back: {
      width: '100%',
      height: '100%'
    },
    title: {
      width: 200,
      height: 60,
      alignSelf: 'center'
    },
    

});