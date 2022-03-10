import {
  StyleSheet,
  Button,
  Text,
  SafeAreaView,
  View,
  Image,
  Alert,
  Modal,
  ImageBackground
} from "react-native";
import { Pressable, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import Images from "../assets/Images";
import COLORS from "../assets/colors";
import { Video } from "expo-av";
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import Context from '../cartContext';

const videoObject = 
 {
   id: 0,
   title: 'Video',
   price: '0',
 }

//This is the player I want on the start screen, starts out black and then plays, so need variable for video passing in.
function Header(navigation) {
  return (
    <View style={headerStyles.headerContainer}>
      <Pressable onPress={() => threeButtonAlert(navigation)}>
        <Image source={Images.HomeButton} style={headerStyles.topbutton} />
      </Pressable>
      <Image style={{ width: 250, height: 28 }} source={Images.YTLogo} />
      <View style={headerStyles.doublebutton}>
        <Pressable onPress={() => navigation.navigate("FAQScreen")}>
          <Image source={Images.FAQButton} style={headerStyles.topbutton} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("CheckoutScreen", { cart: cart })}
        >
          <Image
            source={Images.CartTopNav}
            style={headerStyles.topbuttonCart}
          />
        </Pressable>
      </View>
    </View>
  );
}
const threeButtonAlert = (navigation) => {
  Alert.alert("Would you like to save this celebration?", "", [
    {
      text: "Yes",
      onPress: () => navigation.navigate("HomeScreen")
    },
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
    }
  ]);
};

const findItemInArray = (array, title) => {
  if (array != null) {
    for (let i = 0; i < array.length; i++) {
      if(array[i].title === title) {
        return true;
      }
    }
  }
  return false;
}

