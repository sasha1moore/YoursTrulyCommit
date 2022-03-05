import { StyleSheet, ScrollView, Text, SafeAreaView, View, Image, Alert, ImageBackground } from "react-native";
import {Pressable, FlatList} from 'react-native';
import React from "react";
import Images from '../assets/Images';
import COLORS from "../assets/colors";

const data = [
    {
        id: 1,
        title: "hand package directly to recipient",
        price: "3",
        isSelect: true
    },
    {
        id: 2,
        title: "braille message",
        price: "4",
        isSelect: false
    },
    {
        id: 3, 
        title: "Spanish speaker",
        price: "5"
    },
    {
        id: 4,
        title: "French speaker",
        price: "5"
    },
    {
        id: 5,
        title: "ASL interpreter",
        price: "5"
    },
    {
        id: 6,
        title: "assist recipient in opening\ntheir package",
        price: "3"
    }
]

const Accomodations = ({navigation, route}) => {
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
                <Image source={Images.CartTopNav} style={headerStyles.topbutton} />
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

      

      const [numPressed, setPressed] = React.useState(0); // only using a number to trigger rerenders

      const render = ({item}) => {
        const itemPress = () => {
            item.isSelect = !item.isSelect;
            setPressed(numPressed => numPressed + 1);
        }

          return (
              <Pressable onPress={() => itemPress()}>
                <View style={[itemStyles.item, item.isSelect ? {borderWidth: 3} : {borderWidth: 0}]}>
                    <View style={itemStyles.horizContainer}>
                        <Text style={itemStyles.maintext}>{item.title}</Text>
                        <Text style={itemStyles.price}>{"$" + item.price}</Text>
                    </View>
                </View>
              </Pressable>
                
            
          );
      }

  return (
    <SafeAreaView style={styles.container}>  
      <ImageBackground source={Images.ConfettiBackground} resizeMode="cover" style={styles.back}>
        <Header />
        <FlatList
            data={data}
            renderItem={render} />
      </ImageBackground>
      
      
    </SafeAreaView>
  );
};

export default Accomodations;

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

const itemStyles = StyleSheet.create({
    item: {
        borderRadius: 20,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: COLORS.secondaryPink,
        justifyContent: 'center',
        color: COLORS.mainPink,
        padding: 10,
        margin: 10,
        display: 'flex',
        flexDirection: 'column',
        borderColor: COLORS.mainPink
      },
      horizContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    
      },
      maintext: {
        fontWeight: '700',
        color: COLORS.mainPink,
        fontSize: 18,
    
      },
      price: {
          color: COLORS.mainPink,
          fontWeight: '300',
          fontSize: 16,
      }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
      },
    back: {
      width: '100%',
      height: '100%',
      
    },
    title: {
      width: 200,
      height: 60,
      alignSelf: 'center'
    },

    

});