import { StyleSheet, ScrollView, Text, SafeAreaView, View, Image, Alert, ImageBackground } from "react-native";
import {Pressable, FlatList} from 'react-native';
import React from "react";
import Images from '../assets/Images';
import COLORS from "../assets/colors";

const CheckoutInfo = ({navigation, route}) => {
  function Header(){
    return(
      <View style={headerStyles.headerContainer} >
      <View style={headerStyles.doublebutton}>
          <Pressable onPress={() => threeButtonAlert(navigation)}>
              <Image source={Images.HomeButton} style={headerStyles.topbutton} />
          </Pressable>
          <Pressable onPress={() => navigation.goBack()}>
                <Image source={Images.BackButton} style={headerStyles.topbutton} />
          </Pressable>
      </View>
      
      <Image
        style={headerStyles.toptitle}
        source={Images.CheckoutTitle}
      />
      <Pressable onPress={() => navigation.navigate('FAQScreen')}>
        <Image source={Images.FAQButton} style={headerStyles.topbutton} />
     </Pressable>
        </View>
    )
  }

  const threeButtonAlert = (navigation) => {
    Alert.alert(
      "Do you want to abandon your cart?",
      "",
      [
        {
          text: "Yes, forget about this cart!",
          onPress: () => navigation.navigate('HomeScreen')
        },
        { text: "No, please save my cart!", onPress: () =>  navigation.navigate('HomeScreen') },
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
        <ScrollView style={{flex: 1, width: '100%', padding: 20}}>
            <Image source={Images.CheckoutContactInfo} style={{width: '100%', height: 120, borderRadius: 60, marginBottom: 10}}/>
            <Image source={Images.CheckoutDeliveryInfo} style={{width: '100%', height: 370, borderRadius: 60, marginBottom: 10}}/>
            <Image source={Images.CheckoutDate} style={{width: '100%', height: 120, borderRadius: 60, marginBottom: 10}} />
            <Image source={Images.CheckoutPaymentMethod} style={{width: '100%', height: 180, borderRadius: 60, marginBottom: 10}} />
            <Image source={Images.CheckoutBilling} style={{width: '100%', height: 170, borderRadius: 60, marginBottom: 10}} />

        </ScrollView>
        <Pressable onPress= {() => navigation.navigate("ReviewOrderScreen")} style={styles.pressablewrap}>
                <View style={styles.buttonWrap}>
                    <Image source={Images.NextButton} style={styles.next}  />
                </View>
        </Pressable>
      </ImageBackground>
      
      
    </SafeAreaView>
  );
};

export default CheckoutInfo;

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
      height: 60, 
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
    next: {
      width: 120,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      
    },
    pressablewrap: {
      width: 120,
      height: 50,
      alignSelf: 'center',
      margin: 10
    },
    buttonWrap: {
      shadowColor: COLORS.black,
      marginBottom: 100,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 1, 
    },
    

});