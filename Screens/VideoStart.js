import { StyleSheet, Button, Text, SafeAreaView, View, Image, Alert, ImageBackground } from "react-native";
import {Pressable, FlatList} from 'react-native';
import React, { useState, useEffect } from 'react';
import Images from '../assets/Images';
import COLORS from "../assets/colors";
import { Video } from 'expo-av';
import { Camera } from 'expo-camera';
import { useNavigation } from "@react-navigation/native";

//This is the player I want on the start screen, starts out black and then plays, so need variable for video passing in. 
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
  <Pressable onPress={() => navigation.navigate('CheckoutScreen', {cart: cart})}>
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

const VideoStart = ({route}) => {

  const [hasAudioPermission, setHasAudioPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [record, setRecord] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

      const audioStatus = await Camera.requestMicrophonePermissionsAsync();
      setHasAudioPermission(audioStatus.status === 'granted');

    })();
  }, []);

  const takeVideo = async () => {
    if(camera){
        const data = await camera.recordAsync({
          maxDuration:10
        })
        setRecord(data.uri);
        console.log(data.uri);
    }
  }

  const stopVideo = async () => {
    camera.stopRecording();
  }

  if (hasCameraPermission === null || hasAudioPermission === null ) {
    return (<View><Header /></View>);
  }
  if (hasCameraPermission === false || hasAudioPermission === false) {
    return (<View>
      <Text>No access to camera</Text>
      <Header /></View>)
  }

  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, height: '135%'}}>  
      <ImageBackground source={Images.ConfettiBackground} resizeMode="cover" style={styles.back}>
        <Header />
        <Text>video!</Text>
      
        {/* <Pressable onPress={() => navigation.navigate('FilmVideo')}><Text>Film Video</Text></Pressable> */}
        <Pressable onPress={() => navigation.navigate('VideoUpload')}><Text>Upload Video</Text></Pressable>
      
      
      {/* from FilmVideo.js */}
        <View style={styles.cameraContainer}>
            <Camera 
            ref={ref => setCamera(ref)}
            style={styles.fixedRatio} 
            type={type}
            ratio={'4:3'} />
        </View>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: record, 
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? 'Pause' : 'Play'}
            onPress={() =>
              status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }
          />
        </View>
        <Button
            title="Flip Video"
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
          </Button>
          <Button title="Take video" onPress={() => takeVideo()} />
          <Button title="Stop Video" onPress={() => stopVideo()} />
          </ImageBackground>
    </SafeAreaView>
  );
};

export default VideoStart;

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
    topbuttonCart: {
      height: 50,
      width: 30
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },  
    back: {
      width: '100%',
      height: '100%'
    },
    title: {
      width: 200,
      height: 60,
      alignSelf: 'center'
    },
    cameraContainer: {
      //flex: 1,
      alignSelf: 'center',
      width: 150,
      height: 200,
      backgroundColor: 'red',
      //flexDirection: 'row',
      //marginTop: 100,
      //alignItems: 'flex-end',
      //alignContent: 'center',
      // justifyContent: 'center'
  },
  fixedRatio:{
      //flex: 1,
      //aspectRatio: 1,
      width: 150,
      height: 200,
      //alignSelf: 'end'
  },
  video: {
    alignSelf: 'center',
    width: 350,
    height: 220,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

});