import React,{ useState} from 'react';
import { View , Button, Image, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-picker';


const CamRoll = StyleSheet.create({
  Container: {
    alignItems: 'center', justifyContent: 'center',
    marginTop:20,
  },

  ProfPic: {
    width: 120, height: 120, borderRadius:100,
  }

});


export default function Cam() {
  const [showPic, SetShowPic] = useState(false);
   const [Photo,SetPhoto] = useState("");
   const [picText, SetPickText] = useState("Add Profile Picture")

  handleChoosePhoto = () => {
    const options = {
      noData: true,
      tintColor:'#1970bf'
    };

    ImagePicker.showImagePicker(options, response => {
      if (response) {
        SetPhoto(response);
        SetShowPic(true);
        SetPickText('Edit Profile Picture')
      }
      else {
        SetPickText('Add Profile Picture')
        SetShowPic(false);
        
      }
    });
  };
  return (
    <View style={CamRoll.Container}>
    {showPic ? <Image source={{ uri: Photo.uri}} style={CamRoll.ProfPic}/>:<Image source={source=require('../assets/icons/imagefill.png')}style={CamRoll.ProfPic}  />}
      <Button title={picText} onPress={handleChoosePhoto}/>
    </View>
  );
}