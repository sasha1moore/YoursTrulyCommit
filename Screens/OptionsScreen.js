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

// make header function
function Header(){
  return(
    <View style={{flexDirection: 'row', alignItems:"space-between"}} >
    <Pressable onPress={() => threeButtonAlert(navigation)}>
        <Image source={Images.HomeButton} style={styles.topbutton} />
    </Pressable>
    <Image
      style={{ width: 200, height: 20}}
      source={Images.YTLogo}
    />
    <Pressable onPress={() => navigation.navigate('FAQScreen')}>
          <Image source={Images.FAQButton} style={styles.topbutton} />
    </Pressable>
    <Pressable onPress={() => navigation.navigate('CheckoutScreen', {cart: cart})}>
      <Image source={Images.HomeButton} style={styles.topbutton} />
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
  


  //this is whatever they've added to their cart
  const [cart, setCart] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => {
    
    function press(){
      setModalVisible(true);
      setCart([...cart, item]);
    }
    return (
      <Pressable onPress={() => {navigation.navigate(item.screenName, {
        location: item,
        cart: cart
      })}}>
        <View key={item.id} style={styles.destinations}>
          <Image source={item.image} style={styles.destinationImages}></Image>
          <View style={styles.destinationText}>
            <View style={styles.titleDescription}>
              <Text style={styles.destinationTitle}>{item.title}</Text>
              <Text style={styles.destinationDescription}>{item.description}</Text>
            </View>
            <View style={styles.detailsText}>
              <Pressable onPress= {() => 
              press()
              }>
                <ImageBackground source={Images.AddToCart} style={styles.addbutton}/>
                {/* <Text>Add to Cart</Text> */}
              </Pressable>
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
              <Text style={styles.textStyle}>OK :)</Text>
            </Pressable>
          </View>
        </View>
      </Modal>


      </Pressable>
    );
  }
  

  return (
    <SafeAreaView style={styles.container}>
      <Header></Header>

      <View style={styles.horizontalScroll}>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={OPTIONS}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"space-between",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
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
  topbutton: {
    height: 50,
    aspectRatio: 1,
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
    backgroundColor: "#2196F3",
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
    width: 110,
    height: 40,
    borderRadius: 200,
    shadowColor: COLORS.black,
    marginBottom: 100,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1, 
  },
});
