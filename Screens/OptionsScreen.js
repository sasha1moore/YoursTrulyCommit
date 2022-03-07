import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, ImageBackground, Pressable, Button, Modal, Alert } from 'react-native';
import Images from '../assets/Images';
import COLORS from '../assets/colors';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";

const OPTIONS = [
   // item with index 1
  {
    id: 1,
    image: Images.Acrobats,
    title: 'Acrobats',
    price: '$0',
    description: "Lily and Meredith will deliver your gift with a perfomance that is sure to make your recipient's head spin!",
    screenName: 'AcrobatsScreen'
  },
  // item with index 2
  { 
    id: 2,
    image: Images.Balloons,
    title: 'Balloons',
    price: '$10',
    description: 'Add a bouquet of balloons to your gift delivery!',
    screenName: 'BalloonsScreen'
  },
  // item with index 3
  { 
    id: 3,
    image: Images.Confetti,
    title: 'Confetti',
    price: '$10',
    description: 'Confetti will rain down on your recipient as they recieve their gift!',
    //extraInfo:
    screenName: 'ConfettiScreen'
  }
]

export default function OptionsScreen() {
  const navigation = useNavigation();

  const findItemInArray = (array, title) => {
    for (let i = 0; i < array.length; i++) {
      if(array[i].title === title) {
        return true;
      }
    }
  
    return false;
  }

   const deleteItem = (index) => {

       let cartCopy = cart;
         cartCopy.splice(index, 1);
         setCart([...cartCopy]);
       }

// make header function
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
        {/* render as pressable or as an image..  */}
        <Pressable onPress={() => navigation.navigate('CheckoutScreen', {cart: cart, deleteItem: deleteItem})}>
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
  


  //this is whatever they've added to their cart
  const [cart, setCart] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [inCart, setInCart] = useState(false);

  const renderItem = ({ item }) => {

    // leave for OH: how to find item in cart. 

    
    function press(){
      setModalVisible(true);
      setCart([...cart, item]);
      //setButtonPressed(true);
      //setTimesPressed((current) => current + 1);
    }
    return (
      // <Pressable onPress={() => {navigation.navigate(item.screenName, {
      //   location: item,
      //   cart: cart
      // })}}>
        <Pressable>
        <View key={item.id} style={styles.destinations}>
          <Image source={item.image} style={styles.destinationImages}></Image>
          <View style={styles.destinationText}>
            <View style={styles.titleDescription}>
              <Text style={styles.destinationTitle}>{item.title}</Text>
              <Text style={styles.destinationDescription}>{item.description}</Text>
            </View>
            <View style={styles.detailsText}>
            {/* if ({pressed}}) {
                <Text>"Added to Cart!"</Text>
            } */}
              
              
                  {/* <Image source={Images.AddToCart} style={styles.addbutton}  /> */}
            { findItemInArray(cart, item.title) && 
                  <Image source={Images.Balloons} style={styles.addbutton}  />
            }

            {!findItemInArray(cart, item.title) &&
            <View style={styles.buttonWrap}>
              <Pressable onPress= {() => 
                press()
              } style={styles.pressablewrap}>
              
              <Image source={Images.AddToCart} style={styles.addbutton}  />
              </Pressable>
              </View>
    
              }
                {/* <Text>Add to Cart</Text> */}
              
            </View>
            {/* <View style={styles.optionDetails}>
              <Text style={styles.detailsText}>Details</Text>
            </View> */}
          </View>
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


      </Pressable>
    );
  }
  

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Images.ConfettiBackground} style={styles.background}>
        
        <Header></Header>

          <View style={styles.horizontalScroll}>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={OPTIONS}
              renderItem={renderItem}
            />
          </View>
          
      </ImageBackground>
      </SafeAreaView>
      
  )
}

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
  topbuttonCart: {
    height: 50,
    width: 30
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"space-between",
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: COLORS.white
  },
  background: {
    width: '100%',
    height: '100%',
},

  horizontalScroll: {
    width: '85%',
    flex: 8,
    margin: 20,
  },
  destinations: {
    height: '90%',
    width: 291,
    margin: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
    backgroundColor: COLORS.white
  },
  destinationImages: {
    height: 290,
    width: 290,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  destinationText: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '30%',
  },
  titleDescription: {
    margin: 15,
    marginTop: 20,
  },
  
  destinationTitle: {
    color: COLORS.purple,
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  destinationDescription: {
    color: COLORS.orange,
    fontWeight: '700',
    fontSize: 12,
  },
  destinationExplore: {
    margin: 15,
  },
  detailsText: {
    marginLeft: 15,
    marginBottom: 10,
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
  },
  buttonWrap: {
    shadowColor: COLORS.black,
    marginBottom: 100,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1, 
  }
});