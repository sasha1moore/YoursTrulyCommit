import { StyleSheet, ScrollView, Modal, Text, SafeAreaView, View, Image, Alert, ImageBackground } from "react-native";
import {Pressable, FlatList} from 'react-native';
import React from "react";
import { useContext } from "react";
import Images from '../assets/Images';
import COLORS from "../assets/colors";
import Context from '../cartContext';

const data = [
    {
        id: 1,
        title: "hand package directly to recipient",
        price: "3",
        isSelect: false,
    },
    {
        id: 2,
        title: "braille message",
        price: "4",
        isSelect: false,
    },
    {
        id: 3, 
        title: "Spanish speaker",
        price: "5",
        isSelect: false,
    },
    {
        id: 4,
        title: "French speaker",
        price: "5",
        isSelect: false,
    },
    {
        id: 5,
        title: "ASL interpreter",
        price: "5",
        isSelect: false,
    },
    {
        id: 6,
        title: "assist recipient in opening\ntheir package",
        price: "3",
        isSelect: false,
    }
]

const Accomodations = ({navigation, route}) => {
    let {myCart, setMyCart} = useContext(Context);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [numPressed, setPressed] = React.useState(0); // only using a number to trigger rerenders
    const [placeholder, setPlaceholder] = React.useState(0);
    navigation.addListener("focus", () => setPlaceholder(placeholder + 1));

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
              {/* change the cart here */}
              {/* <Pressable onPress={() => navigation.navigate('CheckoutScreen', {accomCart: cart, deleteAccomItem: deleteItem})}>
                <Image source={Images.CartTopNav} style={headerStyles.topbutton} />
              </Pressable> */}
              <Pressable onPress={() => navigation.navigate('CheckoutScreen')}>
                <Image source={Images.CartTopNav} style={headerStyles.topbutton} />
              </Pressable>
          </View>
          
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
              onPress: () => {
                setMyCart([]);
                navigation.navigate('HomeScreen')
              }
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
      const render = ({item}) => {
        const findItemInArray = (array, title) => {
            for (let i = 0; i < array.length; i++) {
              if(array[i].title === title) {
                return true;
              }
            }
            return false;
          }
        const inCart = findItemInArray(myCart, item.title);
        const itemPress = () => {
            if (!inCart) {
                item.isSelect = !item.isSelect;
                setPressed(numPressed => numPressed + 1);
            }
        }

          return (
              <Pressable onPress={() => itemPress()}>
                <View style={[itemStyles.item, item.isSelect ? {borderWidth: 3} : {borderWidth: 0}]}>
                    <View style={itemStyles.horizContainer}>
                        <Text style={itemStyles.maintext}>{item.title}</Text>
                        <Text style={itemStyles.price}>{"$" + item.price}</Text>
                    </View>
                    {inCart && <Text style={itemStyles.added}>Added!</Text>}
                </View>
              </Pressable>
                
            
          );
      }

      const add = () => { 
          setModalVisible(true);
          let tempArray = myCart;
          for (let i = 0; i < data.length; i++) {
              if (data[i].isSelect) {
                data[i].isSelect  = false;
                tempArray.push(data[i]);
              }
          }
          setMyCart(tempArray);
      }
      
  return (
    <SafeAreaView style={styles.container}>  
      <ImageBackground source={Images.ConfettiBackground} resizeMode="cover" style={styles.back}>
        <Header />
        <FlatList
            data={data}
            renderItem={render} />
        <Pressable onPress= {add} style={styles.pressablewrap}>
                <View style={styles.buttonWrap}>
                    <Image source={Images.AddToCart} style={styles.addbutton}  />
                </View>
        </Pressable>
        <View style={styles.bottomMsg}>
            <Text style={styles.bottomText}>Don't see what you need?</Text>
            <Text style={styles.bottomText}>Contact us: team@yourstruly.com</Text>
        </View>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Added to cart!</Text>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
                >
                <Text style={styles.textStyle}>OK!</Text>
                </Pressable>
            </View>
            </View>
        </Modal>
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
      },
      added: {
          color: COLORS.orange,
          fontWeight: '400',
          marginTop: 3
      }
})

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
      width: 200,
      height: 60,
      alignSelf: 'center'
    },
    addbutton: {
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        
      },
      pressablewrap: {
        width: 120,
        height: 40,
        alignSelf: 'center',
        marginBottom: 10
      },
      buttonWrap: {
        shadowColor: COLORS.black,
        marginBottom: 100,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1, 
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
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: COLORS.purple,
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },

    

});