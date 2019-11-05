import React,{Component,useState} from 'react';
import { View , Button, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
//Pick Image


export default function Cam() {
  const [showPic, setShowPic] = useState(false);
   const [Photo,SetPhoto] = useState("");

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response) {
        SetPhoto(response);
        setShowPic(true);
      }
    });
  };
  return (
    <View style={{alignItems: 'center', justifyContent: 'center' }}>
    {showPic ? <Image source={{ uri: Photo.uri}}style={{ width: 120, height: 120, borderRadius:100, margin:20}}/>:<Image source={source=require('../assets/icons/imagefill.png')}style={{ width: 120, height: 120, borderRadius:100, margin:20}}  />}
      <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
    </View>
  );
}