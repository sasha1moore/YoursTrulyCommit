import { StyleSheet, ScrollView, Modal, Text, SafeAreaView, View, Image, Alert, ImageBackground } from "react-native";
import {Pressable, FlatList} from 'react-native';
import React from "react";
import Images from '../assets/Images';
import COLORS from "../assets/colors";


const ReviewOrder = ({navigation, route}) => {

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
            source={Images.ReviewOrderTitle}
          />
          <Pressable onPress={() => navigation.navigate('FAQScreen')}>
            <Image source={Images.FAQButton} style={headerStyles.topbutton} />
         </Pressable>
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
    <SafeAreaView style={styles.container}>  
      <ImageBackground source={Images.ConfettiBackground} resizeMode="cover" style={styles.back}>
        <Header />
        <Text>Review Order!</Text>
        <Pressable onPress= {() => navigation.navigate("ConfirmedOrderScreen")} style={styles.pressablewrap}>
                <View style={styles.buttonWrap}>
                    <Image source={Images.ConfirmOrderButton} style={styles.confirm}  />
                </View>
        </Pressable>
      </ImageBackground>
      
      
    </SafeAreaView>
  );
};

export default ReviewOrder;

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
        width: 220,
        height: 60, 
        alignSelf: 'center'
      }, 
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        display: 'flex',
        justifyContent: 'center'
      },
    back: {
      width: '100%',
      height: '100%',
      
    },
    confirm: {
        width: 180,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        
      },
      pressablewrap: {
        width: 180,
        height: 60,
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