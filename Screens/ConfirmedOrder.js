import { StyleSheet, ScrollView, Modal, Text, SafeAreaView, View, Image, Alert, ImageBackground } from "react-native";
import {Pressable, FlatList} from 'react-native';
import React from "react";
import Images from '../assets/Images';
import COLORS from "../assets/colors";


const ConfirmedOrder = ({navigation, route}) => {

    function Header(){
        return(
          <View style={headerStyles.headerContainer} >
          <View style={{height: 50}} />
          
          <Image
            style={headerStyles.toptitle}
            source={Images.YTLogo}
          />
            <View style={{height: 50}} />

         
            </View>
        )
      }


  return (
    <SafeAreaView style={styles.container}>  
      <ImageBackground source={Images.ConfettiBackground} resizeMode="cover" style={styles.back}>
        <Header />
        <Image source={Images.ConfirmedMessage} style={styles.msg}/>
        <Pressable onPress= {() => navigation.navigate("NextStepsScreen")} style={styles.pressablewrap}>
                <View style={styles.buttonWrap}>
                    <Image source={Images.SeeNextSteps} style={styles.confirm}  />
                </View>
        </Pressable>
      </ImageBackground>
      
      
    </SafeAreaView>
  );
};

export default ConfirmedOrder;

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
    
    toptitle: {
        width: 250,
        height: 30, 
        alignSelf: 'center'
      }, 
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
    back: {
      width: '100%',
      height: '100%',
      
    },
    msg: {
        width: '90%', 
        height: 200, 
        borderRadius: 60, 
        alignSelf: 'center',
        marginTop: 200
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
        margin: 20
      },
      buttonWrap: {
        shadowColor: COLORS.black,
        marginBottom: 100,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1, 
      },


    

});