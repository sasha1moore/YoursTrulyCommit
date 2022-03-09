import { StyleSheet, ScrollView, Modal, Text, SafeAreaView, View, Image, Alert, ImageBackground } from "react-native";
import {Pressable, FlatList} from 'react-native';
import React, { useContext } from "react";
import Images from '../assets/Images';
import COLORS from "../assets/colors";
import Context from '../cartContext';

const ReviewOrder = ({navigation, route}) => {
    const {myCart} = useContext(Context);

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
          "Are you sure you want to abandon this celebration?",
          "",
          [
            {
              text: "Yes, go back home",
              onPress: () => navigation.navigate('HomeScreen')
            },
            // { text: "No, don't save", onPress: () =>  navigation.navigate('HomeScreen') },
            {
              text: "No, let's keep celebrating!",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            }
            
          ]
        );
      }
      let totalPrice = 0;

      if (myCart != null) {
        for (let i = 0; i < myCart.length; i++) {
          const price = myCart[i].price;
          totalPrice += parseInt(price);
        }
      }
      const renderSummary = ({item}) => {
          return (
            <View style={styles.itemContainer}>
                <Text style={styles.celebSumTitle}>{item.title}</Text>
                <Text style={styles.celebSumTitle}>{'$' +item.price}</Text>
            </View>
          ) 
      }
  return (
    <SafeAreaView style={styles.container}>  
      <ImageBackground source={Images.ConfettiBackground} resizeMode="cover" style={styles.back}>
        <Header />
        <ScrollView style={{padding: 20}}>
            <View style={styles.orderSummary}>
                
                    <FlatList
                        data={myCart}
                        renderItem={renderSummary}/>
                    <View style={styles.priceWrapper}>
                        <Text style={styles.celebSumText}>{"Total: $" + totalPrice}</Text>
                    </View>

                
                {/* <Text style={styles.celebSumTitle}>celebration summary</Text> */}
                
            </View>
            <Image source={Images.ReviewContact} style={{width: '100%', borderRadius: 60, height: 150, marginTop: 10}} />
            <Image source={Images.ReviewDelivery} style={{width: '100%', borderRadius: 60, height: 340, marginTop: 10}} />
            <Image source={Images.ReviewDate} style={{width: '100%', borderRadius: 60, height: 100, marginTop: 10}} />
            <Image source={Images.ReviewPayment} style={{width: '100%', borderRadius: 60, height: 150, marginTop: 10}} />
            <Image source={Images.ReviewBilling} style={{width: '100%', borderRadius: 60, height: 150, marginTop: 10}} />

            </ScrollView>
        
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
    orderSummary: {
        backgroundColor: COLORS.secondaryPink,
        borderRadius: 60,
        width: '100%',
        alignSelf: 'center',
        padding: 20
    },
    celebSumTitle: {
        color: COLORS.mainPink,
        fontWeight: '800',
        fontSize: 20,
        paddingBottom: 10,
        letterSpacing: 1
    },
    itemContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },  
    celebSumText: {
        fontSize: 20,
        color: COLORS.orange,
        fontWeight: '700',
    },
    priceWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
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