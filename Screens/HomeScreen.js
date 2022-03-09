import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Pressable , Image} from 'react-native';
import Images from '../assets/Images';
import COLORS from '../assets/colors.js';

const HomeScreen = ({navigation}) => {

  function Header(){
    return(
      <View style={headerStyles.headerContainer} >
          <View style={{width: 50}} />
          <Image
            style={headerStyles.toptitle}
            source={Images.YTLogo}
          />
          <Pressable onPress={() => navigation.navigate('FAQScreen')}>
              <Image source={Images.FAQButton} style={headerStyles.topbutton} />
          </Pressable>
          
      
        </View>
    )
  }


    return (
        <ImageBackground source={Images.ConfettiBackground} resizeMode="cover" style={styles.image}>
            <SafeAreaView style = {styles.container}>
              <Header />
              <View style={styles.mainContainer}>
                  <Pressable style={styles.button} onPress={() => navigation.navigate('TabNav')}>
                    <ImageBackground resizeMode="cover" source={Images.StartButton} style={styles.img} />
                  </Pressable>
                  {/* <Pressable style={styles.button} onPress={() => navigation.navigate('TabNav')}>
                    <ImageBackground resizeMode="cover" source={Images.ContinueButton} style={styles.img} />
                  </Pressable> */}
              </View>
              
            </SafeAreaView>
        </ImageBackground> 
    );   
}
export default HomeScreen;

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
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    mainContainer: {
      flex: 1,
      
      alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    button: {
      width: '80%',
      height: '20%',
      borderRadius: 10,
      backgroundColor: COLORS.secondaryPink,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 1, 
      padding: 10,
      margin: 20,
      marginTop: '60%'
    },
    img: {
      width: '100%',
      height: '100%',
    },
    maintext: {
      fontFamily: 'sans-serif',
      color: COLORS.mainPink,
      textAlign: 'center',
      fontSize: 30,
      paddingBottom: 10,
    },
    secondary: {
        fontFamily: 'sans-serif',
        color: COLORS.orange,
        fontSize: 20,
        textAlign: 'center'
    }
})