const VideoStart = ({ route, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [hasAudioPermission, setHasAudioPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [record, setRecord] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [isRecording, setIsRecording] = useState(false); // ARE WE RECORDING?
  //const navigation = useNavigation();
  const {myCart, setMyCart} = React.useContext(Context);
  const [cart, setCart] = React.useState(myCart);
  const [placeholder, setPlaceholder] = React.useState(0);
  navigation.addListener("focus", () => setPlaceholder(placeholder + 1));

//This is the player I want on the start screen, starts out black and then plays, so need variable for video passing in.
function Header() {
  return (
    <View style={headerStyles.headerContainer}>
      <Pressable onPress={() => threeButtonAlert(navigation)}>
        <Image source={Images.HomeButton} style={headerStyles.topbutton} />
      </Pressable>
      <Image style={{ width: 250, height: 28 }} source={Images.YTLogo} />
      <View style={headerStyles.doublebutton}>
        <Pressable onPress={() => navigation.navigate("FAQScreen")}>
          <Image source={Images.FAQButton} style={headerStyles.topbutton} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("CheckoutScreen", { cart: cart })}
        >
          <Image
            source={Images.CartTopNav}
            style={headerStyles.topbuttonCart}
          />
        </Pressable>
      </View>
    </View>
  );
}
const threeButtonAlert = () => {
  Alert.alert("Would you like to save this celebration?", "", [
    {
      text: "Yes",
      onPress: () => navigation.navigate("HomeScreen")
    },
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
    }
  ]);
};

const findItemInArray = (array, title) => {
  if (array != null) {
    for (let i = 0; i < array.length; i++) {
      if(array[i].title === title) {
        return true;
      }
    }
  }
  return false;
}




  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
      const audioStatus = await Camera.requestMicrophonePermissionsAsync();
      setHasAudioPermission(audioStatus.status === "granted");
    })();
  }, []);
  const takeVideo = async () => {
    if (camera) {
      setIsRecording(true); // SET RECORDING TO TRUE WHEN RECORDING
      const data = await camera.recordAsync({
        maxDuration: 10
      });
      setIsRecording(false); // SET RECORDING TO FALSE WHEN DONE RECORDING
      setRecord(data.uri);
    }
  };
  const stopVideo = async () => {
    camera.stopRecording();
  };
  if (hasCameraPermission === null || hasAudioPermission === null) {
    return (
      <View>
        <Header />
      </View>
    );
  }
  if (hasCameraPermission === false || hasAudioPermission === false) {
    return (
      <View>
        <Text>No access to camera</Text>
        <Header />
      </View>
    );
  }



  function press(){
    setModalVisible(true);
    setCart([...cart, videoObject]);
    setMyCart([...myCart, videoObject]);
  }

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, height: "135%" }}>
      <ImageBackground
        source={Images.ConfettiBackground}
        resizeMode="cover"
        style={styles.back}
      >
        <Header />
        {/* SHOW INDICATOR ONLY WHEN ISRECORDING IS TRUE */}
        {/* <Text>{isRecording && "Recording"}</Text> */}
        {isRecording && (<Image source={Images.Recording} style={{height: 60, width: 200, alignSelf: 'center', marginBottom: -25}} />)}
        {/* from FilmVideo.js */}
        {!record && (
          <View style={styles.cameraContainer}>
            <Camera
              ref={(ref) => setCamera(ref)}
              style={styles.fixedRatio}
              type={type}
              ratio={"4:3"}
            />
          </View>
        )}
        {record && (
          <Video
            ref={video}
            style={styles.video}
            source={{
              uri: record
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        )}
        {/* <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? "Pause" : "Play"}
            onPress={() =>
              status.isPlaying
                ? video.current.pauseAsync()
                : video.current.playAsync()
            }
          />
        </View> */}


        
        {/* <Button
          title="Flip Video"
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        ></Button> */}

{record && (
            //<Button title="Discard video" onPress={() => setRecord(null)} />
            //play pause button, then discard video button
            <View>
            <View style= {{flexDirection: 'row', justifyContent: "center", alignSelf:'center', marginTop: 50, marginLeft: -49}}>
              <View style={styles.smallButton}>
                <Pressable 
                onPress={() =>
                    status.isPlaying
                      ? video.current.pauseAsync()
                      : video.current.playAsync()
                  } 
                  style={styles.pressablewrap} >
                  <Image source={status.isPlaying ? Images.Pause : Images.Play} style={styles.smallButton}  />
                </Pressable>
              </View>
              <View style={styles.smallButton}>
                <Pressable onPress= {() => 
                    setRecord(null)
                  } style={styles.pressablewrap}>
                  <Image source={Images.Discard} style={styles.smallButton}  />
                </Pressable>
              </View>
            </View>

          <View style={styles.detailsText}>
            { findItemInArray(myCart, videoObject.title) && 
                <View style={styles.buttonWrap}>
                  <Image source={Images.GrayedAddButton} style={styles.addbutton}  />
                </View>
            }
            {!findItemInArray(myCart, videoObject.title) &&
            <View style={styles.buttonWrap}>
              <Pressable onPress= {() => 
                press()
              } style={styles.pressablewrap}>
              <Image source={Images.AddToCart} style={styles.addbutton}  />
              </Pressable>
              </View>
    
              }     
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
  </View>



            
)}
{!record && (
  //flip video
        <View style={{flexDirection: 'row', justifyContent: "center", alignSelf:'center', marginTop: 50, marginLeft: -49
        }}>
          <View style={styles.smallButton}>
            <Pressable onPress= {() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }} style={styles.pressablewrap}>
              <Image source={Images.Flip} style={styles.smallButton}  />
            </Pressable>
          </View>
          {/* <Button title="Take video" onPress={() => takeVideo()} /> */}
          <View style={styles.smallButton}>
            <Pressable onPress= {() => 
                takeVideo()
              } style={styles.pressablewrap}>
              <Image source={Images.Record} style={styles.smallButton}  />
            </Pressable>
          </View>
          {/* <Button title="Stop Video" onPress={() => stopVideo()} /> */}
          <View style={styles.smallButton}>
              <Pressable onPress= {() => 
                  stopVideo()
                } style={styles.pressablewrap}>
                <Image source={Images.Stop} style={styles.smallButton}  />
              </Pressable>
          </View>
      </View>
)}
      </ImageBackground>
    </SafeAreaView>
  );
};
export default VideoStart;
const headerStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: COLORS.white
  },
  doublebutton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  topbutton: {
    height: 50,
    aspectRatio: 1
  },
  toptitle: {
    width: 200,
    height: 30,
    alignSelf: "center"
  },
  topbuttonCart: {
    height: 50,
    width: 30
  }
});
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  back: {
    width: "100%",
    height: "100%"
  },
  title: {
    width: 200,
    height: 60,
    alignSelf: "center"
  },
  cameraContainer: {
    //flex: 1,
    alignSelf: "center",
    marginTop: 30,
    width: 300,
    height: 400,
    //backgroundColor: "red"
    //flexDirection: 'row',
    //marginTop: 100,
    //alignItems: 'flex-end',
    //alignContent: 'center',
    // justifyContent: 'center'
  },
  fixedRatio: {
    //flex: 1,
    //aspectRatio: 1,
    width: 300,
    height: 400
    //alignSelf: 'end'
  },
  video: {
    marginTop: 50,
    alignSelf: "center",
    width: 350,
    height: 220
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  pressablewrap: {
    width: 120,
    height: 40,
    
    
  },
  addbutton: {
    width: 200,
    height: 70,
    marginLeft: -39,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  //styling for modal
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
  detailsText: {
    marginTop: 50,
    justifyContent: "center",
    alignSelf: "center",
    //justifyContent: "space-around",
  },
  smallButton: {
    height: 70,
    marginTop: -10,
    marginLeft: 15,
    marginRight: 15,
    aspectRatio: 1,
    shadowColor: COLORS.black,
    justifyContent: "center",
    //justifyContent: "space-around",
    alignSelf: "center",
    borderRadius: 10,
    //marginBottom: 100,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1, 
  },
  buttonWrap: {
    shadowColor: COLORS.black,
    justifyContent: "center",
    //justifyContent: "space-around",
    alignSelf: "center",
    //marginBottom: 100,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1, 
  }
});