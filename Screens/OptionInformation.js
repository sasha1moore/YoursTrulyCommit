import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function LocationInformation({ route }) {
  const navigation = useNavigation();
  const { location } = route.params;

  return (
      <ImageBackground source={location.image} style={styles.backgroundImage}>
        <SafeAreaView style={styles.body}>
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="close" size={24} color="black" />
          </Pressable>
          <View>
            <Text>{location.title}</Text>
            {/* you would have extra info here after description maybe.. booking...  */}
            <Text>{location.description}</Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  backgroundImage: {
    width: '100%',
    height: '100%'
  },

});
