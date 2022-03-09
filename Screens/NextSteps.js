import { StyleSheet, ScrollView, Modal, Text, SafeAreaView, View, Image, Alert, ImageBackground } from "react-native";
import {Pressable, FlatList} from 'react-native';
import React from "react";
import Images from '../assets/Images';
import COLORS from "../assets/colors";
import Context from '../cartContext';


const NextSteps = ({navigation, route}) => {
    const {myCart, setMyCart} = React.useContext(Context);
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

      const press = () => {
          setMyCart([]);
          navigation.navigate("HomeScreen");
      }

  return (
    <SafeAreaView style={styles.container}>  
      <ImageBackground source={Images.ConfettiBackground} resizeMode="cover" style={styles.back}>
        <Header />
        <Image source={Images.NextStepsTitle} style={styles.title}/>
        <Image source={Images.NextStepsDirectPackage} style={{width: '90%', height: 160, alignSelf: 'center', borderRadius: 60, marginTop: 50}} />
        <Image source={Images.NextStepsWellTakeCare} style={{width:'90%', height: 280, alignSelf: 'center', borderRadius: 60, margin: 20}} />
        <Pressable onPress= {press} style={styles.pressablewrap}>
                <View style={styles.buttonWrap}>
                    <Image source={Images.GoHomeButton} style={styles.confirm}  />
                </View>
        </Pressable>
     </ImageBackground>
      
      
    </SafeAreaView>
  );
};

export default NextSteps;

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
        justifyContent: 'center'
      },
    back: {
      width: '100%',
      height: '100%',
      
    },
    title: {
        height: 60,
        width: '50%',
        alignSelf: 'center',
        padding: 10
    },
    confirm: {
        width: 140,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        
      },
      pressablewrap: {
        width: 140,
        height: 60,
        alignSelf: 'center',
      },
      buttonWrap: {
        shadowColor: COLORS.black,
        marginBottom: 100,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1, 
      },


    

});