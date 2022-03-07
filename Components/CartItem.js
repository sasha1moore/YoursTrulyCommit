import { StyleSheet, Pressable, Text, View } from 'react-native';
import COLORS from '../assets/colors.js';

export default function CartItem(props) {
  return (
    <View style={styles.item} >
        <View style={styles.horizContainer}>
            <Text style={styles.maintext}>{props.name}</Text>
            <View style={styles.editAndPrice}>
                <Pressable style={styles.pressable} onPress={() => console.log('edit was pressed!')}>
                    <Text style={styles.pressText}>edit</Text>
                </Pressable>
                <Pressable style={styles.pressable} onPress={() => props.deleteItem(props.index)}>
                    <Text style={styles.pressText}>remove</Text>
                </Pressable>
                <Text style={styles.maintext}>{'$'}</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
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

  },
});
