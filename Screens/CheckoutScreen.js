import { StyleSheet, Text, SafeAreaView, View, ImageBackground, Image, Alert } from "react-native";
import {Pressable, FlatList} from 'react-native';
import { useState, useContext, useEffect} from "react";
import Images from "../assets/Images";
import CartItem from "../Components/CartItem";
import COLORS from '../assets/colors';
import Context from '../cartContext';

const CheckoutScreen = ({navigation, route}) => {
  
  let {myCart, setMyCart} = useContext(Context);
  const [cart, setCart] = useState(0);
   
  function press(index){
    console.log("inside remove press");
    let cartCopy = myCart;
    cartCopy.splice(index, 1);
    setMyCart(cartCopy);
    setCart(cart + 1);
  }
    const renderItem = ({ item, index }) => (

      <View style={styles.item} >
      <View style={styles.horizContainer}>
          <View style={{width: 200}}>
            <Text style={styles.maintext}>{item.title}</Text>
          </View>
          <View style={styles.editAndPrice}>
              <Pressable style={styles.pressable} onPress={() => navigation.goBack()}>
                  <Text style={styles.pressText}>edit</Text>
              </Pressable>
              <Pressable style={styles.pressable} onPress={() => press(index)}>
                  <Text style={styles.pressText}>remove</Text>
              </Pressable>
              <Text style={styles.maintext}>{'$' +item.price}</Text>
          </View>
      </View>
    </View>
      );

      
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

      let totalPrice = 0;

      if (myCart != null) {
        for (let i = 0; i < myCart.length; i++) {
          const price = myCart[i].price;
          totalPrice += parseInt(price);
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
          data={myCart}
          renderItem={renderItem}/>
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
    width: '100%',
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


