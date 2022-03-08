import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, ImageBackground, Pressable, Button, Modal, Alert } from 'react-native';
import Images from '../assets/Images';
import COLORS from '../assets/colors';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";

export default function VideoUpload() {
  const navigation = useNavigation();

// // make header function
// //image picker selection limit is only
// function upload(){
//     const selectVideo = ({ setVideoToUpload }) => {
//         ImagePicker.openPicker({ mediaType: "video" })
//           .then(setVideoToUpload)
//           .catch(console.error);
//       };

//       // Cloud Name: Found on the Dashboard of Cloudinary.
// //const URL = "https://api.cloudinary.com/v1_1/<CLOUD_NAME>/video/upload";
// const CLOUDINARY_URL = "cloudinary://719595461294221:7cF74bWE8E5Gr6BV8XPTujH9xHM@yourstruly"
// // Random Name: Generated After Enabling The Unsigned Uploading.
// const UPLOAD_PRESET = "wrxyx9uo"; 

// const uploadVideo = (fileInfo, onSuccess, onError) => {
//   const { name, uri, type } = fileInfo;
//   let formData = new FormData();

//   if (uri) {
//     formData.append("file", { name, uri, type });
//     formData.append("upload_preset", UPLOAD_PRESET);
//   }

//   axios
//     .post(URL, formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     })
//     .then(res => onSuccess(res.data))
//     .catch(error => onError(error));
// };


// }

function Header(){
  return(
    <View style={headerStyles.headerContainer} >
         <Pressable onPress={() => navigation.goBack()}>
          <Image source={Images.BackButton} style={headerStyles.topbutton} />
        </Pressable>
    <Image
      style={{ width: 250, height: 28, justifyContent: 'center'}}
      source={Images.YTLogo}
    />   
    </View>
  )
}

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Images.ConfettiBackground} style={styles.background}>       
        <Header></Header> 
        <Text>Theoretically, you could upload videos from your camera roll here, but this functionality isn't supported by expo- so go back and take a video on the last screen or simply skip this task:)</Text>  
      </ImageBackground>
      </SafeAreaView>
      
  )
}

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
  topbuttonCart: {
    height: 50,
    width: 30
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"space-between",
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: COLORS.white
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
    backgroundColor: COLORS.white
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
  addbutton: {
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    
  },
  pressablewrap: {
    width: 120,
    height: 40,
  },
  buttonWrap: {
    shadowColor: COLORS.black,
    marginBottom: 100,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1, 
  }
});
