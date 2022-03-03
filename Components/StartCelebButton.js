import { Pressable, StyleSheet, ImageBackground  } from 'react-native';
import COLORS from '../assets/colors.js';

const StartCelebButton = (navigation, props) => {
  return (
    <Pressable style={styles.button} onPress={() => navigation.navigate('TabNav')}>
      <ImageBackground resizeMode="cover" source={props.img} style={styles.img} />
      
    </Pressable>
  );
}

export default StartCelebButton;

const styles = StyleSheet.create({
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
});
