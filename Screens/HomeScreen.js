import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Pressable } from 'react-native';
import Images from '../assets/Images';
import COLORS from '../assets/colors.js';

const HomeScreen = ({navigation}) => {
    return (
        <ImageBackground source={Images.ConfettiBackground} resizeMode="cover" style={styles.image}>
            <SafeAreaView style = {styles.container}>
              <Pressable style={styles.button} onPress={() => navigation.navigate('TabNav')}>
                <ImageBackground resizeMode="cover" source={Images.StartButton} style={styles.img} />
              </Pressable>
              <Pressable style={styles.button} onPress={() => navigation.navigate('TabNav')}>
                <ImageBackground resizeMode="cover" source={Images.ContinueButton} style={styles.img} />
              </Pressable>
            </SafeAreaView>
        </ImageBackground> 
    );   
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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