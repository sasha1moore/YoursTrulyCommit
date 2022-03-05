import { StyleSheet, Text, ImageBackground, SafeAreaView, View, Image } from "react-native";
import {Pressable, FlatList} from 'react-native';
import React from "react";
import Images from "../assets/Images";
import CartItem from "../Components/CartItem";
import COLORS from "../assets/colors";

const FAQScreen = ({navigation, route}) => {

  function Header(){
    return(
      <View style={headerStyles.headerContainer} >
          <View style={headerStyles.doublebutton}>
              <Pressable onPress={() => navigation.navigate('HomeScreen')}>
                  <Image source={Images.HomeButton} style={headerStyles.topbutton} />
              </Pressable>
              <Pressable onPress={() => navigation.goBack()}>
                    <Image source={Images.BackButton} style={headerStyles.topbutton} />
              </Pressable>
          </View>
          
          <Image
            style={headerStyles.toptitle}
            source={Images.YTLogo}
          />
          <View style={{width: 50}} />
      
        </View>
    )
  }
  const data = [
    {
      id: 1,
      q: "What can I add to a package?",
      a: "You can add a video message, choose from a wide array of fun add-ons, and/or add accommodations (from a provided list, or to your specifications). You can combine any number of extras from these three categories. "
    },
    {
      id: 2,
      q: "What happens when I place an order?",
      a: "Your package will be delivered to a YoursTruly package center, where our team will curate and beautify your package according to your specifications. Then, as soon as it’s ready (or on a day of your choosing), our specialized delivery team will present your package to its recipient, meeting all your performance and accommodation expectations."
    },
    {
      id: 3,
      q: "Where should I send my package?",
      a: "After placing your order, we will show you the address of a YoursTruly package center closest to your package’s destination. This is where you should ship your package, whether it’s coming from yourself or another retailer."
    },
    {
      id: 4,
      q: "How will you connect my package to my order?",
      a: "After placing your order, you will receive an email asking for the confirmation and tracking numbers associated with your order. This will be used by our team working in our package centers to identify packages when they arrive."
    },
    {
      id: 5,
      q: "I want to change/cancel my order, what do I do?",
      a: "Follow the instructions in your confirmation email to get in touch with our team and see if changing and/or canceling your order is a possibility."
    },
    {
      id: 6,
      q: "I am a retailer and want to partner with you to offer a delivery add-on, where should I start?",
      a: "Contact us at team@yourstruly.com to get started! We’d love to work with you!"
    }
  ]
  const render = ({item}) => {
    return (
      <View style={styles.blockcontainer}>
        <Text style={styles.q}>{item.q}</Text>
        <Text>{item.a}</Text>
      </View>
    );
  }
  return (
    <ImageBackground source={Images.ConfettiBackground} style={styles.back}>
      <SafeAreaView style={styles.container}>  
        <Header />
        <View style={{height: 10, backgroundColor: COLORS.white}} />
        <Image source={Images.FAQTitle} style={styles.pagetitle}/>
        <FlatList data={data} renderItem={render} ListFooterComponent={<View style={{height: 200}}/>}/>
        <View style={styles.bottomMsg}>
            <Text style={styles.bottomText}>More Questions?</Text>
            <Text style={styles.bottomText}>Contact us: team@yourstruly.com</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
    
  );
};
export default FAQScreen;

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
    width: 250,
    height: 30, 
    alignSelf: 'center'
  }, 
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      },

    back: {
      width: '100%',
      height: '100%'
    },
    pagetitle: {
      width: '90%',
      height: 50,
      alignSelf: 'center',
    },
    blockcontainer: {
      flex:1,
      margin: 10,
      padding: 10,
      backgroundColor: COLORS.secondaryPink,
      borderRadius: 20
    },
    q: {
      color: COLORS.mainPink,
      fontWeight: '800',
      fontSize: 16,
      marginBottom: 5
    },
    bottomMsg: {
      backgroundColor: COLORS.white,
      borderRadius: 20,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 20
    },
    bottomText: {
      color: COLORS.purple,
      fontWeight: '800',
      margin: 2,
      fontSize: 20
    }

});