import { StyleSheet, Text, SafeAreaView, View, ImageBackground, Image, Alert } from "react-native";
import {Pressable, FlatList} from 'react-native';
import {React, useState} from "react";
import Images from "../assets/Images";
import CartItem from "../Components/CartItem";
import COLORS from '../assets/colors';

const CheckoutScreen = ({navigation, route}) => {
  const [cart, setCart] = useState(route.params.cart);
  const [accomodateCart, setAccommodateCart] = useState(route.params.accomCart);
  
  function press(index){
    route.params.deleteItem(index)
    let cartCopy = cart;
    cartCopy.splice(index, 1);
    setCart([...cartCopy]);
  }
    const renderItem = ({ item, index }) => (

      <View style={styles.item} >
      <View style={styles.horizContainer}>
          <View style={{width: 200}}>
            <Text style={styles.maintext}>{item.title}</Text>
          </View>
          <View style={styles.editAndPrice}>
              <Pressable style={styles.pressable} onPress={() => console.log('edit was pressed!')}>
                  <Text style={styles.pressText}>edit</Text>
              </Pressable>
              <Pressable style={styles.pressable} onPress={() => press(index)}>
                  <Text style={styles.pressText}>remove</Text>
              </Pressable>
              <Text style={styles.maintext}>{item.price}</Text>
          </View>
      </View>
    </View>
      );

      function accomPress(index){
        route.params.deleteAccomItem(index);
        let cartCopy = accomodateCart;
        cartCopy.splice(index, 1);
        setAccommodateCart([...cartCopy]);
      }
      const renderAccommodateItem = ({item, index}) => {
        return (
<View style={styles.item} >
      <View style={styles.horizContainer}>
          <View style={{width: 200}}>
            <Text style={styles.maintext}>{item.title}</Text>
          </View>
          
          <View style={styles.editAndPrice}>
              <Pressable style={styles.pressable} onPress={() => console.log('edit was pressed!')}>
                  <Text style={styles.pressText}>edit</Text>
              </Pressable>
              <Pressable style={styles.pressable} onPress={() => accomPress(index)}>
                  <Text style={styles.pressText}>remove</Text>
              </Pressable>
              <Text style={styles.maintext}>{'$' + item.price}</Text>
          </View>
      </View>
    </View>
        );
        
      }
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
            source={Images.YourCartTitle}
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
      //Need to find the index we want to delete: some kind of search again- iterating through cart to find index of item we want to delete

      const allLists = [
        {
          name: "add-ons",
          data: cart,
          r: renderItem,
          id: 100
        },
        {
          name: "accomodations",
          data: accomodateCart,
          r: renderAccommodateItem,
          id: 200
        }
      ]

      const renderAllFlatLists = ({item}) => {
        console.log("attempting to log a flat last with name " + item.name);
        console.log(item.data);
        return (
          <FlatList
            data={item.data}
            renderItem={item.r}
            keyExtractor={item => item.id}/>
        )
      }
      let totalPrice = 0;
      if (cart != null) {
        for (let i = 0; i < cart.length; i++) {
          const price = (cart[i].price).substring(1);
          totalPrice += parseInt(price);
        }
      }
      if (accomodateCart != null) {
        for (let i = 0; i < accomodateCart.length; i++) {
          totalPrice += parseInt(accomodateCart[i].price);
        }
      }
      
  return (
    <SafeAreaView style={styles.container}> 
      <ImageBackground source={Images.ConfettiBackground} resizeMode="cover" style={styles.back}>
        {/* <Image source={Images.YourCartTitle} style={styles.title} /> */}
        <Header></Header>
        <View style={styles.shoppingcart}>
            <Image style={styles.cartimage} source= {Images.Cart} />
        </View>
        <View style={styles.list}>
        
        <FlatList
          data={allLists}
          renderItem={renderAllFlatLists}
          keyExtractor={item => item.id}/>
        </View>
        <View style={styles.bottom}>
                <View style={styles.priceWrapper}>
                    <View style={styles.totalPrice}>
                        <Text style={styles.priceText}>{"Total: $" + totalPrice}</Text>
                    </View>
                </View>
                <View style={styles.buttonWrapper}>
                    
                    <Pressable style={styles.button} onPress={() => navigation.navigate('CheckoutInfo')}>
                        <Image source={Images.CheckoutButton} style={styles.checkout}/>
                    </Pressable>
                                      
                </View>
                
            </View>
      </ImageBackground> 
      
    </SafeAreaView>
  );
};

export default CheckoutScreen;

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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
      },
    back: {
      width: '100%',
      height: '100%'
    },
    shoppingcart: {
      width: 200,
      height: 200,
      margin: 20,
      alignSelf: 'center'
  },
  cartimage: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'contain',
  },
  list: {
    display: 'flex',
    alignItems: 'center'
  },
  priceWrapper: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
},
totalPrice: {
    borderRadius: 20,
    backgroundColor: COLORS.secondaryPink,
    color: COLORS.mainPink,
    padding: 10,
    margin: 20,
},
priceText: {
    color: COLORS.mainPink,
    fontSize: 20,
    fontWeight: '700'
},
bottom: {
    marginBottom: 30,
    display: 'flex',
    flexDirection: 'column',
},
buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    
},
button: {
  shadowColor: COLORS.black,
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.8,
  shadowRadius: 1,
  margin: 5,
},
checkout: {
  width: 180,
  height: 50,
  borderRadius: 20,
},
item: {
    borderRadius: 20,
    width: 350,
    backgroundColor: COLORS.secondaryPink,
    justifyContent: 'center',
    color: COLORS.mainPink,
    padding: 5,
    margin: 5,
    display: 'flex',
    flexDirection: 'column',
  },
  horizContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  editAndPrice: {
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
  pressable: {
    paddingHorizontal: 5,    
  },
  pressText: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  maintext: {
    fontWeight: '700',
    color: COLORS.mainPink,
    fontSize: 20,

}}
);


